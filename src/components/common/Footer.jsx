// components/Footer.jsx
import React, { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const BRAND_PRIMARY = "#060145";
const BRAND_SECONDARY = "#F9D91C";

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "/login" },
];

const SERVICE_ITEMS = [
  { name: "Flyers", href: "/services/flyers" },
  { name: "Menus", href: "/services/menus" },
  { name: "Visiting Cards", href: "/services/visiting-cards" },
  { name: "Posters", href: "/services/posters" },
];

const SOCIAL_LINKS = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer style={{ backgroundColor: BRAND_PRIMARY }} className="text-white py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand & About */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-extrabold mb-4">BrandName</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            We provide high-quality print and digital solutions, including Flyers, Menus, Visiting Cards, Posters, and Web Development services.
          </p>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-down">
          <h3
            className="text-lg font-semibold mb-4 inline-block pb-1"
            style={{ borderBottom: `2px solid ${BRAND_SECONDARY}` }}
          >
            Quick Links
          </h3>
          <ul className="space-y-3">
            {QUICK_LINKS.map(link => (
              <li key={link.name}>
                <a href={link.href} className="relative text-gray-300 text-sm group">
                  {link.name}
                  <span
                    className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-yellow-400 transition-all duration-500 ease-in-out"
                  ></span>
                  <span
                    className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-yellow-400 transition-all duration-500 ease-in-out"
                  ></span>
                  <style jsx>{`
                    a.group:hover span:first-child,
                    a.group:hover span:last-child {
                      left: 0;
                      width: 100%;
                    }
                  `}</style>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div data-aos="fade-right">
          <h3
            className="text-lg font-semibold mb-4 inline-block pb-1"
            style={{ borderBottom: `2px solid ${BRAND_SECONDARY}` }}
          >
            Our Services
          </h3>
          <ul className="space-y-3">
            {SERVICE_ITEMS.map(service => (
              <li key={service.name}>
                <a href={service.href} className="relative text-gray-300 text-sm group">
                  {service.name}
                  <span
                    className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-yellow-400 transition-all duration-500 ease-in-out"
                  ></span>
                  <span
                    className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-yellow-400 transition-all duration-500 ease-in-out"
                  ></span>
                  <style jsx>{`
                    a.group:hover span:first-child,
                    a.group:hover span:last-child {
                      left: 0;
                      width: 100%;
                    }
                  `}</style>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / Socials */}
        <div data-aos="fade-left">
          <h3
            className="text-lg font-semibold mb-4 inline-block pb-1"
            style={{ borderBottom: `2px solid ${BRAND_SECONDARY}` }}
          >
            Get in Touch
          </h3>
          <div className="space-y-3 text-sm">
            <p className="text-gray-300">
              Email: <a href="mailto:azitservicessdmbhd@gmail.com" className="hover:text-yellow-400 transition">info@brandname.com</a>
            </p>
            <p className="text-gray-300">
              Phone: <a href="tel:+601128246982" className="hover:text-yellow-400 transition">+60 1128246982</a>
            </p>
          </div>

          <div className="flex gap-5 mt-5">
            {SOCIAL_LINKS.map(social => (
              <a
                key={social.label}
                href={social.href}
                aria-label={`Follow us on ${social.label}`}
                className="text-xl text-gray-300 hover:text-yellow-400 transition transform hover:scale-110"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-xs md:text-sm">
        <p>&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p>
        <p className="mt-1">
          <a href="/privacy" className="hover:text-yellow-400 transition underline">Privacy Policy</a> |{" "}
          <a href="/terms" className="hover:text-yellow-400 transition underline">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
