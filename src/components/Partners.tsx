import React, { useEffect, useRef, useState } from "react";
import { Quote, Star, Award } from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";
import { useReducedMotion } from "framer-motion";

const Partners: React.FC = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  /* ===== Intersection Observer (safe & once) ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ===== PARTNERS ===== */
  const partners = [
    { name: "HUAWEI", logo: "H", category: "Network & ICT Solutions" },
    { name: "HP ARUBA", logo: "A", category: "Enterprise Data Networking" },
    { name: "CISCO", logo: "C", category: "Routing, Switching & Security" },
    { name: "JUNIPER", logo: "J", category: "Advanced Network Infrastructure" },
    { name: "COMMSCOPE", logo: "CS", category: "Structured Cabling Systems" },
    { name: "HP", logo: "HP", category: "ICT Solutions" },
    { name: "ALCATEL", logo: "AL", category: "Unified Communications" },
    { name: "Leviton", logo: "L", category: "Cabling Solutions" },
    { name: "AVAYA", logo: "AV", category: "Audio Visual Systems" },
    { name: "NEC", logo: "N", category: "Projection & Display Systems" },
    { name: "MIRCOM", logo: "M", category: "Intercom Systems" },
    { name: "EXTERITY", logo: "E", category: "IPTV Solutions" },
    { name: "AXIS", logo: "AX", category: "Video Surveillance Systems" },
    { name: "Carrier", logo: "CR", category: "Fire & Security Systems" },
    { name: "EDWARDS", logo: "ED", category: "Fire Alarm Systems" },
    { name: "BOUYER", logo: "B", category: "Public Address Systems" },
    { name: "CHRISTIE", logo: "CH", category: "Video Walls & Projection" },
    { name: "CLEAR ONE", logo: "CO", category: "Audio Conferencing" },
    { name: "ATLAD IED", logo: "AI", category: "Communication Systems" },
    { name: "SAPLING", logo: "S", category: "Master Clock Systems" },
    { name: "APC", logo: "APC", category: "UPS & Power Systems" },
    { name: "EXTRON", logo: "EX", category: "Professional AV Systems" },
    { name: "BELDEN", logo: "B", category: "Signal Transmission Products" },
    { name: "SUPERIOR ESSEX", logo: "SE", category: "Wiring & Cabling" },
  ];

  /* ===== TESTIMONIALS ===== */
  const testimonials = [
    {
      quote: {
        en: "AMT delivered robust network infrastructure across more than 50 buildings for thousands of users.",
        ar: "قدمت AMT بنية تحتية قوية للشبكات في أكثر من 50 مبنى لآلاف المستخدمين.",
      },
      author: "Dr. Ahmed Al-Salem",
      position: { en: "IT Director", ar: "مدير تقنية المعلومات" },
      company: "King Faisal University",
      rating: 5,
      avatar: "AA",
    },
    {
      quote: {
        en: "AMT successfully connected our refinery network while maintaining strict safety standards.",
        ar: "نجحت AMT في ربط شبكة المصفاة مع الالتزام بأعلى معايير السلامة.",
      },
      author: "Mohammed Al-Fahad",
      position: { en: "Project Manager", ar: "مدير المشروع" },
      company: "YASREF Refinery",
      rating: 5,
      avatar: "MF",
    },
  ];

  const texts = {
    header: language === "ar" ? "شركاؤنا" : "Our Partners",
    subtitle:
      language === "ar"
        ? "موثوقون من قبل قادة الصناعة"
        : "Trusted by Industry Leaders",
    description:
      language === "ar"
        ? "نتعاون مع شركاء عالميين لتقديم حلول تقنية متقدمة."
        : "We collaborate with global technology leaders to deliver advanced infrastructure solutions.",
    testimonialsTitle:
      language === "ar" ? "آراء عملائنا" : "Client Testimonials",
  };

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="py-24 bg-[#E5E5E5] relative overflow-hidden"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <header
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#EB2427] mb-6">
            <Award className="w-5 h-5 text-[#EB2427]" />
            <span className="text-[#941B20] font-semibold text-lg">
              {texts.header}
            </span>
          </div>

          <h2
            id="partners-heading"
            className="font-black text-5xl lg:text-7xl text-[#941B20] mb-6"
          >
            {texts.subtitle}
          </h2>

          <p className="text-xl text-[#941B20]/70 max-w-3xl mx-auto">
            {texts.description}
          </p>
        </header>

        {/* ===== PARTNERS GRID ===== */}
        <section
          className={`mb-24 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          role="list"
          aria-label="Technology partners"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {partners.map((partner, index) => (
              <article
                key={index}
                role="listitem"
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 text-center border border-gray-100"
                aria-label={`${partner.name} technology partner`}
              >
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-[#EB2427] to-[#941B20] rounded-xl flex items-center justify-center text-white font-bold text-sm">
                  {partner.logo}
                </div>
                <h3 className="text-xs font-semibold text-[#941B20]">
                  {partner.name}
                </h3>
                <p className="sr-only">{partner.category}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section
          aria-labelledby="testimonials-heading"
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <header className="text-center mb-12">
            <h3
              id="testimonials-heading"
              className="text-3xl lg:text-4xl font-bold text-[#941B20]"
            >
              {texts.testimonialsTitle}
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-[#EB2427] to-[#941B20] mx-auto mt-4 rounded-full" />
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#EB2427] fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="italic text-[#941B20]/80 mb-6">
                  {t.quote[language]}
                </blockquote>

                <footer className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#EB2427] to-[#941B20] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[#941B20]">
                      {t.author}
                    </div>
                    <div className="text-sm text-[#941B20]/70">
                      {t.position[language]}
                    </div>
                    <div className="text-xs text-[#EB2427]">
                      {t.company}
                    </div>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Partners;
