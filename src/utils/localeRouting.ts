export const SUPPORTED_LOCALES = ["en", "ar"] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = "en";

export const isSupportedLocale = (value: string | undefined): value is AppLocale => {
  return !!value && SUPPORTED_LOCALES.includes(value as AppLocale);
};

export const normalizeLocale = (value: string | undefined): AppLocale => {
  return isSupportedLocale(value) ? value : DEFAULT_LOCALE;
};

export const getLocaleDirection = (locale: AppLocale): "rtl" | "ltr" => {
  return locale === "ar" ? "rtl" : "ltr";
};

export const stripLocalePrefix = (path: string): string => {
  if (!path || path === "/") return "/";

  const segments = path.split("/").filter(Boolean);
  if (!segments.length) return "/";

  if (isSupportedLocale(segments[0])) {
    const remainder = segments.slice(1).join("/");
    return remainder ? `/${remainder}` : "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
};

export const withLocale = (path: string, locale: AppLocale): string => {
  // Keep external links untouched.
  if (/^(https?:)?\/\//.test(path)) return path;

  const normalizedPath = stripLocalePrefix(path || "/");
  if (normalizedPath === "/") return `/${locale}`;

  return `/${locale}${normalizedPath}`;
};
