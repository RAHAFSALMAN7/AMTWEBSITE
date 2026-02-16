import React, { useState, useEffect } from "react";
import ElectricBorder from "./ElectricBorder";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { sanity } from "../sanityClient";
import { localize } from "../utils/localize";

const Contact: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  const [formData, setFormData] = useState({
    company: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  /* ===== FETCH FROM SANITY ===== */
  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "contactPage" && enabled == true][0]{
          companyName,
          groupLine,
          slogan,
          titleSuffix,
          description,
          formTitle,
          mapEmbedUrl
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
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

  const sectionStyle = {
    backgroundImage: "url('/bac.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="relative overflow-hidden"
      style={sectionStyle}
    >
      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{ backgroundColor: "rgba(199,196,192,0.85)" }}
      />

      <div className="relative z-10 py-28 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ===== FORM ===== */}
          <ElectricBorder color="#CFCFCF" speed={1.5} chaos={0.6} thickness={2}>
            <div className="bg-white rounded-xl shadow-xl p-10">
              <h3 className="text-2xl font-semibold mb-6 text-[#1F2937]">
                {localize(data.formTitle, lang)}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  name="company"
                  placeholder={t("contact.companyName")}
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-4 border rounded"
                />
                <input
                  name="email"
                  placeholder={t("contact.email")}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border rounded"
                />
                <input
                  name="subject"
                  placeholder={t("contact.subject")}
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 border rounded"
                />
                <input
                  name="budget"
                  placeholder={t("contact.budget")}
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full p-4 border rounded"
                />
                <textarea
                  name="message"
                  placeholder={t("contact.message")}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border rounded h-36"
                />

                <button className="bg-[#B3261E] hover:bg-[#8f1f19] text-white px-8 py-3 rounded font-semibold transition">
                  {t("common.sendMessage")}
                </button>
              </form>
            </div>
          </ElectricBorder>

          {/* ===== TEXT CONTENT ===== */}
          <div className="text-white">

            <motion.h2
              className="text-4xl font-extrabold mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {localize(data.companyName, lang)}
            </motion.h2>

            {data.groupLine && (
              <motion.p
                className="text-xs tracking-widest text-white/80 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {localize(data.groupLine, lang)}
              </motion.p>
            )}

            <motion.h3
              className="text-[#B3261E] font-bold text-xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {localize(data.slogan, lang)}
            </motion.h3>

            {data.description && (
              <p className="text-white/90 max-w-lg">
                {localize(data.description, lang)}
              </p>
            )}

          </div>
        </div>
      </div>

      {/* ===== MAP ===== */}
      {data.mapEmbedUrl && (
        <iframe
          src={data.mapEmbedUrl}
          className="w-full h-[500px] border-0 relative z-10"
          loading="lazy"
        />
      )}

      {/* ===== SUCCESS MESSAGE ===== */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-green-600 text-white px-8 py-6 rounded-lg shadow-xl">
            {t("common.messageSent")}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
