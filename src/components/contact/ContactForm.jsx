import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-xl space-y-6 transition-all hover:shadow-2xl"
    >
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="2"
          placeholder="Write your message..."
          className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#060145] to-[#F9D91C] text-white font-bold py-3 rounded-2xl hover:opacity-90 transition-all"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
