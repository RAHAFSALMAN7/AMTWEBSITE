import type { FC } from "react";
import { Link } from "react-router-dom";
import type { BreadcrumbNavItem } from "../seo/jsonLd";
import type { AppLocale } from "../utils/localeRouting";

/** Visible trail; JSON-LD BreadcrumbList is emitted globally in RouteSeo. */
const BreadcrumbsNav: FC<{ items: BreadcrumbNavItem[]; locale: AppLocale }> = ({
  items,
  locale,
}) => {
  if (items.length < 2) return null;
  const sep = locale === "ar" ? "‹" : "/";
  return (
    <nav aria-label={locale === "ar" ? "مسار التصفح" : "Breadcrumb"} className="mb-8">
      <ol
        className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-gray-600"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {i > 0 && (
                <span className="text-gray-400 select-none px-0.5" aria-hidden>
                  {sep}
                </span>
              )}
              {isLast ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-[#851A18] hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbsNav;
