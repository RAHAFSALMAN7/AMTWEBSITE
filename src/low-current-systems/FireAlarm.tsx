import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import OptimizedImage from "../components/OptimizedImage";

const FireAlarm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#851A18] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Image */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-[#EBEBDF] p-6 rounded-full shadow-2xl w-80 h-80 flex items-center justify-center overflow-hidden">
            <OptimizedImage
              src="/images/num22.png"
              alt="Fire alarm system diagram and detection hardware — AMT low-current solutions"
              className="w-full h-full object-contain"
              width={320}
              height={320}
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-[#EBEBDF]"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {t("lowCurrent.fireAlarm.title")}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-[#EBEBDF] text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t("lowCurrent.fireAlarm.description")}
        </motion.p>

        {/* Key Functions */}
        <motion.div
          className="bg-[#EBEBDF] p-8 rounded-xl shadow-lg mb-16"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-[#851A18]">
            {t("lowCurrent.fireAlarm.keyFunctions")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800 text-lg">
            <div className="p-4 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              {t("lowCurrent.fireAlarm.function1")}
            </div>
            <div className="p-4 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              {t("lowCurrent.fireAlarm.function2")}
            </div>
            <div className="p-4 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              {t("lowCurrent.fireAlarm.function3")}
            </div>
          </div>
        </motion.div>

        {/* Second Description */}
        <motion.p
          className="text-[#EBEBDF] text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {t("lowCurrent.fireAlarm.secondDescription")}
        </motion.p>

        {/* Safety Tips */}
        <motion.div
          className="bg-[#EBEBDF] p-10 rounded-xl shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-[#851A18]">
            {t("lowCurrent.fireAlarm.safetyTips")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800 text-lg">
            <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <strong>{t("lowCurrent.fireAlarm.tip1Title")}</strong> {t("lowCurrent.fireAlarm.tip1Desc")}
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <strong>{t("lowCurrent.fireAlarm.tip2Title")}</strong> {t("lowCurrent.fireAlarm.tip2Desc")}
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <strong>{t("lowCurrent.fireAlarm.tip3Title")}</strong> {t("lowCurrent.fireAlarm.tip3Desc")}
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <strong>{t("lowCurrent.fireAlarm.tip4Title")}</strong> {t("lowCurrent.fireAlarm.tip4Desc")}
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <strong>{t("lowCurrent.fireAlarm.tip5Title")}</strong> {t("lowCurrent.fireAlarm.tip5Desc")}
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <strong>{t("lowCurrent.fireAlarm.tip6Title")}</strong> {t("lowCurrent.fireAlarm.tip6Desc")}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FireAlarm;
