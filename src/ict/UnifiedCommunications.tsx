import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { sanity, urlFor } from "../sanityClient";
import { localize } from "../utils/localize";
import OptimizedImage from "../components/OptimizedImage";
import { AppLocale, DEFAULT_LOCALE, isSupportedLocale, withLocale } from "../utils/localeRouting";

const UnifiedCommunications: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const { i18n } = useTranslation();
  const { locale } = useParams();
  const activeLocale: AppLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "unifiedCommunicationsPage" && enabled == true][0]{
          pageTitle,
          sections[]{
            title,
            text,
            images
          }
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section className="bg-gray-50 px-6 md:px-28 py-24 space-y-24">

      {/* PAGE TITLE */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center text-[#851A18]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {localize(data.pageTitle, lang)}
      </motion.h1>

      <div className="max-w-6xl mx-auto space-y-16">
        {data.sections.map((section: any, idx: number) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#851A18]">
              {localize(section.title, lang)}
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {localize(section.text, lang)}
            </p>

            {section.images?.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.images.map((img: any, i: number) => (
                  <motion.div
                    key={i}
                    className="rounded-2xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <OptimizedImage
                      src={urlFor(img).width(1200).url()}
                      alt={`${localize(section.title, lang)} — unified communications integration photo`}
                      className="w-full h-64 md:h-80 object-cover"
                      width={1200}
                      height={640}
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <section className="max-w-6xl mx-auto pt-4 border-t border-gray-200" aria-label="Related unified communications links">
        <h2 className="text-2xl font-bold text-[#851A18] mb-4 text-center">
          {activeLocale === "ar" ? "روابط ذات صلة" : "Related links"}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link className="text-[#851A18] hover:underline" to={withLocale("/av/meeting-rooms", activeLocale)}>
            {activeLocale === "ar" ? "غرف الاجتماعات" : "Meeting Rooms AV"}
          </Link>
          <Link className="text-[#851A18] hover:underline" to={withLocale("/ict/ip-telephony", activeLocale)}>
            {activeLocale === "ar" ? "هاتفية IP" : "IP Telephony"}
          </Link>
          <Link className="text-[#851A18] hover:underline" to={withLocale("/contact", activeLocale)}>
            {activeLocale === "ar" ? "اطلب استشارة" : "Request a consultation"}
          </Link>
        </div>
      </section>
    </section>
  );
};

export default UnifiedCommunications;
