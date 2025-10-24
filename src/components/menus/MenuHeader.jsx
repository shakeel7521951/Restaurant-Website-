import React from "react";

const MenuHeader = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white pt-20 pb-6 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1770&q=80')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F9D91C] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#F9D91C] opacity-10 rounded-full blur-4xl"></div>
      </div>

      {/* Animated food icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-3xl opacity-30 animate-bounce" style={{ animationDelay: "0.2s" }}>
          🍕
        </div>
        <div className="absolute top-20 right-20 text-2xl opacity-30 animate-bounce" style={{ animationDelay: "0.7s" }}>
          🍔
        </div>
        <div className="absolute bottom-16 left-20 text-xl opacity-30 animate-bounce" style={{ animationDelay: "1.2s" }}>
          🥗
        </div>
        <div className="absolute bottom-24 right-16 text-4xl opacity-25 animate-bounce" style={{ animationDelay: "0.5s" }}>
          🍰
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1
          className="text-4xl md:text-6xl lg:text-8xl font-semibold mb-6 drop-shadow-lg"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Our <span className="text-[#F9D91C]">Menu</span>
        </h1>

        <p
          className="mt-6 text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          Indulge in <span className="text-[#F9D91C] font-semibold">mouth-watering dishes</span> made with 
          <span className="text-[#F9D91C] font-semibold"> passion</span> and the 
          <span className="text-[#F9D91C] font-semibold"> finest ingredients</span>. Every bite is an experience!
        </p>

        {/* CTA Button */}
        <div
          className="mt-10"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <button className="bg-[#F9D91C] text-[#060145] px-5 py-2 rounded-full font-bold text-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-xl">
            Order Now
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce" data-aos="fade-in" data-aos-delay="600">
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHeader;
