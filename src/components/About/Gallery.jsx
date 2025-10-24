// Gallery.jsx
import React from "react";

const images = [
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
  "https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?semt=ais_hybrid&w=740&q=80",
  "https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939435_1280.jpg",
  "https://img.freepik.com/premium-photo/delicious-details-closeup-food-table-with-purpose_950053-1523.jpg",
  "https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg",
  "https://media.istockphoto.com/id/153775715/photo/indian-food-selection.jpg?s=612x612&w=0&k=20&c=yuhy0bDK_f9Aw8S0TU26rG6negOg1ParcqIZM5BSWJw=",
  "https://royalkitchenpatong.com/wp-content/uploads/2022/02/istockphoto-673858790-612x612-1.jpg",
];

const Gallery = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Decorative glow background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#FDC700]/20 blur-3xl rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#060145]/20 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#060145] mb-4">
          Our Gallery
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A glimpse of our passion for food, ambiance, and unforgettable dining
          experiences.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto relative z-10">
        {images.map((img, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}
            <img
              src={img}
              alt="Restaurant Dish"
              className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#060145]/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center text-white">
              <div className="w-12 h-1 bg-[#FDC700] mb-4 rounded-full"></div>
              <p className="text-lg font-semibold text-[#FDC700]">
                Gourmet Bistro
              </p>
              <p className="text-sm text-gray-200">
                Taste. Ambiance. Experience.
              </p>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FDC700]/50 transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
