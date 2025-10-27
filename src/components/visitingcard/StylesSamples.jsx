import React from "react";
import { Link } from "react-router-dom";
import imgage1 from "../../assets/1.png"
import imgage2 from "../../assets/2.png"
import imgage3 from "../../assets/3.png"
import imgage4 from "../../assets/4.png"
import imgage5 from "../../assets/5.png"
import imgage6 from "../../assets/6.png"
import {
  FaPalette,
  FaStar,
  FaIdCard,
  FaPaintBrush,
  FaLightbulb,
  FaMagic,
  FaRocket,
} from "react-icons/fa";

const StylesSamples = () => {
  const designStyles = [
    {
      icon: FaPalette,
      title: "Classic & Elegant",
      description:
        "Perfect for fine dining restaurants looking for a refined, timeless impression.",
      img: imgage1,
      animation: "fade-up",
      delay: 100,
      bgGradient: "from-[#0a0a5c] via-[#1a1a8c] to-[#060145]",
      accent: "from-[#F9D91C] to-[#ffed4e]",
    },
    {
      icon: FaStar,
      title: "Modern & Minimal",
      description:
        "Sleek, clean, and bold — perfect for contemporary food brands and cafes.",
      img:imgage2,
      animation: "fade-down",
      delay: 200,
      bgGradient: "from-[#060145] via-[#0a0a7c] to-[#1a1a9c]",
      accent: "from-[#F9D91C] to-[#fff176]",
    },
    {
      icon: FaIdCard,
      title: "Creative & Trendy",
      description:
        "Fun, vibrant designs that make your restaurant stand out instantly.",
      img: imgage3,
      animation: "fade-right",
      delay: 300,
      bgGradient: "from-[#1a1a6e] via-[#060145] to-[#0a0a8c]",
      accent: "from-[#F9D91C] to-[#ffea00]",
    },
    {
      icon: FaPaintBrush,
      title: "Luxury & Premium",
      description:
        "High-end designs with sophisticated elements for premium establishments.",
      img: imgage4,
      animation: "fade-left",
      delay: 400,
      bgGradient: "from-[#060145] via-[#0a0a6c] to-[#1a1a7e]",
      accent: "from-[#F9D91C] to-[#ffd700]",
    },
    {
      icon: FaLightbulb,
      title: "Innovative & Unique",
      description:
        "Cutting-edge designs that push creative boundaries and capture attention.",
      img: imgage5,
      animation: "zoom-in",
      delay: 500,
      bgGradient: "from-[#0a0a7c] via-[#060145] to-[#1a1a8e]",
      accent: "from-[#F9D91C] to-[#fff59d]",
    },
    {
      icon: FaMagic,
      title: "Custom & Personal",
      description:
        "Tailored designs that perfectly reflect your restaurant's unique personality.",
      img: imgage6,
      animation: "flip-up",
      delay: 600,
      bgGradient: "from-[#1a1a7e] via-[#060145] to-[#0a0a8e]",
      accent: "from-[#F9D91C] to-[#ffeb3b]",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#E9F5FF] via-[#f0f8ff] to-[#E9F5FF]">
      <section className="relative py-20 md:py-28 px-3 md:px-6 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <h2
            data-aos="fade-down"
            className="text-4xl md:text-6xl font-bold mb-16 text-[#060145]"
          >
            Design Styles{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F9D91C] to-[#ffed4e]">
              & Samples
            </span>
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {designStyles.map((style, index) => {
              const IconComponent = style.icon;
              return (
                <div
                  key={index}
                  data-aos={style.animation}
                  data-aos-delay={style.delay}
                  className={`relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-br ${style.bgGradient} transition-all duration-700 ease-out group hover:-translate-y-4`}
                >
                  {/* Image (visible by default) */}
                  <div className="relative h-72 w-full overflow-hidden">
                    <img
                      src={style.img}
                      alt={style.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition-all duration-700"></div>
                  </div>

                  {/* Content (hidden until hover) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-8 z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${style.accent} text-[#060145] rounded-2xl flex items-center justify-center mb-6 shadow-xl`}
                    >
                      <IconComponent className="text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {style.title}
                    </h3>
                    <p className="text-[#E9F5FF] opacity-90 leading-relaxed text-lg font-light">
                      {style.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-[#060145] to-[#1a1a8c] rounded-3xl p-10 text-center shadow-2xl border border-white/10">
              <p className="text-white text-xl mb-4">
                Ready to create something extraordinary?
              </p>
              <h3 className="text-[#F9D91C] text-3xl font-bold mb-8">
                Let's Design Your Masterpiece
              </h3>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#F9D91C] to-[#ffed4e] text-[#060145] px-10 py-4 rounded-full font-bold hover:scale-105 transition-all duration-500"
              >
                Request Custom Design <FaRocket className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StylesSamples;
