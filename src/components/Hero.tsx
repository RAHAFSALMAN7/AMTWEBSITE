import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { sanity } from "../sanityClient";

const Hero = () => {
  const [hero, setHero] = useState<any>(null);
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate(); // ✅ مهم جدًا
// force redeploy

  // 🔹 جلب البيانات من Sanity
  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "homeHero"][0]{
          badge,
          titlePrefix,
          rotatingWords,
          titleSuffix,
          description,
          ctaText,
          ctaLink,
          videoFile{
            asset->{
              url
            }
          }
        }
      `)
      .then((data) => {
        console.log("HERO DATA:", data);
        setHero(data);
      })
      .catch((err) => {
        console.error("SANITY ERROR:", err);
      });
  }, []);

  // 🔹 تدوير الكلمات
  useEffect(() => {
    if (!hero?.rotatingWords?.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % hero.rotatingWords.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [hero]);

  // 🔹 حماية لو ما في بيانات
  if (!hero) {
    return (
      <div style={{ color: "red", padding: 40 }}>
        HERO NOT LOADED FROM SANITY
      </div>
    );
  }

  return (
    <header role="banner">
      <section
        aria-labelledby="hero-heading"
        className="relative min-h-[100svh] overflow-hidden px-6 md:px-20 flex items-center justify-center"
      >
        {/* ===== VIDEO BACKGROUND ===== */}
        {!shouldReduceMotion && hero.videoFile?.asset?.url && (
          <video
            src={hero.videoFile.asset.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-hidden="true"
          />
        )}

        {/* ===== FALLBACK ===== */}
        {shouldReduceMotion && (
          <div className="absolute inset-0 bg-black" aria-hidden="true" />
        )}

        {/* ===== OVERLAY ===== */}
        <div
          className="absolute inset-0 bg-gradient-to-br
          from-black/60 via-black/55 to-black/70"
          aria-hidden="true"
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 max-w-4xl text-center">
          {/* BADGE */}
          <motion.span
            className="inline-block mb-4 text-xs tracking-widest text-white/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {hero.badge}
          </motion.span>

          {/* TITLE */}
          <motion.h1
            id="hero-heading"
            className="text-white font-extrabold leading-[1.1]
            text-4xl sm:text-5xl lg:text-7xl"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1 }}
          >
            {hero.titlePrefix}{" "}
            <motion.span
              key={index}
              className="inline-block text-[#B11217]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {hero.rotatingWords[index]}
            </motion.span>
            <br />
            {hero.titleSuffix}
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            className="mt-6 mx-auto max-w-xl text-white/80
            text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {hero.description}
          </motion.p>

          {/* CTA BUTTON ✅ FIXED */}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <button
              onClick={() => {
                if (!hero.ctaLink) return;

                // Scroll داخلي
                if (hero.ctaLink.startsWith("#")) {
                  const id = hero.ctaLink.replace("#", "");
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
                } else {
                   navigate(hero.ctaLink);
                }
              }}
              className="px-8 py-4 rounded-full
              bg-[#B11217] text-white font-semibold
              hover:bg-[#8e0f13] transition"
            >
              {hero.ctaText}
            </button>
          </motion.div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
