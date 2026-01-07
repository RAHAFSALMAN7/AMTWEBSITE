import React from "react";
import { motion } from "framer-motion";

const SecurityPage: React.FC = () => {
  const features = [
    {
      title: "Network Access Control",
      desc: "Network access control (NAC), also called network admission control, is a method that AMT uses to bolster the security of a proprietary network by restricting the availability of network resources to endpoint devices that comply with a defined security policy. This NAC tool is built to enforce adaptive policies for wireless, wired, or VPN accessed devices based on in-depth contextual analysis.",
    },
    {
      title: "Authentication & Authorization",
      desc: "AMT uses behavior analytics, advanced device identification and malware detection capabilities to identify security risks before hackers log into sensitive Web applications. By doing so, enterprises can rest assured that their sensitive corporate information is accessed only by those who are authorized to use it.",
    },
    {
      title: "Communication Encryption",
      desc: "AMT offers the complete solution for trusted mobile communications, With secure, encrypted voice and conference calls, secure messaging, and encrypted file transfers, all protected by strong, authenticated, end-to-end encryption.",
    },
    {
      title: "Operating System Hardening",
      desc: "Hardening of the OS is the act of configuring an OS securely, updating it, creating rules and policies to help govern the system in a secure manner, and removing unnecessary applications and services. This service is offered by AMT to minimize a computer OS’s exposure to threats and to mitigate possible risk.",
    },
    {
      title: "Firewall Security Zone Design",
      desc: "AMT configuration model offers intuitive policies for multiple-interface routers, increased granularity of firewall policy application, and a default deny-all policy that prohibits traffic between firewall security zones until an explicit policy is applied to allow desirable traffic.",
    },
    {
      title: "Network Monitoring and Management",
      desc: "AMT offers a set of hardware and/or software tools that allow an IT professional to supervise the individual components of a network within a larger network management framework.",
    },
  ];

  return (
    <section className="w-full bg-white text-[#292929]">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center text-center py-24 px-6 bg-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 text-[#851A18]"
        >
          Security Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#292929]"
        >
          Security is a fundamental building block within any IT or telecommunications network. Based on Internet Protocol (IP), AMT ensures corporate and personal security safeguards are in place to protect confidentiality and availability.
        </motion.p>
        <motion.img
          src="/images/security.png"
          alt="Security"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 w-full max-w-md object-contain rounded-xl shadow-lg"
        />
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-0 py-20 grid md:grid-cols-2 gap-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="p-6 rounded-2xl shadow-lg bg-[#F5F5F0] hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#851A18]">{f.title}</h3>
            <p className="text-[#292929]">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="py-24 px-6 text-center bg-[#851A18]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Secure Your Network Today
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#851A18] font-bold py-3 px-8 rounded-full text-lg"
        >
          Contact Us
        </motion.button>
      </div>
    </section>
  );
};

export default SecurityPage;
