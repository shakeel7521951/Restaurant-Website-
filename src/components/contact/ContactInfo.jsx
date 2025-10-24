import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  const info = [
    {
      icon: <FaMapMarkerAlt className="text-[#060145] text-2xl" />,
      title: "Address",
      text: "123 Main Street, City, Country",
    },
    {
      icon: <FaPhoneAlt className="text-[#060145] text-2xl" />,
      title: "Phone",
      text: "+123 456 7890",
    },
    {
      icon: <FaEnvelope className="text-[#060145] text-2xl" />,
      title: "Email",
      text: "info@example.com",
    },
  ];

  return (
    <div className="space-y-6">
      {info.map((item, idx) => (
        <div
          key={idx}
          className="flex items-start space-x-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
        >
          <div>{item.icon}</div>
          <div>
            <h4 className="font-bold text-gray-900">{item.title}</h4>
            <p className="text-gray-600">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
