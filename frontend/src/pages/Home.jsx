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

// New FloatingDot component with corrected animation logic
const FloatingDot = ({ delay, size, duration, startX, startY }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsClicked(true);
    // Double size for a moment, then shrink back
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
        opacity: 0.8
      }}
      animate={{
        x: [0, Math.random() * 100 - 50, 0], // Move randomly between -50px and +50px
        y: [0, Math.random() * 100 - 50, 0], // Move randomly between -50px and +50px
        scale: isClicked ? [1, 2, 1] : 1,
        opacity: [0.8, 1, 0.8], // Subtle opacity change
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
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setShowNewsletter(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = () => {
    setShowConfetti(true);
    setShowToast(true);
    setTimeout(() => {
      setShowConfetti(false);
      setShowNewsletter(false);
    }, 2000);
    setTimeout(() => setShowToast(false), 4000);
  };

  const products = [
    {
      id: 1,
      name: "Digital Marketing Mastery",
      price: "Launching Soon",
      description: "Guide to digital marketing strategies and tools.",
      image: DigitalMarketingImg,
      comingSoon: true,
    },
    {
      id: 2,
      name: "Web Dev Toolkit",
      price: "Launching Soon",
      description: "Collection of dev resources and templates.",
      image: WebDevToolkitImg,
      highlight: true,
      comingSoon: true,
    },
    {
      id: 3,
      name: "SEO Guide 2024",
      price: "Launching Soon",
      description: "Advanced SEO strategies for professionals.",
      image: SEOGuideImg,
      comingSoon: true,
    },
    {
      id: 4,
      name: "UI/UX Design Templates",
      price: "Launching Soon",
      description: "Beautiful, modern templates for your next project.",
      image: "https://via.placeholder.com/150?text=UI/UX",
      comingSoon: true,
    },
    {
      id: 5,
      name: "AI Automation Toolkit",
      price: "Launching Soon",
      description: "AI-powered scripts & tools to save you hours of work.",
      image: "https://via.placeholder.com/150?text=AI+Toolkit",
      comingSoon: true,
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "The Rise of AI in Everyday Life",
      excerpt: "From smart assistants to automated content creation, AI is shaping our daily routines faster than ever...",
      date: "August 2025",
    },
    {
      id: 2,
      title: "Top 10 Web Development Trends in 2025",
      excerpt: "A look into the tools, frameworks, and practices defining modern web development...",
      date: "July 2025",
    },
    {
      id: 3,
      title: "Mastering SEO in the AI Era",
      excerpt: "Search engines are evolving — here's how you can stay ahead in the rankings...",
      date: "June 2025",
    },
    {
      id: 4,
      title: "Why UI/UX Design Matters More Than Ever",
      excerpt: "User expectations are at an all-time high — great design can make or break your product...",
      date: "May 2025",
    },
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
    <div className="font-body bg-white text-[#1E1E28] relative overflow-hidden pb-28">
      {/* 🔲 Floating Background Boxes */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-[20%] bg-gradient-to-br from-[#7091E6] via-[#3D52A0] to-[#8697C4] opacity-30 blur-3xl"
            style={{
              width: `${window.innerWidth < 768 ? 50 + Math.random() * 60 : 80 + Math.random() * 100}px`,
              height: `${window.innerWidth < 768 ? 50 + Math.random() * 60 : 80 + Math.random() * 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* 💫 Floating Dots Background (Corrected) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <FloatingDot
            key={i}
            delay={Math.random() * 10}
            size={Math.random() * 10 + 3} // Size between 3 and 13
            duration={20 + Math.random() * 20} // Duration between 20s and 40s
            startX={Math.random() * 100}
            startY={Math.random() * 100}
          />
        ))}
      </div>

      {/* 🔷 Hero Section */}
      <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 md:px-20 pt-6 pb-10 min-h-[75vh] md:min-h-[90vh]">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-left w-full"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1E1E28] leading-tight">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7091E6] via-[#3D52A0] to-[#8697C4] animate-shimmer">
              SanchitVerse
            </span>
          </h1>
          <p className="text-[#8697C4] mt-4 max-w-md sm:max-w-lg text-lg">
            Join thousands of creators, developers, and learners using <strong className="text-[#3D52A0]">SanchitVerse</strong> to stay ahead of the curve.
          </p>
          <p className="text-[#8697C4] mt-3 max-w-md sm:max-w-lg">We bring you tools, templates, and insights — all in one place.</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mt-6">
            <Link to="/products">
              <button className="mt-4 sm:mt-6 px-6 py-3 bg-[#7091E6] text-white rounded-lg font-semibold hover:bg-[#3D52A0] transition-all shadow-lg">
                Explore Now
              </button>
            </Link>
            <Link to="/contact" className="mt-3 sm:mt-6 inline-flex items-center text-sm text-[#3D52A0] hover:underline">
              Learn more →
            </Link>
          </div>
          {/* Search Component */}
          <div className="w-full mx-auto mt-8">
            <Search onSearch={(results) => setSearchResults(results)} />
          </div>
          {/* Feature highlights (compact) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex-shrink-0 text-2xl">🚀</div>
              <div>
                <div className="text-sm font-semibold">Launch-ready templates</div>
                <div className="text-xs text-gray-500">Plug-and-play UI kits & pages</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex-shrink-0 text-2xl">⚡</div>
              <div>
                <div className="text-sm font-semibold">AI productivity tools</div>
                <div className="text-xs text-gray-500">Automation scripts to save hours</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex-shrink-0 text-2xl">📚</div>
              <div>
                <div className="text-sm font-semibold">Actionable guides</div>
                <div className="text-xs text-gray-500">Short, practical tutorials</div>
              </div>
            </div>
          </div>
          {/* Search results (unchanged) */}
          {searchResults.length > 0 && (
            <div className="w-full mt-6 bg-white border border-gray-200 rounded-xl shadow-md p-6 overflow-x-auto">
              <h3 className="text-2xl font-bold mb-4 text-[#3D52A0]">Search Results:</h3>
              <ul className="space-y-4">
                {searchResults.map((item, idx) => (
                  <li key={idx} className="border-b pb-4">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1E1E28] hover:underline">
                      {item.title}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">{item.snippet}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
        {/* Animation */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex justify-center items-center w-full relative"
        >
          <Player
            autoplay
            loop
            src={ComputerAnim}
            style={{
              height: window.innerWidth < 768 ? '300px' : '520px',
              width: '100%',
              maxWidth: '520px'
            }}
          />
        </motion.div>
      </section>
      {/* 🛒 Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#3D52A0]">Featured Products</motion.h2>
          <p className="text-center text-[#8697C4] mb-12 text-lg">Explore curated tools crafted for creators, students & solopreneurs 🚀</p>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.55 }}
                className="relative bg-[#FCFCFD] rounded-2xl shadow-lg transition-shadow p-6 border border-[#EDE8F5] hover:-translate-y-2 duration-300 text-center"
              >
                {product.highlight && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Most Selling
                  </span>
                )}
                {product.comingSoon && (
                  <span className="absolute top-4 left-4 bg-gray-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Launching Soon
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-20 w-20 sm:h-28 sm:w-28 object-contain drop-shadow-lg mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-[#1E1E28]">{product.name}</h3>
                <p className="text-sm text-[#555] mt-2 mb-4">{product.description}</p>
                <div className="text-center text-[#3D52A0] font-extrabold text-lg">{product.price}</div>
                <form className="mt-4 flex flex-col items-center">
                  <input type="email" placeholder="Get notified when we launch!" className="w-full px-3 py-2 border rounded-md mb-2 text-sm" />
                  <button type="submit" className="w-full bg-[#7091E6] hover:bg-[#3D52A0] text-white text-sm px-4 py-2 rounded-md">
                    Notify Me
                  </button>
                </form>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products">
              <button className="px-6 py-3 bg-transparent border border-[#E6E9F2] rounded-lg text-[#3D52A0] hover:bg-[#F7F9FF] transition">
                View all products
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* 👥 Why SanchitVerse? Section (formerly info card) */}
      <section className="py-24 bg-white text-[#1E1E28]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#3D52A0]">Why SanchitVerse?</h2>
          <p className="text-[#555] max-w-2xl mx-auto mb-8">
            We provide the tools and resources you need to succeed in your digital ventures.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-xl shadow-lg border border-[#EDE8F5]">
              <h3 className="font-semibold text-lg text-[#1E1E28]">Curated templates & code snippets</h3>
              <p className="mt-2 text-sm text-gray-600">Save time with our collection of high-quality, ready-to-use resources.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-xl shadow-lg border border-[#EDE8F5]">
              <h3 className="font-semibold text-lg text-[#1E1E28]">Time-saving automation tools</h3>
              <p className="mt-2 text-sm text-gray-600">Automate repetitive tasks and focus on what matters most to your business.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-xl shadow-lg border border-[#EDE8F5]">
              <h3 className="font-semibold text-lg text-[#1E1E28]">Practical guides & proven workflows</h3>
              <p className="mt-2 text-sm text-gray-600">Learn from our practical, step-by-step guides and proven strategies.</p>
            </motion.div>
          </div>
          <Link to="/products" className="inline-block mt-8 text-sm font-semibold text-[#7091E6] hover:underline">
            Explore all our resources →
          </Link>
        </div>
      </section>
      {/* --- */}
      {/* 👥 Trusted by Creators Section */}
      <section className="py-24 bg-white text-[#1E1E28]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Loved by creators at...</h2>
          <p className="text-[#555] max-w-2xl mx-auto mb-8">
            Our community is growing fast! Join over 3,000 developers, designers, and entrepreneurs who are building and learning with SanchitVerse.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mt-12">
            {trustedLogos.map((logo, index) => (
              <motion.img
                key={index}
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-8 md:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              />
            ))}
          </div>
        </div>
      </section>
      {/* --- */}
      {/* ✍️ Blog Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#3D52A0]">Latest Articles</motion.h2>
          <p className="text-center text-[#7091E6] mb-12">Stay ahead with insights and inspiration</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FCFCFD] p-6 rounded-xl shadow-lg hover:-translate-y-2 transition-transform text-center md:text-left"
              >
                <h3 className="text-xl font-semibold text-[#1E1E28]">{blog.title}</h3>
                <p className="text-[#7091E6] mt-2">{blog.excerpt}</p>
                <span className="text-sm text-[#3D52A0] mt-1 block">{blog.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- */}
      {/* 🚀 CTA Section */}
      <section className="py-24 bg-white text-[#1E1E28]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Level Up Your Digital Journey</h2>
            <p className="text-[#555] mb-4">Join thousands of creators, developers, and learners using <strong className="text-[#3D52A0]">SanchitVerse</strong> to stay ahead of the curve.</p>
            <p className="text-[#555] mb-8">We bring you tools, templates, and insights — all in one place.</p>
            <Link to="/contact">
              <button className="bg-[#7091E6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3D52A0] transition shadow-xl animate-pulse">
                Get Started
              </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={JourneyIllustration} alt="Digital Journey Illustration" className="w-full max-w-sm" />
          </div>
        </div>
      </section>
      {/* 🎉 Newsletter & Confetti */}
      <AnimatePresence>
        {(showNewsletter || showConfetti) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-6 right-4 z-50 w-full max-w-xs pointer-events-none px-4"
          >
            <div className="relative w-full h-full">
              {showConfetti && (
                <div className="absolute inset-0 z-10 flex items-center justify-center overflow-visible">
                  <Player autoplay loop={false} keepLastFrame src={PartyAnim} style={{ width: '150%', height: '150%', transform: 'scale(1.5)', marginTop: '-60px' }} />
                </div>
              )}
              {showNewsletter && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-20 bg-white border border-[#7091E6] shadow-xl p-6 rounded-xl pointer-events-auto w-full"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-[#3D52A0]">📬 Join Our Newsletter</h3>
                    <button onClick={() => setShowNewsletter(false)} className="text-gray-500 hover:text-gray-700 text-sm ml-4">✖</button>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 mb-4">Get exclusive resources, product updates, and tips in your inbox.</p>
                  <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md mb-2 text-sm" />
                  <button onClick={handleSubscribe} className="w-full bg-[#7091E6] hover:bg-[#3D52A0] text-white text-sm px-4 py-2 rounded-md">Subscribe</button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* 🔔 Toast */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-4 z-50 bg-[#3D52A0] text-white px-4 py-2 rounded-lg shadow-lg text-sm sm:text-base"
        >
          You’re in! 🎉 Thanks for subscribing.
        </motion.div>
      )}
    </div>
  );
};

export default Home;