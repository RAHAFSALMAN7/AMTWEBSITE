/**
 * Public site URL — set VITE_SITE_URL in .env for canonicals, OG URLs, and sitemap.
 * Example: https://www.yourdomain.com (no trailing slash)
 */
export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL?.trim();
  if (raw) return raw.replace(/\/+$/, "");
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin.replace(/\/+$/, "");
  }
  return "https://amt-arabia.net";
}

export const ORG_NAME = "Advanced Micro Technologies";
export const ORG_LEGAL_NAME = "Advanced Micro Technologies (AMT)";
export const ORG_DESCRIPTION =
  "ICT integration, low-current systems, audio-visual solutions, and outside plant networks for enterprises in Saudi Arabia and the broader region.";
export const ORG_COUNTRY = "Saudi Arabia";

/**
 * Optional local-business fields (set in env when available).
 * Keeping these configurable avoids hardcoding inaccurate location data.
 */
export const ORG_PHONE = import.meta.env.VITE_BUSINESS_PHONE?.trim() || "";
export const ORG_LOCALITY = import.meta.env.VITE_BUSINESS_LOCALITY?.trim() || "";
export const ORG_REGION = import.meta.env.VITE_BUSINESS_REGION?.trim() || "";
export const ORG_STREET = import.meta.env.VITE_BUSINESS_STREET?.trim() || "";
export const ORG_POSTAL_CODE = import.meta.env.VITE_BUSINESS_POSTAL_CODE?.trim() || "";

/** Logo path under /public — used in JSON-LD and OG fallbacks */
export const SITE_LOGO_PATH = "/amt1.png";

/** Default OG image (1200×630 JPEG in /public). Absolute URL: https://amt-arabia.net/og-image.jpg */
export const DEFAULT_OG_IMAGE_PATH = "/og-image.jpg";

/** Named social URLs (Footer icons + JSON-LD `sameAs`). */
export const SOCIAL_LINKS: Record<string, string> = {
  linkedin: "https://www.linkedin.com/company/amt-example",
  instagram: "https://www.instagram.com/amt_arabia/",
  x: "https://x.com/amt_arabia2009",
};

export const SOCIAL_PROFILES: string[] = Object.values(SOCIAL_LINKS);

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
