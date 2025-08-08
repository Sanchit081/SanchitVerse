import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion, AnimatePresence } from 'framer-motion';
import Search from '../components/Search';
import PartyAnim from '../assets/animations/party.json';
import DigitalMarketingImg from '../assets/products/img1.svg';
import WebDevToolkitImg from '../assets/products/img2.svg';
import SEOGuideImg from '../assets/products/img3.svg';
import ComputerAnim from '../assets/animations/student.json';
import JourneyIllustration from '../assets/products/growth.svg';

// Floating dots component
const FloatingDot = ({ delay, size, duration, startX, startY }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (e) => {
    e.stopPropagation();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
  };
  return (
    <motion.div
      onClick={handleClick}
      className="absolute rounded-full cursor-pointer"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${startY}%`,
        left: `${startX}%`,
        backgroundColor: size > 7 ? '#7091E6' : '#8697C4',
        opacity: 0.8,
        zIndex: 10,
      }}
      animate={{
        x: [0, Math.random() * 100 - 50, 0],
        y: [0, Math.random() * 100 - 50, 0],
        scale: isClicked ? [1, 2, 1] : 1,
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: delay,
      }}
    />
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsLoading(false), 3000);
    const newsletterTimer = setTimeout(() => setShowNewsletter(true), 5000);
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(newsletterTimer);
    };
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setShowConfetti(true);
      setShowToast(true);
      setTimeout(() => {
        setShowConfetti(false);
        setShowNewsletter(false);
      }, 2000);
      setTimeout(() => setShowToast(false), 4000);
    }
  };

  const products = [
    { id: 1, name: "Digital Marketing Mastery", price: "Launching Soon", description: "Guide to digital marketing strategies and tools.", image: DigitalMarketingImg, comingSoon: true },
    { id: 2, name: "Web Dev Toolkit", price: "Launching Soon", description: "Collection of dev resources and templates.", image: WebDevToolkitImg, highlight: true, comingSoon: true },
    { id: 3, name: "SEO Guide 2024", price: "Launching Soon", description: "Advanced SEO strategies for professionals.", image: SEOGuideImg, comingSoon: true },
    { id: 4, name: "UI/UX Design Templates", price: "Launching Soon", description: "Modern templates for projects.", image: "https://via.placeholder.com/150?text=UI/UX", comingSoon: true },
    { id: 5, name: "AI Automation Toolkit", price: "Launching Soon", description: "AI-powered tools to save time.", image: "https://via.placeholder.com/150?text=AI+Toolkit", comingSoon: true },
  ];

  const blogs = [
    { id: 1, title: "The Rise of AI in Everyday Life", excerpt: "From smart assistants to automated content creation...", date: "August 2025" },
    { id: 2, title: "Top 10 Web Development Trends in 2025", excerpt: "A look into the tools and frameworks shaping dev...", date: "July 2025" },
    { id: 3, title: "Mastering SEO in the AI Era", excerpt: "Search engines are evolving — here's how to adapt...", date: "June 2025" },
    { id: 4, title: "Why UI/UX Design Matters More Than Ever", excerpt: "User expectations are higher than ever...", date: "May 2025" },
  ];

  const trustedLogos = [
    { name: 'Google', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
    { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg' },
    { name: 'Netflix', src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Spotify', src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
    { name: 'Apple', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  ];

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <style jsx="true">{`
              @keyframes light-reflect {
                0% { background-position: -200% 0; }
                100% { background-position: 200% 0; }
              }
              .light-reflect {
                background: linear-gradient(90deg, #1E1E28, #3D52A0, #8697C4, #1E1E28);
                background-size: 200% 100%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: light-reflect 2s infinite linear;
              }
            `}</style>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold text-center px-4"
            >
              Welcome to{' '}
              <span className="light-reflect">SanchitVerse</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-4 text-lg md:text-xl text-[#8697C4] text-center px-4"
            >
              Wait, your tech is being loaded...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="font-body bg-white text-[#1E1E28] relative overflow-hidden pb-28">
        {/* Hero Section */}
        <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 md:px-20 pt-6 pb-10 min-h-[75vh] md:min-h-[90vh]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-left w-full"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1E1E28] leading-tight">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7091E6] via-[#3D52A0] to-[#8697C4]">
                SanchitVerse
              </span>
            </h1>
            <p className="text-[#8697C4] mt-4 max-w-md sm:max-w-lg text-lg">
              Join thousands of creators, developers, and learners using <strong className="text-[#3D52A0]">SanchitVerse</strong> to stay ahead of the curve.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 flex justify-center items-center w-full relative"
          >
            <Player autoplay loop src={ComputerAnim} style={{ height: '300px', width: '100%', maxWidth: '520px' }} />
          </motion.div>
        </section>

        {/* Powerful Search Insights with Data */}
        <section className="py-24 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#3D52A0]">Powerful Search Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Trending Keywords */}
              <motion.div className="p-6 bg-white rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold mb-4">Trending Keywords</h3>
                {["AI Tools", "React 19", "SEO 2025"].map((keyword, i) => (
                  <p key={i} className="text-[#3D52A0] font-medium">{keyword}</p>
                ))}
              </motion.div>
              {/* Traffic Growth */}
              <motion.div className="p-6 bg-white rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold mb-4">Traffic Growth</h3>
                <p className="text-4xl font-bold text-[#7091E6]">+45%</p>
                <p className="text-sm text-gray-500">Compared to last month</p>
              </motion.div>
              {/* User Engagement */}
              <motion.div className="p-6 bg-white rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold mb-4">User Engagement</h3>
                <p className="text-4xl font-bold text-[#3D52A0]">3.2K</p>
                <p className="text-sm text-gray-500">Active weekly users</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
