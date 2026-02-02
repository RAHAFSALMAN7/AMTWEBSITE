import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { sanity, urlFor } from "../sanityClient";

const Wireless: React.FC = () => {
  const [data, setData] = useState<any>(null);

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
        {data.pageTitle}
      </h1>

      {/* HERO IMAGE */}
      <div className="relative flex justify-center mb-8 w-full max-w-4xl mx-auto">
        <img
          src={urlFor(data.heroImage).width(1200).url()}
          alt={data.pageTitle}
          className="w-full rounded-lg"
        />
        <div className="absolute inset-0 bg-[#851A18]/30 rounded-lg" />
      </div>

      {/* INTRO */}
      <h2 className="text-2xl font-semibold mb-4 text-center text-[#851A18]">
        {data.sectionTitle}
      </h2>

      <p className="text-center text-[#292929] mb-4 text-xl">
        {data.introLine1}
      </p>

      <p className="text-center text-[#292929] mb-8 text-xl">
        {data.introLine2}
      </p>

      {/* BENEFITS */}
      <h3 className="text-xl font-semibold mb-6 text-center text-[#851A18]">
        {data.benefitsTitle}
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
                {b.title}
              </h4>
            </div>
            <p className="text-[#292929]">{b.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wireless;
