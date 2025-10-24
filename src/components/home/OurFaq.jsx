import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown } from "lucide-react";

const OurFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const faqs = [
    {
      question: "Do you provide digital menu designs for restaurants?",
      answer:
        "Yes, we design fully responsive digital menus that reflect your brand style and can be easily updated anytime.",
    },
    {
      question: "Can I get custom flyers and posters for promotions?",
      answer:
        "Absolutely! Our creative team designs professional flyers and posters tailored to your restaurant’s theme and offers.",
    },
    {
      question: "Do you offer an online ordering or cart system?",
      answer:
        "Yes, we build complete digital ordering systems with user-friendly carts, secure payments, and live order tracking.",
    },
    {
      question: "Can your team manage my restaurant, IT and website updates?",
      answer:
        "Our IT experts provide ongoing support, ensuring your website, menus, and services stay up-to-date and smooth.",
    },
    {
      question:
        "What if I need a full brand setup including website, flyers, and menu?",
      answer:
        "We offer complete branding packages — from logo to posters, digital menus, and professional website integration.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 sm:px-10 md:px-16 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative">
        {/* Left Side - Image */}
        <div
          data-aos="fade-right"
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Restaurant Digital Workspace"
            className="rounded-2xl shadow-2xl w-full max-w-[650px] h-[520px] object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Vertical Line Divider */}
        <div className="hidden lg:block w-[2px] h-[480px] bg-gray-300 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>

        {/* Right Side - FAQ Section */}
        <div
          data-aos="fade-left"
          className="w-full lg:w-1/2 bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#060145] mb-8 tracking-tight">
            Restaurant,IT & Branding FAQs
          </h2>

          <div className="space-y-4 sm:space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full cursor-pointer flex justify-between items-center bg-[#060145] text-white px-4 sm:px-5 py-3 sm:py-4 text-left text-base sm:text-lg font-medium focus:outline-none hover:bg-[#0a0a80] transition-all"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 sm:w-6 h-5 sm:h-6 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openIndex === index
                      ? "max-h-40 opacity-100 py-3 sm:py-4 px-4 sm:px-5"
                      : "max-h-0 opacity-0 px-4 sm:px-5"
                  }`}
                >
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFaq;
