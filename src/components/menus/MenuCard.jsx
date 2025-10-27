import React, { useState } from "react";

const MenuCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ===== IMAGE CARD ===== */}
      <div
        className="group relative bg-gradient-to-br from-[#0a0a5c] to-[#060145] rounded-3xl shadow-xl border border-[#1a1a6b] overflow-hidden cursor-pointer transition-all duration-700 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#F9D91C]/20"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9D91C] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-700 ease-in-out"></div>

        {/* Image */}
        <div
          className="relative h-64 w-full overflow-hidden rounded-3xl"
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
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500"></div>
        </div>

        {/* View More Button */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#F9D91C] text-[#060145] font-semibold py-2 px-5 rounded-full hover:bg-white transition-all duration-500 text-sm shadow-md cursor-pointer"
          >
            View More
          </button>
        </div>
      </div>

      {/* ===== FULL IMAGE MODAL ===== */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-700"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full h-[90vh] mx-4 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-6 text-[#F9D91C] text-3xl font-bold hover:text-white transition-colors z-10"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* Scrollable Full Image */}
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#F9D91C]/50 scrollbar-track-transparent">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuCard;
