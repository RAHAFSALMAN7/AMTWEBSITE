import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sanity, urlFor } from "../sanityClient";

interface Section {
  title: string;
  image: any;
  desc1: string;
  desc2?: string;
}

interface DataNetworkData {
  title: string;
  heroImage: any;
  description: string;
  sections: Section[];
}

const DataNetwork: React.FC = () => {
  const [data, setData] = useState<DataNetworkData | null>(null);

  /* ===== FETCH FROM SANITY ===== */
  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "dataNetworkPage" && enabled == true][0]{
          title,
          heroImage,
          description,
          sections[]{
            title,
            image,
            desc1,
            desc2
          }
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) {
    return (
      <div className="py-32 text-center text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen px-6 md:px-28 py-24">

      {/* ===== PAGE TITLE ===== */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center text-[#851A18] mb-20"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {data.title}
      </motion.h1>

      {/* ===== HERO IMAGE ===== */}
      {data.heroImage && (
        <motion.div
          className="flex justify-center mb-20 relative w-full md:w-2/5 mx-auto shadow-xl rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={urlFor(data.heroImage).width(1200).url()}
            alt={data.title}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#851A18]/60 to-transparent"></div>
        </motion.div>
      )}

      {/* ===== MAIN DESCRIPTION ===== */}
      <motion.p
        className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-20 leading-relaxed text-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {data.description}
      </motion.p>

      {/* ===== SECTIONS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.sections?.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            {section.image && (
              <div className="relative w-32 h-32 mb-6">
                <img
                  src={urlFor(section.image).width(300).height(300).url()}
                  alt={section.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#851A18]/40 to-transparent rounded-2xl"></div>
              </div>
            )}

            <h2 className="text-xl font-bold mb-4 text-[#851A18]">
              {section.title}
            </h2>

            <p className="text-gray-700 mb-3">
              {section.desc1}
            </p>

            {section.desc2 && (
              <p className="text-gray-600">
                {section.desc2}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DataNetwork;
