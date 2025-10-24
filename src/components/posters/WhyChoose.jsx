import React from 'react';
import { FaLightbulb, FaBrush, FaRocket, FaStar, FaPalette, FaUsers } from "react-icons/fa";

const WhyChoose = () => {
  const features = [
    {
      icon: FaLightbulb,
      title: "Smart Design Strategy",
      description: "Every poster is designed with your restaurant's theme and audience psychology in mind to maximize engagement.",
      animation: "fade-right",
      delay: 400
    },
    {
      icon: FaBrush,
      title: "Custom Artistic Flair",
      description: "From typography to color harmony, our designers bring a unique artistic touch that aligns with your restaurant's vibe.",
      animation: "fade-up",
      delay: 600
    },
    {
      icon: FaRocket,
      title: "Results That Impress",
      description: "Our poster designs don't just decorate walls — they drive attention, excitement, and foot traffic to your restaurant.",
      animation: "fade-left",
      delay: 800
    },
    {
      icon: FaStar,
      title: "Premium Quality",
      description: "High-resolution designs that maintain clarity and impact across all print and digital formats.",
      animation: "fade-right",
      delay: 1000
    },
    {
      icon: FaPalette,
      title: "Creative Excellence",
      description: "Innovative designs that capture your brand essence while standing out in competitive markets.",
      animation: "fade-up",
      delay: 1200
    },
    {
      icon: FaUsers,
      title: "Client-Centric Approach",
      description: "We work closely with you to ensure every design reflects your vision and business goals perfectly.",
      animation: "fade-left",
      delay: 1400
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[#060145] via-[#0a0a5c] to-[#060145] text-[#E9F5FF] py-20 md:py-28 px-6 relative overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#F9D91C] rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-[#E9F5FF] rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-[#F9D91C] rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              data-aos="fade-down"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Why Choose Our 
              <span 
                data-aos="fade-up" 
                data-aos-delay="200"
                className="block text-[#F9D91C] mt-2"
              >
                Poster Designs?
              </span>
            </h2>

            {/* Decorative Line */}
            <div 
              data-aos="zoom-in"
              data-aos-delay="400"
              className="w-24 h-1 bg-[#F9D91C] mx-auto rounded-full mb-8"
            ></div>

            <p
              data-aos="fade-right"
              data-aos-delay="600"
              className="max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl text-[#E9F5FF]/90 leading-relaxed"
            >
              We blend art, emotion, and strategy to create posters that not only
              look great but deliver real marketing impact.
            </p>

            <p
              data-aos="fade-left"
              data-aos-delay="800"
              className="max-w-3xl mx-auto text-lg md:text-xl text-[#F9D91C] font-semibold mt-6"
            >
              Every pixel is placed with purpose.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  data-aos={feature.animation}
                  data-aos-delay={feature.delay}
                  className="bg-gradient-to-br from-[#0a0a5c] to-[#060145] text-[#E9F5FF] p-8 rounded-2xl shadow-xl border border-[#1a1a6b] hover:border-[#F9D91C] transition-all duration-500 group hover:transform hover:-translate-y-2"
                >
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-[#F9D91C] text-[#060145] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <IconComponent className="text-2xl" />
                    </div>
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-[#F9D91C] rounded-2xl opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500"></div>
                  </div>

                  {/* Title */}
                  <h3 
                    data-aos="fade-up"
                    data-aos-delay={feature.delay + 200}
                    className="text-xl md:text-2xl font-bold mb-4 text-[#F9D91C] group-hover:text-white transition-colors duration-300"
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p 
                    data-aos="fade-in"
                    data-aos-delay={feature.delay + 400}
                    className="text-[#E9F5FF]/90 leading-relaxed group-hover:text-[#E9F5FF] transition-colors duration-300"
                  >
                    {feature.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#F9D91C] group-hover:w-16 transition-all duration-500 ease-in-out"></div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="1600"
            className="text-center mt-16"
          >
            <p 
              data-aos="fade-up"
              data-aos-delay="1800"
              className="text-lg md:text-xl text-[#F9D91C] font-semibold mb-6"
            >
              Ready to transform your restaurant's visual presence?
            </p>
            <button className="bg-[#F9D91C] text-[#060145] px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
              Start Your Project Today
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyChoose;