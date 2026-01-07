// VideoWallMounting.tsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const VideoWallMounting: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const blocks = [
    {
      title: "Precision Installation",
      text: "Video wall mounting requires precise alignment to create a seamless visual surface. AMT solutions are engineered to perform accurately even in non-ideal structural environments."
    },
    {
      title: "Multi-Axis Adjustment",
      text: "Our mounting systems allow fine adjustment across X, Y, and Z axes, ensuring every display aligns perfectly while maintaining long-term stability."
    },
    {
      title: "Maintenance Accessibility",
      text: "Displays remain accessible after installation, allowing maintenance or replacement without disturbing alignment or system integrity."
    },
    {
      title: "Architectural Flexibility",
      text: "Wall-mounted, ceiling-mounted, floor-supported, freestanding, or curved installations are supported to match architectural requirements."
    },
    {
      title: "Scalable Solutions",
      text: "From compact video walls to large-scale installations, AMT mounting solutions adapt to project size and future expansion needs."
    }
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
          Video Wall Mounting Solutions
        </motion.h1>

        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-[#555] leading-relaxed"
        >
          Modular mounting systems designed to align precision, flexibility,
          and long-term reliability.
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
