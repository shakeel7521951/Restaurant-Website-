// CTA.jsx
import React from "react";
import bgImage from '../../assets/img.jpg'; 

const CTA = () => {
  return (
    <section
      className="relative py-24 px-6 bg-fixed md:px-20 text-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(6,1,69,0.4), rgba(6,1,69,0.3)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-black/10 blur-3xl rounded-full animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4" data-aos="zoom-in">
          Ready to Visit Us?
        </h2>
        <p className="text-lg md:text-xl mb-8" data-aos="fade-up">
          Book your table now and enjoy a delightful dining experience!
        </p>
        <a
          href="/reservation"
          data-aos="fade-up"
          className="inline-block bg-yellow-400 text-[#060145] px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
        >
          Reserve a Table
        </a>
      </div>
    </section>
  );
};

export default CTA;
