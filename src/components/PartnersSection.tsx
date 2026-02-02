import { useEffect, useState } from "react";
import { sanity } from "../sanityClient";
import { motion } from "framer-motion";

const PartnersSection: React.FC = () => {
    const [data, setData] = useState<any>(null);

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

    return (
        <section className="bg-white py-32 px-6">
            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#851A1A] mb-16">
                {data.title}
            </h2>

            {/* PARTNERS GRID */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center">
                {data.partners.map((partner: any, idx: number) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.03 }}
                        className="flex items-center justify-center transition"
                    >
                        <img
                            src={partner.logo?.asset?.url}
                            alt={partner.name}
                            className="max-h-20 object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PartnersSection;
