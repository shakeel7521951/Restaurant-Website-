import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", phone: "", subject: "", message: "", budget: "", timeline: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100 relative" data-aos="fade-up">
      {/* Decorative Elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#F9D91C] rounded-full opacity-20"></div>
      <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#060145] rounded-full opacity-10"></div>

      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900" data-aos="fade-right">
        Start Your <span className="text-[#060145]">Project</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text" name="name" placeholder="Full Name *" required
            className="p-4 border rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#F9D91C] bg-gray-50"
            value={formData.name} onChange={handleChange} data-aos="fade-right"
          />
          <input
            type="email" name="email" placeholder="Email Address *" required
            className="p-4 border rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#F9D91C] bg-gray-50"
            value={formData.email} onChange={handleChange} data-aos="fade-left"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} className="p-4 border rounded-xl w-full bg-gray-50" data-aos="fade-right"/>
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="p-4 border rounded-xl w-full bg-gray-50" data-aos="fade-left"/>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <select name="budget" value={formData.budget} onChange={handleChange} className="p-4 border rounded-xl w-full bg-gray-50" data-aos="fade-right">
            <option value="">Select Budget Range</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k+">$50,000+</option>
          </select>
          <select name="timeline" value={formData.timeline} onChange={handleChange} className="p-4 border rounded-xl w-full bg-gray-50" data-aos="fade-left">
            <option value="">Select Timeline</option>
            <option value="urgent">Urgent (1-2 weeks)</option>
            <option value="standard">Standard (1-2 months)</option>
            <option value="flexible">Flexible (3+ months)</option>
          </select>
        </div>

        <textarea
          name="message" rows="6" placeholder="Project Details *" required
          className="w-full p-4 border rounded-xl bg-gray-50 resize-none focus:outline-none focus:ring-2 focus:ring-[#F9D91C]"
          value={formData.message} onChange={handleChange} data-aos="fade-up"
        />

        <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#060145] to-[#1a1a6b] text-white py-4 rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3" data-aos="zoom-in">
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Processing...
            </>
          ) : (
            <>Send Message</>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
