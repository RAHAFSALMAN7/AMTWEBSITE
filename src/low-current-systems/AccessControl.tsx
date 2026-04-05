import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import OptimizedImage from "../components/OptimizedImage";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AccessControl: React.FC = () => {
  const { t } = useTranslation();

  const featureCards = [
    {
      title: t("lowCurrent.accessControl.onguard.title"),
      desc: t("lowCurrent.accessControl.onguard.desc"),
    },
    {
      title: t("lowCurrent.accessControl.openIntegration.title"),
      desc: t("lowCurrent.accessControl.openIntegration.desc"),
    },
    {
      title: t("lowCurrent.accessControl.videoManagement.title"),
      desc: t("lowCurrent.accessControl.videoManagement.desc"),
    },
  ];

  return (
    <section className="bg-[#F5F5F5] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Hero Image + Title */}
        <motion.div
          className="relative rounded-xl overflow-hidden shadow-2xl"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <OptimizedImage
            src="/images/num55.png"
            alt="Physical access control and badge reader systems — AMT Lenel integration"
            className="w-full h-96 md:h-[500px] object-cover"
            width={1200}
            height={500}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#EBEBDF] text-center px-6">
              {t("lowCurrent.accessControl.title")}
            </h1>
          </div>
        </motion.div>

        {/* Intro Text */}
        <motion.p
          className="text-[#292929] text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t("lowCurrent.accessControl.description")}
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featureCards.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#851A18] text-center">
                {item.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          className="bg-[#851A18] p-10 rounded-2xl text-white shadow-xl"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6 text-center">{t("common.ourTrustedPartners")}</h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-center">
            {t("lowCurrent.accessControl.partnersDesc")}
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-6 text-center font-semibold">
            {t("lowCurrent.accessControl.partnersContact")}
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AccessControl;
