import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sanity } from "../sanityClient";

const ClientsSection: React.FC = () => {
  const [data, setData] = useState<any>(null);

  /* ================= FETCH ================= */
  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "clientsSection" && enabled == true][0]{
          title,
          clients[]{
            name,
            position,
            testimonial,
            logo{
              asset->{url}
            }
          }
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  /* ================= CLIENTS SLIDER ================= */
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const clients = data?.clients || [];
  const totalPages = Math.ceil(clients.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);

  const nextClients = () =>
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= clients.length ? 0 : prev + itemsPerPage
    );

  const prevClients = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(clients.length - itemsPerPage, 0) : prev - itemsPerPage
    );

  useEffect(() => {
    if (!clients.length) return;
    const interval = setInterval(nextClients, 3000);
    return () => clearInterval(interval);
  }, [clients.length]);

  /* ================= TESTIMONIAL SLIDER ================= */
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () =>
    setTestimonialIndex((prev) =>
      prev === clients.length - 1 ? 0 : prev + 1
    );

  const prevTestimonial = () =>
    setTestimonialIndex((prev) =>
      prev === 0 ? clients.length - 1 : prev - 1
    );

  useEffect(() => {
    if (!clients.length) return;
    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, [clients.length]);

  /* ================= GUARD ================= */
  if (!data || !clients.length) return null;

  /* ================= RENDER ================= */
  return (
    <section className="flex flex-col items-center my-20 px-6 bg-white">
      {/* ===== CLIENTS ===== */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#851A1A]">
        {data.title}
      </h2>

      <div className="w-full max-w-5xl flex justify-center relative overflow-hidden">
        <button
          onClick={prevClients}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
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
            {clients
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((client: any, idx: number) => (
                <div
                  key={idx}
                  className="w-44 h-44 rounded-full bg-white shadow flex items-center justify-center"
                >
                  <img
                    src={client.logo?.asset?.url}
                    alt={client.name}
                    className="w-32 h-32 object-contain"
                  />
                </div>
              ))}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={nextClients}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Pagination */}
      <div className="flex mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === currentPage ? "bg-gray-800" : "bg-gray-400"
              }`}
          />
        ))}
      </div>


    </section>
  );
};

export default ClientsSection;
