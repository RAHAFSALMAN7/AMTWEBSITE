import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const words = ["Trust", "Security", "Performance"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <header role="banner">
      <section
        aria-labelledby="hero-heading"
        aria-label="Hero section for secure and high performance networks"
        className="relative min-h-screen overflow-hidden
        bg-gradient-to-br from-[#3A0C0B] via-[#1A0707] to-[#0A0505]
        px-6 md:px-20 flex items-center justify-center"
      >
        {/* ===== SIGNAL LINES ===== */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          aria-hidden="true"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent"
              style={{ top: `${20 + i * 10}%` }}
              animate={
                shouldReduceMotion
                  ? false
                  : { x: ["-100%", "100%"] }
              }
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* ===== LIGHT BEAM ===== */}
        <motion.div
          className="absolute inset-0"
          aria-hidden="true"
        >
          <motion.div
            className="absolute left-1/2 top-[-20%] w-[2px] h-[140%]
            bg-gradient-to-b from-transparent via-[#ffb3b3]/70 to-transparent blur-sm"
            animate={
              shouldReduceMotion
                ? false
                : { x: [-200, 200, -200] }
            }
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 max-w-4xl text-center">
          {/* INTRO */}
          <motion.span
            className="inline-block mb-4 text-xs tracking-widest text-[#ffb3b3]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ADVANCED MICRO TECHNOLOGIES
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
            Engineering{" "}
            <motion.span
              key={index}
              className="inline-block text-[#ffb3b3]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {words[index]}
            </motion.span>{" "}
            <span className="sr-only">
              Secure and High Performance Network Infrastructure
            </span>
            <br />
            Into Every Network
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            className="mt-6 mx-auto max-w-xl text-white/85
            text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            We design secure, scalable, and high-performance
            network infrastructure for mission-critical
            enterprise systems built to operate under pressure.
          </motion.p>

          {/* ===== ACTION BUTTON ===== */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="/solutions/network-security"
              title="Secure Network Solutions"
              aria-label="Explore our secure network solutions"
              className="text-white/70 hover:text-white underline underline-offset-4"
            >
              Explore Secure Solutions
            </a>
          </motion.div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
