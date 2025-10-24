// File: VisitingCardHero.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaStar,
  FaPalette,
  FaRocket,
  FaUsers,
  FaAward,
  FaLightbulb,
} from "react-icons/fa";

const VisitingCardHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    { icon: FaPalette, text: "Creative Designs" },
    { icon: FaRocket, text: "Fast Delivery" },
    { icon: FaUsers, text: "Client Focused" },
    { icon: FaAward, text: "Premium Quality" },
    { icon: FaLightbulb, text: "Innovative Ideas" },
    { icon: FaStar, text: "5-Star Service" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#060145] via-[#0a0a5c] to-[#060145] text-[#E9F5FF] py-16 md:py-24 px-3 md:px-6 text-center overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="hidden md:flex absolute top-12 left-12 w-28 h-28 border-2 border-[#F9D91C] rounded-full animate-pulse"></div>
        <div className="hidden md:flex absolute bottom-10 right-10 w-20 h-20 border-2 border-[#E9F5FF] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-[#F9D91C] rotate-45"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide mb-2"
        >
          Visiting Card <span className="text-[#F9D91C]">Designs</span>
        </h1>

        {/* Tagline */}
        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-lg md:text-2xl mt-4 mb-6 font-light text-[#E9F5FF]/90"
        >
          Make your first impression{" "}
          <span className="text-[#F9D91C] font-semibold">unforgettable</span> —
          crafted with elegance, creativity, and your brand’s unique identity.
        </p>

        {/* Supporting Text */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="max-w-3xl mx-auto text-base md:text-lg text-[#E9F5FF]/80 mb-10 leading-relaxed"
        >
          From minimalist to luxurious, our designs help your restaurant brand
          stand out and connect instantly with customers. Let your card speak
          the flavor of your business.
        </p>

        {/* Features */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 max-w-4xl mx-auto"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#F9D91C] text-[#060145] rounded-full flex items-center justify-center mb-3 group-hover:bg-white transition-all duration-300 shadow-lg">
                  <Icon className="text-xl" />
                </div>
                <span className="text-sm font-medium text-[#E9F5FF]/90 group-hover:text-[#F9D91C] transition-all duration-300">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link to="/" className="group bg-[#F9D91C] text-[#060145] px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-50"></div>
          </Link>

          <Link to="/contact" className="group border-2 border-[#E9F5FF] text-[#E9F5FF] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:bg-[#E9F5FF] hover:text-[#060145] hover:scale-105 relative overflow-hidden">
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F9D91C] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-20"></div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default VisitingCardHero;
