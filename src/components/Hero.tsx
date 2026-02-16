import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { sanity } from "../sanityClient";
import { localize } from "../utils/localize";
import { AppLocale, DEFAULT_LOCALE, isSupportedLocale, withLocale } from "../utils/localeRouting";

const Hero = () => {
  const [hero, setHero] = useState<any>(null);
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { locale } = useParams();
  const activeLocale: AppLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  /* ===== Fetch Hero Data ===== */
  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "homeHero"][0]{
          "companyName": companyName[$locale],
          "groupLine": groupLine[$locale],
          "titlePrefix": titlePrefix[$locale],
          rotatingWords,
          "titleSuffix": titleSuffix[$locale],
          "description": description[$locale],
          "ctaText": ctaText[$locale],
          ctaLink,
          videoFile{
            asset->{ url }
          }
        }
      `, { locale: activeLocale })
      .then(setHero)
      .catch(console.error);
  }, [activeLocale]);

  /* ===== Rotating Words ===== */
  useEffect(() => {
    const words = localize(hero?.rotatingWords, lang) || [];

    if (!words.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [hero, lang]);

  if (!hero) {
    return (
      <div style={{ color: "red", padding: 40 }}>
        {t("common.heroNotLoaded")}
      </div>
    );
  }

  /* ===== Fallback Logic ===== */
  const companyName = localize(hero.companyName, lang);
  const groupLine = localize(hero.groupLine, lang);
  const titlePrefix = localize(hero.titlePrefix, lang);
  const titleSuffix = localize(hero.titleSuffix, lang);
  const description = localize(hero.description, lang);
  const ctaText = localize(hero.ctaText, lang);
  const rotatingWords = localize(hero.rotatingWords, lang) || [];

  return (
    <header role="banner">
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-6 md:px-20">

        {/* ===== VIDEO BACKGROUND ===== */}
        {!shouldReduceMotion && hero.videoFile?.asset?.url && (
          <video
            src={hero.videoFile.asset.url}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
        )}

        {/* ===== OVERLAY ===== */}
        <div
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{ backgroundColor: "rgba(76,77,78,0.4)" }}
          aria-hidden="true"
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 max-w-5xl text-center text-white">

          {/* GROUP LINE */}
{groupLine && (
  <motion.p
    className="mb-2 text-lg sm:text-xl tracking-widest text-white/70"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    {groupLine}
  </motion.p>
)}


          {/* COMPANY NAME */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {companyName}
          </motion.h1>

          {/* SLOGAN */}
          {(titlePrefix || titleSuffix) && (
            <motion.h2
              className="mt-4 text-lg sm:text-xl lg:text-2xl text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {titlePrefix && titlePrefix + " "}
              {rotatingWords.length > 0 && (
                <span className="text-[#B11217] font-semibold">
                  {rotatingWords[index]}
                </span>
              )}
              {titleSuffix && " " + titleSuffix}
            </motion.h2>
          )}

          {/* DESCRIPTION */}
          {description && (
            <motion.p
              className="mt-6 max-w-2xl mx-auto text-white/80 text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {description}
            </motion.p>
          )}

          {/* CTA */}
          {ctaText && (
            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={() => {
                  if (!hero.ctaLink) return;

                  if (hero.ctaLink.startsWith("#")) {
                    document
                      .getElementById(hero.ctaLink.replace("#", ""))
                      ?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate(withLocale(hero.ctaLink, activeLocale));
                  }
                }}
                className="px-8 py-4 rounded-full bg-[#B11217] hover:bg-[#8e0f13] font-semibold transition"
              >
                {ctaText}
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </header>
  );
};

export default Hero;
