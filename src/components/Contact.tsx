import React, { useState } from "react";
import ElectricBorder from "./ElectricBorder";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

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
    <section className="relative bg-[#851A18] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/amt66.webp)" }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 py-24 flex justify-center px-4">
        <div className="w-full max-w-3xl">
          <h2 className="text-white text-3xl font-bold mb-8">
            Contact Us
          </h2>

          {/* Desktop with ElectricBorder */}
          <div className="hidden md:block">
            <ElectricBorder
              color="#ff2d2d"
              speed={1.5}
              chaos={0.6}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
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
                    className="bg-[#851A18] hover:bg-[#a21f1c] text-white px-8 py-3 rounded font-semibold transition-colors"
                  >
                    Get in touch
                  </button>
                </form>
              </div>
            </ElectricBorder>
          </div>

          {/* Mobile (بدون ElectricBorder) */}
          <div className="md:hidden border-2 border-red-600 rounded-xl bg-white p-8">
            <h3 className="text-2xl font-semibold text-[#292929] mb-6">
              Get in touch
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                className="bg-[#851A18] hover:bg-[#a21f1c] text-white px-8 py-3 rounded font-semibold w-full"
              >
                Get in touch
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Location title */}
      <div className="relative z-10 py-12 text-center bg-[#851A18]">
        <h3 className="text-white text-3xl font-bold">
          Our Location
        </h3>
      </div>

      {/* Google Map */}
      <div className="w-full h-[380px]">
        <iframe
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.0388390304133!2d50.182273099999996!3d26.292840899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ef5d1bf00919%3A0xcad792212a73a548!2sAdvanced%20Micro%20Technologies%20Co.%20AMT%20arabia!5e0!3m2!1sen!2s!4v1756469840100!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>

      {/* Success message */}
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
