// AboutPage.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/About/HeroSection";
import AboutUs from "../components/About/AboutUs";
import Team from "../components/About/Team";
import Values from "../components/About/Values";
import Gallery from "../components/About/Gallery";
import Testimonials from "../components/About/Testimonials";
import CTA from "../components/About/CTA";

const AboutPage = () => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Team />
      <Values />
      <Gallery />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default AboutPage;
