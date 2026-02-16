import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sanity, urlFor } from "../sanityClient";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { localize } from "../utils/localize";
import { AppLocale, DEFAULT_LOCALE, isSupportedLocale, withLocale } from "../utils/localeRouting";

const IpTelephony: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { locale } = useParams();
  const activeLocale: AppLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "ipTelephonyPage" && enabled == true][0]{
          "title": title[$locale],
          heroImage,
          "introHighlight": introHighlight[$locale],
          "introText": introText[$locale],
          features,
          "ctaTitle": ctaTitle[$locale],
          "ctaButtonText": ctaButtonText[$locale]
        }
      `, { locale: activeLocale })
      .then(setData)
      .catch(console.error);
  }, [activeLocale]);

  if (!data) return null;

  return (
    <section className="w-full bg-[#f5f5f5] min-h-screen px-6 md:px-20 py-24 space-y-24">

      {/* HERO */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-xl mb-12"
        style={{
          backgroundImage: `url(${urlFor(data.heroImage).width(1600).url()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <div className="absolute inset-0 bg-[#851A18]/70 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white text-center px-6"
          >
            {localize(data.title, lang)}
          </motion.h1>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <motion.p
          className="text-xl font-semibold text-[#851A18]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {localize(data.introHighlight, lang)}
        </motion.p>

        <motion.p
          className="text-gray-700 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {localize(data.introText, lang)}
        </motion.p>
      </div>

      {/* FEATURES */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {data.features?.map((f: any, i: number) => (
          <motion.div
            key={i}
            className="p-8 rounded-3xl shadow-xl bg-white border-t-4 border-[#851A18]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#851A18]">
              {localize(f.title, lang)}
            </h3>
            <p className="text-gray-800 leading-relaxed">
              {localize(f.description, lang)}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center space-y-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#851A18]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {localize(data.ctaTitle, lang)}
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-[#851A18] text-white font-bold py-4 px-10 rounded-full"
          onClick={() => navigate(withLocale("/contact", activeLocale))}
        >
          {localize(data.ctaButtonText, lang)}
        </motion.button>
      </div>
    </section>
  );
};

export default IpTelephony;
