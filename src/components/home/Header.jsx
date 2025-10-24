import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const slides = [
    {
      type: "Restaurant",
      text: "The Restaurant, For the Royal Taste",
      subText:
        "Experience the art of fine dining — where passion meets perfection. Fresh ingredients, bold flavors, and unforgettable memories await.",
      image:
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta1: { text: "View Menu", link: "/menu" },
      cta2: { text: "Book a Table", link: "/reservation" },
    },
    {
      type: "IT Services",
      text: "Innovative IT Solutions for Your Business",
      subText:
        "Custom software, web development, and IT consulting to help your business thrive in the digital era.",
      image:
        "https://blog.tiinfotech.com/wp-content/uploads/2023/09/62be2287285099f561a48ee2_IT-services-.jpg",
      cta1: { text: "Explore Services", link: "/services" },
      cta2: { text: "Contact Us", link: "/contact" },
    },
    {
      type: "Flyers",
      text: "Creative Flyers to Promote Your Brand",
      subText:
        "Professional designs for flyers, posters, and digital graphics that grab attention and grow your business.",
      image:
        "https://www.easysigns.com.au/uploads/content/products/gallery/FLYER_GALLERY_C.jpg",
      cta1: { text: "See Designs", link: "/flyers" },
      cta2: { text: "Get a Quote", link: "/contact" },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Initialize AOS only once
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ Handle automatic slide changes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="bg-[#060145] min-h-screen text-white relative overflow-x-hidden">
      <section className="relative flex items-center justify-center h-[100vh] overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060145]/70 via-[#060145]/60 to-[#060145]"></div>

        {/* Text Content */}
        <div
          className="relative z-10 text-center px-3 md:px-6 max-w-full md:max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
            {(() => {
              const highlightWord =
                currentSlide.type === "Restaurant"
                  ? "Royal Taste"
                  : currentSlide.type === "IT Services"
                  ? "IT Solutions"
                  : "Flyers";

              if (currentSlide.text.includes(highlightWord)) {
                const [before, after] = currentSlide.text.split(highlightWord);
                return (
                  <>
                    <span className="text-white">{before}</span>{" "}
                    <span className="text-[#F3E607]">{highlightWord}</span>
                    <span className="text-white">{after}</span>
                  </>
                );
              } else {
                return <span className="text-white">{currentSlide.text}</span>;
              }
            })()}
          </h1>

          {/* Sub Text */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            {currentSlide.subText}
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-4 mt-4" data-aos="zoom-in">
            <a
              href={currentSlide.cta1.link}
              className="bg-[#F3E607] text-[#060145] font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg"
            >
              {currentSlide.cta1.text}
            </a>
            <a
              href={currentSlide.cta2.link}
              className="border-2 border-[#F3E607] text-[#F3E607] font-semibold px-6 py-3 rounded-xl hover:bg-[#F3E607] hover:text-[#060145] transition transform hover:scale-105"
            >
              {currentSlide.cta2.text}
            </a>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#060145] via-[#060145]/70 to-transparent"></div>
      </section>
    </div>
  );
};

export default Header;
