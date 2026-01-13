import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Server,
  Router,
  ShieldCheck,
  Tv,
  Wifi,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ===== SOLUTIONS & SERVICES DATA ===== */
const solutions = [
  {
    title: "Modular & Prefab Data Centres",
    icon: Server,
    options: [
      { name: "Modular Data Centres", path: "/data-centres/modular" },
      { name: "Prefab Data Centres", path: "/data-centres/prefab" },
    ],
  },
  {
    title: "ICT Solutions & Services",
    icon: Router,
    options: [
      { name: "Data Network Solutions", path: "/ict/data-network" },
      { name: "Unified Communications", path: "/ict/unified-communications" },
      { name: "Data Center Networking", path: "/ict/data-center" },
      { name: "IP Telephony Solutions", path: "/ict/ip-telephony" },
    ],
  },
  {
    title: "Cybersecurity Solutions",
    icon: ShieldCheck,
    options: [
      { name: "Network Security Systems", path: "/cybersecurity/network" },
      { name: "Endpoint Protection", path: "/cybersecurity/endpoint" },
      { name: "Security Monitoring & SOC", path: "/cybersecurity/soc" },
    ],
  },
  {
    title: "Audio Visual Solutions",
    icon: Tv,
    options: [
      { name: "Meeting & Conference Rooms", path: "/av/meeting-rooms" },
      { name: "Auditoriums & Theaters", path: "/av/auditoriums" },
      { name: "Video Wall Solutions", path: "/av/video-wall" },
      { name: "IPTV & Digital Signage", path: "/av/iptv" },
    ],
  },
  {
    title: "Low Current Solutions",
    icon: ShieldCheck,
    options: [
      { name: "Fire Alarm Systems", path: "/low-current/fire-alarm" },
      { name: "CCTV Solutions", path: "/low-current/cctv" },
      { name: "Access Control Systems", path: "/low-current/access-control" },
      { name: "Master Clock Systems", path: "/low-current/master-clock" },
    ],
  },
  {
    title: "Industrial Wireless Solutions",
    icon: Wifi,
    options: [
      { name: "Industrial Wireless Networks", path: "/industrial-wireless" },
    ],
  },
  {
    title: "Consultation & Engineering Services",
    icon: Briefcase,
    options: [
      { name: "Engineering Design", path: "/consultation/engineering" },
      { name: "Technical Consultancy", path: "/consultation/technical" },
      { name: "Project Management", path: "/consultation/project-management" },
    ],
  },
];

const SolutionDetails: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-[#F5F6F8] px-6 md:px-20 py-24 text-[#292929] overflow-hidden">
      {/* ===== ANIMATED RED BACKGROUND ===== */}
      <motion.div
        className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#851A18]/20 rounded-full blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-[#851A18]/15 rounded-full blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10">
        {/* HEADER */}
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Solutions & Services
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Delivering integrated technology and engineering services that support
            critical infrastructure, security, and digital transformation.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            const isActive = active === index;

            return (
              <motion.div
                key={index}
                layout
                onClick={() => setActive(isActive ? null : index)}
                className={`relative cursor-pointer rounded-2xl bg-white border transition-all
                  ${
                    isActive
                      ? "border-[#851A18] shadow-lg"
                      : "border-gray-200 hover:shadow-md"
                  }
                `}
              >
                {/* TOP RED LINE */}
                <span
                  className={`absolute top-0 left-0 h-1 w-full rounded-t-2xl
                    ${isActive ? "bg-[#851A18]" : "bg-transparent"}
                  `}
                />

                {/* HEADER */}
                <div className="p-8 flex items-start gap-4">
                  <div
                    className={`p-2 rounded-lg ${
                      isActive ? "bg-[#851A18]/10" : "bg-gray-100"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        isActive ? "text-[#851A18]" : "text-gray-400"
                      }`}
                    />
                  </div>

                  <h3 className="text-lg font-semibold flex-1">
                    {item.title}
                  </h3>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      isActive
                        ? "rotate-180 text-[#851A18]"
                        : "text-gray-400"
                    }`}
                  />
                </div>

                {/* EXPAND */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-8"
                    >
                      <ul className="space-y-3 pt-2 border-t border-gray-100">
                        {item.options.map((opt, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#851A18]" />
                            <Link
                              to={opt.path}
                              onClick={(e) => e.stopPropagation()}
                              className="text-sm text-gray-600 hover:text-[#851A18]"
                            >
                              {opt.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionDetails;
