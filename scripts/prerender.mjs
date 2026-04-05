/**
 * Post-build prerender: writes static HTML under dist/<locale>/.../index.html
 * so URLs can be served without waiting for client-side rendering.
 * Requires: npm i -D playwright && npx playwright install chromium
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { preview } from "vite";

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
  if (process.env.SKIP_PRERENDER === "1") {
    console.log("[prerender] SKIP_PRERENDER=1 — not running");
    return;
  }

  let chromium;
  try {
    ({ chromium } = await import("playwright"));
  } catch {
    console.warn(
      "[prerender] Skipped (optional): npm i && npx playwright install chromium"
    );
    return;
  }

  if (!fs.existsSync(dist)) {
    throw new Error("dist/ missing — run vite build first");
  }

  const server = await preview({
    root,
    preview: {
      port: 4173,
      strictPort: true,
    },
  });
  await server.listen();

  const host = "127.0.0.1";
  const base = `http://${host}:4173`;
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    for (const route of pathsToRender()) {
      const url = `${base}${route}`;
      await page.goto(url, { waitUntil: "networkidle", timeout: 180_000 });
      await page.waitForSelector("#root", { timeout: 60_000 });
      const html = await page.content();
      const rel = route.replace(/^\//, "");
      const outFile = path.join(dist, rel, "index.html");
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, html, "utf8");
      console.log("[prerender] wrote", rel + "/index.html");
    }
  } finally {
    await browser.close();
    await server.close();
  }
}

main().catch((err) => {
  console.warn("[prerender] skipped (build still succeeded):", err?.message || err);
  process.exit(0);
});
