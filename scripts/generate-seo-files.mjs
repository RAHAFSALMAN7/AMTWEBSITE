/**
 * Writes public/sitemap.xml and public/robots.txt using VITE_SITE_URL from the environment.
 * Run automatically before `vite build` (see package.json).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

function loadDotEnv() {
  for (const name of [".env", ".env.production", ".env.local"]) {
    const p = path.join(root, name);
    if (!fs.existsSync(p)) continue;
    const txt = fs.readFileSync(p, "utf8");
    for (const line of txt.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const m = trimmed.match(/^VITE_SITE_URL\s*=\s*(.*)$/);
      if (m) {
        let v = m[1].trim();
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
          v = v.slice(1, -1);
        }
        process.env.VITE_SITE_URL = v;
        return;
      }
    }
  }
}

loadDotEnv();

const baseRaw = (process.env.VITE_SITE_URL || "https://www.example.com").replace(/\/+$/, "");

const routes = [
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

function locPath(locale, route) {
  if (route === "/") return `/${locale}`;
  return `/${locale}${route}`;
}

function urlFor(locale, route) {
  return `${baseRaw}${locPath(locale, route)}`;
}

const urls = [];
for (const locale of locales) {
  for (const route of routes) {
    urls.push({
      loc: urlFor(locale, route),
      changefreq: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? "1.0" : "0.8",
    });
  }
}

const lastmod = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

# Single-page app: prerender or edge rendering may still be required for some bots.
Disallow: /api/
Disallow: /admin/

Sitemap: ${baseRaw}/sitemap.xml
`;

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots, "utf8");

console.log(`SEO files written for base: ${baseRaw}`);
