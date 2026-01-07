import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const AuditoriumsTheaters: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const sections = [
    {
      title: "Meeting Rooms AV Solutions",
      text: "Professional meeting room AV solutions that enable seamless collaboration with high-quality audio and video integration.",
    },
    {
      title: "Auditoriums and Theaters",
      text: "Design and implementation of advanced visual and acoustic systems for auditoriums and theaters.",
    },
    {
      title: "Digital Signage Solutions",
      text: "Dynamic digital signage solutions that attract attention and deliver impactful messaging.",
    },
    {
      title: "Advanced Conference Room AV",
      text: "Highly advanced conference room AV systems built for hybrid meetings and enterprise collaboration.",
    },
    {
      title: "Video Wall Solutions",
      text: "High-quality video wall solutions using LED, LCD, and projection technologies.",
    },
    {
      title: "Interactive Screens Solutions",
      text: "Interactive display solutions that deliver an intuitive pen-on-paper experience.",
    },
    {
      title: "IPTV Solutions",
      text: "Reliable IPTV solutions delivering premium content across multiple platforms.",
    },
    {
      title: "Background Music & Unified Communications",
      text: "Integrated background music and unified communication systems for modern facilities.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  return (
    <main className="w-full bg-[#F7F7F7] text-[#1A1A1A]">

      {/* ===== HEADER ===== */}
      <section className="py-24 px-6 text-center bg-white border-b">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#851A18] mb-6"
          initial={shouldReduceMotion ? {} : "hidden"}
          animate="visible"
          variants={fadeUp}
        >
          Auditoriums &amp; Theaters
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-base md:text-lg text-[#555]"
          initial={shouldReduceMotion ? {} : "hidden"}
          animate="visible"
          variants={fadeUp}
        >
          Premium audio visual solutions designed for auditoriums, theaters,
          conference rooms, and enterprise environments.
        </motion.p>
      </section>

      {/* ===== PREMIUM CARDS GRID ===== */}
      <section
        className="max-w-7xl mx-auto px-6 py-24"
        aria-label="Audio Visual Solutions"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((sec, idx) => (
            <motion.article
              key={idx}
              initial={shouldReduceMotion ? {} : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -6,
                    }
              }
              className="
                group relative bg-white rounded-2xl p-8
                border border-gray-200
                shadow-[0_10px_25px_rgba(0,0,0,0.06)]
                hover:shadow-[0_20px_40px_rgba(133,26,24,0.15)]
                transition-all duration-300
                overflow-hidden
              "
            >
              {/* Accent Line */}
              <span
                className="
                  absolute left-0 top-0 h-full w-1
                  bg-gradient-to-b from-[#851A18] to-[#b43b38]
                  opacity-80
                "
                aria-hidden="true"
              />

              {/* Glow Effect */}
              <span
                className="
                  absolute inset-0
                  bg-gradient-to-br from-[#851A18]/5 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-4 text-[#851A18]">
                  {sec.title}
                </h2>

                <p className="text-sm leading-relaxed text-[#444]">
                  {sec.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AuditoriumsTheaters;
