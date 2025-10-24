import React from 'react';
import { FaCheckCircle, FaIdCard, FaPalette, FaQrcode, FaRocket, FaMobile, FaCrown, FaShieldAlt } from 'react-icons/fa';

const VisitingDetails = () => {
  return (
    <div>
      <section className="py-20 px-3 md:px-12 bg-gradient-to-br from-[#E9F5FF] to-[#ffffff] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#F9D91C] opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#060145] opacity-5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#F9D91C] opacity-10 rounded-full blur-lg"></div>

        <div className="text-center mb-20 relative z-10">
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            className="inline-flex items-center gap-3 bg-[#060145] text-white px-6 py-3 rounded-full mb-6"
          >
            <FaCrown className="text-[#F9D91C]" />
            <span className="font-semibold">Premium Designs</span>
          </div>
          
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-5xl md:text-6xl font-bold mb-6 text-[#060145] leading-tight"
          >
            Elevate Your <span className="text-[#F9D91C]">Brand</span> Presence
          </h2>
          
          <div 
            data-aos="zoom-in"
            data-aos-delay="300"
            className="w-24 h-2 bg-gradient-to-r from-[#F9D91C] to-[#060145] mx-auto rounded-full mb-8"
          ></div>

          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your restaurant's identity with stunning visiting cards that make lasting impressions and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center max-w-7xl mx-auto relative z-10">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div 
              data-aos="fade-right"
              data-aos-delay="200"
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Your visiting card is more than just contact information - it's a powerful marketing tool that represents your restaurant's personality and quality.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  icon: FaPalette, 
                  text: "Creative Layouts", 
                  desc: "Unique designs tailored to your brand",
                  delay: 300,
                  bg: "from-purple-500/10 to-pink-500/10"
                },
                { 
                  icon: FaMobile, 
                  text: "Multiple Formats", 
                  desc: "Various sizes for every need",
                  delay: 400,
                  bg: "from-blue-500/10 to-cyan-500/10"
                },
                { 
                  icon: FaQrcode, 
                  text: "Smart QR Codes", 
                  desc: "Connect digital with physical",
                  delay: 500,
                  bg: "from-green-500/10 to-emerald-500/10"
                },
                { 
                  icon: FaRocket, 
                  text: "Fast Delivery", 
                  desc: "Quick turnaround time",
                  delay: 600,
                  bg: "from-orange-500/10 to-red-500/10"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="flip-left"
                  data-aos-delay={item.delay}
                  className={`group bg-gradient-to-br ${item.bg} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white/50`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-[#060145] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="text-[#F9D91C] text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#060145] mb-2">{item.text}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Badge */}
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="bg-gradient-to-r from-[#060145] to-[#1a1a6e] text-white p-3 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F9D91C] opacity-10 rounded-full -translate-y-12 translate-x-12"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <FaShieldAlt className="text-[#F9D91C] text-3xl" />
                  <h3 className="text-2xl font-bold">Premium Quality Guarantee</h3>
                </div>
                <p className="text-[#E9F5FF] text-lg leading-relaxed">
                  Every card is crafted with precision using high-quality materials and cutting-edge design techniques to ensure your brand stands out.
                </p>
              </div>
            </div>
          </div>

          {/* Card Mockup */}
          <div
            data-aos="zoom-in-up"
            data-aos-delay="400"
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Floating background elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#F9D91C] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#060145] rounded-full opacity-10 blur-2xl"></div>
              
              {/* Main card container */}
              <div className="relative">
                {/* Card shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F9D91C] to-[#060145] rounded-4xl opacity-30 blur-2xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F9D91C] to-[#060145] rounded-4xl opacity-20 blur-xl transform -rotate-3 scale-105"></div>
                
                {/* Main card */}
                <div className="relative bg-white shadow-2xl rounded-3xl p-3 md:p-10 transform hover:rotate-1 transition-transform duration-500 border border-white/20 backdrop-blur-sm">
                  {/* Card header */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#060145] to-[#1a1a6e] rounded-2xl flex items-center justify-center shadow-lg">
                      <FaIdCard className="text-[#F9D91C] text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-[#060145] mb-2">
                        Elite Card
                      </h3>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div key={star} className="w-2 h-2 bg-[#F9D91C] rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Card content */}
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Premium embossed finish with gold foil accents. Features QR code integration and custom typography that reflects your restaurant's unique character.
                  </p>
                  
                  {/* Card footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-[#F9D91C] rounded-full"></div>
                      <div className="w-3 h-3 bg-[#060145] rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Starting at</div>
                      <div className="text-2xl font-bold text-[#060145]">$49.99</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitingDetails;