import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Server, Zap, Layers } from "lucide-react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { sanity } from "../sanityClient";
import { localize } from "../utils/localize";
import OptimizedImage from "../components/OptimizedImage";

/* ===== ICON MAP ===== */
const ICONS: Record<string, JSX.Element> = {
  server: <Server className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
  layers: <Layers className="w-8 h-8" />,
};

const DataCenter: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [data, setData] = useState<any>(null);
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  /* ===== FETCH FROM SANITY ===== */
  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "dataCenterPage" && enabled == true][0]{
          title,
          description,
          heroImage{
            asset->{url}
          },
          introText,
          features[]{
            title,
            description,
            icon,
            alt,
            image{
              asset->{url}
            }
          },
          stats[]{
            label,
            value
          },
          ctaTitle,
          ctaButtonText,
          ctaLink
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section
      className="w-full bg-white text-[#292929]"
      aria-labelledby="data-center-heading"
    >
      {/* ===== HERO ===== */}
      <header className="relative flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          id="data-center-heading"
          initial={shouldReduceMotion ? {} : { opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-normal mb-6 text-[#851A18]"
        >
          {localize(data.title, lang)}
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#444]"
        >
          {localize(data.description, lang)}
        </motion.p>

        {data.heroImage?.asset?.url && (
          <motion.div
            initial={shouldReduceMotion ? {} : { scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 rounded-lg w-full max-w-2xl"
          >
            <OptimizedImage
              src={data.heroImage.asset.url}
              alt={`${localize(data.title, lang)} — data center infrastructure photography`}
              className="w-full max-w-2xl object-cover rounded-lg"
              width={1024}
              height={576}
              priority
            />
          </motion.div>
        )}
      </header>

      {/* ===== INTRO ===== */}
      <motion.section
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 py-16 text-center"
      >
        <p className="text-lg md:text-xl leading-relaxed text-[#3F3F3F]">
          {localize(data.introText, lang)}
        </p>
      </motion.section>

      {/* ===== FEATURES ===== */}
      <section
        className="grid md:grid-cols-3 gap-10 px-6 md:px-20 py-20"
        aria-label="Data center features"
      >
        {data.features?.map((f: any, i: number) => (
          <motion.article
            key={i}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="p-6 rounded-2xl bg-white flex flex-col items-center text-center"
            style={{ minHeight: "540px" }}
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#851A18] text-white mb-6">
              {ICONS[f.icon]}
            </div>

            <h2 className="text-xl md:text-2xl font-normal mb-4 text-[#851A18]">
              {localize(f.title, lang)}
            </h2>

            <p className="text-[#4A4A4A] flex-1 leading-relaxed">
              {localize(f.description, lang)}
            </p>

            {f.image?.asset?.url && (
              <OptimizedImage
                src={f.image.asset.url}
                alt={localize(f.alt, lang)}
                loading="lazy"
                className="mt-6 w-full h-48 object-contain"
                width={400}
                height={192}
              />
            )}
          </motion.article>
        ))}
      </section>

      {/* ===== STATISTICS ===== */}
      <section className="bg-[#F5F5F0] py-20" aria-label="Company statistics">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {data.stats?.map((s: any, i: number) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <h3 className="text-4xl font-normal text-[#851A18] mb-2">
                <CountUp end={s.value} duration={2} />+
              </h3>
              <p className="text-base text-[#444]">{localize(s.label, lang)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 px-6 text-center bg-[#851A18]">
        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-normal text-white mb-6"
        >
          {localize(data.ctaTitle, lang)}
        </motion.h2>

        <motion.a
          href={data.ctaLink}
          aria-label={localize(data.ctaButtonText, lang)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block bg-white text-[#851A18] font-normal py-3 px-8 rounded-full text-lg"
        >
          {localize(data.ctaButtonText, lang)}
        </motion.a>
      </section>
    </section>
  );
};

export default DataCenter;
