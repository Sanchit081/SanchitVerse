import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Helper for multiple time zones
  const getTime = (tz) =>
    new Date().toLocaleTimeString('en-US', {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <footer className="relative bg-custom-background text-custom-heading pt-20 pb-16 overflow-hidden">
      {/* Background Text */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-extrabold text-custom-primary opacity-10 whitespace-nowrap pointer-events-none select-none z-0">
        SanchitVerse
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-14">
        {/* Heading */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-custom-heading mb-2">
            Need clarity first? Start here.
          </h3>
          <p className="text-sm sm:text-base text-custom-muted">
            Get instant clarity on your brand or website. No fluff, no commitment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 justify-center">
          {/* Card 1 */}
          <div className="relative border border-gray-200 bg-custom-lightCard rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition text-left">
            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md">
              FREE
            </span>
            <p className="text-base font-semibold text-custom-primaryDark">Brand strategy workshop</p>
            <p className="text-sm text-custom-muted mt-2">
              Free 30-min session to help clarify your positioning, message, and audience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative border border-gray-200 bg-custom-lightCard rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition text-left">
            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md">
              FREE
            </span>
            <p className="text-base font-semibold text-custom-primaryDark">Website plan</p>
            <p className="text-sm text-custom-muted mt-2">
              A tactical plan for what your site actually needs to convert.
            </p>
          </div>
        </div>

        {/* Certified Partner Badge */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-[#7091E6] to-[#3D52A0] text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm shadow-md">
            🎖 Certified SanchitVerse Partner
          </div>
        </div>

        {/* Time Zones */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-custom-muted mt-6">
          <span>🕒 Punjab: {getTime('Asia/Kolkata')}</span>
          <span>🕒 New York: {getTime('America/New_York')}</span>
          <span>🕒 London: {getTime('Europe/London')}</span>
          <span>🕒 San Francisco: {getTime('America/Los_Angeles')}</span>
        </div>

        {/* Legal Info */}
        <div className="text-xs sm:text-sm text-custom-muted leading-relaxed space-y-1">
          <p>© 2025 Sanchit Saini. All rights reserved. Punjab, India.</p>
          <p>
            Contact:{' '}
            <a href="tel:+919465465606" className="text-custom-primary hover:underline">
              94654 65606
            </a>{' '}
            | Email:{' '}
            <a href="mailto:contact@sanchitverse.com" className="text-custom-primary hover:underline">
              contact@sanchitverse.com
            </a>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-custom-muted mt-4">
          <Link to="/about" className="hover:text-custom-primaryDark">About</Link>
          <Link to="/contact" className="hover:text-custom-primaryDark">Contact</Link>
          <Link to="/products" className="hover:text-custom-primaryDark">Products</Link>
          <Link to="/blog" className="hover:text-custom-primaryDark">Blog</Link>
          <Link to="/privacy-policy" className="hover:text-custom-primaryDark">Privacy Policy</Link>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-custom-primaryDark">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
