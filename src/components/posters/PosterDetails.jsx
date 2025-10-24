import React from 'react';
import {
  FaBrush,
  FaStar,
  FaRocket,
  FaPalette,
  FaLightbulb,
  FaBullhorn,
  FaRegGem,
  FaCrown,
} from "react-icons/fa";
import { LuSparkles } from "react-icons/lu"; // ✨ Sparkle replacement icon

const PosterDetails = () => {
  const features = [
    { 
      icon: FaPalette, 
      text: "Creative Concepts",
      description: "Unique ideas tailored to your restaurant’s theme",
      animation: "fade-right",
      delay: 100,
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    { 
      icon: FaRocket, 
      text: "Fast Delivery",
      description: "Quick turnaround without compromising design quality",
      animation: "fade-up", 
      delay: 200,
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    { 
      icon: FaBullhorn, 
      text: "Marketing Impact",
      description: "Designs that engage and attract more customers",
      animation: "fade-left",
      delay: 300,
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    { 
      icon: FaBrush, 
      text: "Custom Artwork",
      description: "Exclusive illustrations crafted for your brand",
      animation: "fade-right",
      delay: 400,
      gradient: "from-orange-500/10 to-red-500/10"
    },
    { 
      icon: FaLightbulb, 
      text: "Innovative Designs",
      description: "Fresh creative perspectives for modern businesses",
      animation: "fade-down",
      delay: 500,
      gradient: "from-yellow-500/10 to-amber-500/10"
    },
    { 
      icon: FaStar, 
      text: "Premium Quality",
      description: "Detailed finishing to ensure perfection",
      animation: "fade-left",
      delay: 600,
      gradient: "from-indigo-500/10 to-purple-500/10"
    },
  ];

  return (
    <div>
      <section className="py-10 md:py-20 px-3 md:px-6 text-center bg-gradient-to-br from-[#E9F5FF] via-white to-[#f0f8ff] relative overflow-hidden">
        
        {/* Background Decor */}
        <div className="absolute inset-0">
          <div className="hidden md:flex absolute top-10 left-10 w-32 h-32 bg-[#F9D91C] opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#060145] opacity-5 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#F9D91C] opacity-8 rounded-full animate-bounce-slow"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#F9D91C] rounded-full opacity-60 animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 12}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-16 md:mb-20 pt-8 md:pt-0">
            <div 
              data-aos="fade-down"
              data-aos-delay="100"
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-lg border border-white/20"
            >
              <FaRegGem className="text-[#060145] text-xl" />
              <span className="font-bold text-[#060145] text-lg">Premium Poster Designs</span>
            </div>

            <h2
              data-aos="fade-down"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#060145] mb-3 md:mb-3 leading-tight"
            >
              Elevate Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F9D91C] to-[#ffed4e] mt-4">
                Brand Presence
              </span>
            </h2>

            <div 
              data-aos="zoom-in"
              data-aos-delay="300"
              className="w-32 h-1.5 bg-gradient-to-r from-[#F9D91C] to-[#060145] mx-auto rounded-full mb-8"
            ></div>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-xl md:text-2xl lg:text-3xl max-w-5xl mx-auto text-gray-600 leading-relaxed font-light"
            >
              Transform your restaurant’s marketing with stunning poster designs that 
              <span className="text-[#060145] font-semibold"> captivate attention </span>
              and 
              <span className="text-[#060145] font-semibold"> drive business growth</span>.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  data-aos={feature.animation}
                  data-aos-delay={feature.delay}
                  className={`group bg-gradient-to-br ${feature.gradient} backdrop-blur-sm rounded-3xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-white/50 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <div className="absolute -inset-4 bg-gradient-to-br from-[#F9D91C] to-[#ffed4e] rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
                      <div className="w-20 h-20 bg-gradient-to-br from-[#060145] to-[#1a1a6e] text-[#F9D91C] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl relative z-10">
                        <Icon className="text-3xl" />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-[#060145] mb-3 group-hover:text-[#F9D91C] transition-colors duration-500">
                        {feature.text}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed font-light">
                        {feature.description}
                      </p>
                      <div className="flex justify-center">
                        <div className="w-0 h-0.5 bg-gradient-to-r from-[#F9D91C] to-[#060145] group-hover:w-16 transition-all duration-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
      </section>
    </div>
  );
};

export default PosterDetails;
