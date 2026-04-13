import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import OptimizedImage from "../components/OptimizedImage";

const CCTV: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="bg-[#EBEBDF] p-10 md:p-20 rounded-lg shadow-lg max-w-5xl mx-auto mt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* صورة الجهاز */}
      <motion.div
        className="flex justify-center mb-8"
        variants={itemVariants}
      >
        <OptimizedImage
          src="/images/CCTV_solutions.png"
          alt="CCTV and enterprise video surveillance solutions — AMT security integration"
          className="w-full max-w-4xl object-contain rounded-lg shadow-md"
          width={896}
          height={504}
          loading="lazy"
        />
      </motion.div>

      {/* العنوان الرئيسي */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-6 text-center"
        style={{ color: "#851A18" }}
        variants={itemVariants}
      >
        {t("lowCurrent.cctv.title")}
      </motion.h1>

      {/* وصف مختصر */}
      <motion.p
        className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 text-center"
        variants={itemVariants}
      >
        {t("lowCurrent.cctv.description")}
      </motion.p>

      {/* النقاط الأساسية */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md mb-8"
        variants={itemVariants}
      >
        <h2
          className="text-2xl font-semibold mb-4 text-center"
          style={{ color: "#851A18" }}
        >
          {t("lowCurrent.cctv.deployment")}
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-3">
          <li>{t("lowCurrent.cctv.deploymentPoints.point1")}</li>
          <li>{t("lowCurrent.cctv.deploymentPoints.point2")}</li>
          <li>{t("lowCurrent.cctv.deploymentPoints.point3")}</li>
          <li>{t("lowCurrent.cctv.deploymentPoints.point4")}</li>
        </ul>
      </motion.div>

      {/* Cloud Solutions */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md mb-8"
        variants={itemVariants}
      >
        <h2
          className="text-2xl font-semibold mb-4 text-center"
          style={{ color: "#851A18" }}
        >
          {t("lowCurrent.cctv.cloudTitle")}
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          {t("lowCurrent.cctv.cloudDesc")}
        </p>
      </motion.div>

      {/* Video Management Software */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        variants={itemVariants}
      >
        <h2
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: "#851A18" }}
        >
          {t("lowCurrent.cctv.vmsTitle")}
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed space-y-4">
          {t("lowCurrent.cctv.vmsDesc")}
        </p>
      </motion.div>
    </motion.section>
  );
};

export default CCTV;
