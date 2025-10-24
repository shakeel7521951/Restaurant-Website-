import React from 'react'
import {
  FaBrush,
  FaStar,
  FaRocket,
  FaPalette,
  FaLightbulb,
  FaBullhorn,
} from "react-icons/fa";

const PosterDetails = () => {
  const features = [
    { 
      icon: FaPalette, 
      text: "Creative Concepts",
      animation: "fade-right",
      delay: 100
    },
    { 
      icon: FaRocket, 
      text: "Fast Delivery",
      animation: "fade-up", 
      delay: 200
    },
    { 
      icon: FaBullhorn, 
      text: "Marketing Impact",
      animation: "fade-left",
      delay: 300
    },
    { 
      icon: FaBrush, 
      text: "Custom Artwork",
      animation: "fade-right",
      delay: 400
    },
    { 
      icon: FaLightbulb, 
      text: "Innovative Designs",
      animation: "fade-down",
      delay: 500
    },
    { 
      icon: FaStar, 
      text: "Premium Quality",
      animation: "fade-left",
      delay: 600
    },
  ];

  return (
    <div>
      <section className="py-16 md:py-24 px-6 text-center bg-gradient-to-br from-[#E9F5FF] to-white relative overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#F9D91C] opacity-10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#060145] opacity-5 rounded-full"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main Heading */}
          <div className="mb-12">
            <h2
              data-aos="fade-down"
              data-aos-duration="800"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#060145] mb-6 leading-tight"
            >
              Elevate Your Brand with
              <span className="block text-[#F9D91C] mt-2">Stunning Posters</span>
            </h2>

            {/* Decorative Line */}
            <div 
              data-aos="zoom-in"
              data-aos-delay="300"
              className="w-24 h-1.5 bg-[#F9D91C] mx-auto rounded-full mb-8"
            ></div>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-700 leading-relaxed"
            >
              Whether you're promoting a new dish, a food festival, or an upcoming
              event — our poster designs capture the essence of your restaurant's
              personality and boost visibility.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  data-aos={feature.animation}
                  data-aos-delay={feature.delay}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50"
                >
                  <div className="flex flex-col items-center">
                    {/* Icon Container */}
                    <div className="relative mb-4">
                      <div className="absolute -inset-3 bg-[#F9D91C] opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500"></div>
                      <div className="w-16 h-16 bg-[#060145] text-[#F9D91C] rounded-2xl flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <Icon className="text-2xl" />
                      </div>
                    </div>
                    
                    {/* Text */}
                    <span className="text-lg font-bold text-[#060145] group-hover:text-[#F9D91C] transition-colors duration-300">
                      {feature.text}
                    </span>
                    
                    {/* Hover Indicator */}
                    <div className="w-0 h-0.5 bg-[#F9D91C] mt-2 group-hover:w-12 transition-all duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div
            data-aos="zoom-in"
            data-aos-delay="800"
            className="mt-12"
          >
            <div className="bg-gradient-to-r from-[#060145] to-[#1a1a6e] rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Marketing?
              </h3>
              <p className="text-[#E9F5FF] mb-6">
                Let's create posters that make your restaurant unforgettable
              </p>
              <button className="bg-[#F9D91C] text-[#060145] px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PosterDetails