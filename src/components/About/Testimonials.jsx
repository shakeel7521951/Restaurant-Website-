// Testimonials.jsx
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Emma Williams",
    review:
      "Amazing food and a wonderful atmosphere! Every dish was crafted to perfection — truly a memorable dining experience.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Liam Kelly",
    review:
      "The best dining experience I've had in years. The flavors were incredible, and the service made us feel right at home.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Lopez",
    review:
      "Highly recommend the chef's specials! You can taste the creativity and love poured into every bite.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Miller",
    review:
      "An unforgettable evening! Elegant presentation, cozy ambiance, and the perfect wine pairings.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Isabella Johnson",
    review:
      "Every visit feels special! The staff is warm, the service is quick, and the dishes are a work of art.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Ethan Brown",
    review:
      "From appetizers to dessert — everything was flawless. The chef’s attention to detail is unmatched.",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];


const Testimonials = () => {
  return (
    <section className="relative py-24 px-6 md:px-20 bg-gradient-to-b from-[#060145] via-[#0a0a60] to-[#060145] text-white overflow-hidden">
      {/* Decorative Glow Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#FDC700]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FDC700]/10 rounded-full blur-3xl"></div>

      {/* Section Heading */}
      <h2
        className="text-4xl font-extrabold text-center text-[#FDC700] mb-16 tracking-wide"
        data-aos="fade-up"
      >
        What Our Customers Say
      </h2>

      {/* Testimonials Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center relative z-10">
        {reviews.map((review, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className="relative bg-gradient-to-br from-[#0b0b6d] to-[#0a0a45] border border-[#FDC700]/20 rounded-2xl shadow-xl p-8 text-center hover:shadow-[#FDC700]/30 hover:-translate-y-2 transition-all duration-500 ease-out"
          >
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-[#FDC700]/80 mb-4 shadow-md">
              <img
                src={review.img}
                alt={review.name}
                className="w-full h-full object-cover"
              />
            </div>

            <FaQuoteLeft className="text-[#FDC700] text-3xl mx-auto mb-4 opacity-90" />
            <p className="text-gray-200 italic leading-relaxed mb-6 text-[15px]">
              “{review.review}”
            </p>
            <h3 className="text-[#FDC700] font-semibold text-lg">
              {review.name}
            </h3>

            {/* Gold Glow Border Animation */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#FDC700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
