import React from "react";
import { CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Wireless: React.FC = () => {
  const benefits = [
    {
      title: "INCREASED MOBILITY",
      description:
        "Wireless networks allow mobile users to access real-time information so they can roam around your company’s space without getting disconnected from the network. This increases teamwork and productivity company-wide that is not possible with traditional networks.",
    },
    {
      title: "INSTALLATION SPEED & SIMPLICITY",
      description:
        "Installing a wireless network system reduces cables, which are cumbersome to set up and can impose a safety risk, should employees trip on them. It can also be installed quickly and easily when compared to a traditional network.",
    },
    {
      title: "WIDER REACH OF THE NETWORK",
      description:
        "The wireless network can be extended to places in your organization that are not accessible for wires and cables.",
    },
    {
      title: "INCREASED SCALABILITY & FLEXIBILITY",
      description:
        "Wireless systems can be specifically configured to meet the needs of specific applications. These can be easily changed and scaled depending on your organization’s needs. In addition, you can easily update the wireless network to meet new configurations.",
    },
    {
      title: "REDUCED COST OF OWNERSHIP OVER TIME",
      description:
        "Wireless networking may carry a slightly higher initial investment, but the overall expenses over time are lower. It also may have a longer lifecycle than a traditionally connected network.",
    },
    {
      title: "ENSURE COMPLIANCE WITH SECURITY POLICIES",
      description:
        "Wi-Fi 6 and 5G deliver unparalleled security capabilities that improve end-user and network protections. Enhanced with zero trust security, Wi-Fi 6 ensures that even cellular users can access corporate services – on a case-by-case basis. Contact us at sales@amt-arabia.com to know about wireless solutions that fit your company.",
    },
  ];

  // Variants مُصححة
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-10 bg-white min-h-screen text-gray-900">
      {/* العنوان الرئيسي */}
      <h1
        className="text-4xl font-bold mb-6 text-center"
        style={{ color: "#851A18" }}
      >
        Wireless Solutions
      </h1>

      {/* الصورة مع Overlay أحمر شفاف */}
      <div className="relative flex justify-center mb-8 w-full max-w-4xl mx-auto">
        <img
          src="/images/wireless.png"
          alt="Wireless Networks"
          className="w-full object-contain rounded-lg"
        />
        <div
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          style={{ backgroundColor: "rgba(133, 26, 24, 0.3)" }}
        ></div>
      </div>

      {/* العنوان الفرعي والمقدمة */}
      <h2
        className="text-2xl font-semibold mb-4 text-center"
        style={{ color: "#851A18" }}
      >
        WIRELESS NETWORKS
      </h2>
      <p
        className="text-center text-[#292929] mb-4"
        style={{ fontSize: "1.25rem", lineHeight: "1.8" }}
      >
        Behind every successful organization is a fast, reliable, and secure network.
      </p>
      <p
        className="text-center text-[#292929] mb-8"
        style={{ fontSize: "1.25rem", lineHeight: "1.8" }}
      >
        Is your organization ready to make the switch from legacy to wireless networking? Transforming your business to be digitally ready is a big step, so it’s important to work with a network solutions provider to map out all the available solutions before taking the leap.
      </p>

      {/* الفوائد */}
      <h3
        className="text-xl font-semibold mb-6 text-center"
        style={{ color: "#851A18" }}
      >
        Benefits of Wireless Networking
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-3">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
              <h4 className="text-lg font-semibold" style={{ color: "#851A18" }}>
                {benefit.title}
              </h4>
            </div>
            <p className="text-[#292929]">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wireless;
