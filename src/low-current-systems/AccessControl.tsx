import React from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AccessControl: React.FC = () => {
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
          <img
            src="/images/num55.png"
            alt="Access Control Systems"
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#EBEBDF] text-center px-6">
              ACCESS CONTROL SYSTEMS
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
          Access control ensures secure and efficient management of entry points. AMT offers authorization identification, authentication, access approval, and accountability of entities through login credentials including passwords, personal identification numbers (PINs), biometric scans, and physical or electronic keys.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "OnGuard Integrated Platform",
              desc: "An open security platform with a level of integration that allows you to select hardware and software components that best fit your needs. OnGuard software allows customers to better protect and manage their people, property, and assets.",
            },
            {
              title: "Open Integration",
              desc: "Security management systems designed around open standards, allowing for integration with virtually any system and components. With publicly documented APIs, OnGuard allows any manufacturer to develop an OnGuard software interface, marketable to more than 20,000 OnGuard system users worldwide.",
            },
            {
              title: "Video Management & Access Control",
              desc: "Robust stand-alone and integrated offerings designed to meet the rigors and sophistication of enterprise video management. AMT Solutions include simple stand-alone options along with robust enterprise solutions that feature advanced surveillance technologies, including alarm integration, investigative analytics, event-driven recordings, and total system management. Innovative access control hardware and software that deliver maximum protection and flexibility for installations of any size. AMT delivers innovative, flexible, and cost-effective access control for applications of almost any size.",
            },
          ].map((item, idx) => (
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
          <h3 className="text-3xl font-bold mb-6 text-center">Our Trusted Partners</h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-center">
            AMT is an official Lenel partner in Khobar, Saudi Arabia, committed to developing innovative security technology and progressive solutions that deliver leading integrated access control. As the definitive open architecture partner, AMT provides flexible and reliable options to support your current and future security needs.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-6 text-center font-semibold">
            Please contact your AMT representative for additional information on a variety of possible Access Control Systems solutions.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AccessControl;
