import React from "react";
import { Linkedin, Twitter, Github, ArrowUp } from "lucide-react";
import Logo from "../assets/LOGOAMT.png";
import { useLanguage } from "../Context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const translations = {
    en: {
      bottom: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
      copyright:
        "© 2025 Advanced Micro Technologies. All rights reserved.",
      officeHoursTitle: "Office Hours",
      officeHoursTime: [
        "Sunday – Thursday: 8:00 AM – 6:30 PM",
        "Friday & Saturday: Closed",
      ],
      contactUsTitle: "Contact Us",
      mapTitle: "Our Location",
    },
  };

  const t = translations["en"];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/amt-arabia/posts/?feedView=all",
    },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Github, label: "GitHub", url: "#" },
  ];

  return (
    <footer
      className="bg-white text-[#851A18] relative overflow-hidden"
      role="contentinfo"
      aria-label="Website footer"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">

        {/* ===== BRAND ===== */}
        <div className="flex flex-col gap-6">
          <img
            src={Logo}
            alt="Advanced Micro Technologies company logo"
            className="w-56"
            loading="lazy"
          />

          <div className="flex gap-8 flex-wrap">
            <div className="text-sm">
              <img
                src="/images/Logo_of_the_ISO.png"
                alt="ISO 9001 certification"
                className="w-28"
                loading="lazy"
              />
              <a
                href="/pdf/AMT_iso.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline text-[#292929]"
              >
                ISO 9001:2015
              </a>
              <span className="text-[#292929]">
                Quality Management Systems
              </span>
            </div>

            <div className="text-sm">
              <img
                src="/images/Logo_of_the_ISO.png"
                alt="ISO 45001 certification"
                className="w-28"
                loading="lazy"
              />
              <a
                href="/pdf/amt_iso2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline text-[#292929]"
              >
                ISO 45001:2018
              </a>
              <span className="text-[#292929]">
                Occupational Health & Safety
              </span>
            </div>
          </div>
        </div>

        {/* ===== CONTACT ===== */}
        <address className="not-italic text-[#292929]">
          <h4 className="font-semibold text-lg mb-3">
            {t.contactUsTitle}
          </h4>

          <p>
            Tel:{" "}
            <a href="tel:+966138100547" className="hover:underline">
              +966 13 810 05 47
            </a>
          </p>

          <p>
            Email:{" "}
            <a
              href="mailto:info@amt-arabia.com"
              className="hover:underline"
            >
              info@amt-arabia.com
            </a>
          </p>

          <div className="mt-6">
            <h4 className="font-semibold text-lg mb-2">
              {t.officeHoursTitle}
            </h4>
            <p>{t.officeHoursTime[0]}</p>
            <p>{t.officeHoursTime[1]}</p>
          </div>

          <nav
            className="flex gap-4 mt-6"
            aria-label="Social media links"
          >
            {socialLinks.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <Icon className="w-5 h-5 text-[#851A18]" />
                </a>
              );
            })}
          </nav>
        </address>

        {/* ===== LOCATION (MAIN OFFICE ONLY) ===== */}
        <div>
          <h4 className="font-semibold text-lg mb-2">
            {t.mapTitle}
          </h4>
          <iframe
            title="Advanced Micro Technologies Office Location"
            src="https://www.google.com/maps?q=Advanced%20Micro%20Technologies%20AMT%20arabia&output=embed"
            width="100%"
            height="300"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-presentation"
            style={{
              border: 0,
              borderRadius: "12px",
            }}
          />
        </div>
      </div>

      {/* ===== BOTTOM ===== */}
      <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col lg:flex-row justify-between text-sm text-[#292929] px-6">
        <span>{t.copyright}</span>
        <div className="flex gap-6 mt-3 lg:mt-0">
          {t.bottom.map((b, i) => (
            <span key={i} className="hover:underline cursor-pointer">
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* ===== BACK TO TOP ===== */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed right-8 bottom-8 bg-[#851A18] p-4 rounded-full text-white shadow-lg hover:scale-110 transition-transform"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
