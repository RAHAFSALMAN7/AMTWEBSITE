/**
 * Writes public/sitemap.xml and public/robots.txt using VITE_SITE_URL from the environment.
 * Run automatically before `vite build` (see package.json).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@sanity/client";

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

const STATIC_ROUTES = [
  "/",
  "/about",
  "/careers",
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
];

const STATIC_NEWS_SLUGS = [
  "cctv-systems-saudi-arabia-high-intent-guide",
  "access-control-systems-saudi-enterprises-checklist",
  "smart-building-solutions-ksa-pilot-to-scale",
  "corporate-audio-systems-ksa-pa-av-integration",
  "campus-network-readiness-ksa-before-cctv-ucs",
];

const locales = ["en", "ar"];

function locPath(locale, route) {
  if (route === "/") return `/${locale}`;
  return `/${locale}${route}`;
}

function urlFor(locale, route) {
  return `${baseRaw}${locPath(locale, route)}`;
}

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function sanitizeSlug(slug) {
  if (!slug || typeof slug !== "string") return "";
  return slug.trim().replace(/^\/+|\/+$/g, "");
}

const sanity = createClient({
  projectId: "lgtz8nod",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

async function getSanityNewsRoutes() {
  try {
    const rows = await sanity.fetch(
      `*[_type == "news" && defined(slug.current)]{
        "slug": slug.current,
        "_updatedAt": _updatedAt
      }`
    );
    return rows
      .map((row) => ({
        route: `/news/${sanitizeSlug(row.slug)}`,
        lastmod: row._updatedAt ? new Date(row._updatedAt).toISOString().slice(0, 10) : null,
      }))
      .filter((row) => row.route !== "/news/");
  } catch (err) {
    console.warn("[seo] Sanity news fetch failed; using static news fallback.", err?.message || err);
    return STATIC_NEWS_SLUGS.map((slug) => ({
      route: `/news/${slug}`,
      lastmod: null,
    }));
  }
}

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

async function main() {
  const sanityNewsRoutes = await getSanityNewsRoutes();

  const routeMap = new Map();
  for (const route of STATIC_ROUTES) {
    routeMap.set(route, { route, lastmod: null });
  }
  for (const news of sanityNewsRoutes) {
    routeMap.set(news.route, news);
  }

  const allRoutes = Array.from(routeMap.values()).sort((a, b) =>
    a.route.localeCompare(b.route)
  );
  const defaultLastmod = new Date().toISOString().slice(0, 10);

  const sitemapUrls = [];
  for (const routeObj of allRoutes) {
    for (const locale of locales) {
      const route = routeObj.route;
      const loc = urlFor(locale, route);
      const enHref = urlFor("en", route);
      const arHref = urlFor("ar", route);
      const xDefault = enHref;
      sitemapUrls.push({
        loc,
        lastmod: routeObj.lastmod || defaultLastmod,
        changefreq: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? "1.0" : "0.8",
        alternates: [
          { hrefLang: "en", href: enHref },
          { hrefLang: "ar", href: arHref },
          { hrefLang: "x-default", href: xDefault },
        ],
      });
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls
  .map(
    (u) => `  <url>
    <loc>${xmlEscape(u.loc)}</loc>
${u.alternates
  .map(
    (alt) =>
      `    <xhtml:link rel="alternate" hreflang="${xmlEscape(alt.hrefLang)}" href="${xmlEscape(alt.href)}" />`
  )
  .join("\n")}
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  const buildLocaleSitemap = (targetLocale) => {
    const localeUrls = allRoutes.map((routeObj) => {
      const route = routeObj.route;
      return {
        loc: urlFor(targetLocale, route),
        lastmod: routeObj.lastmod || defaultLastmod,
        changefreq: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? "1.0" : "0.8",
      };
    });
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${localeUrls
  .map(
    (u) => `  <url>
    <loc>${xmlEscape(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
  };

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
  fs.writeFileSync(path.join(publicDir, "robots.txt"), robots, "utf8");
  fs.mkdirSync(path.join(publicDir, "en"), { recursive: true });
  fs.mkdirSync(path.join(publicDir, "ar"), { recursive: true });
  fs.writeFileSync(
    path.join(publicDir, "en", "sitemap.xml"),
    buildLocaleSitemap("en"),
    "utf8"
  );
  fs.writeFileSync(
    path.join(publicDir, "ar", "sitemap.xml"),
    buildLocaleSitemap("ar"),
    "utf8"
  );

  console.log(`[seo] files written for base: ${baseRaw}`);
  console.log(`[seo] routes: static=${STATIC_ROUTES.length}, news=${sanityNewsRoutes.length}`);
}

main().catch((err) => {
  console.error("[seo] failed to generate SEO files:", err);
  process.exit(1);
});
