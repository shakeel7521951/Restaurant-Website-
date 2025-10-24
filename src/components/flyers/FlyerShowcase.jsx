import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 800, once: true });

const FlyerShowcase = () => {
  const [active, setActive] = useState("all");
  const [selectedFlyer, setSelectedFlyer] = useState(null);

  const categories = ["all", "business", "events", "sales", "restaurant", "education", "wedding"];

  const flyers = [
    {
      id: 1,
      category: "business",
      title: "Corporate Flyer",
      img: "https://png.pngtree.com/png-clipart/20221010/original/pngtree-corporate-modern-business-flyer-template-png-image_8670568.png",
      description:
        "A professional corporate flyer designed to showcase your business in a modern and clean way. Perfect for presentations, marketing campaigns, and corporate events.",
    },
    {
      id: 2,
      category: "events",
      title: "Event Poster",
      img: "https://img.freepik.com/free-vector/modern-music-event-poster-with-abstract-brush-stroke_1361-1917.jpg?semt=ais_hybrid&w=740&q=80",
      description:
        "An eye-catching event poster designed to attract attendees and promote concerts, parties, or social events. Bold colors and modern graphics included.",
    },
    {
      id: 3,
      category: "sales",
      title: "Promo Flyer",
      img: "https://i.pinimg.com/736x/dc/bb/6c/dcbb6c51d75742913a1390a85809f140.jpg",
      description:
        "A promotional flyer ideal for advertising sales, discounts, and special offers. Bright, attractive design to boost customer engagement.",
    },
    {
      id: 4,
      category: "restaurant",
      title: "Restaurant Menu Flyer",
      img: "https://img.pikbest.com/origin/10/07/15/77QpIkbEsTY6R.jpg!w700wp",
      description:
        "Stylish restaurant menu flyer perfect for showcasing dishes and special offers. Clean and appetizing layout for food businesses.",
    },
    {
      id: 5,
      category: "education",
      title: "School Event Flyer",
      img: "https://img.freepik.com/free-vector/school-fair-poster-template_23-2148868911.jpg?size=626&ext=jpg",
      description:
        "Creative flyer for school events, fairs, or academic programs. Bright and engaging design to attract students and parents.",
    },
    {
      id: 6,
      category: "wedding",
      title: "Wedding Invitation Flyer",
      img: "https://img.freepik.com/free-vector/elegant-floral-wedding-invitation-template_23-2148819140.jpg?size=626&ext=jpg",
      description:
        "Elegant wedding invitation flyer with floral accents. Perfect for couples seeking a stylish and modern wedding announcement.",
    },
  ];

  const filtered = active === "all" ? flyers : flyers.filter((f) => f.category === active);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <section className="pb-24 bg-gradient-to-b from-white to-gray-50">
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold text-[#060145]"
        >
          Our <span className="text-[#F9D91C]">Flyers</span>
        </motion.h2>
        <motion.p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg md:text-xl"
        >
          Explore our top-performing flyer designs crafted for results. Professional, creative, and visually appealing.
        </motion.p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="zoom-in" data-aos-delay="400">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-500 ${
              active === c
                ? "bg-[#F9D91C] text-[#060145] shadow-xl"
                : "bg-gray-200 text-gray-700 hover:bg-[#F9D91C]/30"
            }`}
          >
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>

      {/* Flyer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <AnimatePresence>
          {filtered.map((flyer, index) => (
            <motion.div
              key={flyer.id}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
            >
              <img
                src={flyer.img}
                alt={flyer.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button
                  onClick={() => setSelectedFlyer(flyer)}
                  className="bg-[#F9D91C] text-[#060145] px-6 py-3 rounded-full font-bold hover:scale-105 transform transition-transform duration-300"
                >
                  View Flyers
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedFlyer && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFlyer(null)}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-y-auto max-h-[90vh] w-full max-w-xl relative flex flex-col"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              <button
                onClick={() => setSelectedFlyer(null)}
                className="absolute top-4 right-4 text-gray-700 text-2xl font-bold hover:text-red-500 transition-colors"
              >
                &times;
              </button>
              <img
                src={selectedFlyer.img}
                alt={selectedFlyer.title}
                className="w-full object-cover max-h-96"
              />
              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#060145]">{selectedFlyer.title}</h3>
                  <p className="mt-2 text-gray-600">
                    Category: {selectedFlyer.category.charAt(0).toUpperCase() + selectedFlyer.category.slice(1)}
                  </p>
                  <p className="mt-4 text-gray-700">{selectedFlyer.description}</p>
                </div>
                <button
                  className="mt-6 bg-[#060145] text-[#F9D91C] px-6 py-3 rounded-full font-bold hover:bg-[#0d0c6d] transition-colors"
                  onClick={() => alert("Download or action logic here")}
                >
                  Download Flyer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FlyerShowcase;
