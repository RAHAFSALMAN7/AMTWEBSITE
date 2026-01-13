import React, { useEffect, useRef, useState } from "react";
import { Star, Award } from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";
import { useReducedMotion } from "framer-motion";

const Partners: React.FC = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  /* ===== Intersection Observer (once) ===== */
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
    { name: "HUAWEI", category: "Network & ICT Solutions" },
    { name: "HP ARUBA", category: "Enterprise Data Networking" },
    { name: "CISCO", category: "Routing, Switching & Security" },
    { name: "JUNIPER", category: "Advanced Network Infrastructure" },
    { name: "COMMSCOPE", category: "Structured Cabling Systems" },
    { name: "HP", category: "ICT Solutions" },
    { name: "ALCATEL", category: "Unified Communications" },
    { name: "Leviton", category: "Cabling Solutions" },
    { name: "AVAYA", category: "Audio Visual Systems" },
    { name: "NEC", category: "Projection & Display Systems" },
    { name: "MIRCOM", category: "Intercom Systems" },
    { name: "EXTERITY", category: "IPTV Solutions" },
    { name: "AXIS", category: "Video Surveillance Systems" },
    { name: "Carrier", category: "Fire & Security Systems" },
    { name: "EDWARDS", category: "Fire Alarm Systems" },
    { name: "BOUYER", category: "Public Address Systems" },
    { name: "CHRISTIE", category: "Video Walls & Projection" },
    { name: "CLEAR ONE", category: "Audio Conferencing" },
    { name: "ATLAD IED", category: "Communication Systems" },
    { name: "SAPLING", category: "Master Clock Systems" },
    { name: "APC", category: "UPS & Power Systems" },
    { name: "EXTRON", category: "Professional AV Systems" },
    { name: "BELDEN", category: "Signal Transmission Products" },
    { name: "SUPERIOR ESSEX", category: "Wiring & Cabling" },
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

  /* ===== SEO: Structured Data ===== */
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Advanced Micro Technologies",
    url: "https://www.amt.com",
    knowsAbout: partners.map((p) => p.category),
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: "5",
      },
      reviewBody: t.quote.en,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who are AMT technology partners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AMT partners with global leaders such as Cisco, Huawei, HP Aruba, Juniper and CommScope.",
        },
      },
      {
        "@type": "Question",
        name: "What industries does AMT serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AMT serves education, oil & gas, enterprise, government and industrial sectors.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.amt.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Partners",
        item: "https://www.amt.com/partners",
      },
    ],
  };

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="py-24 bg-[#E5E5E5] relative overflow-hidden"
      aria-labelledby="partners-heading"
    >
      {/* ===== SEO JSON-LD ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* ===== HEADER ===== */}
        <header
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-white/80 px-6 py-3 rounded-full border border-[#EB2427] mb-6">
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

        {/* ===== PARTNERS LIST ===== */}
        <ul
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-24"
          role="list"
          aria-label="Technology partners"
        >
          {partners.map((partner, index) => (
            <li
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 text-center border border-gray-100"
              aria-label={`${partner.name} – ${partner.category}`}
            >
              <strong className="block text-sm text-[#941B20]">
                {partner.name}
              </strong>
            </li>
          ))}
        </ul>

        {/* ===== TESTIMONIALS ===== */}
        <section aria-labelledby="testimonials-heading">
          <h3
            id="testimonials-heading"
            className="text-3xl lg:text-4xl font-bold text-[#941B20] text-center mb-12"
          >
            {texts.testimonialsTitle}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg"
                itemScope
                itemType="https://schema.org/Review"
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

                <blockquote
                  className="italic text-[#941B20]/80 mb-6"
                  itemProp="reviewBody"
                >
                  {t.quote[language]}
                </blockquote>

                <footer>
                  <strong itemProp="author">{t.author}</strong>
                  <p className="text-sm">{t.position[language]}</p>
                  <p className="text-xs text-[#EB2427]">{t.company}</p>
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
