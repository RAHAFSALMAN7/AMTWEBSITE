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

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");

const ROUTES = [
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
  "/news/cctv-systems-saudi-arabia-high-intent-guide",
  "/news/access-control-systems-saudi-enterprises-checklist",
  "/news/smart-building-solutions-ksa-pilot-to-scale",
  "/news/corporate-audio-systems-ksa-pa-av-integration",
  "/news/campus-network-readiness-ksa-before-cctv-ucs",
];

const locales = ["en", "ar"];

function pathsToRender() {
  const out = [];
  for (const loc of locales) {
    for (const r of ROUTES) {
      out.push(r === "/" ? `/${loc}` : `/${loc}${r}`);
    }
  }
  return out;
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
    for (const route of pathsToRender()) {
      const url = `${base}${route}`;
      await page.goto(url, { waitUntil: "networkidle", timeout: 180_000 });
      await page.waitForTimeout(800);
      const html = await page.content();
      const rel = route.replace(/^\//, "");
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
