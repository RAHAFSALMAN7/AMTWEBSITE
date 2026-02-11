// Header.tsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../assets/LOGOAMT.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.aboutUs"), path: "/about" },
    { label: t("nav.solutions"), path: "/solution-details" },
    { label: t("nav.contactUs"), path: "/contact" },
  ];

  return (
    <header
      className="
        fixed top-0 w-full z-50
        backdrop-blur-md
        shadow-sm
        transition-colors
      "
      style={{ backgroundColor: "rgba(199,196,192,0.75)" }}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-20 h-16 sm:h-20">
        {/* ===== LOGO ===== */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={Logo}
              alt="AMT Logo"
              className="h-12 sm:h-16 object-contain"
            />
          </Link>
        </div>

        {/* ===== NAV ===== */}
        <div className="flex items-center">
          {/* Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    relative font-medium transition
                    ${isActive ? "text-[#851A18]" : "text-[#2E2E2E]"}
                    hover:text-[#851A18]
                  `}
                >
                  {item.label}

                  {/* underline */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-[2px] bg-[#851A18]
                      transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              );
            })}

            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 border border-[#851A18] rounded text-[#851A18] font-medium hover:bg-[#851A18] hover:text-white transition"
              aria-label="Toggle Language"
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </button>
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-[#851A18]" />
              ) : (
                <Menu className="w-6 h-6 text-[#851A18]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-screen" : "max-h-0"}
        `}
        style={{ backgroundColor: "rgba(199,196,192,0.9)" }}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block py-4 px-6 text-[#2E2E2E] font-medium hover:text-[#851A18]"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}

        {/* Mobile Language Toggle */}
        <button
          onClick={() => {
            toggleLanguage();
            setIsOpen(false);
          }}
          className="block w-full text-left py-4 px-6 text-[#851A18] font-medium hover:bg-[#851A18] hover:text-white transition"
          aria-label="Toggle Language"
        >
          {i18n.language === "en" ? "AR" : "EN"}
        </button>
      </div>
    </header>
  );
};

export default Header;
