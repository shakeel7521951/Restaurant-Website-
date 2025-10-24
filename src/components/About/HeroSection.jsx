// HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay dark gradient */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Decorative floating circles */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-yellow-400/20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-yellow-400/15 animate-pulse"></div>

      {/* Hero content */}
      <div data-aos="fade-down" className="text-center text-white px-6 relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-yellow-400 drop-shadow-xl animate-[fadeIn_2s_ease-in-out]">
          Welcome to Gourmet Bistro
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-6 drop-shadow-md animate-[fadeIn_3s_ease-in-out]">
          Where flavors meet excellence. Dive into a culinary journey that tantalizes your taste buds
          and delights your senses.
        </p>
        <a
          href="#about"
          className="inline-block bg-yellow-400 text-black font-semibold px-5 py-3 rounded-full shadow-xl hover:bg-yellow-300 hover:scale-105 transition-transform duration-300"
        >
          Learn More About Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
