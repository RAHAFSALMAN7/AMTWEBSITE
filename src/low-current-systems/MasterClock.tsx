import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const MasterClock: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#EBEBDF] p-10 md:p-20 rounded-lg shadow-lg max-w-5xl mx-auto mt-20 text-center">
      {/* أيقونة الساعة الكبيرة */}
      <div className="text-[#851A18] mb-8">
        <AiOutlineClockCircle className="mx-auto text-9xl md:text-[12rem]" />
      </div>

      {/* العنوان الرئيسي */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: "#851A18" }}>
        {t("lowCurrent.masterClock.title")}
      </h2>

      {/* وصف مختصر */}
      <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8">
        {t("lowCurrent.masterClock.description")}
      </p>

      {/* النقاط الأساسية */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-semibold mb-4" style={{ color: "#851A18" }}>
          {t("lowCurrent.masterClock.networkTitle")}
        </h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          {t("lowCurrent.masterClock.networkDesc")}
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-semibold mb-4" style={{ color: "#851A18" }}>
          {t("lowCurrent.masterClock.precisionTitle")}
        </h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          {t("lowCurrent.masterClock.precisionDesc")}
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-6" style={{ color: "#851A18" }}>
          {t("common.ourTrustedPartners")}
        </h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          {t("lowCurrent.masterClock.partnersDesc")}
        </p>
      </div>
    </section>
  );
};

export default MasterClock;
