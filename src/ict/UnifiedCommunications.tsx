import React from "react";
import { motion } from "framer-motion";

const UnifiedCommunications: React.FC = () => {
  const sections = [
    {
      title: "Unified Communications",
      text: `AMT provides comprehensive Unified Communications solutions to integrate all your business communication channels seamlessly. 
      From VoIP, video conferencing, messaging, and collaboration tools, we help you streamline communication across your organization.`,
      images: ["/images/Unifie.png"],
    },
    {
      title: "Reliable & Secure Network",
      text: `Behind every successful organization is a fast, reliable, and secure network.`,
      images: ["/images/unifie2.png"],
    },
    {
      title: "About Unified Communications",
      text: `The Unified Communications are the integration of all communication technology systems such as Messaging, IP Video, IP Telephony, E-mail, Voicemail, and Video Conferencing, all integrated using an IP Network system and a common management platform. 
      With the UC solutions, there is no need for a separate voice network using a separate cabling infrastructure and transmission network. 
      Now with the next generation UC network, you can save money and improve service features by combining transmission of telephone calls over a data network with other features like Video and Instant Messaging.`,
      images: ["/images/UC-amt-khobar-aruba-1.png"],
    },
    {
      title: "Optimized for Multiple Devices",
      text: `AMT’s UC solutions are optimized for use on multiple devices. Advanced IP Phone handsets are available along with Soft Client applications running on your PC or mobile device such as Android or iPhone. 
      Each can be configured with the same user profile information to allow advanced services such as Single Number Reach where a call can ring on multiple devices and multiple numbers simultaneously.`,
      images: [],
    },
    {
      title: "Unified Communication Solutions",
      text: `The growing use of Wi-Fi and the proliferation of mobile tablet and smartphone clients cause control and visibility challenges for communication and collaboration applications such as Lync/Skype for Business. 
      To overcome these challenges, AMT offers Unified Communications solutions to manage your enterprise communication ecosystem.`,
      images: ["/images/amt-cisco-UCC-khobar-ksa.png"],
    },
    {
      title: "IP Communications",
      text: `AMT IP Communications represents a new way of delivering UC functionality to enterprise customers. 
      Instead of delivering a collection of disjointed products with individual release dates, testing methodology, and documentation, 
      AMT UC is a coordinated release of an integrated set of products that are tested, documented, and supported as a system.`,
      images: [],
    },
  ];

  return (
    <section className="bg-gray-50 px-6 md:px-28 py-24 space-y-24">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center text-[#851A18] mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Unified Communications Solutions
      </motion.h1>

      <div className="max-w-6xl mx-auto space-y-16">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-500 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-[#851A18] mb-4 text-center md:text-left"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {section.title}
            </motion.h2>

            <motion.p
              className="text-gray-700 text-lg md:text-xl leading-relaxed text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {section.text}
            </motion.p>

            {section.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {section.images.map((img, i) => (
                  <motion.div
                    key={i}
                    className="relative rounded-2xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <img
                      src={img}
                      alt={section.title}
                      className="w-full h-64 md:h-80 object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#851A18]/30 to-transparent rounded-2xl"></div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UnifiedCommunications;
