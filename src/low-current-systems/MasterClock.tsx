 import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

const MasterClock: React.FC = () => {
  return (
    <section className="bg-[#EBEBDF] p-10 md:p-20 rounded-lg shadow-lg max-w-5xl mx-auto mt-20 text-center">
      {/* أيقونة الساعة الكبيرة */}
      <div className="text-[#851A18] mb-8">
        <AiOutlineClockCircle className="mx-auto text-9xl md:text-[12rem]" />
      </div>

      {/* العنوان الرئيسي */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: "#851A18" }}>
        MASTER CLOCK SYSTEMS
      </h2>

      {/* وصف مختصر */}
      <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8">
        Master clock systems are used in a wide variety of applications and industries including aerospace and defense, broadcast, radio, telecom, network systems, financial services, emergency operations and call centers, and healthcare — essentially anywhere reliability of data and signals are paramount.
      </p>

      {/* النقاط الأساسية */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-semibold mb-4" style={{ color: "#851A18" }}>
          Network & Signal Distribution
        </h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Network master clocks distribute their timing references over local or wide area networks. Highly accurate master clock solutions utilize copper or fiber connections for precise analog and digital signals such as IRIG, HaveQuick, and STANAG timecodes.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-semibold mb-4" style={{ color: "#851A18" }}>
          Precision & Reliability
        </h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Master clocks deliver precise signalling and legally traceable time to all time-keeping functions in any network. Digital broadcast systems rely on master clocks to ensure reliability of wireless transmissions by aligning frequency and time. Commercial enterprises benefit from synchronized network operations for records accuracy, troubleshooting, security, and enabling time-sensitive applications at extremely high levels of accuracy.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-6" style={{ color: "#851A18" }}>
          Our Trusted Partners
        </h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          We deal with our partner Sapling Inc, a pioneer in synchronized timekeeping systems for more than two decades, to provide clocks used in schools, hospitals, and industries throughout Khobar and all the Kingdom. We offer a complete line of analog and digital clock products for systems such as Wired, IP-PoE, Wi-Fi, TalkBack, and the most popular innovation, the synchronized Wireless clock system, based on our patented frequency-hopping technology.
        </p>
      </div>
    </section>
  );
};

export default MasterClock;
