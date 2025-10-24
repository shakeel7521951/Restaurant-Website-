import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import allbrands from "../../Images/Allbrands.jpeg";

const services = [
  { id: 1, title: "Flyer & Printing Services" },
  { id: 2, title: "IT Solutions" },
  { id: 3, title: "Restaurant Experience" },
  { id: 4, title: "Visiting Cards" },
  { id: 5, title: "Poster Design" },
];

const OurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-2 mb-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative">
        
        {/* ✨ Vertical Divider Line */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#FFDF20] opacity-60"
          data-aos="fade-down"
        ></div>

        {/* Left Section */}
        <div
          className="w-full md:w-1/2 space-y-8"
          data-aos="fade-right"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#FFDF20] relative inline-block">
            Our Premium Services
            {/* Underline */}
            <span className="block w-45 h-2 bg-[#0B0851] mt-2 rounded"></span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            We offer a diverse range of creative, technical, and branding services 
            designed to help your business stand out. From digital innovation to 
            design excellence, we turn your ideas into meaningful results.
          </p>

          {/* Service List */}
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li
                key={service.id}
                className="flex items-center text-[#FFDF20] justify-between bg-[#0B0851] hover:bg-[#FFDF20] hover:text-[#060145] cursor-pointer py-4 px-6 rounded-xl shadow-lg transition-all duration-500 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span className="text-lg font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </span>
                <span className="text-[#FFDF20] group-hover:text-[#060145] font-bold text-xl">
                  →
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section (Image with Tooltip) */}
        <div
          className="w-full md:w-1/2 relative"
          data-aos="fade-left"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src={allbrands}
              alt="Our Services"
              className="w-full h-[450px] object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#060145]/30 rounded-3xl"></div>

            {/* Tooltip */}
            <div className="absolute top-6 left-6 bg-[#FFDF20] text-[#060145] font-semibold px-5 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-2 transition-all duration-500">
              Our Premium Services
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
