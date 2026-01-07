import React from "react";
import { motion } from "framer-motion";

const FireAlarm: React.FC = () => {
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
            <img
              src="/images/num22.png"
              alt="Fire Alarm"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-[#EBEBDF]"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          FIRE ALARM SYSTEMS
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-[#EBEBDF] text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          AMT provides accurate and automatic fire and smoke detection, alerting
          to the build-up of smoke and heat, which is mandatory in almost all
          office and public buildings.
        </motion.p>

        {/* Key Functions */}
        <motion.div
          className="bg-[#EBEBDF] p-8 rounded-xl shadow-lg mb-16"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-[#851A18]">
            Key Functions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800 text-lg">
            <div className="p-4 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              Quickly and effectively warn occupants of fire or smoke.
            </div>
            <div className="p-4 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              Warn emergency services of an incident.
            </div>
            <div className="p-4 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              Deploy prevention measures like sprinklers or fire doors.
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
          AMT is the best choice for installing fire alarm systems of any size,
          even for the most complex installations.
        </motion.p>

        {/* Safety Tips */}
        <motion.div
          className="bg-[#EBEBDF] p-10 rounded-xl shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-[#851A18]">
            AMT SAFETY TIPS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800 text-lg">
            <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <strong>Keep Your Workplace Clean:</strong> Corridors, stairs, and
              fire exits must remain clear.
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <strong>Have Fire Safety Equipment:</strong> Smoke alarms, exit
              signs, extinguishers, and sprinklers are essential.
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <strong>Risk Assessment:</strong> Identify hazards, assess risks,
              and implement control measures.
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <strong>Train Employees:</strong> Staff must know procedures in
              case of fire.
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <strong>Electrical Safety:</strong> Fix faulty electricals, avoid
              overloading sockets, and inspect regularly.
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <strong>Replace Smoke Alarms:</strong> Every 10 years; consider
              installing sprinklers for full protection.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FireAlarm;
