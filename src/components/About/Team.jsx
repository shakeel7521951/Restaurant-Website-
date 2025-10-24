// Team.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Chef Antonio",
    role: "Head Chef",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYyCVpWycHatnQgYRdT2mYV6jsLwQAzj21A&s",
  },
  {
    name: "Maria Lopez",
    role: "Pastry Chef",
    img: "https://png.pngtree.com/png-clipart/20210828/ourmid/pngtree-head-chef-pop-illustration-style-white-png-image_3835815.jpg",
  },
  {
    name: "John Doe",
    role: "Sous Chef",
    img: "https://png.pngtree.com/png-clipart/20240310/original/pngtree-professional-chef-in-uniform-illustration-png-image_14561729.png",
  },
];

const Team = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-[#151563] to-[#151563] relative overflow-hidden">
      {/* Decorative gradient accent */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-yellow-100 rounded-full opacity-20 blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#060145]/10 rounded-full opacity-25 blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <h2
        className="text-4xl md:text-5xl font-extrabold text-center text-[white] mb-16 drop-shadow-md"
        data-aos="fade-up"
      >
        Meet Our Team
      </h2>

      <div className="flex flex-wrap justify-center gap-10 relative z-10">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            data-aos="zoom-in-up"
            data-aos-delay={i * 150}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 p-6 w-72 text-center overflow-hidden"
          >
            {/* Glow border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-[#060145] rounded-2xl blur opacity-20 group-hover:opacity-50 transition-all duration-700"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="relative w-40 h-40 mx-auto mb-5">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-yellow-400 shadow-lg group-hover:scale-105 transition-transform duration-500 delay-150"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#060145] mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-4">{member.role}</p>

              {/* Social icons */}
              <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <a
                  href="#"
                  className="text-[#060145] hover:text-yellow-400 transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-[#060145] hover:text-yellow-400 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-[#060145] hover:text-yellow-400 transition-colors"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
