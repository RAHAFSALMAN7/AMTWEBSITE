import { useEffect, useState } from "react";
import { sanity } from "../sanityClient";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { localize } from "../utils/localize";
import OptimizedImage from "./OptimizedImage";

const PartnersSection: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const { i18n } = useTranslation();

  const lang = i18n.language === "ar" ? "ar" : "en";

  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "partnersSection" && enabled == true][0]{
          title,
          partners[]{
            name,
            logo{
              asset->{url}
            }
          }
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data || !data.partners?.length) return null;

  const sectionStyle = {
    backgroundImage: "url('/bac.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const title = localize(data.title, lang);

  return (
    <section
      className="relative py-32 px-6"
      style={sectionStyle}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(76,77,78,0.85)" }}
      />

      <div className="relative z-10">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#851A1A] mb-16">
          {title}
        </h2>

        {/* PARTNERS GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center">
          {data.partners.map((partner: any, idx: number) => {
            const partnerName = localize(partner.name, lang);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="flex items-center justify-center transition"
              >
                <OptimizedImage
                  src={partner.logo?.asset?.url}
                  alt={`${partnerName} — technology partner logo`}
                  className="max-h-20 object-contain w-auto"
                  width={160}
                  height={80}
                  loading="lazy"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
