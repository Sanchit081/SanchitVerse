import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            The world's most widely adopted 
            <span className="text-[#B4FF00]"> AI </span> 
            developer tool
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg">
            Premium digital products, expert insights, and transformative services designed to elevate your digital journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/products"
              className="bg-[#B4FF00] text-black px-8 py-3 rounded-lg font-semibold hover:opacity-80 transition"
            >
              ⚡ Start Generating Code
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#B4FF00] text-[#B4FF00] px-8 py-3 rounded-lg font-semibold hover:bg-[#B4FF00] hover:text-black transition"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Rotating Orbit */}
        <div className="md:w-1/2 flex justify-center relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="relative w-64 h-64 border-2 border-[#B4FF00] rounded-full flex items-center justify-center"
          >
            {/* Dots */}
            <div className="absolute w-4 h-4 bg-[#B4FF00] rounded-full top-0 shadow-lg shadow-[#B4FF00]" />
            <div className="absolute w-4 h-4 bg-[#B4FF00] rounded-full bottom-0 shadow-lg shadow-[#B4FF00]" />
            <div className="absolute w-4 h-4 bg-[#B4FF00] rounded-full left-0 shadow-lg shadow-[#B4FF00]" />
            <div className="absolute w-4 h-4 bg-[#B4FF00] rounded-full right-0 shadow-lg shadow-[#B4FF00]" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
