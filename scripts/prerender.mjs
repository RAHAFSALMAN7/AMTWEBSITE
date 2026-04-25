/**
 * Post-build prerender: writes static HTML under dist/<locale>/.../index.html
 * so URLs can be served without waiting for client-side rendering.
 * Requires: npm i -D playwright && npx playwright install chromium
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import http from "http";
import { createClient } from "@sanity/client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");

/**
 * Baseline routes. We keep this list to preserve current behavior,
 * and extend it dynamically (Sanity + router parsing) as an additive layer.
 */
const BASE_ROUTES = [
  "/",
  "/about",
  "/services",
  "/services/cctv-systems",
  "/services/access-control",
  "/services/network-infrastructure",
  "/services/smart-building-solutions",
  "/services/audio-visual-systems",
  "/solution-details",
  "/projects",
  "/contact",
  "/osp-solutions",
  "/ict/data-network",
  "/ict/unified-communications",
  "/ict/wireless",
  "/ict/data-center",
  "/ict/network-security",
  "/ict/ip-telephony",
  "/low-current/fire-alarm",
  "/low-current/cctv",
  "/low-current/access-control",
  "/low-current/master-clock",
  "/av/meeting-rooms",
  "/av/auditoriums",
  "/av/iptv",
  "/av/video-wall",
  "/av/interactive-screens",
  // Kept as fallback if Sanity fetch fails.
  "/news/cctv-systems-saudi-arabia-high-intent-guide",
  "/news/access-control-systems-saudi-enterprises-checklist",
  "/news/smart-building-solutions-ksa-pilot-to-scale",
  "/news/corporate-audio-systems-ksa-pa-av-integration",
  "/news/campus-network-readiness-ksa-before-cctv-ucs",
];

const locales = ["en", "ar"];

function normalizeRoute(route) {
  if (!route) return null;
  if (route === "/") return "/";
  const r = String(route).trim();
  if (!r) return null;
  const withSlash = r.startsWith("/") ? r : `/${r}`;
  return withSlash.replace(/\/+$/, "");
}

function buildLocalizedPaths(routes) {
  const out = [];
  for (const loc of locales) {
    for (const r of routes) {
      out.push(r === "/" ? `/${loc}` : `/${loc}${r}`);
    }
  }
  return out;
}

function uniqueSorted(list) {
  return Array.from(new Set(list)).sort((a, b) => a.localeCompare(b));
}

function extractStaticRoutesFromRouter() {
  const appPath = path.join(root, "src", "App.tsx");
  if (!fs.existsSync(appPath)) return [];
  const src = fs.readFileSync(appPath, "utf8");

  const routes = new Set();

  // Index route: <Route index element=... />
  if (src.includes("<Route index")) {
    routes.add("/");
  }

  // Path routes: <Route path="about" ... />, <Route path="services/..." ... />
  const re = /<Route\s+[^>]*\bpath="([^"]+)"[^>]*>/g;
  let m;
  while ((m = re.exec(src))) {
    const p = m[1];
    if (!p || p.includes(":") || p === "*" || p.startsWith("/")) {
      // Skip param routes (e.g., news/:slug), wildcard, or absolute.
      continue;
    }
    routes.add(`/${p}`);
  }

  // Ensure canonical set.
  return uniqueSorted(Array.from(routes).map(normalizeRoute).filter(Boolean));
}

async function fetchAllSanityNewsRoutes() {
  const sanity = createClient({
    projectId: "lgtz8nod",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: true,
  });
  try {
    const rows = await sanity.fetch(
      `*[_type == "news" && defined(slug.current)]{"slug": slug.current}`
    );
    const slugs = Array.isArray(rows)
      ? rows
          .map((r) => (r?.slug ? String(r.slug).trim() : ""))
          .filter(Boolean)
      : [];
    return uniqueSorted(slugs.map((s) => `/news/${s.replace(/^\/+|\/+$/g, "")}`));
  } catch (err) {
    console.warn(
      "[prerender] Sanity news fetch failed; using static news fallback.",
      err?.message || err
    );
    return [];
  }
}

async function getAllRoutesToPrerender() {
  const base = BASE_ROUTES.map(normalizeRoute).filter(Boolean);
  const routerStatic = extractStaticRoutesFromRouter();
  const sanityNews = await fetchAllSanityNewsRoutes();

  // Merge all sources. If Sanity fetch fails, BASE_ROUTES already contains a fallback set.
  const merged = uniqueSorted([...base, ...routerStatic, ...sanityNews].filter(Boolean));

  // Coverage warnings: router-discovered routes not in merged (should be none).
  for (const r of routerStatic) {
    if (!merged.includes(r)) {
      console.warn("[prerender] WARN: router route not prerendered:", r);
    }
  }

  return merged;
}

async function main() {
  const isProductionBuild =
    process.env.NODE_ENV === "production" || process.env.CI === "true";
  if (process.env.SKIP_PRERENDER === "1") {
    if (isProductionBuild) {
      throw new Error("SKIP_PRERENDER=1 is not allowed in production/CI builds.");
    }
    console.log("[prerender] SKIP_PRERENDER=1 — not running");
    return;
  }

  let chromium;
  try {
    ({ chromium } = await import("playwright"));
  } catch {
    throw new Error(
      "Playwright not installed. Install with: npm i -D playwright && npx playwright install chromium"
    );
  }

  if (!fs.existsSync(dist)) {
    throw new Error("dist/ missing — run vite build first");
  }

  const routes = await getAllRoutesToPrerender();
  const localizedPaths = buildLocalizedPaths(routes);

  const host = "localhost";
  const port = 4173;
  const base = `http://${host}:${port}`;
  const viteCli = path.join(root, "node_modules", "vite", "bin", "vite.js");
  const previewProc = spawn(process.execPath, [viteCli, "preview", "--port", String(port), "--strictPort"], {
    cwd: root,
    stdio: "ignore",
  });

  await waitForServer(base, 60_000);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    for (const locPath of localizedPaths) {
      const url = `${base}${locPath}`;
      await page.goto(url, { waitUntil: "networkidle", timeout: 180_000 });
      await page.waitForTimeout(800);
      const html = await page.content();
      const rel = locPath.replace(/^\//, "");
      const outFile = path.join(dist, rel, "index.html");
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, html, "utf8");
      console.log("[prerender] wrote", rel + "/index.html");
    }
  } finally {
    await browser.close();
    previewProc.kill();
  }
}

function waitForServer(baseUrl, timeoutMs) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      const req = http.get(baseUrl, (res) => {
        res.resume();
        resolve();
      });
      req.on("error", () => {
        if (Date.now() - start > timeoutMs) {
          reject(new Error(`Timed out waiting for preview server at ${baseUrl}`));
          return;
        }
        setTimeout(tick, 400);
      });
    };
    tick();
  });
}

main().catch((err) => {
  console.error("[prerender] failed:", err?.message || err);
  process.exit(1);
});
