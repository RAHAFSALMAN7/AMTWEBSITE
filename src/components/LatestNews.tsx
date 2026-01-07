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
    const interval = setInterval(() => {
      nextNews();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#1e1e1e] py-16 px-6 text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Latest News</h2>

      <div className="max-w-6xl mx-auto relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prevNews}
          className="absolute top-1/2 -translate-y-1/2 z-10 text-white p-2 hover:opacity-80 rounded-full bg-black/40
                     left-0 sm:-left-4 md:-left-12 lg:-left-16"
        >
          <ChevronLeft size={28} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={newsData[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row bg-[#2a2a2a] rounded-lg overflow-hidden shadow-md w-full"
          >
            <Link
              to={`/news/${newsData[currentIndex].id}`}
              className="flex flex-col md:flex-row w-full"
            >
              <div className="relative w-full md:w-1/2 group">
                <img
                  src={newsData[currentIndex].image}
                  alt={newsData[currentIndex].title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Share2 size={40} className="text-white" />
                </div>
              </div>

              <div className="bg-[#b32121] p-6 flex flex-col justify-center md:w-1/2 text-sm leading-relaxed">
                <h3 className="text-lg md:text-xl font-bold mb-3 uppercase">
                  {newsData[currentIndex].title}
                </h3>
                <p className="whitespace-pre-line">{newsData[currentIndex].description}</p>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Right Arrow */}
        <button
          onClick={nextNews}
          className="absolute top-1/2 -translate-y-1/2 z-10 text-white p-2 hover:opacity-80 rounded-full bg-black/40
                     right-0 sm:-right-4 md:-right-12 lg:-right-16"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {newsData.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
export type { NewsItem };
export { newsData };
