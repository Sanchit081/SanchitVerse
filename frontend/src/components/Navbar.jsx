import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Player } from '@lottiefiles/react-lottie-player';
import ArrowAnim from '../assets/animations/arrow.json';
import VerseLogo from '../assets/products/verselogo.png';
import { InformationCircleIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showClick, setShowClick] = useState(true);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setShowClick(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="backdrop-blur-lg bg-white/60 shadow-md sticky top-0 z-50 border-b border-white/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-0">
            <img
              src={VerseLogo}
              alt="SanchitVerse Logo"
              className="w-12 sm:w-16 h-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <span className="text-base sm:text-2xl font-bold text-[#3D52A0] ml-1">
              SanchitVerse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {[
              { label: 'Home', to: '/' },
              { label: 'Products', to: '/products' },
              { label: 'Services', to: '/services' },
              { label: 'Blog', to: '/blog' },
              { label: 'Contact', to: '/contact' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[#3D52A0] hover:underline underline-offset-8 text-lg font-semibold px-2 py-1"
              >
                {item.label}
              </Link>
            ))}

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <button className="text-[#3D52A0] hover:underline underline-offset-8 text-lg font-semibold px-2 py-1">
                About
              </button>
              <AnimatePresence>
                {showAboutDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute left-0 mt-2 w-64 bg-white shadow-lg border border-gray-200 rounded-md z-50"
                  >
                    <Link
                      to="/about/sanchitverse"
                      className="flex items-center gap-2 px-4 py-3 text-base text-gray-700 hover:bg-gray-100"
                    >
                      <InformationCircleIcon className="h-5 w-5 text-[#3D52A0]" />
                      About SanchitVerse
                    </Link>
                    <Link
                      to="/about/neurobit"
                      className="flex items-center gap-2 px-4 py-3 text-base text-gray-700 hover:bg-gray-100"
                    >
                      <CpuChipIcon className="h-5 w-5 text-[#3D52A0]" />
                      About Neurobit
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Auth & Arrow */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-base text-[#1E1E28] font-medium">
                  Hi, {user.displayName || user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-[#A0006D] hover:text-[#4A8BDF] text-base font-semibold transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="relative flex items-center cursor-pointer" onClick={() => navigate('/login')}>
                <Player autoplay loop src={ArrowAnim} style={{ height: '56px', width: '56px' }} />
                {showClick && (
                  <span className="absolute left-14 text-sm text-[#4A8BDF] font-semibold">
                    Login
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1E1E28] hover:text-[#4A8BDF] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-7 w-7 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-md px-4 pb-4 border-t border-white/30"
          >
            <div className="space-y-4 pt-4">
              {[
                { label: 'Home', to: '/' },
                { label: 'Products', to: '/products' },
                { label: 'Services', to: '/services' },
                { label: 'Blog', to: '/blog' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="block text-[#3D52A0] text-lg font-semibold"
                >
                  {item.label}
                </Link>
              ))}

              {/* About section links */}
              <div className="pl-2 space-y-2">
                <Link
                  to="/about/sanchitverse"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-[#3D52A0] text-base"
                >
                  <InformationCircleIcon className="h-5 w-5" />
                  About SanchitVerse
                </Link>
                <Link
                  to="/about/neurobit"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-[#3D52A0] text-base"
                >
                  <CpuChipIcon className="h-5 w-5" />
                  About Neurobit
                </Link>
              </div>

              {user ? (
                <>
                  <div className="text-[#1E1E28] px-2 text-base">Hi, {user.displayName || user.email}</div>
                  <button
                    onClick={handleLogout}
                    className="text-left text-[#A0006D] hover:text-[#4A8BDF] text-base px-2 font-semibold"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div
                  className="mt-2 flex justify-center"
                  onClick={() => {
                    setIsOpen(false);
                    navigate('/login');
                  }}
                >
                  <Player autoplay loop src={ArrowAnim} style={{ height: '48px', width: '48px' }} />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
