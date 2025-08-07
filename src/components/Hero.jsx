import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-white text-productivityBlueDark">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-productivityBlueLight via-productivityBlue to-productivityBlueDark bg-clip-text text-transparent">
              SanchitVerse
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-productivityBlueLight mb-8 max-w-3xl mx-auto">
            Premium digital products, expert insights, and transformative services designed to elevate your digital journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-productivityBlueLight text-productivityBlueDark px-8 py-3 rounded-lg font-semibold hover:bg-productivityBlue transition-colors"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="border-2 border-productivityBlueLight text-productivityBlueLight px-8 py-3 rounded-lg font-semibold hover:bg-productivityBlueLight hover:text-productivityBlueDark transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
