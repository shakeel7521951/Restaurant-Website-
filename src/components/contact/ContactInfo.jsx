import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const SOCIAL_LINKS = [
  { icon: FaLinkedin, href: "#", label: "LinkedIn", color: "hover:text-[#0077b5]" },
  { icon: FaTwitter, href: "#", label: "Twitter", color: "hover:text-[#1da1f2]" },
  { icon: FaInstagram, href: "#", label: "Instagram", color: "hover:text-[#e4405f]" },
  { icon: FaFacebookF, href: "#", label: "Facebook", color: "hover:text-[#1877f2]" },
  { icon: FaYoutube, href: "#", label: "YouTube", color: "hover:text-[#ff0000]" },
];

const ContactInfo = () => {
  const infoItems = [
    { icon: FaMapMarkerAlt, title: "Our Office", content: "123 Innovation Drive\nTech District, City 10101\nCountry", aos: "fade-right" },
    { icon: FaPhoneAlt, title: "Call Us", content: "+1 (555) 123-4567\nMon - Fri, 9AM - 6PM EST", aos: "fade-left" },
    { icon: FaEnvelope, title: "Email Us", content: "hello@brandname.com\nsupport@brandname.com", aos: "fade-right" },
    { icon: FaClock, title: "Business Hours", content: "Monday - Friday: 9AM - 6PM\nWeekend: Emergency Support", aos: "fade-left" },
  ];

  return (
    <div className="flex flex-col justify-center space-y-8 p-6">
      <div data-aos="fade-down">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-[#F9D91C] rounded-full"></div>
          <span className="text-sm font-semibold text-[#060145] uppercase tracking-wide">Get in Touch</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Let's <span className="text-[#060145]">Connect</span>
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          We're passionate about creating exceptional digital experiences. Let's discuss how we can help bring your vision to life.
        </p>
      </div>

      {/* Info Cards */}
      <div className="space-y-6">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300" data-aos={item.aos} data-aos-delay={index * 150}>
            <div className="p-3 bg-[#060145] rounded-lg ">
              <item.icon className="text-xl text-[#F9D91C]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="pt-6" data-aos="fade-up">
        <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map((social, index) => (
            <a 
              key={social.label} 
              href={social.href} 
              aria-label={`Follow us on ${social.label}`}
              className={`p-3 bg-gray-100 rounded-xl text-gray-600 ${social.color} hover:bg-white hover:shadow-lg transform hover:scale-110 transition-all duration-300`}
              data-aos="zoom-in" 
              data-aos-delay={index * 100}
            >
              <social.icon className="text-xl" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
