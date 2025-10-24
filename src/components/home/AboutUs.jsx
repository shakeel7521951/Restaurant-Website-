import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import abouimage from "../../Images/AboutPageImage.jpeg";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full bg-[#060145] py-16 px-6 md:px-16 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left Image */}
        <div
          className="relative w-full lg:w-1/2 flex justify-center"
          data-aos="fade-right"
        >
          <img
            src={abouimage}
            alt="Team Working"
            className="rounded-2xl shadow-2xl w-full max-w-[620px] h-[480px] object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Vertical Line (Only visible on large screens) */}
        <div className="hidden lg:block w-[3px] h-[420px] bg-yellow-400 rounded-full shadow-xl mx-4"></div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-gray-200" data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
            About Us
          </h2>

          <p className="text-gray-200 leading-relaxed mb-6">
            Our brand stands at the crossroads of{" "}
            <span className="font-semibold text-white">
              creativity, technology, and taste
            </span>
            . We provide premium restaurant solutions alongside modern digital
            and design services. From elegant dining concepts to tech-driven IT
            systems — our goal is to help businesses and restaurants grow with
            confidence and innovation.
          </p>

          {/* Highlights / Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-100 mt-8">
            <div className="bg-[#0b0b6b] rounded-2xl p-5 border border-[#1d1d9a] hover:bg-[#10106e] transition-all duration-300">
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">
                Restaurant Excellence
              </h4>
              <p className="text-sm text-gray-300">
                Delivering exceptional dining experiences through taste and design.
              </p>
            </div>

            <div className="bg-[#0b0b6b] rounded-2xl p-5 border border-[#1d1d9a] hover:bg-[#10106e] transition-all duration-300">
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">
                Flyers & Posters
              </h4>
              <p className="text-sm text-gray-300">
                Professional, creative designs that capture attention and grow brands.
              </p>
            </div>

            <div className="bg-[#0b0b6b] rounded-2xl p-5 border border-[#1d1d9a] hover:bg-[#10106e] transition-all duration-300">
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">
                IT & Digital Services
              </h4>
              <p className="text-sm text-gray-300">
                Modern website, software, and digital solutions for smarter businesses.
              </p>
            </div>

            <div className="bg-[#0b0b6b] rounded-2xl p-5 border border-[#1d1d9a] hover:bg-[#10106e] transition-all duration-300">
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">
                Progress & Trust
              </h4>
              <p className="text-sm text-gray-300">
                Over 150% yearly growth and trusted by clients across 12+ countries.
              </p>
            </div>
          </div>

          {/* Progress Line */}
          <div
            className="mt-10 bg-yellow-400 text-[#060145] py-4 px-6 rounded-xl text-center font-semibold shadow-lg"
            data-aos="fade-up"
          >
            “We’re not just building services — we’re crafting experiences that move brands forward.”
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
