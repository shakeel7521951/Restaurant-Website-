// Values.jsx
import React from "react";
import {
  FaLeaf,
  FaHandsHelping,
  FaSmile,
  FaUtensils,
  FaHeart,
  FaStar,
} from "react-icons/fa";

const values = [
  {
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
    desc: "Only the freshest local produce and organic ingredients make it to your plate.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Community Focused",
    desc: "We collaborate with local farmers and support small businesses to strengthen our roots.",
  },
  {
    icon: <FaSmile />,
    title: "Customer Happiness",
    desc: "Every meal, every moment, crafted to bring joy and satisfaction.",
  },
  {
    icon: <FaUtensils />,
    title: "Culinary Excellence",
    desc: "Every dish is prepared with precision, passion, and attention to detail.",
  },
  {
    icon: <FaHeart />,
    title: "Passion for Food",
    desc: "Our love for authentic cuisine drives everything from preparation to presentation.",
  },
  {
    icon: <FaStar />,
    title: "Quality & Consistency",
    desc: "Delivering exceptional taste and premium service every single time.",
  },
];

const Values = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-[#060145]/5 via-white to-[#060145]/10 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FDC700]/20 blur-3xl rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#060145]/20 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#060145] mb-4">
          Our Core Values
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          The golden principles that shape every flavor, every dish, and every experience.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {values.map((value, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 150}
            className="relative group bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-10 text-center border border-[#060145]/10
                       hover:shadow-3xl hover:-translate-y-3 hover:bg-[#060145]/5 transition-all duration-700 overflow-hidden"
          >
            {/* Gradient ring effect behind icon */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#FDC700]/40 to-[#060145]/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

            {/* Icon */}
            <div
              className="text-4xl mb-6 text-[#FDC700] relative z-10 group-hover:scale-110 group-hover:rotate-3 
                         transition-transform duration-500 ease-out"
            >
              {value.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#060145] mb-3 relative z-10 group-hover:text-[#FDC700] transition-colors duration-500">
              {value.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 relative z-10 text-sm leading-relaxed">
              {value.desc}
            </p>

            {/* Animated border gradient on hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FDC700]/50 transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
