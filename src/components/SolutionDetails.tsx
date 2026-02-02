import React, { useEffect, useState } from "react";
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
import { sanity } from "../sanityClient";

/* ===== ICON MAP ===== */
const iconMap: Record<string, any> = {
  Server,
  Router,
  ShieldCheck,
  Tv,
  Wifi,
  Briefcase,
};

const SolutionDetails: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);
  const [data, setData] = useState<any>(null);

  /* ===== FETCH FROM SANITY ===== */
  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "solutionsDetailsPage" && enabled == true][0]{
          title,
          description,
          solutions[]{
            title,
            icon,
            options[]{
              name,
              path
            }
          }
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section className="relative min-h-screen bg-[#F5F6F8] px-6 md:px-20 py-24 text-[#292929] overflow-hidden">
      {/* ===== ANIMATED BACKGROUND ===== */}
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
            {data.title}
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            {data.description}
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.solutions.map((item: any, index: number) => {
            const Icon = iconMap[item.icon];
            const isActive = active === index;

            return (
              <motion.div
                key={index}
                layout
                onClick={() => setActive(isActive ? null : index)}
                className={`relative cursor-pointer rounded-2xl bg-white border transition-all
                  ${isActive
                    ? "border-[#851A18] shadow-lg"
                    : "border-gray-200 hover:shadow-md"
                  }
                `}
              >
                {/* TOP LINE */}
                <span
                  className={`absolute top-0 left-0 h-1 w-full rounded-t-2xl
                    ${isActive ? "bg-[#851A18]" : "bg-transparent"}
                  `}
                />

                {/* HEADER */}
                <div className="p-8 flex items-start gap-4">
                  <div
                    className={`p-2 rounded-lg ${isActive ? "bg-[#851A18]/10" : "bg-gray-100"
                      }`}
                  >
                    {Icon && (
                      <Icon
                        className={`w-7 h-7 ${isActive ? "text-[#851A18]" : "text-gray-400"
                          }`}
                      />
                    )}
                  </div>

                  <h3 className="text-lg font-semibold flex-1">
                    {item.title}
                  </h3>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${isActive
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
                        {item.options?.map((opt: any, i: number) => (
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
