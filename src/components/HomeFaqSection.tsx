import type { FC } from "react";
import { useTranslation } from "react-i18next";

const KEYS = [
  { q: "seo.faq.q1", a: "seo.faq.a1" },
  { q: "seo.faq.q2", a: "seo.faq.a2" },
  { q: "seo.faq.q3", a: "seo.faq.a3" },
  { q: "seo.faq.q4", a: "seo.faq.a4" },
  { q: "seo.faq.q5", a: "seo.faq.a5" },
] as const;

/** Visible FAQ (matches JSON-LD in RouteSeo on home). */
const HomeFaqSection: FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-white py-20 px-6 md:px-20 text-[#292929]"
      aria-labelledby="home-faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        <h2 id="home-faq-heading" className="text-3xl md:text-4xl font-extrabold text-[#851A18] mb-10">
          {t("seo.faq.heading")}
        </h2>
        <dl className="space-y-8">
          {KEYS.map(({ q, a }, i) => (
            <div key={i} className="border-b border-gray-200 pb-8">
              <dt className="text-lg font-semibold text-[#292929] mb-2">{t(q)}</dt>
              <dd className="text-gray-600 leading-relaxed">{t(a)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default HomeFaqSection;
