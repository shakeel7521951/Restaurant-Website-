import React from 'react';
import { Link } from "react-router-dom";
import { FaPalette, FaStar, FaIdCard, FaPaintBrush, FaLightbulb, FaMagic, FaCrown, FaAward, FaRegStar, FaRocket } from "react-icons/fa";

const StylesSamples = () => {
  const designStyles = [
    {
      icon: FaPalette,
      title: "Classic & Elegant",
      description: "Perfect for fine dining restaurants looking for a refined, timeless impression.",
      animation: "fade-up",
      delay: 100,
      bgGradient: "from-[#0a0a5c] via-[#1a1a8c] to-[#060145]",
      accent: "from-[#F9D91C] to-[#ffed4e]",
      pattern: "diagonal"
    },
    {
      icon: FaStar,
      title: "Modern & Minimal", 
      description: "Sleek, clean, and bold — perfect for contemporary food brands and cafes.",
      animation: "fade-down",
      delay: 200,
      bgGradient: "from-[#060145] via-[#0a0a7c] to-[#1a1a9c]",
      accent: "from-[#F9D91C] to-[#fff176]",
      pattern: "dots"
    },
    {
      icon: FaIdCard,
      title: "Creative & Trendy",
      description: "Fun, vibrant designs that make your restaurant stand out instantly.",
      animation: "fade-right",
      delay: 300,
      bgGradient: "from-[#1a1a6e] via-[#060145] to-[#0a0a8c]",
      accent: "from-[#F9D91C] to-[#ffea00]",
      pattern: "lines"
    },
    {
      icon: FaPaintBrush,
      title: "Luxury & Premium",
      description: "High-end designs with sophisticated elements for premium establishments.",
      animation: "fade-left",
      delay: 400,
      bgGradient: "from-[#060145] via-[#0a0a6c] to-[#1a1a7e]",
      accent: "from-[#F9D91C] to-[#ffd700]",
      pattern: "crown"
    },
    {
      icon: FaLightbulb,
      title: "Innovative & Unique",
      description: "Cutting-edge designs that push creative boundaries and capture attention.",
      animation: "zoom-in",
      delay: 500,
      bgGradient: "from-[#0a0a7c] via-[#060145] to-[#1a1a8e]",
      accent: "from-[#F9D91C] to-[#fff59d]",
      pattern: "award"
    },
    {
      icon: FaMagic,
      title: "Custom & Personal",
      description: "Tailored designs that perfectly reflect your restaurant's unique personality.",
      animation: "flip-up",
      delay: 600,
      bgGradient: "from-[#1a1a7e] via-[#060145] to-[#0a0a8e]",
      accent: "from-[#F9D91C] to-[#ffeb3b]",
      pattern: "rocket"
    }
  ];

  const PatternBackground = ({ type }) => {
    switch (type) {
      case 'diagonal':
        return (
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
              backgroundImage: `linear-gradient(45deg, #F9D91C 25%, transparent 25%, transparent 50%, #F9D91C 50%, #F9D91C 75%, transparent 75%, transparent)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        );
      case 'dots':
        return (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(#F9D91C 1px, transparent 1px)`,
              backgroundSize: '15px 15px'
            }}></div>
          </div>
        );
      case 'lines':
        return (
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `repeating-linear-gradient(0deg, #F9D91C, #F9D91C 1px, transparent 1px, transparent 10px)`
            }}></div>
          </div>
        );
      case 'crown':
        return (
          <div className="absolute inset-0 opacity-5 flex items-center justify-center">
            <FaCrown className="text-6xl transform rotate-12" />
          </div>
        );
      case 'award':
        return (
          <div className="absolute inset-0 opacity-5 flex items-center justify-center">
            <FaAward className="text-6xl" />
          </div>
        );
      case 'rocket':
        return (
          <div className="absolute inset-0 opacity-5 flex items-center justify-center">
            <FaRocket className="text-5xl transform -rotate-45" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#E9F5FF] via-[#f0f8ff] to-[#E9F5FF]">
      {/* 🌟 Design Styles Section */}
      <section className="relative py-20 md:py-28 px-3 md:px-6 text-center overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#F9D91C] opacity-5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#060145] opacity-3 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#F9D91C] opacity-5 rounded-full animate-bounce-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="mb-16 md:mb-20">
            <div 
              data-aos="fade-down" 
              data-aos-delay="100"
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-3 md:px-6 py-3 rounded-full mb-6 shadow-lg border border-white/20"
            >
              <FaAward className="text-[#060145] text-2xl md:text-xl" />
              <span className="font-bold text-[#060145] md:text-lg">Premium Design Collection</span>
            </div>
            
            <h2 
              data-aos="fade-down" 
              data-aos-delay="200"
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#060145] leading-tight"
            >
              Design Styles
              <span 
                data-aos="fade-up" 
                data-aos-delay="400"
                className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F9D91C] to-[#ffed4e] mt-4"
              >
                & Samples
              </span>
            </h2>
            
            <div 
              data-aos="zoom-in"
              data-aos-delay="600"
              className="w-32 h-1.5 bg-gradient-to-r from-[#F9D91C] to-[#060145] mx-auto rounded-full mb-8"
            ></div>

            <p 
              data-aos="fade-right" 
              data-aos-delay="800"
              className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto text-gray-600 leading-relaxed font-light"
            >
              Discover our exclusive collection of design styles crafted to elevate every type of restaurant and food business
            </p>
          </div>

          {/* Design Styles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {designStyles.map((style, index) => {
              const IconComponent = style.icon;
              return (
                <div
                  key={index}
                  data-aos={style.animation}
                  data-aos-delay={style.delay}
                  className={`relative bg-gradient-to-br ${style.bgGradient} rounded-3xl p-4 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out group hover:transform hover:-translate-y-4 border border-white/20 overflow-hidden`}
                >
                  {/* Pattern Background */}
                  <PatternBackground type={style.pattern} />

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>

                  {/* Icon Container */}
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#F9D91C] to-[#ffed4e] rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
                    <div className={`w-20 h-20 bg-gradient-to-br ${style.accent} text-[#060145] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out shadow-2xl relative z-10`}>
                      <IconComponent className="text-3xl" />
                    </div>
                    {/* Floating Particles */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#F9D91C] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#F9D91C] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-300"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Title */}
                    <h3 
                      data-aos="fade-up" 
                      data-aos-delay={style.delay + 100}
                      className="text-2xl md:text-3xl font-bold mb-6 text-white group-hover:text-[#F9D91C] transition-colors duration-500"
                    >
                      {style.title}
                    </h3>

                    {/* Description */}
                    <p 
                      data-aos="fade-in" 
                      data-aos-delay={style.delay + 200}
                      className="text-[#E9F5FF] opacity-90 leading-relaxed text-lg group-hover:opacity-100 transition-all duration-500 mb-6 font-light"
                    >
                      {style.description}
                    </p>

                    {/* Interactive Button */}
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-300">
                      <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 text-sm">
                        View Samples
                      </button>
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-[#F9D91C] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-br from-[#F9D91C] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                </div>
              );
            })}
          </div>

          {/* Premium CTA Section */}
          <div 
            data-aos="zoom-in" 
            data-aos-delay="1000"
            className="mt-16 md:mt-20"
          >
            <div className="bg-gradient-to-r from-[#060145] to-[#1a1a8c] rounded-3xl p-5 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F9D91C] rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#F9D91C] rounded-full translate-y-20 -translate-x-20"></div>
              </div>
              
              <div className="relative z-10">
                <p 
                  data-aos="fade-up" 
                  data-aos-delay="1100"
                  className="text-xl md:text-3xl mb-6 text-white font-light"
                >
                  Ready to create something extraordinary?
                </p>
                <h3 
                  data-aos="fade-up" 
                  data-aos-delay="1200"
                  className="text-3xl md:text-4xl font-bold mb-8 text-[#F9D91C]"
                >
                  Let's Design Your Masterpiece
                </h3>
                <Link
  to="/contact"
  data-aos="zoom-in"
  data-aos-delay="800"
  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#F9D91C] to-[#ffed4e] text-[#060145] px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-out shadow-lg mx-auto"
>
  <span className="flex items-center gap-3">
    Request Custom Design
    <FaRocket className="group-hover:translate-x-1 transition-transform duration-500" />
  </span>
</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StylesSamples;