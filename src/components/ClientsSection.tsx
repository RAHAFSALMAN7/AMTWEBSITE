import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ClientsSection = () => {
  const clients = [
    { id: 1, logo: "/logos/وزارة المالية السعودية .png", name: "Ministry of Finance", position: "Finance Manager", testimonial: "We selected AMT because of their strong support capability which made the project run smoothly from start to finish" },
    { id: 2, logo: "/logos/Ministry_of_Interior_Saudi_Arabia.svg.png", name: "Ministry of Interior", position: "Project Manager", testimonial: "Professional and reliable throughout the project." },
    { id: 3, logo: "/logos/ارامكو.png", name: "ARAMCO", position: "Operations Manager", testimonial: "Highly recommended for their technical expertise." },
    { id: 4, logo: "/logos/المملكة العربية السعودية الهيئة الملكية للجبيل وينبع .png", name: "Royal Commission for Jubail & Yanbu", position: "Project Coordinator", testimonial: "Excellent experience and smooth collaboration." },
    { id: 5, logo: "/logos/جامعة الإمام عبدالرحمن بن فيصل.png", name: "Imam Abdulrahman Bin Faisal University", position: "IT Department", testimonial: "Very satisfied with the results and ongoing support." },
    { id: 6, logo: "/logos/جامعة الملك فبصل .png", name: "King Faisal University", position: "Technical Lead", testimonial: "Amazing team and support during the implementation." },
    { id: 7, logo: "/logos/مرافق.png", name: "Marafeq", position: "Customer Service", testimonial: "Top-notch service quality and responsiveness." },
    { id: 8, logo: "/logos/معادن .png", name: "Ma'aden", position: "Project Manager", testimonial: "We are very impressed with their professionalism." },
    { id: 9, logo: "/logos/وزارة الداخلية.png", name: "Ministry of Interior", position: "Operations Team", testimonial: "Reliable and fast delivery of project milestones." },
    { id: 10, logo: "/logos/وازرة الصحة السعودية.png", name: "Ministry of Health", position: "Healthcare IT Manager", testimonial: "Professional and efficient solutions tailored to our needs." },
    { id: 11, logo: "/logos/جامعة الملك سعود.png", name: "King Saud University", position: "IT Department", testimonial: "Exceeded our expectations in every aspect." },
  ];

  // Clients slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = Math.ceil(clients.length / 3);
  const currentPage = Math.floor(currentIndex / 3);

  const nextClients = () =>
    setCurrentIndex((prev) => (prev + 3 >= clients.length ? 0 : prev + 3));
  const prevClients = () =>
    setCurrentIndex((prev) => (prev === 0 ? clients.length - 3 : prev - 3));

  useEffect(() => {
    const interval = setInterval(nextClients, 3000);
    return () => clearInterval(interval);
  }, [clients.length]);

  // Testimonials slider
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const prevTestimonial = () =>
    setTestimonialIndex((prev) =>
      prev === 0 ? clients.length - 1 : prev - 1
    );
  const nextTestimonial = () =>
    setTestimonialIndex((prev) =>
      prev === clients.length - 1 ? 0 : prev + 1
    );

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) =>
        prev === clients.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <section className="flex flex-col items-center my-20 px-6 bg-white">
      {/* Clients Section */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#851A1A]">
        Our Major Clients
      </h2>

      <div className="w-full max-w-5xl flex justify-center relative overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevClients}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-700 p-2 hover:opacity-80 rounded-full shadow bg-white"
        >
          <ChevronLeft size={32} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-16"
          >
            {clients.slice(currentIndex, currentIndex + 3).map((client) => (
              <div
                key={client.id}
                className="client-circle flex items-center justify-center shadow-md bg-white"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-image object-contain"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Right Arrow */}
        <button
          onClick={nextClients}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-700 p-2 hover:opacity-80 rounded-full shadow bg-white"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Pagination */}
      <div className="flex mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentPage ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Testimonials Section */}
      <h2 className="text-3xl md:text-4xl font-bold mt-32 mb-12 text-[#851A1A]">
        Testimonials
      </h2>

      <div className="w-full py-16 flex justify-center relative bg-gray-100">
        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 p-2 hover:opacity-80 rounded-full shadow bg-white"
        >
          <ChevronLeft size={32} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={testimonialIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6 max-w-3xl text-center px-6"
          >
            <div className="testimonial-circle flex items-center justify-center shadow-md bg-white">
              <img
                src={clients[testimonialIndex].logo}
                alt={clients[testimonialIndex].name}
                className="testimonial-image object-contain"
              />
            </div>

            <div className="rounded-xl p-6 shadow-md bg-white">
              <p className="text-lg md:text-xl italic text-[#851A1A]">
                "{clients[testimonialIndex].testimonial}"
              </p>
              <span className="font-semibold mt-2 block text-[#851A1A]">
                {clients[testimonialIndex].name}
              </span>
              <span className="block text-[#851A1A]">
                {clients[testimonialIndex].position}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700 p-2 hover:opacity-80 rounded-full shadow bg-white"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <style>{`
        .client-circle {
          width: 11rem;
          height: 11rem;
          border-radius: 50%;
        }
        .client-image {
          width: 8rem;
          height: 8rem;
        }
        .testimonial-circle {
          width: 10rem;
          height: 10rem;
          border-radius: 50%;
        }
        .testimonial-image {
          width: 7rem;
          height: 7rem;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
