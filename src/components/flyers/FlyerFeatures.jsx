import React from "react";
import { motion } from "framer-motion";

const FlyerFeatures = () => {
  const features = [
    { icon: "🎨", title: "Custom Design", desc: "Tailored designs for your brand.", delay: 0 },
    { icon: "⚡", title: "Fast Delivery", desc: "Delivered within 48 hours.", delay: 0.1 },
    { icon: "🔄", title: "Unlimited Revisions", desc: "Until you’re completely satisfied.", delay: 0.2 },
    { icon: "📱", title: "Print & Digital Ready", desc: "Perfect for any format.", delay: 0.3 },
    { icon: "💼", title: "Professional Quality", desc: "Business-grade output.", delay: 0.4 },
    { icon: "💰", title: "Affordable Pricing", desc: "High quality, low cost.", delay: 0.5 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-6 bg-gradient-to-br from-white to-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-[#060145] mb-12"
      >
        Why Choose Our <span className="text-[#F9D91C]">Flyer Services</span>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6"
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            variants={item}
            className="group bg-gradient-to-br from-[#0a0a5c] to-[#060145] text-white p-8 rounded-2xl border border-[#1a1a6b] 
                       hover:border-[#F9D91C] shadow-xl hover:-translate-y-3 hover:scale-105 transition-all duration-700"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-700">
              {f.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#F9D91C] group-hover:text-white transition-colors duration-700">
              {f.title}
            </h3>
            <p className="opacity-80 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FlyerFeatures;
