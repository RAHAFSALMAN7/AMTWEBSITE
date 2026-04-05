import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import OptimizedImage from "../components/OptimizedImage";
import { sanity, urlFor } from "../sanityClient";
import { localize } from "../utils/localize";

const Wireless: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "wirelessPage" && enabled == true][0]{
          pageTitle,
          heroImage,
          sectionTitle,
          introLine1,
          introLine2,
          benefitsTitle,
          benefits
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-10 bg-white min-h-screen text-gray-900">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-6 text-center text-[#851A18]">
        {localize(data.pageTitle, lang)}
      </h1>

      {/* HERO IMAGE */}
      <div className="relative flex justify-center mb-8 w-full max-w-4xl mx-auto">
        <OptimizedImage
          src={urlFor(data.heroImage).width(1200).url()}
          alt={`${localize(data.pageTitle, lang)} — enterprise wireless LAN coverage`}
          className="w-full rounded-lg"
          width={1200}
          height={675}
          priority
        />
        <div className="absolute inset-0 bg-[#851A18]/30 rounded-lg" />
      </div>

      {/* INTRO */}
      <h2 className="text-2xl font-semibold mb-4 text-center text-[#851A18]">
        {localize(data.sectionTitle, lang)}
      </h2>

      <p className="text-center text-[#292929] mb-4 text-xl">
        {localize(data.introLine1, lang)}
      </p>

      <p className="text-center text-[#292929] mb-8 text-xl">
        {localize(data.introLine2, lang)}
      </p>

      {/* BENEFITS */}
      <h3 className="text-xl font-semibold mb-6 text-center text-[#851A18]">
        {localize(data.benefitsTitle, lang)}
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {data.benefits.map((b: any, index: number) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl"
          >
            <div className="flex items-center mb-3">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
              <h4 className="text-lg font-semibold text-[#851A18]">
                {localize(b.title, lang)}
              </h4>
            </div>
            <p className="text-[#292929]">{localize(b.description, lang)}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wireless;
