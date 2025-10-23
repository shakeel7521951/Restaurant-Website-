import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const BRAND_PRIMARY = "#060145"; // Dark blue
const BRAND_SECONDARY = "#F9D91C"; // Yellow accent

const MAIN_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
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

  const handleLanguageSelect = (langCode) => {
    console.log("Selected language:", langCode);
    setLangOpen(false);
    setMenuOpen(false);
  };

  const handleMobileLinkClick = () => setMenuOpen(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.18 } },
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#060145] to-[#1a1a6b] text-[#E9F5FF] shadow-lg">
      <nav className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 text-[#F9D91C] font-bold text-2xl md:text-3xl"
            onClick={handleMobileLinkClick}
          >
            BrandName
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium mx-auto">

            {MAIN_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group text-[#E9F5FF] hover:text-[#F9D91C] transition-colors duration-300"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#F9D91C] group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
              </a>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="relative group flex items-center gap-1 text-[#E9F5FF] hover:text-[#F9D91C] transition-colors duration-300">
                Services <FaChevronDown className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} size={12} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.ul
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute left-0 mt-2 w-56 bg-[#060145] border border-[#1a1a6b] shadow-xl rounded-lg py-2"
                  >
                    {SERVICE_ITEMS.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2 text-[#E9F5FF] hover:text-[#F9D91C] hover:bg-[#1a1a6b] transition-colors duration-300 rounded"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Languages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
            >
              <button className="relative group flex items-center gap-1 text-[#E9F5FF] hover:text-[#F9D91C] transition-colors duration-300">
                Languages <FaChevronDown className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} size={12} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.ul
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute left-0 mt-2 w-44 bg-[#060145] border border-[#1a1a6b] shadow-xl rounded-lg py-2"
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
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Desktop Login */}
          <div className="hidden md:flex">
            <a
              href="/login"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#F9D91C] text-[#060145] rounded-full shadow hover:bg-white hover:scale-105 transition-all duration-300"
            >
              Login
            </a>
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
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-[#060145] border-t border-[#1a1a6b] shadow-inner rounded-b-lg py-3 space-y-2"
            >
              {MAIN_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-5 py-2 text-[#E9F5FF] hover:text-[#F9D91C]"
                  onClick={handleMobileLinkClick}
                >
                  {link.name}
                </a>
              ))}

              {/* Services Mobile */}
              <details className="px-5 py-2 group">
                <summary className="cursor-pointer text-[#E9F5FF] font-medium flex justify-between items-center">
                  Services <FaChevronDown className="text-[#F9D91C] transition-transform group-open:rotate-180" size={12} />
                </summary>
                <div className="mt-2 pl-4 text-sm space-y-1">
                  {SERVICE_ITEMS.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={handleMobileLinkClick}
                      className="block py-1 text-[#E9F5FF] hover:text-[#F9D91C]"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </details>

              {/* Languages Mobile */}
              <details className="px-5 py-2 group">
                <summary className="cursor-pointer text-[#E9F5FF] font-medium flex justify-between items-center">
                  Languages <FaChevronDown className="text-[#F9D91C] transition-transform group-open:rotate-180" size={12} />
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

              <div className="px-5 pt-2">
                <a
                  href="/login"
                  onClick={handleMobileLinkClick}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-[#F9D91C] text-[#060145] rounded-full hover:bg-white hover:scale-105 transition-all duration-300"
                >
                  Login
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
