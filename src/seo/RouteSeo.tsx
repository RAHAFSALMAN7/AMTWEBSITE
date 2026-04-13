import type { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {
  AppLocale,
  DEFAULT_LOCALE,
  isSupportedLocale,
  stripLocalePrefix,
} from "../utils/localeRouting";
import { getDefaultOgImagePath, getPageMeta } from "./routeMeta";
import { absoluteUrl, getSiteUrl, ORG_NAME } from "./siteConfig";
import {
  buildBreadcrumbJsonLd,
  localBusinessJsonLd,
  organizationJsonLd,
  serializeJsonLd,
  serviceJsonLd,
  websiteJsonLd,
  type JsonValue,
} from "./jsonLd";

function hrefForLocale(pathWithoutLocale: string, locale: AppLocale): string {
  const base = getSiteUrl();
  const suffix =
    !pathWithoutLocale || pathWithoutLocale === "/"
      ? ""
      : pathWithoutLocale.startsWith("/")
        ? pathWithoutLocale
        : `/${pathWithoutLocale}`;
  return `${base}/${locale}${suffix}`;
}

const RouteSeo: FC = () => {
  const location = useLocation();
  useTranslation();

  const pathLocale = location.pathname.split("/").filter(Boolean)[0];
  const locale: AppLocale = isSupportedLocale(pathLocale) ? pathLocale : DEFAULT_LOCALE;

  const pathWithoutLocale = stripLocalePrefix(location.pathname);
  const normalizedPath =
    pathWithoutLocale === "" || pathWithoutLocale === "/" ? "/" : pathWithoutLocale;

  const meta = getPageMeta(normalizedPath, locale);
  const canonical = absoluteUrl(location.pathname);
  const ogImage = absoluteUrl(getDefaultOgImagePath());

  const orgLd = organizationJsonLd();
  const localBizLd = localBusinessJsonLd();
  const siteLd = websiteJsonLd(locale);
  const breadLd =
    normalizedPath === "/" ? null : buildBreadcrumbJsonLd(normalizedPath, locale);
  const svcLd = serviceJsonLd(normalizedPath, locale);

  const enUrl = hrefForLocale(normalizedPath, "en");
  const arUrl = hrefForLocale(normalizedPath, "ar");
  const xDefault = enUrl;

  const gsc = import.meta.env.VITE_GSC_VERIFICATION?.trim();

  const ldBlocks = [orgLd, localBizLd, siteLd, breadLd, svcLd].filter(Boolean) as JsonValue[];

  return (
    <Helmet>
      <html lang={locale} />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={ORG_NAME} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={locale === "ar" ? "ar_SA" : "en_US"} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={meta.title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ar" href={arUrl} />
      <link rel="alternate" hrefLang="x-default" href={xDefault} />

      {gsc ? <meta name="google-site-verification" content={gsc} /> : null}

      {ldBlocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(block) }}
        />
      ))}
    </Helmet>
  );
};

export default RouteSeo;
