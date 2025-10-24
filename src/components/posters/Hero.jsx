import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPalette,
  FaBrush,
  FaStar,
  FaRocket,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    { icon: FaPalette, text: "Creative Concepts", animation: "fade-right" },
    { icon: FaBrush, text: "Custom Artwork", animation: "fade-up" },
    { icon: FaRocket, text: "Fast Delivery", animation: "fade-left" },
    { icon: FaUsers, text: "Client-Centered", animation: "fade-right" },
    { icon: FaAward, text: "Premium Quality", animation: "fade-up" },
    { icon: FaStar, text: "5-Star Service", animation: "fade-left" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#060145] via-[#0a0a5c] to-[#060145] text-[#E9F5FF] py-10 md:py-20 px-3 text-center overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-[#F9D91C] rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-[#E9F5FF] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-[#F9D91C] rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="mb-10 pt-14 md:pt-3">
          <h1
            data-aos="fade-down"
            data-aos-delay="200"
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-0 leading-tight tracking-wide"
          >
            Restaurant
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#F9D91C] mb-3 md:mb-6 leading-tight tracking-wide"
          >
            Poster Designs
          </h1>
        </div>

        {/* Subtitle */}
        <p
          data-aos="zoom-in"
          data-aos-delay="600"
          className="text-xl md:text-2xl lg:text-3xl font-light mb-3 md:mb-6 max-w-6xl mx-auto leading-relaxed"
        >
          Turn your restaurant promotions into{" "}
          <span className="text-[#F9D91C] font-semibold">
            visual masterpieces
          </span>
        </p>

        {/* Description */}
        <p
          data-aos="fade-right"
          data-aos-delay="800"
          className="text-lg md:text-xl lg:text-2xl mb-5 md:mb-8 max-w-7xl mx-auto opacity-90 leading-relaxed"
        >
          Our poster designs are bold, vibrant, and crafted to make your offers
          irresistible — helping your brand stand out in every campaign.
        </p>

        {/* Highlight Line */}
        <p
          data-aos="fade-left"
          data-aos-delay="1000"
          className="text-lg md:text-xl mb-12 text-[#F9D91C] font-semibold max-w-2xl mx-auto"
        >
          Perfect for restaurants, cafes, food festivals, and seasonal promos.
        </p>

        {/* Features Grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="1200"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                data-aos={feature.animation}
                data-aos-delay={1400 + index * 100}
                className="flex flex-col items-center p-2 md:p-4 group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#F9D91C] text-[#060145] rounded-full flex items-center justify-center mb-2 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="text-lg" />
                </div>
                <span className="text-sm font-medium text-center group-hover:text-[#F9D91C] transition-colors duration-300">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div
          data-aos="flip-up"
          data-aos-delay="1600"
          className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
        >
          <Link to="/" className="group bg-[#F9D91C] text-[#060145] px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-[#F9D91C]/40 relative overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out opacity-60"></div>
          </Link>

          <Link to="/contact" className="group border-2 border-[#E9F5FF] text-[#E9F5FF] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 ease-in-out hover:bg-[#E9F5FF] hover:text-[#060145] hover:border-[#F9D91C] hover:scale-105 relative overflow-hidden">
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F9D91C] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out opacity-20"></div>
          </Link>
        </div>

        {/* Footer Line */}
        <p
          data-aos="fade-up"
          data-aos-delay="1800"
          className="hidden md:flex mt-10 text-sm text-[#E9F5FF]/80"
        >
          Free design consultation • 24/7 Support • 100% Satisfaction Guarantee
        </p>
      </div>
    </section>
  );
};

export default Hero;
