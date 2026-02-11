import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SecurityPage: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t("ict.security.features.nac.title"),
      desc: t("ict.security.features.nac.desc"),
    },
    {
      title: t("ict.security.features.auth.title"),
      desc: t("ict.security.features.auth.desc"),
    },
    {
      title: t("ict.security.features.encryption.title"),
      desc: t("ict.security.features.encryption.desc"),
    },
    {
      title: t("ict.security.features.hardening.title"),
      desc: t("ict.security.features.hardening.desc"),
    },
    {
      title: t("ict.security.features.firewall.title"),
      desc: t("ict.security.features.firewall.desc"),
    },
    {
      title: t("ict.security.features.monitoring.title"),
      desc: t("ict.security.features.monitoring.desc"),
    },
  ];

  return (
    <section className="w-full bg-white text-[#292929]">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center text-center py-24 px-6 bg-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 text-[#851A18]"
        >
          {t("ict.security.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#292929]"
        >
          {t("ict.security.description")}
        </motion.p>
        <motion.img
          src="/images/security.png"
          alt="Security"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 w-full max-w-md object-contain rounded-xl shadow-lg"
        />
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-0 py-20 grid md:grid-cols-2 gap-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="p-6 rounded-2xl shadow-lg bg-[#F5F5F0] hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#851A18]">{f.title}</h3>
            <p className="text-[#292929]">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="py-24 px-6 text-center bg-[#851A18]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          {t("ict.security.cta.title")}
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#851A18] font-bold py-3 px-8 rounded-full text-lg"
        >
          {t("ict.security.cta.button")}
        </motion.button>
      </div>
    </section>
  );
};

export default SecurityPage;
