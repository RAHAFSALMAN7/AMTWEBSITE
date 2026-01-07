import React from "react";
import { motion } from "framer-motion";

const CCTV: React.FC = () => {
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
        <img
          src="/images/CCTV_solutions.png"
          alt="CCTV Solutions"
          className="w-full max-w-4xl object-contain rounded-lg shadow-md"
        />
      </motion.div>

      {/* العنوان الرئيسي */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-6 text-center"
        style={{ color: "#851A18" }}
        variants={itemVariants}
      >
        CCTV SOLUTIONS
      </motion.h2>

      {/* وصف مختصر */}
      <motion.p
        className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 text-center"
        variants={itemVariants}
      >
        AMT is offering innovative solutions that are highly valued by users, flexible and competitive, and allow for the integration and centralization of all types of infrastructure security, by using smart video networks based on CCTV fused with 3D.
      </motion.p>

      {/* النقاط الأساسية */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md mb-8"
        variants={itemVariants}
      >
        <h3
          className="text-2xl font-semibold mb-4 text-center"
          style={{ color: "#851A18" }}
        >
          Deployment of CCTV solutions
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-3">
          <li>Stay aware with video analytics that can quickly alert you to anomalies and potential threats.</li>
          <li>Find required video clips of interest in seconds.</li>
          <li>Classify people, vehicles and audio events.</li>
          <li>Proactive event flags and instant alerts.</li>
        </ul>
      </motion.div>

      {/* Cloud Solutions */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md mb-8"
        variants={itemVariants}
      >
        <h3
          className="text-2xl font-semibold mb-4 text-center"
          style={{ color: "#851A18" }}
        >
          Cloud Native Video Security Solutions
        </h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Reduce operating expenditures while scaling your security for your site’s future without any physical servers.
          Simple to install and easy to deploy, cloud IP security cameras give you instant access to AI analytics and powerful search across any number of cameras.
          Integrate third-party technologies and leverage existing hardware, with instant updates that help your entire ecosystem get even better over time.
          With your IP security camera system on the cloud, you can eliminate the need to maintain a physical server room and reduce capital and operating expenditures.
        </p>
      </motion.div>

      {/* Video Management Software */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        variants={itemVariants}
      >
        <h3
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: "#851A18" }}
        >
          Video Management Software (VMS)
        </h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed space-y-4">
          With physical and cyber security threats on the rise, it’s more important than ever to level up your business security systems. AMT offers collaboration video management software (VMS) that connects your cameras, sensors, analytics, and sites in one easy-to-manage interface.
          You can customize a more future-proof, resilient, and data-safe security environment that lets you see and do more.
          Design the best security system for your current and future needs with the choice of 14,000+ cameras and sensors and 1,000+ applications.
          Ensure the IT and security teams can perform at their best through centralized operations, full situational awareness, and easier collaboration.
          Keep your business running reliably with continual updates and the highest levels of cybersecurity, data safety, and compliance.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default CCTV;
