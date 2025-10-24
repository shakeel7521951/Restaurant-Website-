import React from 'react';
import { Link } from "react-router-dom";
import { FaArrowRight, FaStar, FaRegSmile } from 'react-icons/fa';

const VisitingCta = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#F9D91C] to-[#f8e05e] text-[#060145] py-20 px-3 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 
            data-aos="fade-down" 
            data-aos-duration="800"
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Ready to Create Your Perfect Visiting Card?
          </h2>
          
          {/* Decorative Line */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="300"
            className="w-20 h-1 bg-[#060145] mx-auto mb-8 rounded-full"
          ></div>

          {/* Description Text */}
          <p 
            data-aos="fade-up" 
            data-aos-delay="400"
            className="mb-8 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
          >
            Let's design a card that truly reflects your restaurant's essence!
          </p>

          {/* Features Icons */}
          <div 
            data-aos="fade-in"
            data-aos-delay="600"
            className="flex justify-center gap-4 md:gap-8 mb-10"
          >
            <div className="flex items-center gap-2">
              <FaStar className="text-[#060145] text-xl" />
              <span className="font-semibold">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegSmile className="text-[#060145] text-xl" />
              <span className="font-semibold">Easy Process</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link
  to="/"
  data-aos="zoom-in"
  data-aos-delay="800"
  className="group inline-flex items-center justify-center gap-3 bg-[#060145] text-[#E9F5FF] px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:bg-[#0a0275] focus:outline-none focus:ring-4 focus:ring-[#F9D91C]/40 mx-auto"
>
  Get Started Now
  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
</Link>

          {/* Additional Info */}
          <p 
            data-aos="fade-up"
            data-aos-delay="1000"
            className="mt-6 text-sm text-[#060145] opacity-80"
          >
            No hidden fees • Free design consultation • 24/7 support
          </p>
        </div>
      </section>
    </div>
  )
}

export default VisitingCta;