// Header.tsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/LOGOAMT.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
     { label: "Solutions", path: "/solution-details" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm flex items-center justify-between px-4 sm:px-6 md:px-20 h-16 sm:h-20">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img src={Logo} alt="AMT Logo" className="h-12 sm:h-16 object-contain" />
        </Link>
      </div>

      {/* Navigation Links + Mobile Menu */}
      <div className="flex items-center">
        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-[#282828] font-medium hover:text-[#851A18] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6 text-[#851A18]" /> : <Menu className="w-6 h-6 text-[#851A18]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block py-3 px-4 sm:px-6 text-[#282828] hover:text-[#851A18] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
