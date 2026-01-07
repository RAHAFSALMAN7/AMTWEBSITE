import React from "react";
import { motion } from "framer-motion";

const DataNetwork: React.FC = () => {
  const sections = [
    {
      title: "NETWORK ASSESSMENT",
      img: "/images/NETWORK_ASSESSMENT.png",
      desc1:
        "A detailed analysis of the network design, usage, and performance is paramount to an effective management of your organization’s IT environment. Our experienced and talented solution engineers along with our professional technicians, will specify your goals and requirements then use specialized tools to carefully analyze your existing environment.",
      desc2:
        "Our assessment includes a review of your network’s design, configuration, topology, hardware, traffic, and performance.",
    },
    {
      title: "NETWORK DESIGN",
      img: "/images/NETWORK_DESIGN.png",
      desc1:
        "We are equipped with materials, capabilities, and resources to design a network of any complexity and size across the kingdom. After analysis of your existing network, we’ll design an effective solution to your organization.",
      desc2:
        "Our designed solution will focus on simplifying your environment and management requirements, and will incorporate next-generation considerations to help: improve network performance; integrate new technology; reduce costly redesign; and increase technical staff efficiency.",
    },
    {
      title: "NETWORK MODERNIZATION",
      img: "/images/NETWORK_MODERNIZATION.png",
      desc1:
        "Our team can help you with designing and then implementing a future-ready network—all with a focus on leveraging your existing assets. Our solutions enable next-generation infrastructures to deliver the performance, automation, and analytics required to meet the demands of emerging technologies and your future organizational needs.",
      desc2: "",
    },
    {
      title: "WIRELESS & MOBILITY",
      img: "/images/WIRELESS_MOBILITY.png",
      desc1:
        "Safe, accessible wireless networks are essential to any organization’s operations. We have the solutions needed to support the 802.11ax standard and unify all network operations across wireless, wired, and the WAN. Wireless networks allow users to connect their favorite devices to engage with technology.",
      desc2:
        "Having the equipment and services to support a diverse infrastructure is essential to increasing mobility and maximizing mobile network value. AMT offers the full product line of wireless equipment to meet clients’ specific wireless goals.",
    },
    {
      title: "SOFTWARE-DEFINED NETWORKING",
      img: "/images/SOFTWARE_DEFINEDNETWORKING.png",
      desc1:
        "We can help you provision, manage, and program your network more rapidly with leading software-defined networking (SDN) solutions. We’ll design, develop, and implement an SDN architecture to deliver a centralized, programmable network via Controllers to enable centralized management and control, automation, and policy enforcement across physical and virtual network environments.",
      desc2: "",
    },
    {
      title: "NETWORK TROUBLESHOOTING, MAINTENANCE & SUPPORT",
      img: "/images/NETWORK.png",
      desc1:
        "Identifying and resolving network issues is mandatory in maintaining productivity and offering the best user experience possible. For ongoing assurance, rely on our Network Support Services designed to ensure the health of your network over time. We’re here to help with different support offerings to suit your needs; sales@amt-arabia.com",
      desc2: "",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen px-6 md:px-28 py-24">
      {/* العنوان */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center text-[#851A18] mb-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Data Network Solutions
      </motion.h1>

      {/* الصورة الرئيسية */}
      <motion.div
        className="flex justify-center mb-20 relative w-full md:w-2/5 mx-auto shadow-xl rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/images/network-assessement-ksa-khobar-amt.png"
          alt="Network Assessment"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#851A18]/60 to-transparent"></div>
      </motion.div>

      {/* الوصف الرئيسي */}
      <motion.p
        className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-20 leading-relaxed text-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        AMT is your one-stop resource for all Data networks, open system communications, and integration needs essential to a modern enterprise. In addition to installations, our professionals also provide ongoing troubleshooting, maintenance, and support of networks. Whether you need to build a network from the ground up, or integrate your existing network with new systems to achieve effective results, AMT can provide the services you need.
      </motion.p>

      {/* الأقسام التفصيلية */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="relative w-32 h-32 mb-6">
              <img
                src={section.img}
                alt={section.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#851A18]/40 to-transparent rounded-2xl"></div>
            </div>
            <h2 className="text-xl font-bold mb-4 text-[#851A18]">{section.title}</h2>
            <p className="text-gray-700 mb-3">{section.desc1}</p>
            {section.desc2 && <p className="text-gray-600">{section.desc2}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DataNetwork;
