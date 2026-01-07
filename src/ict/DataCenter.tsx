import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Server, Zap, Layers } from "lucide-react";
import CountUp from "react-countup";

const DataCenter: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const features = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Simplify and Automate IT Operations",
      desc: "AMT delivers cloud-like operational efficiency across enterprise data center networks in Saudi Arabia, enabling simplified management and automation.",
      img: "/images/Simplify.png",
      alt: "Automated data center IT operations",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Accelerate Service Delivery",
      desc: "AMT provides advanced network orchestration solutions that eliminate manual provisioning across compute, storage, virtualization, and network environments.",
      img: "/images/Accelerate_ServiceDelivery.png",
      alt: "Accelerated data center service delivery",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Integrate with Industry Leaders",
      desc: "AMT integrates data center networks with leading server, storage, HCI, and cloud platforms to ensure consistent performance and scalability.",
      img: "/images/Integrate2.png",
      alt: "Data center integration with industry leaders",
    },
  ];

  const stats = [
    { label: "Projects Delivered", value: 150 },
    { label: "Satisfied Clients", value: 120 },
    { label: "Years of Experience", value: 10 },
  ];

  return (
    <section
      className="w-full bg-white text-[#292929]"
      aria-labelledby="data-center-heading"
    >
      {/* ===== HERO ===== */}
      <header className="relative flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          id="data-center-heading"
          initial={shouldReduceMotion ? {} : { opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-normal mb-6 text-[#851A18]"
        >
          Data Center Networking Solutions
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#444]"
        >
          Automate IT operations, accelerate service delivery, and deliver
          a secure cloud-like operational experience across your data center.
        </motion.p>

        {/* ===== SMALLER IMAGE ===== */}
        <motion.img
          src="/images/DATA_CENTER.png"
          alt="Enterprise data center networking infrastructure"
          loading="lazy"
          initial={shouldReduceMotion ? {} : { scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 rounded-lg w-full max-w-2xl object-cover"
        />
      </header>

      {/* ===== INTRO ===== */}
      <motion.section
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 py-16 text-center"
      >
        <p className="text-lg md:text-xl leading-relaxed text-[#3F3F3F]">
          AMT enables faster deployment of business applications, data analytics,
          desktop virtualization, and cloud platforms through proven data center
          networking solutions built on open standards.
        </p>
      </motion.section>

      {/* ===== FEATURES ===== */}
      <section
        className="grid md:grid-cols-3 gap-10 px-6 md:px-20 py-20"
        aria-label="Data center features"
      >
        {features.map((f, i) => (
          <motion.article
            key={i}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="p-6 rounded-2xl bg-white flex flex-col items-center text-center"
            style={{ minHeight: "540px" }}
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#851A18] text-white mb-6">
              {f.icon}
            </div>

            <h2 className="text-xl md:text-2xl font-normal mb-4 text-[#851A18]">
              {f.title}
            </h2>

            <p className="text-[#4A4A4A] flex-1 leading-relaxed">
              {f.desc}
            </p>

            <img
              src={f.img}
              alt={f.alt}
              loading="lazy"
              className="mt-6 w-full h-48 object-contain"
            />
          </motion.article>
        ))}
      </section>

      {/* ===== STATISTICS ===== */}
      <section className="bg-[#F5F5F0] py-20" aria-label="Company statistics">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <h3 className="text-4xl font-normal text-[#851A18] mb-2">
                <CountUp end={s.value} duration={2} />+
              </h3>
              <p className="text-base text-[#444]">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 px-6 text-center bg-[#851A18]">
        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-normal text-white mb-6"
        >
          Ready to Transform Your Data Center?
        </motion.h2>

        <motion.a
          href="/contact"
          aria-label="Contact AMT for data center solutions"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block bg-white text-[#851A18] font-normal py-3 px-8 rounded-full text-lg"
        >
          Contact Us
        </motion.a>
      </section>
    </section>
  );
};

export default DataCenter;
