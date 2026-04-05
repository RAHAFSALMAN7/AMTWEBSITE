import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { sanity, urlFor } from "../sanityClient";
import { localize } from "../utils/localize";
import OptimizedImage from "../components/OptimizedImage";

const UnifiedCommunications: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "unifiedCommunicationsPage" && enabled == true][0]{
          pageTitle,
          sections[]{
            title,
            text,
            images
          }
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section className="bg-gray-50 px-6 md:px-28 py-24 space-y-24">

      {/* PAGE TITLE */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center text-[#851A18]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {localize(data.pageTitle, lang)}
      </motion.h1>

      <div className="max-w-6xl mx-auto space-y-16">
        {data.sections.map((section: any, idx: number) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#851A18]">
              {localize(section.title, lang)}
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {localize(section.text, lang)}
            </p>

            {section.images?.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.images.map((img: any, i: number) => (
                  <motion.div
                    key={i}
                    className="rounded-2xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <OptimizedImage
                      src={urlFor(img).width(1200).url()}
                      alt={`${localize(section.title, lang)} — unified communications integration photo`}
                      className="w-full h-64 md:h-80 object-cover"
                      width={1200}
                      height={640}
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UnifiedCommunications;
