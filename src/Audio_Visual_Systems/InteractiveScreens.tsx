import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const InteractiveScreens: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const sections = [
    {
      title: "Our Solutions",
      text: "AMT is a premier Audio Visual system integrator specializing in the design, supply, installation, and support of multimedia presentation technologies and interactive communication solutions across the Kingdom of Saudi Arabia.",
    },
    {
      title: "Interactive Screens Solutions",
      text: "Our interactive screen solutions enable seamless collaboration, presentations, and digital engagement. They deliver high-resolution displays, intuitive touch interfaces, and smooth integration with enterprise AV systems.",
    },
    {
      title: "Advanced Features",
      text: "We provide interactive screens with advanced capabilities including multi-touch support, wireless connectivity, centralized management, and compatibility with leading conferencing and educational platforms.",
    },
    {
      title: "Integration & Support",
      text: "AMT ensures smooth integration of interactive screens within existing infrastructures. We offer full lifecycle support, maintenance, and professional training to maximize productivity in meeting rooms, classrooms, and collaborative spaces.",
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

      {/* ===== PAGE HEADER ===== */}
      <section className="py-24 px-6 text-center bg-white border-b">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#851A18] mb-6"
          initial={shouldReduceMotion ? {} : "hidden"}
          animate="visible"
          variants={fadeUp}
        >
          Interactive Screens Solutions
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-base md:text-lg text-[#555]"
          initial={shouldReduceMotion ? {} : "hidden"}
          animate="visible"
          variants={fadeUp}
        >
          Professional interactive display solutions designed to enhance
          collaboration, learning, and digital engagement across enterprise
          environments.
        </motion.p>
      </section>

      {/* ===== SOLUTIONS CARDS ===== */}
      <section
        className="max-w-7xl mx-auto px-6 py-24"
        aria-label="Interactive screen solutions"
      >
        <div className="grid md:grid-cols-2 gap-10">
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
                  : { y: -6 }
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
                "
                aria-hidden="true"
              />

              {/* Soft Glow */}
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

export default InteractiveScreens;
