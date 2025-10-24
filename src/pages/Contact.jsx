import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import MapSection from "../components/contact/MapSection";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
    
    // Refresh AOS after page load to ensure proper animations
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return (
    <main className="w-full overflow-x-hidden text-gray-900 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <ContactHeader />

      {/* Contact Form & Info Section */}
      <section className="py-24 px-5 md:px-8 bg-transparent relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#060145] to-[#F9D91C]">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help and answer any questions you might have. 
              We look forward to hearing from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-2" data-aos="fade-right" data-aos-delay="100">
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#060145] to-[#F9D91C]">
                  Send Us a Message
                </h3>
                <p className="mb-10 text-gray-600 text-lg leading-relaxed">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1" data-aos="fade-left" data-aos-delay="200">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-[#060145] to-[#1a1466] rounded-3xl p-8 text-white shadow-2xl">
                  <h3 className="text-3xl font-bold mb-8 text-white">Contact Information</h3>
                  <ContactInfo />
                  
                  {/* Additional Info */}
                  <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <h4 className="font-bold text-lg mb-4 text-yellow-300">Business Hours</h4>
                    <div className="space-y-2 text-white/90">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-semibold">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-semibold">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-5 md:px-8 bg-white" data-aos="fade-up" data-aos-delay="300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#060145] to-[#F9D91C]">
              Find Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our locations across Pakistan. We're always happy to welcome you.
            </p>
          </div>
          <MapSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5 md:px-8 bg-gradient-to-r from-[#060145] to-[#1a1466]">
        <div className="max-w-4xl mx-auto text-center text-white" data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today and let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#F9D91C] to-[#ffde29] text-[#060145] font-bold py-2 px-5 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Schedule a Call
            </button>
            <button className="border-2 border-white text-white font-bold py-2 px-5 rounded-2xl hover:bg-white hover:text-[#060145] transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;