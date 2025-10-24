import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star, Utensils, Clock, Heart, Coffee, Activity, Award, Layout, Smartphone } from "lucide-react";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      id: 1,
      icon: <Utensils size={50} />,
      title: "Exquisite Taste",
      description:
        "Every dish is crafted by our top chefs using the finest ingredients — ensuring royal taste in every bite.",
    },
    {
      id: 2,
      icon: <Star size={50} />,
      title: "Premium Quality",
      description:
        "We maintain the highest standards of hygiene, freshness, and quality to serve you nothing but the best.",
    },
    {
      id: 3,
      icon: <Clock size={50} />,
      title: "Quick Service",
      description:
        "Our staff ensures timely service so that your dining experience remains smooth, warm, and memorable.",
    },
    {
      id: 4,
      icon: <Heart size={50} />,
      title: "Customer Love",
      description:
        "We believe in relationships over revenue — every guest is treated like royalty from start to finish.",
    },
  ];


  return (
    <section className="py-12 px-6 md:px-20  text-white">
      {/* Section Header */}
      <div className="text-center mb-8" data-aos="fade-down">
        <h4 className="text-[#1B0F80] uppercase text-2xl md:text-5xl font-extrabold tracking-widest mb-3">
          What Makes Us Stand Out
        </h4>
        <h2 className="text-3xl text-[#FFDF20] md:text-4xl font-bold mb-4 leading-tight">
          Experience Dining — The Royal Way
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
          From world-class flavors to exceptional hospitality, every element of Royal Taste Restaurant is designed to make your dining truly majestic.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="bg-[#0B0851] rounded-2xl p-8 text-center hover:bg-[#1B0F80] transition duration-500 shadow-lg"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="flex justify-center mb-5 text-[#FFDF20]">{feature.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-300 text-[15px] leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>  
    </section>
  );
};

export default WhyChooseUs;
