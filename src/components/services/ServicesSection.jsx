import React from 'react'
import { FaUtensils, FaRegClipboard, FaIdCardAlt, FaRegNewspaper } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <div>
      {/* 🧩 Services Section */}
      <section className="py-16 px-3 md:px-6 md:px-20 bg-gradient-to-br from-[#E9F5FF] to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#F9D91C] opacity-10 rounded-full blur-lg"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#060145] opacity-5 rounded-full blur-xl"></div>
        
        <div className="text-center mb-12 relative z-10">
          <h2 
            data-aos="fade-down" 
            data-aos-duration="800"
            className="text-4xl md:text-5xl font-bold mb-4 text-[#060145]"
          >
            Our <span className="text-[#F9D91C]">Services</span>
          </h2>
          <div 
            data-aos="fade-up" 
            data-aos-duration="800"
            data-aos-delay="200"
            className="w-32 h-1.5 bg-gradient-to-r from-[#F9D91C] to-[#060145] mx-auto rounded-full"
          ></div>
          <p 
            data-aos="fade-up" 
            data-aos-duration="800"
            data-aos-delay="300"
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Creative design solutions that make your brand stand out from the crowd
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
          {/* Service 1 */}
          <div 
            data-aos="flip-left" 
            data-aos-duration="1000"
            className="group bg-white shadow-xl p-8 rounded-3xl hover:shadow-2xl transition-all duration-700 ease-in-out border border-[#E9F5FF] hover:border-[#F9D91C] hover:-translate-y-3 hover:scale-[1.02]"
          >
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#F9D91C] to-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-all duration-1000 ease-out"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-[#F9D91C] to-[#ffdf33] rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-3 group-hover:scale-110 transition-all duration-700 ease-in-out shadow-lg">
                  <FaRegNewspaper 
                    data-aos="zoom-in" 
                    data-aos-duration="800"
                    data-aos-delay="100"
                    className="text-white text-4xl transition-all duration-700 ease-in-out group-hover:scale-110" 
                  />
                </div>
              </div>
            </div>
            <h3 
              data-aos="fade-right" 
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-2xl font-bold mb-4 text-center text-[#060145] group-hover:text-[#F9D91C] transition-colors duration-700 ease-in-out"
            >
              Flyer Design
            </h3>
            <p 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="300"
              className="text-center text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-700 ease-in-out"
            >
              Grab attention instantly with our eye-catching flyer designs for offers, events, and grand openings.
            </p>
          </div>

          {/* Service 2 */}
          <div 
            data-aos="flip-right" 
            data-aos-duration="1000"
            data-aos-delay="100"
            className="group bg-white shadow-xl p-8 rounded-3xl hover:shadow-2xl transition-all duration-700 ease-in-out border border-[#E9F5FF] hover:border-[#F9D91C] hover:-translate-y-3 hover:scale-[1.02]"
          >
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#F9D91C] to-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-all duration-1000 ease-out"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-[#F9D91C] to-[#ffdf33] rounded-2xl flex items-center justify-center mx-auto group-hover:-rotate-3 group-hover:scale-110 transition-all duration-700 ease-in-out shadow-lg">
                  <FaUtensils 
                    data-aos="bounce-in" 
                    data-aos-duration="800"
                    data-aos-delay="200"
                    className="text-white text-4xl transition-all duration-700 ease-in-out group-hover:scale-110" 
                  />
                </div>
              </div>
            </div>
            <h3 
              data-aos="fade-left" 
              data-aos-duration="800"
              data-aos-delay="300"
              className="text-2xl font-bold mb-4 text-center text-[#060145] group-hover:text-[#F9D91C] transition-colors duration-700 ease-in-out"
            >
              Menu Design
            </h3>
            <p 
              data-aos="fade-down" 
              data-aos-duration="800"
              data-aos-delay="400"
              className="text-center text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-700 ease-in-out"
            >
              A well-designed menu reflects your brand and enhances the dining experience.
            </p>
          </div>

          {/* Service 3 */}
          <div 
            data-aos="flip-up" 
            data-aos-duration="1000"
            data-aos-delay="200"
            className="group bg-white shadow-xl p-8 rounded-3xl hover:shadow-2xl transition-all duration-700 ease-in-out border border-[#E9F5FF] hover:border-[#F9D91C] hover:-translate-y-3 hover:scale-[1.02]"
          >
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#F9D91C] to-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-all duration-1000 ease-out"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-[#F9D91C] to-[#ffdf33] rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-6 group-hover:scale-110 transition-all duration-700 ease-in-out shadow-lg">
                  <FaIdCardAlt 
                    data-aos="rotate-in" 
                    data-aos-duration="800"
                    data-aos-delay="300"
                    className="text-white text-4xl transition-all duration-700 ease-in-out group-hover:scale-110" 
                  />
                </div>
              </div>
            </div>
            <h3 
              data-aos="zoom-in" 
              data-aos-duration="800"
              data-aos-delay="400"
              className="text-2xl font-bold mb-4 text-center text-[#060145] group-hover:text-[#F9D91C] transition-colors duration-700 ease-in-out"
            >
              Visiting Card
            </h3>
            <p 
              data-aos="fade-right" 
              data-aos-duration="800"
              data-aos-delay="500"
              className="text-center text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-700 ease-in-out"
            >
              Make your first impression count with elegant, professional visiting cards.
            </p>
          </div>

          {/* Service 4 */}
          <div 
            data-aos="flip-down" 
            data-aos-duration="1000"
            data-aos-delay="300"
            className="group bg-white shadow-xl p-8 rounded-3xl hover:shadow-2xl transition-all duration-700 ease-in-out border border-[#E9F5FF] hover:border-[#F9D91C] hover:-translate-y-3 hover:scale-[1.02]"
          >
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#F9D91C] to-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-all duration-1000 ease-out"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-[#F9D91C] to-[#ffdf33] rounded-2xl flex items-center justify-center mx-auto group-hover:-rotate-6 group-hover:scale-110 transition-all duration-700 ease-in-out shadow-lg">
                  <FaRegClipboard 
                    data-aos="slide-in" 
                    data-aos-duration="800"
                    data-aos-delay="400"
                    className="text-white text-4xl transition-all duration-700 ease-in-out group-hover:scale-110" 
                  />
                </div>
              </div>
            </div>
            <h3 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="500"
              className="text-2xl font-bold mb-4 text-center text-[#060145] group-hover:text-[#F9D91C] transition-colors duration-700 ease-in-out"
            >
              Poster Design
            </h3>
            <p 
              data-aos="fade-left" 
              data-aos-duration="800"
              data-aos-delay="600"
              className="text-center text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-700 ease-in-out"
            >
              Promote your restaurant or events with bold and attractive posters designed to captivate.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div 
          data-aos="zoom-in" 
          data-aos-duration="1000"
          data-aos-delay="700"
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-[#060145] to-[#1a1a6b] text-white px-10 py-4 rounded-full font-bold text-lg hover:from-[#F9D91C] hover:to-[#ffdf33] hover:text-[#060145] transition-all duration-700 ease-in-out shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group relative overflow-hidden">
            <span className="relative z-10">View All Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F9D91C] to-[#ffdf33] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></div>
          </button>
        </div>
      </section>
    </div>
  )
}

export default ServicesSection