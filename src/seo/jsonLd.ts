import type { AppLocale } from "../utils/localeRouting";
import {
  ORG_DESCRIPTION,
  ORG_LEGAL_NAME,
  ORG_NAME,
  SITE_LOGO_PATH,
  SOCIAL_PROFILES,
  absoluteUrl,
  getSiteUrl,
} from "./siteConfig";
import { getPageMeta } from "./routeMeta";

export type JsonValue = Record<string, unknown> | string | number | boolean | null | JsonValue[];

export function serializeJsonLd(data: JsonValue): string {
  return JSON.stringify(data);
}

const BREADCRUMB_LABELS: Record<string, Record<AppLocale, string>> = {
  about: { en: "About", ar: "من نحن" },
  services: { en: "Services", ar: "الخدمات" },
  "solution-details": { en: "Solutions", ar: "الحلول" },
  projects: { en: "Projects", ar: "المشاريع" },
  contact: { en: "Contact", ar: "اتصل بنا" },
  news: { en: "News", ar: "الأخبار" },
  ict: { en: "ICT", ar: "الاتصالات وتقنية المعلومات" },
  "data-network": { en: "Data Network", ar: "شبكة البيانات" },
  "unified-communications": { en: "Unified Communications", ar: "الاتصالات الموحدة" },
  wireless: { en: "Wireless", ar: "لاسلكي" },
  "data-center": { en: "Data Center", ar: "مركز البيانات" },
  "network-security": { en: "Network Security", ar: "أمن الشبكات" },
  "ip-telephony": { en: "IP Telephony", ar: "هاتفية IP" },
  "low-current": { en: "Low Current", ar: "التيار الخفيف" },
  "fire-alarm": { en: "Fire Alarm", ar: "إنذار حريق" },
  cctv: { en: "CCTV", ar: "كاميرات مراقبة" },
  "access-control": { en: "Access Control", ar: "التحكم بالدخول" },
  "master-clock": { en: "Master Clock", ar: "ساعة رئيسية" },
  av: { en: "Audio Visual", ar: "الصوت والصورة" },
  "meeting-rooms": { en: "Meeting Rooms", ar: "غرف الاجتماعات" },
  auditoriums: { en: "Auditoriums", ar: "المسارح" },
  iptv: { en: "IPTV & Signage", ar: "IPTV ولافتات" },
  "video-wall": { en: "Video Wall", ar: "جدار فيديو" },
  "interactive-screens": { en: "Interactive Screens", ar: "شاشات تفاعلية" },
  "osp-solutions": { en: "OSP Solutions", ar: "حلول الشبكة الخارجية" },
  "cctv-systems": {
    en: "CCTV & IP Video Systems",
    ar: "أنظمة CCTV وفيديو IP",
  },
  "network-infrastructure": {
    en: "Network Infrastructure",
    ar: "البنية التحتية للشبكات",
  },
  "smart-building-solutions": {
    en: "Smart Building Solutions",
    ar: "حلول المباني الذكية",
  },
  "audio-visual-systems": {
    en: "Audio Visual Systems",
    ar: "الصوتيات والمرئيات",
  },
};

function labelForSegment(segment: string, locale: AppLocale): string {
  return BREADCRUMB_LABELS[segment]?.[locale] ?? segment;
}

export type BreadcrumbNavItem = { name: string; path: string };

/** Visible breadcrumb trail (matches BreadcrumbList JSON-LD in RouteSeo). */
export function getBreadcrumbNavItems(
  pathWithoutLocale: string,
  locale: AppLocale
): BreadcrumbNavItem[] {
  if (!pathWithoutLocale || pathWithoutLocale === "/") return [];
  const segments = pathWithoutLocale.split("/").filter(Boolean);
  const items: BreadcrumbNavItem[] = [
    { name: locale === "ar" ? "الرئيسية" : "Home", path: `/${locale}` },
  ];
  let acc = "";
  segments.forEach((seg) => {
    acc += `/${seg}`;
    items.push({
      name: labelForSegment(seg, locale),
      path: `/${locale}${acc}`,
    });
  });
  return items;
}

export function buildBreadcrumbJsonLd(pathWithoutLocale: string, locale: AppLocale): JsonValue | null {
  if (pathWithoutLocale === "/" || pathWithoutLocale === "") {
    return null;
  }

  const segments = pathWithoutLocale.split("/").filter(Boolean);
  const site = getSiteUrl();
  const itemList: JsonValue[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: locale === "ar" ? "الرئيسية" : "Home",
      item: `${site}/${locale}`,
    },
  ];

  let acc = "";
  segments.forEach((seg, i) => {
    acc += `/${seg}`;
    const path = `/${locale}${acc}`;
    itemList.push({
      "@type": "ListItem",
      position: i + 2,
      name: labelForSegment(seg, locale),
      item: `${site}${path}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itemList,
  };
}

export function organizationJsonLd(): JsonValue {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    legalName: ORG_LEGAL_NAME,
    description: ORG_DESCRIPTION,
    url: getSiteUrl(),
    logo: absoluteUrl(SITE_LOGO_PATH),
    sameAs: SOCIAL_PROFILES,
  };
}

export function websiteJsonLd(locale: AppLocale): JsonValue {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORG_NAME,
    url: site,
    inLanguage: locale === "ar" ? "ar-SA" : "en-SA",
    publisher: { "@type": "Organization", name: ORG_NAME },
  };
}

export function serviceJsonLd(pathWithoutLocale: string, locale: AppLocale): JsonValue | null {
  const meta = getPageMeta(pathWithoutLocale, locale);
  const isSeoService =
    pathWithoutLocale.startsWith("/services/") && pathWithoutLocale !== "/services";
  if (
    pathWithoutLocale === "/" ||
    pathWithoutLocale.startsWith("/news/") ||
    (!pathWithoutLocale.startsWith("/ict/") &&
      !pathWithoutLocale.startsWith("/low-current/") &&
      !pathWithoutLocale.startsWith("/av/") &&
      pathWithoutLocale !== "/osp-solutions" &&
      !isSeoService)
  ) {
    return null;
  }
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: meta.title.replace(/\s*\|.*$/, "").trim(),
    description: meta.description,
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
      url: getSiteUrl(),
    },
    areaServed: {
      "@type": "Country",
      name: locale === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia",
    },
    serviceType: "Technology integration and infrastructure",
  };
}

export type FaqItem = { question: string; answer: string };

export function faqJsonLd(items: FaqItem[]): JsonValue | null {
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

