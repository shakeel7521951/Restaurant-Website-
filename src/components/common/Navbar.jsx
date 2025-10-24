import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const MAIN_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const SERVICE_ITEMS = ["Flyers", "Menus", "Visiting Cards", "Posters"].map(
  (name) => ({
    name,
    href: `/services/${name.toLowerCase().replace(/ /g, "-")}`,
  })
);

const LANGUAGE_OPTIONS = [
  { code: "en", name: "English" },
  { code: "ja", name: "日本語 (Japanese)" },
  { code: "zh", name: "中文 (Chinese)" },
  { code: "ms", name: "Bahasa Malaysia" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 400, once: true });
  }, []);

  const handleLanguageSelect = (langCode) => {
    console.log("Selected language:", langCode);
    setLangOpen(false);
    setMenuOpen(false);
  };

  const handleMobileLinkClick = () => setMenuOpen(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-gradient-to-r from-[#060145] to-[#1a1a6b] text-[#E9F5FF] shadow-lg">
      <nav className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-[#F9D91C] font-bold text-2xl md:text-3xl"
            onClick={handleMobileLinkClick}
          >
            BrandName
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium mx-auto">
            {MAIN_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative group text-[#E9F5FF] hover:text-[#F9D91C] transition-colors duration-300"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#F9D91C] group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              data-aos="fade-down"
            >
              <Link
                to="/services"
                className="relative group flex items-center gap-1 text-[#E9F5FF] hover:text-[#F9D91C] transition-colors duration-300"
              >
                Services
                <FaChevronDown
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  size={12}
                />
              </Link>
              {servicesOpen && (
                <ul
                  className="absolute left-0 mt-2 w-56 bg-[#060145] border border-[#1a1a6b] shadow-xl rounded-lg py-2"
                  data-aos="fade-up"
                >
                  {SERVICE_ITEMS.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2 text-[#E9F5FF] hover:text-[#F9D91C] hover:bg-[#1a1a6b] transition-colors duration-300 rounded"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Contact Link after Services */}
            <Link
              to="/contact"
              className="relative group text-[#E9F5FF] hover:text-[#F9D91C] transition-colors duration-300"
              data-aos="fade-right"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#F9D91C] group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
            </Link>

            {/* Languages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
              data-aos="fade-down"
            >
              <button className="relative group flex items-center gap-1 text-[#E9F5FF] hover:text-[#F9D91C] transition-colors duration-300">
                Languages
                <FaChevronDown
                  className={`transition-transform duration-200 ${
                    langOpen ? "rotate-180" : ""
                  }`}
                  size={12}
                />
              </button>
              {langOpen && (
                <ul
                  className="absolute left-0 mt-2 w-44 bg-[#060145] border border-[#1a1a6b] shadow-xl rounded-lg py-2"
                  data-aos="fade-left"
                >
                  {LANGUAGE_OPTIONS.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => handleLanguageSelect(lang.code)}
                        className="block w-full text-left px-4 py-2 text-[#E9F5FF] hover:text-[#F9D91C] hover:bg-[#1a1a6b] transition-colors duration-300 rounded"
                      >
                        {lang.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Desktop Login */}
          <div className="hidden md:flex">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#F9D91C] text-[#060145] rounded-full shadow hover:bg-white hover:scale-105 transition-all duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#E9F5FF] z-50 p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden bg-[#060145] border-t border-[#1a1a6b] shadow-inner rounded-b-lg py-3 space-y-2"
            data-aos="fade-down"
          >
            {MAIN_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-5 py-2 text-[#E9F5FF] hover:text-[#F9D91C]"
                onClick={handleMobileLinkClick}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Mobile */}
            <details className="px-5 py-2 group">
              <summary className="cursor-pointer text-[#E9F5FF] font-medium flex justify-between items-center">
                <Link to="/services" className="flex-1">Services</Link>
                <FaChevronDown className="text-[#F9D91C] transition-transform group-open:rotate-180" size={12} />
              </summary>
              <div className="mt-1 pl-4 text-sm space-y-1">
                {SERVICE_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleMobileLinkClick}
                    className="block py-1 text-[#E9F5FF] hover:text-[#F9D91C]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </details>

            {/* Contact Mobile */}
            <Link
              to="/contact"
              className="block px-5 py-2 text-[#E9F5FF] hover:text-[#F9D91C]"
              onClick={handleMobileLinkClick}
            >
              Contact
            </Link>

            {/* Languages Mobile */}
            <details className="px-5 py-2 group">
              <summary className="cursor-pointer text-[#E9F5FF] font-medium flex justify-between items-center">
                Languages
                <FaChevronDown className="text-[#F9D91C] transition-transform group-open:rotate-180" size={12} />
              </summary>
              <div className="mt-2 pl-4 text-sm space-y-1">
                {LANGUAGE_OPTIONS.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className="block w-full text-left py-1 text-[#E9F5FF] hover:text-[#F9D91C]"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </details>

            {/* Mobile Login */}
            <div className="px-5 pt-2">
              <Link
                to="/login"
                onClick={handleMobileLinkClick}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[#F9D91C] text-[#060145] rounded-full hover:bg-white hover:scale-105 transition-all duration-300"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
