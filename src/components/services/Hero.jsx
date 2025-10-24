import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="bg-[#E9F5FF] text-[#060145] font-sans">
      {/* 🌟 Hero Section */}
      <section className="bg-[#060145] text-[#E9F5FF] py-10 md:py-20 text-center px-3 md:px-6 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#F9D91C] opacity-10 rounded-full -translate-x-16 -translate-y-16 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#E9F5FF] opacity-5 rounded-full translate-x-20 translate-y-20 animate-pulse-slower"></div>
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-[#F9D91C] opacity-10 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 border-2 border-[#E9F5FF] opacity-10 rotate-45 animate-float-reverse"></div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 
            data-aos="zoom-in" 
            data-aos-delay="200"
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Our Design
            <span 
              data-aos="fade-up" 
              data-aos-delay="400"
              className="block text-[#F9D91C] mt-2 hover:text-white transition-all duration-700 ease-in-out cursor-pointer hover:scale-105 transform inline-block"
            >
              Services
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            data-aos="fade-right" 
            data-aos-delay="600"
            className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto leading-relaxed group"
          >
            At <span className="text-[#F9D91C] font-semibold hover:text-white transition-all duration-700 ease-in-out cursor-pointer inline-block hover:scale-110 transform">Food Restaurant</span>, we not only serve delicious food
          </p>
          
          {/* Description */}
          <p 
            data-aos="fade-left" 
            data-aos-delay="800"
            className="text-lg md:text-xl mb-10 text-[#E9F5FF] opacity-90 max-w-2xl mx-auto hover:opacity-100 transition-all duration-700 ease-in-out hover:translate-y-1 transform"
          >
            we serve creativity! Explore our professional design services tailored for restaurants and food businesses.
          </p>

          {/* CTA Buttons */}
          <div 
            data-aos="flip-up" 
            data-aos-delay="1000"
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            {/* Primary Button */}
            <button className="group bg-[#F9D91C] text-[#060145] px-5 py-2 rounded-full font-bold text-lg transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-[#F9D91C]/40 relative overflow-hidden">
              <span className="relative z-10 group-hover:tracking-wide transition-all duration-700">
                Get Started
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-60"></div>
            </button>

            {/* Secondary Button */}
            <button className="group border-2 border-[#E9F5FF] text-[#E9F5FF] px-5 py-2 rounded-full font-semibold text-lg transition-all duration-700 ease-in-out hover:bg-[#E9F5FF] hover:text-[#060145] hover:border-[#F9D91C] hover:scale-105 hover:shadow-2xl hover:shadow-[#E9F5FF]/20 relative overflow-hidden">
              <span className="relative z-10 group-hover:tracking-wide transition-all duration-700">
                Learn More
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F9D91C] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-20"></div>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="1200"
            className="mt-24 animate-bounce-slow"
          >
            <div className="w-8 h-14 border-3 border-[#F9D91C] rounded-full flex justify-center mx-auto relative">
              <div className="w-1 h-3 bg-[#F9D91C] rounded-full mt-3 animate-pulse"></div>
            </div>
            <p className="text-[#F9D91C] text-sm mt-2 opacity-80 hover:opacity-100 transition-opacity duration-700">
              Scroll to explore
            </p>
          </div>
        </div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-20 left-20 w-8 h-8 border border-[#F9D91C] rounded-full animate-ping-slow"></div>
          <div className="absolute bottom-20 right-20 w-6 h-6 border border-[#E9F5FF] rounded-full animate-ping-slower"></div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-180deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.08; }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(3); opacity: 0; }
        }
        @keyframes ping-slower {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 8s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 4s ease-out infinite;
        }
        .animate-ping-slower {
          animation: ping-slower 5s ease-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;