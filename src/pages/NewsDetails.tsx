import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsData } from '../components/LatestNews';
import { motion } from 'framer-motion';

const NewsDetails: React.FC = () => {
  const { id } = useParams();
  const newsItem = newsData.find((n) => n.id === Number(id));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!newsItem) {
    return <p className="text-center text-gray-600">News not found</p>;
  }

  const news2ExtraText = `AMT is celebrating the new year 2020 with its powerful team.

2019 was full of big achievements, huge challenges, team growth and hard work. We hope that 2020 will bring more success to AMT company, its employees and its partners.`;

  const news2Gallery = [
    '/images/22.png',
    '/images/23.png',
    '/images/24.png',
    '/images/25.png',
  ];

  const eventGallery = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
    '/images/7.png',
    '/images/8.png',
  ];

  const news3Text = `Award Recognition
MOVE FORWARD WITH ARUBA
Switch Forward with Aruba is an exclusive event that focuses on the new Aruba CX switches.

And this aim to forward for a modern, intelligent and automated network.`;

  const renderMedia = () => {
    if (newsItem.id === 1) {
      return (
        <>
          <motion.video
            src="https://res.cloudinary.com/dl2rqs0lo/video/upload/v1767613629/WhatsApp_Video_2026-01-05_at_12.50.09_PM_ykbfia.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-3xl mx-auto h-80 object-cover rounded-lg mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.p
            className="max-w-3xl mx-auto text-center text-[#292929] text-lg leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Today, we celebrate the glory of our beloved homeland, the Kingdom of Saudi Arabia, and all the achievements
            and progress we have accomplished together.
          </motion.p>
        </>
      );
    }

    return (
      <motion.img
        src={newsItem.image}
        alt={newsItem.title}
        className="w-full max-w-3xl mx-auto h-80 object-cover rounded-lg mb-6 cursor-pointer"
        onClick={() => setSelectedImage(newsItem.image)}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />
    );
  };

  const renderGallery = (gallery: string[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {gallery.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={`Gallery ${index + 1}`}
          className="w-full h-60 object-cover rounded-lg shadow-md cursor-pointer"
          onClick={() => setSelectedImage(img)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        />
      ))}
    </div>
  );

  return (
    <motion.section
      className="relative min-h-screen py-16 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/amtbackground.png')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#F5F5F5]/90 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12">
        <Link
          to="/"
          className="text-[#6B2C32] underline mb-6 inline-block hover:opacity-80"
        >
          ← Back to Latest News
        </Link>

        {renderMedia()}

        <motion.h1
          className="text-3xl font-bold mb-4 text-center text-[#292929]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {newsItem.id === 1
            ? '🇸🇦 Celebrating Saudi National Day 95 🇸🇦'
            : newsItem.title}
        </motion.h1>

        {/* News 2 */}
        {newsItem.id === 2 && (
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <motion.div
                className="md:w-1/2 whitespace-pre-line text-[#6B2C32]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {news2ExtraText}
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={newsItem.sideImage}
                  alt={newsItem.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer"
                  onClick={() => setSelectedImage(newsItem.sideImage!)}
                />
              </motion.div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-[#292929]">
              Event Gallery
            </h2>
            {renderGallery(news2Gallery)}
          </div>
        )}

        {/* News 3 */}
        {newsItem.id === 3 && (
          <>
            <motion.p
              className="leading-relaxed whitespace-pre-line mb-8 text-center text-[#6B2C32]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {news3Text}
            </motion.p>

            <motion.img
              src="/images/highlights.png"
              alt="Highlights"
              className="mx-auto w-full max-w-2xl rounded-lg shadow-lg cursor-pointer mb-8"
              onClick={() => setSelectedImage('/images/highlights.png')}
            />

            <h2 className="text-2xl font-bold mb-6 text-[#292929]">
              Event Gallery
            </h2>
            {renderGallery(eventGallery)}
          </>
        )}

        {/* Other news */}
        {newsItem.id !== 1 && newsItem.id !== 2 && newsItem.id !== 3 && (
          <motion.p
            className="leading-relaxed whitespace-pre-line mb-8 text-[#6B2C32]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {newsItem.fullText}
          </motion.p>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default NewsDetails;
