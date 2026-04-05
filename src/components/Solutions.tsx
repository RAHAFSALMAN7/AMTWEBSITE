import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CircularGallery from "./CircularGallery";
import ElectricBorder from "./ElectricBorder";
import { sanity } from "../sanityClient";
import { localize } from "../utils/localize";
import OptimizedImage from "./OptimizedImage";

/* ===== DARK THEME COLORS ===== */
const COLORS = {
  surface: "#5A5B5C",
  primary: "#ffffff",
  primarySoft: "rgba(255,255,255,0.85)",
  textMuted: "rgba(255,255,255,0.7)",
};

type SolutionsProps = { standalone?: boolean };

const Solutions: React.FC<SolutionsProps> = ({ standalone = false }) => {
  const shouldReduceMotion = useReducedMotion();
  const [data, setData] = useState<any>(null);
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "solutionsPage" && enabled == true][0]{
          badge,
          title,
          description,
          solutions[]{
            title,
            alt,
            image{
              asset->{url}
            }
          },
          coreTitle,
          coreDescription,
          coreItems[]{
            label,
            image{
              asset->{url}
            }
          }
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  const galleryItems =
    data.coreItems?.map((item: any) => ({
      image: item.image?.asset?.url,
      text: localize(item.label, lang),
    })) || [];

  const sectionStyle = {
    backgroundImage: "url('/bac.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      {/* ===== INTRO ===== */}
      <section
        className="relative px-4 sm:px-6 md:px-28 pt-24"
        style={sectionStyle}
      >
        {/* ===== OVERLAY ===== */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(76,77,78,0.75)" }}
        />

        <div className="relative z-10">
          <header className="max-w-4xl mx-auto text-center">
            {data.badge && (
              <motion.span
                className="block text-xs tracking-[0.3em]"
                style={{ color: COLORS.primarySoft }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {localize(data.badge, lang)}
              </motion.span>
            )}

            {standalone ? (
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                {localize(data.title, lang)}
              </h1>
            ) : (
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                {localize(data.title, lang)}
              </h2>
            )}

            <motion.p
              className="mt-6 text-sm sm:text-base md:text-lg"
              style={{ color: COLORS.textMuted }}
              initial={{ opacity: 0, y: 15 }}
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              transition={{ delay: 0.4 }}
            >
              {localize(data.description, lang)}
            </motion.p>
          </header>

          {/* ===== SOLUTION BOXES ===== */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {data.solutions?.map((box: any, idx: number) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              >
                <ElectricBorder
                  color="#ffffff"
                  speed={0.8}
                  chaos={0.25}
                  thickness={1.2}
                  style={{ borderRadius: 20 }}
                >
                  <div
                    className="relative overflow-hidden rounded-xl w-64 h-80"
                    style={{ backgroundColor: COLORS.surface }}
                  >
                    <OptimizedImage
                      src={box.image?.asset?.url}
                      alt={localize(box.alt, lang)}
                      className="w-full h-3/4 object-cover"
                      width={256}
                      height={320}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 px-4">
                      <h3 className="text-white text-base font-bold text-center">
                        {localize(box.title, lang)}
                      </h3>
                    </div>
                  </div>
                </ElectricBorder>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CORE SYSTEMS ===== */}
      <section
        className="relative px-4 sm:px-6 md:px-28 py-32"
        style={sectionStyle}
      >
        {/* ===== OVERLAY ===== */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(76,77,78,0.75)" }}
        />

        <div className="relative z-10">
          <header className="text-center mb-14">
            {standalone ? (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {localize(data.coreTitle, lang)}
              </h2>
            ) : (
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {localize(data.coreTitle, lang)}
              </h3>
            )}
            <p
              className="mt-4 text-sm sm:text-base"
              style={{ color: COLORS.textMuted }}
            >
              {localize(data.coreDescription, lang)}
            </p>
          </header>

          <div className="relative h-[600px]">
            <CircularGallery
              items={galleryItems}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.08}
              scrollEase={0.02}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;