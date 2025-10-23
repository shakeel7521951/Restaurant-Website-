import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star, Utensils, Clock, Heart } from "lucide-react";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const reasons = [
    {
      id: 1,
      icon: <Utensils size={50} className="text-[#FFDF20]" />,
      title: "Exquisite Taste",
      description:
        "Every dish is crafted by our top chefs using the finest ingredients — ensuring royal taste in every bite.",
    },
    {
      id: 2,
      icon: <Star size={50} className="text-[#FFDF20]" />,
      title: "Premium Quality",
      description:
        "We maintain the highest standards of hygiene, freshness, and quality to serve you nothing but the best.",
    },
    {
      id: 3,
      icon: <Clock size={50} className="text-[#FFDF20]" />,
      title: "Quick Service",
      description:
        "Our staff ensures timely service so that your dining experience remains smooth, warm, and memorable.",
    },
    {
      id: 4,
      icon: <Heart size={50} className="text-[#FFDF20]" />,
      title: "Customer Love",
      description:
        "We believe in relationships over revenue — every guest is treated like royalty from start to finish.",
    },
  ];

  return (
    <section className=" text-white py-12 px-6 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h4 className="text-[#FFDF20] uppercase md:text-5xl font-extrabold tracking-widest mb-3">
          Why Choose Us
        </h4>
        <h2 className="text-4xl text-[#060145] md:text-4xl font-bold mb-4 leading-tight">
          Experience Dining — The Royal Way
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          From world-class flavors to exceptional hospitality, every element of
          Royal Taste Restaurant is designed to make your dining truly majestic.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {reasons.map((reason, index) => (
          <div
            key={reason.id}
            className="bg-white/10 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/20  group backdrop-blur-lg shadow-lg"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="flex justify-center mb-5 group-hover:scale-105 transition-all duration-500">{reason.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-[#060145] group-hover:scale-105 transition-all duration-500">
              {reason.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
