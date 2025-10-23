import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const slides = [
    {
      text: "Welcome to Royal Taste Restaurant",
      image:
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      text: "Where Every Bite Feels Like Royalty",
      image:
        "https://media.istockphoto.com/id/649668978/photo/pub-food-and-drinks.jpg?s=612x612&w=0&k=20&c=kdEaFfAAFCwj_-XkxoqYBohpdePqChQLZ0kPU2oGxuI=",
    },
    {
      text: "Taste the Luxury You Deserve",
      image:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      text: "Fine Dining. Perfected Every Day.",
      image:
        "https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      setFade(false); // fade out current image & text
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setFade(true); // fade in next image & text
      }, 1000); // wait for fade-out to complete
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="bg-[#060145] min-h-screen text-white overflow-hidden relative">
      {/* Background Section */}
      <section className="relative flex items-center justify-center h-[100vh] overflow-hidden">
        {/* Fading Background Images */}
        <div className="absolute inset-0">
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

        {/* Content Section */}
        <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
          <h1
            className={`text-4xl md:text-6xl font-extrabold leading-tight mb-6 transition-opacity duration-1000 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentSlide.text.includes("Royal Taste Restaurant") ? (
              <>
                Welcome to{" "}
                <span className="text-[#F3E607]">Royal Taste Restaurant</span>
              </>
            ) : currentSlide.text.includes("Royalty") ? (
              <>
                Where Every Bite Feels Like{" "}
                <span className="text-[#F3E607]">Royalty</span>
              </>
            ) : (
              <span className="text-[#F3E607]">{currentSlide.text}</span>
            )}
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-200 mb-8 transition-opacity duration-1000 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            Experience the art of fine dining — where passion meets perfection.  
            Fresh ingredients, bold flavors, and unforgettable memories await.
          </p>

          {/* Buttons — Fixed (Don't Fade) */}
          <div className="flex justify-center space-x-4 mt-4" data-aos="zoom-in">
            <a
              href="/menu"
              className="bg-[#F3E607] text-[#060145] font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg"
            >
              View Menu
            </a>
            <a
              href="/reservation"
              className="border-2 border-[#F3E607] text-[#F3E607] font-semibold px-6 py-3 rounded-xl hover:bg-[#F3E607] hover:text-[#060145] transition transform hover:scale-105"
            >
              Book a Table
            </a>
          </div>
        </div>

        {/* Bottom Gradient Effect */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#060145] via-[#060145]/70 to-transparent"></div>
      </section>
    </div>
  );
};

export default Header;
