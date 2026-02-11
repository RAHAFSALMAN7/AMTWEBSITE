import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { sanity, urlFor } from '../sanityClient';

interface NewsItem {
  title: string;
  description: string;
  image: any;
  slug: string;
}

const LatestNews: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "news"] | order(_createdAt desc){
          title,
          description,
          mainImage,
          "slug": slug.current
        }
      `)
      .then((data: any[]) => {
        setNewsData(
          data.map((item) => ({
            title: item.title,
            description: item.description,
            image: item.mainImage,
            slug: item.slug,
          }))
        );
      });
  }, []);

  const prevNews = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? newsData.length - 1 : prev - 1
    );

  const nextNews = () =>
    setCurrentIndex((prev) =>
      prev === newsData.length - 1 ? 0 : prev + 1
    );

  useEffect(() => {
    if (!newsData.length) return;
    const interval = setInterval(nextNews, 5000);
    return () => clearInterval(interval);
  }, [newsData]);

  if (!newsData.length) {
    return <p className="text-center py-20 text-white">{t("common.loading")}</p>;
  }

  const sectionStyle = {
    backgroundImage: "url('/bac.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="relative py-24 px-6"
      style={sectionStyle}
    >
      {/* ===== OVERLAY ===== */}
      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{ backgroundColor: "rgba(76,77,78,0.85)" }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-white">
          {t("news.latestNews")}
        </h2>

        <div className="max-w-6xl mx-auto relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prevNews}
            className="absolute top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow
                       left-0 sm:-left-4 md:-left-12 lg:-left-16"
          >
            <ChevronLeft size={28} className="text-black" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={newsData[currentIndex].slug}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl w-full"
            >
              <Link
                to={`/news/${newsData[currentIndex].slug}`}
                className="flex flex-col md:flex-row w-full"
              >
                {/* Image */}
                <div className="relative w-full md:w-1/2 group">
                  <img
                    src={urlFor(newsData[currentIndex].image)
                      .width(900)
                      .height(600)
                      .url()}
                    alt={newsData[currentIndex].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition">
                    <div className="flex items-center justify-center h-full">
                      <Share2 size={36} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="p-8 flex flex-col justify-center md:w-1/2 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-3 uppercase text-white">
                    {newsData[currentIndex].title}
                  </h3>
                  <p className="leading-relaxed text-white/80">
                    {newsData[currentIndex].description}
                  </p>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={nextNews}
            className="absolute top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow
                       right-0 sm:-right-4 md:-right-12 lg:-right-16"
          >
            <ChevronRight size={28} className="text-black" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {newsData.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === currentIndex
                  ? 'bg-white'
                  : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
