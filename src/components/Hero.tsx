import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { sanity } from "../sanityClient";

const Hero = () => {
  const [hero, setHero] = useState<any>(null);
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();

  /* ===== Fetch Hero Data ===== */
  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "homeHero"][0]{
          companyName,
          groupLine,
          titlePrefix,
          rotatingWords,
          titleSuffix,
          description,
          ctaText,
          ctaLink,
          videoFile{
            asset->{ url }
          }
        }
      `)
      .then(setHero)
      .catch(console.error);
  }, []);

  /* ===== Rotating Words ===== */
  useEffect(() => {
    if (!hero?.rotatingWords?.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % hero.rotatingWords.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [hero]);

  if (!hero) {
    return (
      <div style={{ color: "red", padding: 40 }}>
        HERO NOT LOADED
      </div>
    );
  }

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
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 max-w-5xl text-center text-white">

          {/* GROUP LINE */}
          {hero.groupLine && (
            <motion.p
              className="mb-2 text-xs tracking-widest text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {hero.groupLine}
            </motion.p>
          )}

          {/* COMPANY NAME */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {hero.companyName}
          </motion.h1>

          {/* SLOGAN + EXTRA TITLE (Animated) */}
          {(hero.titlePrefix || hero.titleSuffix) && (
            <motion.h2
              className="mt-4 text-lg sm:text-xl lg:text-2xl text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {hero.titlePrefix && hero.titlePrefix + " "}
              {hero.rotatingWords?.length > 0 && (
                <span className="text-[#B11217] font-semibold">
                  {hero.rotatingWords[index]}
                </span>
              )}
              {hero.titleSuffix && " " + hero.titleSuffix}
            </motion.h2>
          )}

          {/* DESCRIPTION */}
          {hero.description && (
            <motion.p
              className="mt-6 max-w-2xl mx-auto text-white/80
              text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {hero.description}
            </motion.p>
          )}

          {/* CTA */}
          {hero.ctaText && (
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
                    navigate(hero.ctaLink);
                  }
                }}
                className="px-8 py-4 rounded-full
                bg-[#B11217] hover:bg-[#8e0f13]
                font-semibold transition"
              >
                {hero.ctaText}
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </header>
  );
};

export default Hero;
