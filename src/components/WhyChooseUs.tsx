import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { sanity } from "../sanityClient";
import { localize } from "../utils/localize";

/* ===== HELPER: YOUTUBE URL → EMBED ===== */
const getYouTubeEmbedUrl = (url?: string) => {
  if (!url) return undefined;

  try {
    const parsed = new URL(url);
    let videoId: string | null = null;

    if (parsed.hostname.includes("youtube.com")) {
      videoId = parsed.searchParams.get("v");
    }

    if (parsed.hostname.includes("youtu.be")) {
      videoId = parsed.pathname.slice(1);
    }

    if (!videoId) return undefined;

    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0`;
  } catch {
    return undefined;
  }
};

const WhyChooseUs: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  const [data, setData] = useState<any>(null);
  const [expanded, setExpanded] = useState(true);
  const [hovered, setHovered] = useState<number | null>(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "whyChooseUs" && enabled == true][0]{
          title,
          videoTitle,
          videos[]{
            youtubeUrl
          },
          values[]{
            title,
            description
          }
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data || !data.videos?.length) return null;

  const title = localize(data.title, lang);
  const videoTitle = localize(data.videoTitle, lang);

  const youtubeSrc = getYouTubeEmbedUrl(
    data.videos[currentVideo]?.youtubeUrl
  );

  const nextVideo = () =>
    setCurrentVideo((p: number) =>
      p === data.videos.length - 1 ? 0 : p + 1
    );

  const prevVideo = () =>
    setCurrentVideo((p: number) =>
      p === 0 ? data.videos.length - 1 : p - 1
    );

  const sectionStyle = {
    backgroundImage: "url('/bac.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative w-full py-28"
      style={sectionStyle}
    >
      {/* ===== OVERLAY ===== */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(76,77,78,0.85)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ===== HEADER ===== */}
        <header className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white">
            {title}
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* ===== VIDEO ===== */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-6">
              {videoTitle}
            </h3>

            <div className="relative rounded-2xl shadow-xl overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                {youtubeSrc && (
                  <motion.iframe
                    key={currentVideo}
                    src={youtubeSrc}
                    className="w-full aspect-video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </AnimatePresence>

              <button
                onClick={prevVideo}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow"
              >
                ‹
              </button>

              <button
                onClick={nextVideo}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow"
              >
                ›
              </button>
            </div>
          </section>

          {/* ===== ORBIT VALUES ===== */}
          <section className="flex justify-center">
            <div className="relative w-[420px] h-[420px] flex items-center justify-center">
              <motion.button
                onClick={() => setExpanded(!expanded)}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                className="w-40 h-40 rounded-full bg-[#851A18] text-white text-xl font-bold shadow-xl z-20"
              >
                {title}
              </motion.button>

              {data.values.map((item: any, index: number) => {
                const angle = (360 / data.values.length) * index;
                const radius = expanded ? 170 : 0;
                const isRightSide = angle > 90 && angle < 270;

                const valueTitle = localize(item.title, lang);
                const valueDescription = localize(item.description, lang);

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
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 12,
                    }}
                    className="absolute"
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <motion.div
                      whileHover={
                        shouldReduceMotion ? {} : { scale: 1.08 }
                      }
                      className="w-28 h-28 rounded-2xl bg-white shadow-lg text-sm font-semibold text-[#292929] flex items-center justify-center text-center cursor-pointer"
                    >
                      {valueTitle}
                    </motion.div>

                    <AnimatePresence>
                      {hovered === index && expanded && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: isRightSide ? -10 : 10,
                          }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{
                            opacity: 0,
                            x: isRightSide ? -10 : 10,
                          }}
                          className={`absolute top-1/2 -translate-y-1/2 w-64 bg-[#292929] text-white text-sm p-3 rounded-lg shadow-xl ${isRightSide
                              ? "right-full mr-3"
                              : "left-full ml-3"
                            }`}
                        >
                          {valueDescription}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
