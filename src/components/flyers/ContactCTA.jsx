import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactCTA = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#060145] to-[#1a1a8b] text-white overflow-hidden">
      {/* 🔹 Floating Glow Background */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-[#F9D91C]/20 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-96 h-96 bg-[#E9F5FF]/10 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* ✨ Text & CTA */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Create Something{" "}
            <span className="text-[#F9D91C] drop-shadow-[0_0_15px_#F9D91C70]">
              Amazing
            </span>
          </h2>
          <p className="text-blue-100 mb-8 max-w-lg">
            Contact our design experts today to bring your flyer vision to life.
          </p>
          <motion.a
            href="https://wa.me/1234567890" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px #F9D91C80" }}
            className="inline-block bg-[#F9D91C] text-[#060145] px-8 py-4 rounded-full font-bold transition-all duration-500"
          >
            Chat on WhatsApp
          </motion.a>
        </motion.div>

        {/* 📝 Form */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white rounded-2xl p-8 shadow-2xl text-gray-800 space-y-6"
        >
          <input
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#F9D91C] transition-all duration-300"
          />
          <input
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#F9D91C] transition-all duration-300"
          />
          <textarea
            name="message"
            value={data.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#F9D91C] transition-all duration-300"
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #F9D91C50" }}
            className="bg-[#060145] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0d0c6d] transition-all duration-500"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactCTA;
