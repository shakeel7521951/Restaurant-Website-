import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CoffeeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#060145] text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Coffee Image */}
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img
            src="https://img.freepik.com/free-photo/medium-shot-smiley-man-holding-coffee-cup_23-2149271095.jpg?w=360"
            alt="Man holding coffee"
            className="rounded-3xl shadow-2xl w-full h-[420px] object-cover hover:scale-105 transition-all duration-700"
          />
        </div>

        {/* Coffee Text Content */}
        <div
          className="w-full lg:w-1/2 text-center lg:text-left"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h4 className="text-[#FFDF20] text-xl uppercase tracking-widest mb-3">
            Coffee Moments
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Sip, Savor & Smile — The Art of Perfect Coffee
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            Start your day with the aroma of freshly brewed coffee crafted with
            love and precision. From bold espresso shots to creamy cappuccinos,
            every cup we serve is made to elevate your mood and refresh your
            spirit. Whether you need a morning boost or an evening escape — our
            coffee is the comfort you deserve.
          </p>
          <button className="mt-8 cursor-pointer bg-[#FFDF20] text-[#060145] px-6 py-3 rounded-lg font-semibold hover:bg-[#ffe84d] transition duration-300 shadow-md">
            Explore Our Coffee
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoffeeSection;
