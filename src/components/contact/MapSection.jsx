import React from "react";

const MapSection = () => {
  return (
    <section className="w-full h-[500px]">
      <iframe
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086282384253!2d-122.42067928468188!3d37.77902687975792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c77b1b9e7%3A0x3d2f9dc3f8d32a1b!2sCity%20Hall%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        className="border-0 rounded-3xl shadow-xl"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default MapSection;
