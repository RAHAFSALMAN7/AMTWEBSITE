import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  fullText: string;
  image: string;
  video?: string;
  sideImage?: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    image: '/images/اليوم السعودي.png',
    title: '𝐇𝐚𝐩𝐩𝐲 𝟗5𝐬𝐭 𝐒𝐚𝐮𝐝𝐢 𝐍𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐃𝐚𝐲',
    description: 'Congratulations to the Kingdom’s leadership and people on this special day.',
    fullText:
      'Congratulations to the Kingdom’s leadership and people on this special day. Here you can expand with more details, photos, and reflections about the Saudi National Day celebration.',
  },
  {
    id: 2,
    image: '/images/amt2020.png',
    sideImage: '/images/amt2121.png',
    title: 'New Project Launch',
    description:
      'We have launched a new innovative project that aims to improve our clients’ workflow.',
    fullText:
      'Full details about the new project launch: goals, roadmap, team members, and more...',
  },
  {
    id: 3,
    image: '/images/News.png',
    title: 'Award Recognition',
    description: 'Our team received a prestigious award for excellence in technology solutions.',
    fullText:
      'Here are all the details about the award recognition, how we won it, and what it means for our company.',
  },
];

const LatestNews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevNews = () =>
    setCurrentIndex((prev) => (prev === 0 ? newsData.length - 1 : prev - 1));
  const nextNews = () =>
    setCurrentIndex((prev) => (prev === newsData.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(nextNews, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-24 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/amtbackground.png')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#F5F5F5]/90 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#6B2C32]">
          Latest News
        </h2>

        <div className="max-w-6xl mx-auto relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prevNews}
            className="absolute top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/70 hover:bg-white shadow
                       left-0 sm:-left-4 md:-left-12 lg:-left-16"
          >
            <ChevronLeft size={28} className="text-[#6B2C32]" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={newsData[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl w-full"
            >
              <Link
                to={`/news/${newsData[currentIndex].id}`}
                className="flex flex-col md:flex-row w-full"
              >
                {/* Image */}
                <div className="relative w-full md:w-1/2 group">
                  <img
                    src={newsData[currentIndex].image}
                    alt={newsData[currentIndex].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#E5E5E5]/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition">
                    <div className="flex items-center justify-center h-full">
                      <Share2 size={36} className="text-[#6B2C32]" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="p-8 flex flex-col justify-center md:w-1/2 text-[#2E2E2E]">
                  <h3 className="text-lg md:text-xl font-bold mb-3 uppercase text-[#6B2C32]">
                    {newsData[currentIndex].title}
                  </h3>
                  <p className="leading-relaxed text-[#4B5563]">
                    {newsData[currentIndex].description}
                  </p>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={nextNews}
            className="absolute top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/70 hover:bg-white shadow
                       right-0 sm:-right-4 md:-right-12 lg:-right-16"
          >
            <ChevronRight size={28} className="text-[#6B2C32]" />
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
                  ? 'bg-[#6B2C32]'
                  : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
export type { NewsItem };
export { newsData };
