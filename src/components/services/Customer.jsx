import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Customer = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true
    });
  }, []);

  const reviews = [
    {
      id: 1,
      text: "Amazing design quality and fast delivery! My restaurant branding looks stunning and attracts more customers daily.",
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
    },
    {
      id: 2,
      text: "The team understood our vision perfectly. Our new menu design has increased sales by 30%! Highly recommended.",
      name: "Mike Chen", 
      role: "Cafe Manager",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBmYWNlfGVufDB8fDB8fHww&w=1000&q=80"
    },
    {
      id: 3,
      text: "Exceptional creativity and attention to detail. Professional service that delivered beyond our expectations!",
      name: "Emily Davis",
      role: "Bakery Owner",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    }
  ];

  return (
    <div>
      {/* 💬 Customer Reviews Section */}
      <section className="py-16 md:py-20 px-3 md:px-6 bg-gradient-to-b from-[#E9F5FF] to-white relative overflow-hidden">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F9D91C] opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#060145] opacity-3 rounded-full -translate-x-32 translate-y-32"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              data-aos="fade-down" 
              className="text-4xl md:text-5xl font-bold text-[#060145] mb-4"
            >
              What Our <span className="text-[#F9D91C]">Clients</span> Say
            </h2>
            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="w-24 h-1.5 bg-gradient-to-r from-[#F9D91C] to-[#060145] mx-auto rounded-full mb-4"
            ></div>
            <p 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                data-aos="flip-left"
                data-aos-delay={index * 200}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 border border-gray-100"
              >
                {/* Customer Image & Info */}
                <div 
                  data-aos="zoom-in" 
                  data-aos-delay={index * 200 + 300}
                  className="flex items-center mb-6"
                >
                  <div className="relative">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-[#F9D91C] shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-4">
                    <h4 
                      data-aos="fade-right" 
                      data-aos-delay={index * 200 + 400}
                      className="font-bold text-[#060145] text-lg"
                    >
                      {review.name}
                    </h4>
                    <p 
                      data-aos="fade-right" 
                      data-aos-delay={index * 200 + 500}
                      className="text-gray-600 text-sm"
                    >
                      {review.role}
                    </p>
                  </div>
                </div>
                
                {/* Rating Stars */}
                <div 
                  data-aos="fade-up" 
                  data-aos-delay={index * 200 + 400}
                  className="flex mb-4"
                >
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-[#F9D91C] text-xl mr-1">★</span>
                  ))}
                </div>
                
                {/* Quote Icon & Text */}
                <div className="relative">
                  <div 
                    data-aos="zoom-in" 
                    data-aos-delay={index * 200 + 500}
                    className="absolute -top-4 -left-2 text-6xl text-[#F9D91C] opacity-20"
                  >
                    "
                  </div>
                  <p 
                    data-aos="fade-up" 
                    data-aos-delay={index * 200 + 600}
                    className="text-gray-700 mb-2 leading-relaxed text-lg relative z-10"
                  >
                    {review.text}
                  </p>
                </div>

                {/* Verified Badge */}
                <div 
                  data-aos="fade-left" 
                  data-aos-delay={index * 200 + 700}
                  className="flex items-center mt-4 pt-4 border-t border-gray-100"
                >
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm text-gray-500">Verified Customer</span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="800"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#060145] mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#060145] mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#060145] mb-2">1000+</div>
              <div className="text-gray-600">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#060145] mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>

          {/* CTA Button */}
          <div 
            data-aos="zoom-in" 
            data-aos-delay="900"
            className="text-center mt-12"
          >
            <button className="bg-gradient-to-r from-[#060145] to-[#1a1a6b] text-white px-10 py-4 rounded-full font-bold text-lg hover:from-[#F9D91C] hover:to-[#ffdf33] hover:text-[#060145] transition-all duration-500 transform hover:scale-105 shadow-xl text-nowrap">
              Read More Success Stories
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customer;