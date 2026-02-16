// src/OSP_Solutions/OSP_Solutions.tsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppLocale, DEFAULT_LOCALE, isSupportedLocale, withLocale } from "../utils/localeRouting";

const OSP_Solutions: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { locale } = useParams();
  const activeLocale: AppLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  return (
    <main className="bg-[#FDFDFB] text-[#2B2B2B] overflow-hidden">

      {/* ===== TITLE FLOAT ===== */}
      <section className="px-6 md:px-32 pt-32">
        <motion.h1
          initial={reduceMotion ? {} : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-normal text-[#851A18] max-w-xl"
        >
          {t("osp.title")}
          <br />
          {t("osp.titleLine2")}
        </motion.h1>
      </section>

      {/* ===== CONTENT FLOW ===== */}
      <section className="relative px-6 md:px-32 pt-32 pb-40">

        {/* block 1 */}
        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg text-base md:text-lg leading-relaxed text-[#3E3E3E]"
        >
          {t("osp.block1")}
        </motion.p>

        {/* block 2 */}
        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mt-40 ml-auto text-base md:text-lg leading-relaxed text-[#3E3E3E]"
        >
          {t("osp.block2")}
        </motion.p>

        {/* block 3 */}
        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mt-40 text-base md:text-lg leading-relaxed text-[#3E3E3E]"
        >
          {t("osp.block3")}
        </motion.p>

        {/* block 4 */}
        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mt-40 ml-auto text-base md:text-lg leading-relaxed text-[#3E3E3E]"
        >
          {t("osp.block4")}
        </motion.p>

      </section>

      {/* ===== CTA (MINIMAL) ===== */}
      <section className="px-6 md:px-32 pb-32">
        <div className="max-w-6xl mx-auto flex items-center justify-between border-t border-[#E3E3DF] pt-12">
          <p className="text-base md:text-lg text-[#4A4A4A]">
            {t("osp.cta")}
          </p>

          <button
            onClick={() => navigate(withLocale("/contact", activeLocale))}
            className="text-[#851A18] text-base md:text-lg underline underline-offset-8"
            aria-label="Contact AMT for OSP solutions"
          >
            {t("common.contact")}
          </button>
        </div>
      </section>

    </main>
  );
};

export default OSP_Solutions;
