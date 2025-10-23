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
      duration: 1000,
      once: true, // animations play only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <ContactHeader />

      <section className="py-20 px-5 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2" data-aos="fade-right">
            <ContactForm />
          </div>
          <div className="lg:col-span-1" data-aos="fade-left">
            <ContactInfo />
          </div>
        </div>
      </section>

      <MapSection />
    </div>
  );
};

export default ContactPage;
