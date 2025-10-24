import React from 'react'
import { Link } from "react-router-dom";
import { FaArrowRight, FaPaintBrush } from "react-icons/fa"

const PosterCta = () => {
  return (
    <div className="relative py-16 md:py-20 px-3 md:px-6 text-center bg-gradient-to-br from-[#E9F5FF] to-[#ffffff] overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#060145] rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-[#F9D91C] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 border border-[#060145] rounded-full animate-ping"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Main Heading */}
        <h2 
          data-aos="fade-down"
          data-aos-duration="800"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#060145] mb-6"
        >
          Ready to Create
          <span 
            data-aos="fade-up"
            data-aos-delay="300"
            className="block text-[#F9D91C] mt-2"
          >
            Amazing Posters?
          </span>
        </h2>

        {/* Description */}
        <p 
          data-aos="fade-right"
          data-aos-delay="500"
          className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Let's design posters that capture attention and drive customers to your restaurant
        </p>

        {/* CTA Button */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="700"
          className="inline-block"
        >
           <Link
            to="/"
            className="group bg-gradient-to-r from-[#060145] to-[#1a1a6e] text-[#E9F5FF] px-5 md:px-12 py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden inline-flex items-center gap-3 justify-center"
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F9D91C]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-3">
              <FaPaintBrush className="hidden md:flex text-xl group-hover:rotate-12 transition-transform duration-300" />
              Let's Create Your Poster
              <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </div>

        {/* Additional Info */}
        <p 
          data-aos="fade-up"
          data-aos-delay="900"
          className="mt-6 text-gray-600 text-sm"
        >
          Free design consultation • 24-48 hour delivery • Unlimited revisions
        </p>
      </div>
    </div>
  )
}

export default PosterCta