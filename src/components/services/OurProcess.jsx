import React from 'react'
import { FaRocket, FaUtensils, FaStar } from "react-icons/fa";

const OurProcess = () => {
  return (
    <div>
      {/* 🛠 Our Process Section */}
      <section className="py-16 px-3 md:px-20 bg-gradient-to-br from-[#060145] to-[#1a1a6b] text-[#E9F5FF] text-center relative overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#F9D91C] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#E9F5FF] opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        {/* Main Heading */}
        <div className="mb-12 relative z-10">
          <h2 
            data-aos="fade-down" 
            data-aos-duration="800"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Creative <span className="text-[#F9D91C]">Process</span>
          </h2>
          <div 
            data-aos="fade-up" 
            data-aos-duration="800"
            data-aos-delay="200"
            className="w-24 h-1 bg-[#F9D91C] mx-auto rounded-full"
          ></div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10 max-w-6xl mx-auto">
          
          {/* Step 1 - Concept */}
          <div 
            data-aos="zoom-in" 
            data-aos-duration="800"
            className="group bg-gradient-to-br from-[#0a0a5c] to-[#060145] p-4 md:p-8 rounded-2xl shadow-xl border border-[#1a1a6b] hover:border-[#F9D91C] transition-all duration-700 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#F9D91C]/20 relative overflow-hidden"
          >
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F9D91C] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-700 ease-in-out"></div>
            
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-[#F9D91C] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 ease-in-out shadow-lg group-hover:shadow-xl group-hover:shadow-[#F9D91C]/30">
                <FaRocket 
                  className="text-[#060145] text-3xl group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
              </div>
            </div>
            <h3 
              data-aos="fade-right" 
              data-aos-duration="800"
              data-aos-delay="300"
              className="text-2xl font-bold mb-4 text-[#F9D91C] group-hover:text-white transition-colors duration-700 ease-in-out relative"
            >
              Concept
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#F9D91C] group-hover:w-full group-hover:left-0 transition-all duration-700 ease-in-out"></span>
            </h3>
            <p 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="400"
              className="text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:translate-x-1"
            >
              We brainstorm unique ideas to match your restaurant's vibe and goals.
            </p>
          </div>

          {/* Step 2 - Design */}
          <div 
            data-aos="zoom-in" 
            data-aos-duration="800"
            data-aos-delay="100"
            className="group bg-gradient-to-br from-[#0a0a5c] to-[#060145] p-4 md:p-8 rounded-2xl shadow-xl border border-[#1a1a6b] hover:border-[#F9D91C] transition-all duration-700 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#F9D91C]/20 relative overflow-hidden"
          >
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F9D91C] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-700 ease-in-out"></div>
            
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-[#F9D91C] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 ease-in-out shadow-lg group-hover:shadow-xl group-hover:shadow-[#F9D91C]/30">
                <FaUtensils 
                  className="text-[#060145] text-3xl group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
              </div>
            </div>
            <h3 
              data-aos="fade-down" 
              data-aos-duration="800"
              data-aos-delay="400"
              className="text-2xl font-bold mb-4 text-[#F9D91C] group-hover:text-white transition-colors duration-700 ease-in-out relative"
            >
              Design
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#F9D91C] group-hover:w-full group-hover:left-0 transition-all duration-700 ease-in-out"></span>
            </h3>
            <p 
              data-aos="fade-left" 
              data-aos-duration="800"
              data-aos-delay="500"
              className="text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:translate-x-1"
            >
              Our creative team crafts stunning visuals tailored to your brand.
            </p>
          </div>

          {/* Step 3 - Deliver */}
          <div 
            data-aos="zoom-in" 
            data-aos-duration="800"
            data-aos-delay="200"
            className="group bg-gradient-to-br from-[#0a0a5c] to-[#060145] p-4 md:p-8 rounded-2xl shadow-xl border border-[#1a1a6b] hover:border-[#F9D91C] transition-all duration-700 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#F9D91C]/20 relative overflow-hidden"
          >
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F9D91C] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-700 ease-in-out"></div>
            
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-[#F9D91C] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-180 transition-all duration-700 ease-in-out shadow-lg group-hover:shadow-xl group-hover:shadow-[#F9D91C]/30">
                <FaStar 
                  className="text-[#060145] text-3xl group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
              </div>
            </div>
            <h3 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="500"
              className="text-2xl font-bold mb-4 text-[#F9D91C] group-hover:text-white transition-colors duration-700 ease-in-out relative"
            >
              Deliver
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#F9D91C] group-hover:w-full group-hover:left-0 transition-all duration-700 ease-in-out"></span>
            </h3>
            <p 
              data-aos="fade-right" 
              data-aos-duration="800"
              data-aos-delay="600"
              className="text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:translate-x-1"
            >
              We deliver high-quality, print-ready designs that make an impact.
            </p>
          </div>
        </div>

        {/* Process Line Connector - Desktop Only */}
        <div className="hidden md:flex justify-center items-center mt-8 relative z-10">
          <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-[#F9D91C] opacity-30 transform -translate-y-1/2"></div>
          <div className="flex justify-between w-full max-w-2xl">
            {[1, 2, 3].map((dot) => (
              <div 
                key={dot}
                className="w-4 h-4 bg-[#F9D91C] rounded-full hover:scale-150 hover:shadow-lg hover:shadow-[#F9D91C] transition-all duration-700 ease-in-out cursor-pointer"
              ></div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div 
          data-aos="fade-up" 
          data-aos-duration="800"
          data-aos-delay="700"
          className="mt-12 relative z-10"
        >
          <button className="bg-[#F9D91C] text-[#060145] px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 hover:shadow-2xl hover:shadow-[#F9D91C]/40 transition-all duration-700 ease-in-out shadow-lg group relative overflow-hidden">
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          </button>
        </div>
      </section>
    </div>
  )
}

export default OurProcess