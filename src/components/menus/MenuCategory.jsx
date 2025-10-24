import React from "react";

const MenuCategory = ({ categories, active, setActive }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 my-12">
      {categories.map((cat, index) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          tabIndex={0}
          aria-pressed={active === cat}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-500 ${
            active === cat
              ? "bg-[#F9D91C] text-[#060145] shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-[#F9D91C]/30"
          }`}
          data-aos="flip-up"
          data-aos-delay={index * 100}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default MenuCategory;
