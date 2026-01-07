// src/OSP_Solutions/OSP_Solutions.tsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const OSP_Solutions: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();

  return (
    <main className="bg-[#FDFDFB] text-[#2B2B2B] overflow-hidden">

      {/* ===== TITLE FLOAT ===== */}
      <section className="px-6 md:px-32 pt-32">
        <motion.h1
          initial={reduceMotion ? {} : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-normal text-[#851A18] max-w-xl"
        >
          Outside Plant
          <br />
          Network Solutions
        </motion.h1>
      </section>

      {/* ===== CONTENT FLOW ===== */}
      <section className="relative px-6 md:px-32 pt-32 pb-40">

        {/* block 1 */}
        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg text-base md:text-lg leading-relaxed text-[#3E3E3E]"
        >
          AMT delivers outside plant (OSP) network solutions designed to support
          the growing demand for broadband access across complex infrastructure
          environments throughout the Kingdom of Saudi Arabia.
        </motion.p>

        {/* block 2 */}
        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mt-40 ml-auto text-base md:text-lg leading-relaxed text-[#3E3E3E]"
        >
          By combining technically advanced products with cost-effective network
          architecture, AMT enables reliable, scalable, and future-ready OSP
          deployments.
        </motion.p>

        {/* block 3 */}
        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mt-40 text-base md:text-lg leading-relaxed text-[#3E3E3E]"
        >
          Every cable, splice, and termination is installed using disciplined
          engineering practices to ensure compliance, performance, and long-term
          reliability.
        </motion.p>

        {/* block 4 */}
        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mt-40 ml-auto text-base md:text-lg leading-relaxed text-[#3E3E3E]"
        >
          AMT delivers full turnkey OSP services including fiber and copper
          deployment, splicing, testing, documentation, and coordinated project
          execution.
        </motion.p>

      </section>

      {/* ===== CTA (MINIMAL) ===== */}
      <section className="px-6 md:px-32 pb-32">
        <div className="max-w-6xl mx-auto flex items-center justify-between border-t border-[#E3E3DF] pt-12">
          <p className="text-base md:text-lg text-[#4A4A4A]">
            Discuss your OSP network requirements with AMT.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="text-[#851A18] text-base md:text-lg underline underline-offset-8"
            aria-label="Contact AMT for OSP solutions"
          >
            Contact
          </button>
        </div>
      </section>

    </main>
  );
};

export default OSP_Solutions;
