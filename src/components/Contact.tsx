import React, { useState, useEffect } from "react";
import ElectricBorder from "./ElectricBorder";
import { motion, useReducedMotion } from "framer-motion";

const words = ["Trust", "Security", "Performance"];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({
      company: "",
      email: "",
      subject: "",
      budget: "",
      message: "",
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F4F4F5] via-[#EEEEEE] to-[#E6E6E6]">

      {/* Decorative background */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#CFCFCF]/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B3261E]/10 rounded-full blur-3xl" />

      {/* ===== FORM + TEXT ===== */}
      <div className="relative z-10 py-28 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — FORM */}
          <ElectricBorder
            color="#CFCFCF"
            speed={1.5}
            chaos={0.6}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            <div className="bg-white/95 backdrop-blur rounded-xl shadow-xl p-10">
              <h3 className="text-2xl font-semibold text-[#292929] mb-6">
                Get in touch
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name *"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-4 border rounded"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 border rounded"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-4 border rounded"
                  />
                  <input
                    type="text"
                    name="budget"
                    placeholder="Budget *"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-4 border rounded"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Message *"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border rounded h-40 resize-none"
                />

                <button
                  type="submit"
                  className="bg-[#B3261E] hover:bg-[#8F1E18] text-white px-8 py-3 rounded font-semibold transition-colors"
                >
                  Get in touch
                </button>
              </form>
            </div>
          </ElectricBorder>

          {/* RIGHT — ANIMATED TEXT */}
          <div className="lg:pl-12">
            <motion.span
              className="block mb-4 text-xs tracking-widest text-[#292929]/60"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ADVANCED MICRO TECHNOLOGIES
            </motion.span>

            <motion.h2
              className="font-extrabold leading-[1.1] text-4xl sm:text-5xl lg:text-6xl text-[#292929]"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1 }}
            >
              Engineering{" "}
              <motion.span
                key={index}
                className="inline-block text-[#B3261E]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {words[index]}
              </motion.span>
              <br />
              Into Every Network
            </motion.h2>

            <motion.p
              className="mt-6 max-w-lg text-[#292929]/70 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Connect with our experts to design secure, scalable,
              and high-performance infrastructure tailored to your
              enterprise needs.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ===== LOCATION TITLE ===== */}
      <div className="relative z-10 py-12 text-center bg-[#E5E5E5]">
        <h3 className="text-[#B3261E] text-3xl font-bold">
          Our Location
        </h3>
      </div>

      {/* ===== GOOGLE MAP (FIXED) ===== */}
      <div className="relative w-full h-[350px] md:h-[500px] lg:h-[650px]">
        <a
          href="https://www.google.com/maps/place/Advanced+Micro+Technologies+Co.+AMT+arabia/@26.2928409,50.1822731,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-10 bg-white text-[#292929] px-4 py-2 rounded-lg shadow-md font-semibold hover:bg-gray-100 transition"
        >
          View Larger Map
        </a>

        <iframe
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.0388390304133!2d50.182273099999996!3d26.292840899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ef5d1bf00919%3A0xcad792212a73a548!2sAdvanced%20Micro%20Technologies%20Co.%20AMT%20arabia!5e0!3m2!1sen!2s!4v1756469840100!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* SUCCESS MESSAGE */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative bg-green-500 text-white px-8 py-6 rounded-lg shadow-xl text-lg font-semibold">
            ✅ Your message has been sent successfully!
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
