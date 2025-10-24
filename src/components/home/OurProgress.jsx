import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurProgress = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const progressCards = [
    {
      title: "Building Trust Through Quality",
      image:
        "https://www.shutterstock.com/image-photo/trusted-partner-trustworthy-collaboration-company-260nw-2449547599.jpg",
      description:
        "From the very first day, our commitment has been to serve customers with excellence. Every dish, every interaction, and every service reflects our dedication to quality and trust. Today, 98% of our clients report complete satisfaction — a testament to our focus on perfection.",
      delay: 100,
    },
    {
      title: "Expanding Across Borders",
      image:
        "https://framerusercontent.com/images/SUP8pgVcSkFGZjxvRhaUA2bkV1Q.png?width=2048&height=1152",
      description:
        "What began as a small idea soon turned into a global dream. Our brand now operates in 12+ countries, connecting people through authentic flavors, digital innovation, and cultural experience. Every new location tells a story of growth, adaptation, and global family.",
      delay: 200,
    },
    {
      title: "Empowering Future Growth",
      image:
        "https://img.freepik.com/premium-vector/sustainable-future-cities-earth_1147869-151.jpg",
      description:
        "Our journey doesn’t stop here — it evolves. With 150% yearly growth, we continue to invest in technology, sustainability, and people. Our vision is to inspire confidence, create impact, and redefine excellence for generations to come.",
      delay: 300,
    },
  ];

  return (
    <section className="w-full min-h-[600px] bg-gradient-to-b from-white via-gray-100 to-white flex flex-col justify-center items-center text-[#060145] relative overflow-hidden py-8">
      <div className="relative z-10 text-center px-6 md:px-16">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          data-aos="fade-down"
        >
          Our <span className="text-[#060145] underline decoration-yellow-400">Progress Story</span>
        </h2>

        {/* Subtitle */}
        <p
          className="max-w-3xl mx-auto text-gray-600 mb-12"
          data-aos="fade-up"
        >
          Every milestone we’ve achieved reflects our customers’ trust and our
          team’s relentless passion. Here’s a glimpse of our incredible journey.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {progressCards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={card.delay}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#060145]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[#060145] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Decorative bottom bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-[#060145]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProgress;
