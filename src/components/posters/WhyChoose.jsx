import React from 'react';
import { Link } from "react-router-dom";
import { FaLightbulb, FaBrush, FaRocket, FaStar, FaPalette, FaUsers } from "react-icons/fa";

const WhyChoose = () => {
  const features = [
    {
      icon: FaLightbulb,
      title: "Smart Design Strategy",
      description: "Each poster is built around your brand story and customer psychology for maximum engagement.",
      animation: "fade-right",
      delay: 400
    },
    {
      icon: FaBrush,
      title: "Custom Artistic Flair",
      description: "Typography, colors, and illustrations perfectly tuned to your restaurant’s personality.",
      animation: "fade-up",
      delay: 600
    },
    {
      icon: FaRocket,
      title: "Results That Impress",
      description: "Our designs go beyond visuals — they build excitement, engagement, and foot traffic.",
      animation: "fade-left",
      delay: 800
    },
    {
      icon: FaStar,
      title: "Premium Quality",
      description: "Crystal-clear, print-ready posters that shine both digitally and physically.",
      animation: "fade-right",
      delay: 1000
    },
    {
      icon: FaPalette,
      title: "Creative Excellence",
      description: "Fresh, bold, and innovative concepts that stand out in competitive markets.",
      animation: "fade-up",
      delay: 1200
    },
    {
      icon: FaUsers,
      title: "Client-Centric Approach",
      description: "We co-create with you to turn your vision into impactful, beautiful designs.",
      animation: "fade-left",
      delay: 1400
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#060145] via-[#0a0a5c] to-[#060145] text-[#E9F5FF] py-10 md:py-20 px-6">
      {/* Soft Animated Background */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,#F9D91C,transparent_70%)] animate-pulse-slow"></div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-[#F9D91C]/10 blur-2xl rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#E9F5FF]/10 blur-2xl rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Header */}
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
        >
          Why Choose Our 
          <span 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="block text-[#F9D91C] mt-3"
          >
            Poster Designs?
          </span>
        </h2>

        <div 
          data-aos="zoom-in"
          data-aos-delay="400"
          className="w-28 h-1.5 bg-gradient-to-r from-[#F9D91C] to-[#ffed4e] mx-auto rounded-full mb-8"
        ></div>

        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="max-w-4xl mx-auto text-lg md:text-xl text-[#E9F5FF]/90 leading-relaxed"
        >
          We merge creativity, strategy, and aesthetics to craft posters that not only catch eyes — 
          they convert curiosity into customers.
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="800"
          className="max-w-3xl mx-auto text-lg md:text-xl text-[#F9D91C] font-semibold mt-6"
        >
          Where design meets results.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                data-aos={feature.animation}
                data-aos-delay={feature.delay}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-4 md:p-8 rounded-3xl border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:shadow-[0_0_35px_rgba(249,217,28,0.3)] transition-all duration-800 ease-out group hover:-translate-y-3"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F9D91C] to-[#ffed4e] text-[#060145] rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-800 ease-out">
                    <IconComponent className="text-3xl" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-[#F9D91C] blur-xl opacity-0 group-hover:opacity-20 transition-all duration-800 ease-out"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-[#F9D91C] group-hover:text-white transition-colors duration-800">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#E9F5FF]/90 leading-relaxed group-hover:text-[#E9F5FF] transition-colors duration-800">
                  {feature.description}
                </p>

                {/* Hover underline */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#F9D91C] to-[#ffed4e] group-hover:w-20 transition-all duration-800 ease-out rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="1800"
          className="mt-20"
        >
          <p 
            data-aos="fade-up"
            data-aos-delay="2000"
            className="text-lg md:text-xl text-[#F9D91C] font-semibold mb-6"
          >
            Ready to elevate your restaurant’s visual identity?
          </p>
          <Link
  to="/contact"
  data-aos="zoom-in"
  data-aos-delay="800"
  className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#F9D91C] to-[#ffed4e] text-[#060145] px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-[0_0_35px_rgba(249,217,28,0.5)] hover:scale-105 transition-all duration-700 ease-out overflow-hidden"
>
  {/* ✨ Subtle Shine Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>

  {/* 🎯 Button Text */}
  <span className="relative z-10">Start Your Project Today</span>
</Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
