import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { sanity, urlFor } from "../sanityClient";
import { localize } from "../utils/localize";
import OptimizedImage from "../components/OptimizedImage";
import { AppLocale, DEFAULT_LOCALE, isSupportedLocale, withLocale } from "../utils/localeRouting";

interface Section {
  title: string;
  image: any;
  desc1: string;
  desc2?: string;
}

interface DataNetworkData {
  title: string;
  heroImage: any;
  description: string;
  sections: Section[];
}

const DataNetwork: React.FC = () => {
  const [data, setData] = useState<DataNetworkData | null>(null);
  const { t, i18n } = useTranslation();
  const { locale } = useParams();
  const activeLocale: AppLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  /* ===== FETCH FROM SANITY ===== */
  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "dataNetworkPage" && enabled == true][0]{
          title,
          heroImage,
          description,
          sections[]{
            title,
            image,
            desc1,
            desc2
          }
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) {
    return (
      <div className="py-32 text-center text-gray-500">
        {t("common.loading")}
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen px-6 md:px-28 py-24">

      {/* ===== PAGE TITLE ===== */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center text-[#851A18] mb-20"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {localize(data.title, lang)}
      </motion.h1>

      {/* ===== HERO IMAGE ===== */}
      {data.heroImage && (
        <motion.div
          className="flex justify-center mb-20 relative w-full md:w-2/5 mx-auto shadow-xl rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <OptimizedImage
            src={urlFor(data.heroImage).width(1200).url()}
            alt={`${localize(data.title, lang)} — enterprise data network hero visual`}
            className="w-full h-auto object-cover"
            width={1200}
            height={675}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#851A18]/60 to-transparent"></div>
        </motion.div>
      )}

      {/* ===== MAIN DESCRIPTION ===== */}
      <motion.p
        className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-20 leading-relaxed text-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {localize(data.description, lang)}
      </motion.p>

      {/* ===== SECTIONS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.sections?.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            {section.image && (
              <div className="relative w-32 h-32 mb-6">
                <OptimizedImage
                  src={urlFor(section.image).width(300).height(300).url()}
                  alt={localize(section.title, lang)}
                  className="w-full h-full object-contain"
                  width={128}
                  height={128}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#851A18]/40 to-transparent rounded-2xl"></div>
              </div>
            )}

            <h2 className="text-xl font-bold mb-4 text-[#851A18]">
              {localize(section.title, lang)}
            </h2>

            <p className="text-gray-700 mb-3">
              {localize(section.desc1, lang)}
            </p>

            {section.desc2 && (
              <p className="text-gray-600">
                {localize(section.desc2, lang)}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      <section className="mt-20 text-center border-t border-gray-200 pt-10" aria-label="Related data network links">
        <h2 className="text-2xl font-bold text-[#851A18] mb-4">
          {activeLocale === "ar" ? "روابط ذات صلة" : "Related links"}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link className="text-[#851A18] hover:underline" to={withLocale("/ict/network-security", activeLocale)}>
            {activeLocale === "ar" ? "أمن الشبكات" : "Network Security"}
          </Link>
          <Link className="text-[#851A18] hover:underline" to={withLocale("/ict/wireless", activeLocale)}>
            {activeLocale === "ar" ? "الشبكات اللاسلكية" : "Wireless"}
          </Link>
          <Link className="text-[#851A18] hover:underline" to={withLocale("/services/network-infrastructure", activeLocale)}>
            {activeLocale === "ar" ? "خدمة البنية التحتية للشبكات" : "Network Infrastructure Service"}
          </Link>
        </div>
      </section>
    </section>
  );
};

export default DataNetwork;
