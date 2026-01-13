import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import CircularGallery from "./CircularGallery";
import ElectricBorder from "./ElectricBorder";
import { sanity } from "../sanityClient";

/* ===== THEME COLORS ===== */
const COLORS = {
  primary: "#c7c4c0ff",
  primaryDark: "#c2c1c1ff",
  primarySoft: "rgba(199,196,192,0.35)",
  textMuted: "#aaa7a4ff",
};

const Solutions: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "solutionsPage" && enabled == true][0]{
          badge,
          title,
          description,
          solutions[]{
            title,
            alt,
            image{
              asset->{url}
            }
          },
          coreTitle,
          coreDescription,
          coreItems[]{
            label,
            image{
              asset->{url}
            }
          }
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  const galleryItems =
    data.coreItems?.map((item: any) => ({
      image: item.image?.asset?.url,
      text: item.label,
    })) || [];

  return (
    <>
      {/* ===== INTRO ===== */}
      <section className="bg-white px-4 sm:px-6 md:px-28 pt-24">
        <header className="max-w-4xl mx-auto text-center">
          <motion.span
            className="block text-xs tracking-[0.3em]"
            style={{ color: COLORS.primary }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {data.badge}
          </motion.span>

          <h2
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold"
            style={{ color: COLORS.primary }}
          >
            {data.title}
          </h2>

          <motion.p
            className="mt-6 text-sm sm:text-base md:text-lg"
            style={{ color: COLORS.textMuted }}
            initial={{ opacity: 0, y: 15 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {data.description}
          </motion.p>
        </header>

        {/* ===== SOLUTION BOXES ===== */}
        <div className="relative mt-24 flex justify-center items-center">
          <div className="relative flex flex-col md:flex-row items-center gap-10">
            {data.solutions?.map((box: any, idx: number) => {
              const isCenter = idx === 1;

              return (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={
                    shouldReduceMotion ? {} : { scale: isCenter ? 1.05 : 1.03 }
                  }
                >
                  <ElectricBorder
                    color={COLORS.primary}
                    speed={0.9}
                    chaos={0.3}
                    thickness={1.4}
                    style={{ borderRadius: 24 }}
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl ${
                        isCenter ? "w-80 h-[430px]" : "w-72 h-96"
                      }`}
                      style={{ backgroundColor: COLORS.primaryDark }}
                    >
                      <img
                        src={box.image?.asset?.url}
                        alt={box.alt}
                        className="w-full h-3/4 object-cover scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />

                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 px-6">
                        <h3 className="text-white text-lg font-bold text-center">
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
      <section className="bg-white px-4 sm:px-6 md:px-28 py-32">
        <header className="text-center mb-14">
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{ color: COLORS.primary }}
          >
            {data.coreTitle}
          </h3>
          <p className="mt-4 text-sm sm:text-base" style={{ color: COLORS.textMuted }}>
            {data.coreDescription}
          </p>
        </header>

        <div className="relative h-[600px]">
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor={COLORS.primary}
            borderRadius={0.08}
            scrollEase={0.02}
          />
        </div>
      </section>
    </>
  );
};

export default Solutions;
