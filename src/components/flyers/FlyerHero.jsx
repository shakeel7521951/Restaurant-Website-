import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const FlyerHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#060145] via-[#0d0c6d] to-[#1a1a8b] text-white overflow-hidden pt-30 pb-12">
      {/* 🔵 Animated Glowing Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 left-10 w-72 h-72 bg-[#F9D91C]/30 rounded-full blur-[120px]"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0.2, scale: 1 }}
        animate={{ opacity: 0.6, scale: 1.2 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 right-10 w-96 h-96 bg-[#E9F5FF]/20 rounded-full blur-[150px]"
      ></motion.div>

      {/* 💡 Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
        >
          Stunning{" "}
          <span className="text-[#F9D91C] drop-shadow-[0_0_10px_#F9D91C90]">
            Flyer Designs
          </span>{" "}
          That Inspire Action
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          From concept to creation, we craft high-impact flyers that capture
          attention, tell your brand story, and drive real results.
        </motion.p>

        {/* 🌟 Buttons */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="bg-[#F9D91C] text-[#060145] px-5 py-2 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-[0_0_30px_#F9D91C70] transition-all duration-500">
            Start Your Project
          </button>

          <button className="group border-2 border-[#F9D91C]/80 text-[#F9D91C] px-5 py-2 rounded-full font-semibold text-lg hover:bg-[#F9D91C]/10 transition-all duration-500 flex items-center gap-2">
            View Flyers{" "}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* ✨ Floating Elements for Motion Depth */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/992/992703.png"
        alt="Flyer icon"
        className="absolute w-16 md:w-24 top-20 right-[20%] opacity-20"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
        alt="Design icon"
        className="absolute w-12 md:w-20 bottom-16 left-[15%] opacity-25"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

export default FlyerHero;
