import React, { useEffect, useState } from "react";

const statsData = [
  { value: 24, label: "Response Time", suffix: "h", aos: "fade-up" },
  { value: 100, label: "Projects Completed", suffix: "+", aos: "fade-up" },
  { value: 98, label: "Client Satisfaction", suffix: "%", aos: "fade-up" },
];

const ContactHeader = () => {
  const [counters, setCounters] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, idx) => {
      const increment = Math.ceil(stat.value / 100); // number of steps
      return setInterval(() => {
        setCounters(prev => {
          const newCounters = [...prev];
          if (newCounters[idx] < stat.value) {
            newCounters[idx] = Math.min(newCounters[idx] + increment, stat.value);
          }
          return newCounters;
        });
      }, 20); // update speed
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#060145] via-[#0d0c6d] to-[#1a1a8b] text-white pt-13 pb-20 px-5 text-center overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 h-24 bg-[#F9D91C] rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-[#F9D91C] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <span
          className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm text-sm font-medium text-gray-200"
          data-aos="fade-down"
        >
          <div className="w-2 h-2 bg-[#F9D91C] rounded-full"></div>
          Contact Us
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" data-aos="zoom-in">
          Let's Start a <span className="text-[#F9D91C]">Conversation</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up">
          Ready to bring your vision to life? We're here to listen, collaborate, and deliver exceptional results.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
          {statsData.map((stat, index) => (
            <div key={stat.label} className="text-center" data-aos={stat.aos} data-aos-delay={index * 200}>
              <div className="text-2xl md:text-3xl font-bold text-[#F9D91C]">
                {counters[index]}{stat.suffix}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
