import React from 'react';
import { motion } from 'framer-motion';

const NeuroBitBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#E3EAFE] to-[#F0F4FF] text-[#1F3266] p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
    >
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
          Unlock the Future with NeuroBit
        </h2>
        <p className="text-lg text-[#3D52A0]">
          Our exclusive AI-powered tools and templates are available here first.
        </p>
      </div>

      <motion.a
        href="https://neuro-bit-three.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#3D52A0] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#2e3e81] transition"
      >
        Visit NeuroBit
      </motion.a>
    </motion.div>
  );
};

export default NeuroBitBanner;
