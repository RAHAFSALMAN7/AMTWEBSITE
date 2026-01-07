import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import CircularGallery from "./CircularGallery";
import ElectricBorder from "./ElectricBorder";

/* ===== Optimized Screen Size Hook ===== */
const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize, { passive: true });

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};

const Solutions: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  /* ===== SOLUTION MODULES ===== */
  const solutionBoxes = [
    {
      title: "Data Network Solutions",
      img: "/images/datanetwork.png",
      alt: "Enterprise data network infrastructure solutions",
    },
    {
      title: "Low Current Systems",
      img: "/images/herosec2.png",
      alt: "Low current and security system integrations",
    },
    {
      title: "Audio Visual Systems",
      img: "/images/audisystem.png",
      alt: "Professional audio visual system solutions",
    },
  ];

  /* ===== CORE GALLERY ===== */
  const gallery = {
    main: {
      img: "/images/big2.png",
      label: "ICT Networking",
    },
    others: [
      { img: "/images/num22.png", label: "Fire Alarm Solutions" },
      { img: "/images/num33.png", label: "IPTV Solutions" },
      { img: "/images/num55.png", label: "Access Control Systems" },
      { img: "/images/num44.png", label: "OSP Infrastructure Solutions" },
    ],
  };

  const allItems = [
    {
      image: gallery.main.img,
      text: gallery.main.label,
    },
    ...gallery.others.map((item) => ({
      image: item.img,
      text: item.label,
    })),
  ];

  const { width } = useWindowSize();
  const scrollEase = width < 768 ? 0.006 : 0.02;
  const galleryHeight = width < 768 ? 420 : width < 1024 ? 520 : 650;
  const bend = width < 768 ? 1.4 : 3;

  return (
    <>
      {/* ===== SOLUTIONS INTRO ===== */}
      <section
        className="bg-white px-4 sm:px-6 md:px-28 pt-24"
        aria-labelledby="solutions-heading"
      >
        <header className="max-w-4xl mx-auto text-center">
          <motion.span
            className="block text-xs tracking-[0.3em] text-[#851A1A]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            SOLUTIONS CONTROL HUB
          </motion.span>

          <h2
            id="solutions-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#851A1A]"
          >
            Engineering Complete
            <br />
            Digital Infrastructure Solutions
          </h2>

          <motion.p
            className="mt-6 text-sm sm:text-base md:text-lg text-[#6d6a6a]"
            initial={{ opacity: 0, y: 15 }}
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0 }
            }
            transition={{ delay: 0.4 }}
          >
            A unified ecosystem of secure, scalable, and mission-critical
            technologies designed to power modern enterprise infrastructure
            with precision and reliability.
          </motion.p>
        </header>

        {/* ===== SOLUTION MODULES ===== */}
        <div className="relative mt-24 flex justify-center items-center">
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-[520px] h-[520px] bg-[#851A18]/10 blur-[120px] rounded-full" />
          </div>

          <div className="relative flex flex-col md:flex-row items-center gap-10">
            {solutionBoxes.map((box, idx) => {
              const isCenter = idx === 1;

              return (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: isCenter ? 1.06 : 1.04,
                        }
                  }
                  className={`
                    relative
                    ${isCenter ? "z-20" : "z-10"}
                    ${idx === 0 ? "md:-rotate-6" : ""}
                    ${idx === 2 ? "md:rotate-6" : ""}
                  `}
                >
                  <ElectricBorder
                    color="#851A1A"
                    speed={1.2}
                    chaos={0.6}
                    thickness={2}
                    style={{ borderRadius: 24 }}
                  >
                    <div
                      className={`
                        relative overflow-hidden rounded-2xl
                        bg-[#851A18]
                        ${isCenter ? "w-80 h-[430px]" : "w-72 h-96"}
                      `}
                    >
                      <img
                        src={box.img}
                        alt={box.alt}
                        loading="lazy"
                        className="w-full h-3/4 object-cover scale-105"
                      />

                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent"
                        aria-hidden="true"
                      />

                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 px-6">
                        <h3 className="text-white text-lg font-bold text-center tracking-wide">
                          {box.title}
                        </h3>
                      </div>
                    </div>
                  </ElectricBorder>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CORE SYSTEMS ===== */}
      <section
        className="bg-white px-4 sm:px-6 md:px-28 py-32 relative overflow-hidden"
        aria-labelledby="core-systems-heading"
      >
        <header className="text-center mb-14">
          <h3
            id="core-systems-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#851A1A]"
          >
            Core Infrastructure Services
          </h3>
          <p className="mt-4 text-[#6d6a6a] text-sm sm:text-base">
            Discover our essential enterprise systems built around a
            unified digital core.
          </p>
        </header>

        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-96 h-96 bg-[#851A18]/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative" style={{ height: galleryHeight }}>
          <CircularGallery
            items={allItems}
            bend={bend}
            textColor="#851A1A"
            borderRadius={0.08}
            scrollEase={scrollEase}
          />
        </div>
      </section>
    </>
  );
};

export default Solutions;
