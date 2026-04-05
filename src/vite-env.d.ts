/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public site origin, no trailing slash (canonicals, OG URLs, sitemap). */
  readonly VITE_SITE_URL?: string;
  /** Google Analytics 4 measurement ID (G-XXXXXXXX). */
  readonly VITE_GA_MEASUREMENT_ID?: string;
  /** Google Search Console HTML tag verification string. */
  readonly VITE_GSC_VERIFICATION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
