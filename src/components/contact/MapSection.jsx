import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const MapSection = () => {
  const mapInfo = [
    { title: "Interactive Map", description: "Location: 123 Innovation Drive", aos: "zoom-in" },
  ];

  return (
    <section className="py-16 px-5 md:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Our <span className="text-[#F9D91C]">Office</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Visit our headquarters or schedule a meeting with our team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {mapInfo.map((map, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden h-96 relative" data-aos={map.aos}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#060145] to-[#1a1a6b] opacity-90 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F9D91C] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <FaMapMarkerAlt className="text-2xl text-[#060145]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{map.title}</h3>
                  <p className="text-gray-300">{map.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Optional: Replace with actual map iframe */}
          <div className="hidden lg:block h-96 bg-gray-700 rounded-2xl" data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0196267938827!2d-122.41941568468154!3d37.77492977975947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b0e0e50ad%3A0x4d4e2c3c0c9ef1ff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1698132786294!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
