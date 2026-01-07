import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Router, ShieldCheck, Tv, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  {
    title: "ICT Networking",
    icon: Router,
    options: [
      { name: "Data Network", path: "/ict/data-network" },
      { name: "Unified Communications", path: "/ict/unified-communications" },
      { name: "Wireless Solutions", path: "/ict/wireless" },
      { name: "Data Center Networking", path: "/ict/data-center" },
      { name: "Network Security Systems", path: "/ict/network-security" },
      { name: "IP Telephony Solutions", path: "/ict/ip-telephony" },
    ],
  },
  {
    title: "Low Current Systems",
    icon: ShieldCheck,
    options: [
      { name: "Fire Alarm Systems", path: "/low-current/fire-alarm" },
      { name: "CCTV Solutions", path: "/low-current/cctv" },
      { name: "Access Control Systems", path: "/low-current/access-control" },
      { name: "Master Clock Systems", path: "/low-current/master-clock" },
    ],
  },
  {
    title: "Audio Visual Systems",
    icon: Tv,
    options: [
      { name: "Meeting & Conference Rooms", path: "/av/meeting-rooms" },
      { name: "Auditoriums & Theaters", path: "/av/auditoriums" },
      { name: "IPTV & Digital Signage", path: "/av/iptv" },
      { name: "Video Wall Solutions", path: "/av/video-wall" },
      { name: "Interactive Screens", path: "/av/interactive-screens" },
    ],
  },
  {
    title: "OSP Solutions",
    icon: Globe,
    options: [{ name: "OSP Infrastructure", path: "/osp-solutions" }],
  },
];

const SolutionDetails: React.FC = () => {
  const [active, setActive] = useState(0);
  const ActiveIcon = solutions[active].icon;

  return (
    <section className="min-h-screen bg-white px-6 md:px-20 py-24 text-[#292929]">
      
      {/* Header */}
      <div className="max-w-4xl mb-20">
        <span className="text-xs tracking-[0.35em] text-[#851A18]">
          SOLUTIONS CONTROL PANEL
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">
          Products & Solutions
        </h1>
        <p className="mt-6 text-gray-600 text-lg">
          A unified and structured overview of AMT’s engineering and
          infrastructure solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">
        
        {/* Left Navigator */}
        <div className="space-y-5">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            const isActive = index === active;

            return (
              <motion.button
                key={index}
                onClick={() => setActive(index)}
                whileHover={{ x: 6 }}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl border transition
                  ${
                    isActive
                      ? "bg-[#851A18]/5 border-[#851A18]"
                      : "bg-white border-gray-200 hover:border-[#851A18]/50"
                  }
                `}
              >
                <Icon
                  className={`w-6 h-6 ${
                    isActive ? "text-[#851A18]" : "text-gray-400"
                  }`}
                />
                <span className="font-semibold">{item.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Right Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="relative bg-white border border-gray-200 rounded-2xl p-10 shadow-sm"
          >
            {/* Top */}
            <div className="mb-8 flex items-center gap-4">
              <div className="p-4 bg-[#851A18]/10 rounded-xl">
                <ActiveIcon className="w-10 h-10 text-[#851A18]" />
              </div>
              <h2 className="text-2xl font-bold">
                {solutions[active].title}
              </h2>
            </div>

            {/* Options */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutions[active].options.map((opt, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6 }}
                  className="border border-gray-200 rounded-xl p-4 hover:border-[#851A18] transition"
                >
                  <Link
                    to={opt.path}
                    className="text-gray-600 hover:text-[#851A18] font-medium"
                  >
                    {opt.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SolutionDetails;
