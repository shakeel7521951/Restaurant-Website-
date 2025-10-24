// AboutUs.jsx
import React from "react";
import image from "../../assets/well.jpg";
const AboutUs = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative floating accent */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/3 animate-pulse"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
         <div className="relative group">
  {/* Background gradient with blur */}
  <div className="absolute -inset-2 bg-gradient-to-r from-[#F9D91C] to-[#060145] rounded-2xl blur opacity-30 
                  group-hover:opacity-70 transition duration-500 delay-150"></div>

  {/* Image with hover scale and rotate */}
  <img
    src={image}
    alt="Our Story"
    className="relative rounded-xl shadow-2xl group-hover:scale-105 group-hover:rotate-1 
               transition-all duration-500 delay-150 transform"
    data-aos="fade-right"
    data-aos-duration="800"
  />
</div>

        </div>

        {/* Text content */}
        <div data-aos="fade-left" className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#060145] mb-6">
            Our Story
          </h2>
          <p className="text-gray-700 mb-4 text-lg md:text-xl leading-relaxed">
            Founded with{" "}
            <span className="text-yellow-400 font-semibold">passion</span> and
            love for authentic cuisine,{" "}
            <span className="font-semibold">Gourmet Bistro</span> brings
            together tradition and innovation. Every dish tells a story, from
            fresh local ingredients to culinary creativity.
          </p>
          <p className="text-gray-700 mb-6 text-lg md:text-xl leading-relaxed">
            Our mission is to deliver not just a meal but a{" "}
            <span className="text-yellow-400 font-semibold">
              full dining experience
            </span>
            —memorable, flavorful, and shared with family and friends.
          </p>
          <a
            href="#menu"
            className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition-transform duration-300"
          >
            View Our Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
