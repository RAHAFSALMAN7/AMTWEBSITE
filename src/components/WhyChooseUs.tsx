import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

const items = [
  {
    title: "Client Focus",
    desc: "We provide tailored solutions and work closely with our clients to ensure their success.",
  },
  {
    title: "Transparency",
    desc: "We operate with integrity, honesty, and clear communication in everything we do.",
  },
  {
    title: "Commitment",
    desc: "We are accountable, reliable, and dedicated to meeting our objectives.",
  },
  {
    title: "Teamwork",
    desc: "Our people are our strength. We invest in growth and collaboration.",
  },
  {
    title: "Innovation",
    desc: "We continuously evolve to deliver better and smarter solutions.",
  },
  {
    title: "Great Support",
    desc: "We build long-term partnerships with strong governance and support.",
  },
];

const videos = [
  {
    type: "video",
    src: "https://res.cloudinary.com/dl2rqs0lo/video/upload/v1767615338/videoplayback_1_dffeg3.mp4",
  },
  {
    type: "iframe",
    src: "https://player.cloudinary.com/embed/?cloud_name=dl2rqs0lo&public_id=videoplayback_1_dffeg3&profile=cld-default",
  },
  {
    type: "video",
    src: "/video/amtvideo.mp4",
  },
  {
    type: "iframe",
    src: "https://res.cloudinary.com/dl2rqs0lo/video/upload/v1767618437/video_1_oxlt1u.mp4",
  },
];

const WhyChooseUs: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [hovered, setHovered] = useState<number | null>(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center bg-white py-24"
      aria-labelledby="why-choose-heading"
    >
      {/* ===== HEADER ===== */}
      <header className="text-center mb-20">
        <h2
          id="why-choose-heading"
          className="text-4xl font-bold text-[#851A18]"
        >
          Why Choose AMT
        </h2>
        <p className="sr-only">
          Learn why Advanced Micro Technologies is trusted for secure
          and innovative infrastructure solutions.
        </p>
      </header>

      {/* ===== ORBIT SECTION ===== */}
      <div
        className="relative w-[420px] h-[420px] flex items-center justify-center"
        role="group"
        aria-label="AMT core values"
      >
        {/* Center Button */}
        <motion.button
          onClick={() => setExpanded(!expanded)}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          aria-expanded={expanded}
          aria-label="Toggle company values"
          className="w-40 h-40 rounded-full bg-[#851A18] text-white flex items-center justify-center text-xl font-bold shadow-xl z-20"
        >
          Why AMT?
        </motion.button>

        {/* Orbit Items */}
        {items.map((item, index) => {
          const angle = (360 / items.length) * index;
          const radius = expanded ? 170 : 0;
          const isBottom = index >= items.length / 2;

          return (
            <motion.article
              key={index}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                    }
              }
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="absolute"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                tabIndex={0}
                role="button"
                aria-describedby={`tooltip-${index}`}
                className="w-28 h-28 rounded-2xl bg-white shadow-lg text-sm font-semibold text-[#292929] flex items-center justify-center text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#851A18]"
              >
                {item.title}
              </motion.div>

              {/* Tooltip */}
              <AnimatePresence>
                {hovered === index && expanded && (
                  <motion.div
                    id={`tooltip-${index}`}
                    role="tooltip"
                    initial={{ opacity: 0, y: isBottom ? -10 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: isBottom ? -10 : 10 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute left-1/2 -translate-x-1/2 w-64 bg-[#292929] text-white text-sm p-3 rounded-lg shadow-xl z-50
                      ${isBottom ? "bottom-full mb-3" : "top-full mt-3"}`}
                  >
                    {item.desc}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>

      {/* ===== VIDEO SLIDER ===== */}
      <section
        className="mt-32 w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl bg-black p-4 mx-auto"
        aria-labelledby="video-heading"
      >
        <h3
          id="video-heading"
          className="text-2xl md:text-3xl font-bold text-[#851A18] text-center mb-8 bg-white py-4 rounded-xl"
        >
          Get to Know More About AMT
        </h3>

        <div className="relative w-full overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentVideo * 100}%)` }}
          >
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full h-80 md:h-[600px]"
              >
                {video.type === "video" ? (
                  <video
                    src={video.src}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <iframe
                    src={video.src}
                    title={`AMT video presentation ${idx + 1}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                    className="w-full h-full rounded-xl"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                )}
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            aria-label="Previous video"
            onClick={() =>
              setCurrentVideo((p) =>
                p === 0 ? videos.length - 1 : p - 1
              )
            }
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full"
          >
            ‹
          </button>

          <button
            aria-label="Next video"
            onClick={() =>
              setCurrentVideo((p) =>
                p === videos.length - 1 ? 0 : p + 1
              )
            }
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full"
          >
            ›
          </button>
        </div>
      </section>
    </section>
  );
};

export default WhyChooseUs;
