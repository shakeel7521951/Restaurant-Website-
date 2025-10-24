import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div
      className="group relative bg-gradient-to-br from-[#0a0a5c] to-[#060145] rounded-3xl shadow-xl border border-[#1a1a6b] overflow-hidden cursor-pointer transition-all duration-700 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#F9D91C]/20"
      data-aos="zoom-in"
      data-aos-duration="800"
    >
      {/* Hover Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9D91C] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-700 ease-in-out"></div>

      {/* Image */}
      <div
        className="relative h-64 w-full overflow-hidden rounded-t-3xl"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Content */}
      <div
        className="p-6 text-center relative z-10"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <h3
          className="text-2xl font-bold text-[#F9D91C] group-hover:text-white transition-colors duration-700 ease-in-out mb-2 relative"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          {item.name}
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#F9D91C] group-hover:w-full group-hover:left-0 transition-all duration-700 ease-in-out"></span>
        </h3>
        <p
          className="text-gray-200 mb-4 leading-relaxed opacity-90 group-hover:opacity-100 transition-all duration-700 ease-in-out"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          {item.description}
        </p>
        <p
          className="text-[#F9D91C] font-extrabold text-xl"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
        >{`$${item.price}`}</p>
      </div>

      {/* Decorative Bottom Bar */}
      <div
        className="absolute bottom-0 left-0 w-full h-1 bg-[#F9D91C] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-delay="600"
      ></div>
    </div>
  );
};

export default MenuCard;
