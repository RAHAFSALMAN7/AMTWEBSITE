// VideoWallMounting.tsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

const VideoWallMounting: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const { t } = useTranslation();

  const blocks = [
    {
      title: t("av.videoWall.blocks.precision.title"),
      text: t("av.videoWall.blocks.precision.text"),
    },
    {
      title: t("av.videoWall.blocks.multiAxis.title"),
      text: t("av.videoWall.blocks.multiAxis.text"),
    },
    {
      title: t("av.videoWall.blocks.maintenance.title"),
      text: t("av.videoWall.blocks.maintenance.text"),
    },
    {
      title: t("av.videoWall.blocks.architectural.title"),
      text: t("av.videoWall.blocks.architectural.text"),
    },
    {
      title: t("av.videoWall.blocks.scalable.title"),
      text: t("av.videoWall.blocks.scalable.text"),
    },
  ];

  return (
    <main className="bg-[#FBFBF8] text-[#1E1E1E]">

      {/* ===== HEADER ===== */}
      <section className="px-6 md:px-24 pt-28 pb-20 max-w-6xl mx-auto">
        <motion.h1
          initial={reduceMotion ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-normal text-[#851A18]"
        >
          {t("av.videoWall.title")}
        </motion.h1>

        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-[#555] leading-relaxed"
        >
          {t("av.videoWall.subtitle")}
        </motion.p>
      </section>

      {/* ===== MODULAR CANVAS ===== */}
      <section className="px-6 md:px-24 pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">

          {/* Large block */}
          <motion.article
            className="col-span-12 md:col-span-7 p-10 bg-white"
            initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-xl md:text-2xl font-normal mb-4 text-[#1E1E1E]">
              {blocks[0].title}
            </h2>
            <p className="text-base md:text-lg text-[#444] leading-relaxed">
              {blocks[0].text}
            </p>
          </motion.article>

          {/* Tall block */}
          <motion.article
            className="col-span-12 md:col-span-5 p-10 bg-[#F3F3EF]"
            initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <h2 className="text-xl font-normal mb-4">
              {blocks[1].title}
            </h2>
            <p className="text-base text-[#444] leading-relaxed">
              {blocks[1].text}
            </p>
          </motion.article>

          {/* Two medium blocks */}
          <motion.article
            className="col-span-12 md:col-span-4 p-8 bg-white"
            initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-lg font-normal mb-3">
              {blocks[2].title}
            </h2>
            <p className="text-base text-[#444] leading-relaxed">
              {blocks[2].text}
            </p>
          </motion.article>

          <motion.article
            className="col-span-12 md:col-span-8 p-8 bg-[#F3F3EF]"
            initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-lg font-normal mb-3">
              {blocks[3].title}
            </h2>
            <p className="text-base text-[#444] leading-relaxed">
              {blocks[3].text}
            </p>
          </motion.article>

          {/* Full width footer block */}
          <motion.article
            className="col-span-12 p-10 bg-white"
            initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-xl font-normal mb-4">
              {blocks[4].title}
            </h2>
            <p className="text-base md:text-lg text-[#444] leading-relaxed">
              {blocks[4].text}
            </p>
          </motion.article>

        </div>
      </section>
    </main>
  );
};

export default VideoWallMounting;
