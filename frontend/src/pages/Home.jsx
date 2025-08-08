import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion, AnimatePresence } from 'framer-motion';
import PartyAnim from '../assets/animations/party.json';
import DigitalMarketingImg from '../assets/products/img1.svg';
import WebDevToolkitImg from '../assets/products/img2.svg';
import SEOGuideImg from '../assets/products/img3.svg';
import ComputerAnim from '../assets/animations/student.json';
import JourneyIllustration from '../assets/products/growth.svg';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // --- States required for API search ---
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);

  // --- THIS IS THE CORRECTED SEARCH FUNCTION ---
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }

    setHasSearched(true);
    setIsSearching(true);
    setSearchError(null);
    setSearchResults([]);

    try {
      // This calls your backend. This is the fix.
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Error: ${response.status}`);
      }

      const formattedResults = data.organic_results?.map(item => ({
        title: item.title,
        snippet: item.snippet,
        link: item.link,
      })) || [];

      setSearchResults(formattedResults);

    } catch (error) {
      console.error("Search Error:", error);
      setSearchError(error.message);
    } finally {
      setIsSearching(false);
    }
  };

  // --- THE REST OF YOUR COMPONENT IS UNCHANGED ---
  const products = [
    { id: 1, name: "Digital Marketing Mastery", price: "Launching Soon", description: "Guide to digital marketing strategies and tools.", image: DigitalMarketingImg, comingSoon: true },
    { id: 2, name: "Web Dev Toolkit", price: "Launching Soon", description: "Collection of dev resources and templates.", image: WebDevToolkitImg, highlight: true, comingSoon: true },
    { id: 3, name: "SEO Guide 2024", price: "Launching Soon", description: "Advanced SEO strategies for professionals.", image: SEOGuideImg, comingSoon: true },
    { id: 4, name: "UI/UX Design Templates", price: "Launching Soon", description: "Beautiful, modern templates for your next project.", image: "https://via.placeholder.com/150?text=UI/UX", comingSoon: true },
    { id: 5, name: "AI Automation Toolkit", price: "Launching Soon", description: "AI-powered scripts & tools to save you hours of work.", image: "https://via.placeholder.com/150?text=AI+Toolkit", comingSoon: true },
  ];

  const blogs = [
    { id: 1, title: "The Rise of AI in Everyday Life", excerpt: "From smart assistants to automated content creation, AI is shaping our daily routines faster than ever...", date: "August 2025" },
    { id: 2, title: "Top 10 Web Development Trends in 2025", excerpt: "A look into the tools, frameworks, and practices defining modern web development...", date: "July 2025" },
    { id: 3, title: "Mastering SEO in the AI Era", excerpt: "Search engines are evolving — here's how you can stay ahead in the rankings...", date: "June 2025" },
    { id: 4, title: "Why UI/UX Design Matters More Than Ever", excerpt: "User expectations are at an all-time high — great design can make or break your product...", date: "May 2025" },
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
    const newsletterTimer = setTimeout(() => setShowNewsletter(true), 5000);
    return () => clearTimeout(newsletterTimer);
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

  const trustedLogos = [
    { name: 'Google', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
    { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Netflix', src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Spotify', src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
    { name: 'Apple', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-center px-4">
        <motion.div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-[#7091E6] rounded-full mb-8" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
        <motion.h1 className="text-4xl md:text-6xl font-extrabold text-[#1E1E28]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7091E6] via-[#3D52A0] to-[#8697C4] animate-shimmer">SanchitVerse</span>
        </motion.h1>
        <motion.p className="mt-4 text-lg text-gray-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>Your tech is loading...</motion.p>
      </div>
    );
  }

  return (
    <div className="font-body bg-white text-[#1E1E28] relative overflow-hidden pb-28">
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (<motion.div key={i} className="absolute rounded-[20%] bg-gradient-to-br from-[#7091E6] via-[#3D52A0] to-[#8697C4] opacity-30 blur-3xl" style={{width: `${window.innerWidth < 768 ? 50 + Math.random() * 60 : 80 + Math.random() * 100}px`, height: `${window.innerWidth < 768 ? 50 + Math.random() * 60 : 80 + Math.random() * 100}px`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`}} animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 8 + Math.random() * 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: Math.random() * 5 }} />))}
      </div>
      
      <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 md:px-20 pt-6 pb-10 min-h-[75vh] md:min-h-[90vh]">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex-1 text-left w-full">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1E1E28] leading-tight">Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7091E6] via-[#3D52A0] to-[#8697C4] animate-shimmer">SanchitVerse</span></h1>
          <p className="text-[#8697C4] mt-4 max-w-md sm:max-w-lg text-lg">Join thousands of creators, developers, and learners using <strong className="text-[#3D52A0]">SanchitVerse</strong> to stay ahead of the curve.</p>
          <p className="text-[#8697C4] mt-3 max-w-md sm:max-w-lg">We bring you tools, templates, and insights — all in one place.</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mt-6">
            <Link to="/products"><button className="mt-4 sm:mt-6 px-6 py-3 bg-[#7091E6] text-white rounded-lg font-semibold hover:bg-[#3D52A0] transition-all shadow-lg">Explore Now</button></Link>
            <Link to="/contact" className="mt-3 sm:mt-6 inline-flex items-center text-sm text-[#3D52A0] hover:underline">Learn more →</Link>
          </div>
          
          <div className="w-full mx-auto mt-8">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none">🔍</span>
              <input type="search" placeholder="Search for products, articles, and more..." className="w-full px-4 py-3 pl-10 pr-24 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#7091E6] transition-colors" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              <button type="submit" className="absolute right-2 bg-[#7091E6] text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-[#3D52A0] transition-colors" disabled={isSearching}>
                {isSearching ? '...' : 'Search'}
              </button>
            </form>
          </div>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border"><div className="flex-shrink-0 text-2xl">🚀</div><div><div className="text-sm font-semibold">Launch-ready templates</div><div className="text-xs text-gray-500">Plug-and-play UI kits & pages</div></div></div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border"><div className="flex-shrink-0 text-2xl">⚡</div><div><div className="text-sm font-semibold">AI productivity tools</div><div className="text-xs text-gray-500">Automation scripts to save hours</div></div></div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border"><div className="flex-shrink-0 text-2xl">📚</div><div><div className="text-sm font-semibold">Actionable guides</div><div className="text-xs text-gray-500">Short, practical tutorials</div></div></div>
          </div>
          
          {/* This is the corrected search results display */}
          {hasSearched && (
            <div className="w-full mt-6 bg-white border border-gray-200 rounded-xl shadow-md p-6">
              {isSearching && <p className="text-center text-gray-500">Searching...</p>}
              {searchError && <p className="text-center text-red-500">Error: {searchError}</p>}
              {!isSearching && !searchError && (
                searchResults.length > 0 ? (
                  <>
                    <h3 className="text-2xl font-bold mb-4 text-[#3D52A0]">Search Results:</h3>
                    <ul className="space-y-4">
                      {searchResults.map((item, idx) => (
                        <li key={idx} className="border-b pb-4 last:border-b-0">
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1E1E28] hover:underline">
                            {item.title}
                          </a>
                          <p className="text-sm text-gray-600 mt-1">{item.snippet}</p>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="text-center text-gray-500">No results found for "{searchQuery}".</p>
                )
              )}
            </div>
          )}
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex-1 flex justify-center items-center w-full relative">
          <Player autoplay loop src={ComputerAnim} style={{ height: window.innerWidth < 768 ? '300px' : '520px', width: '100%', maxWidth: '520px' }} />
        </motion.div>
      </section>
      
      <section className="py-20 bg-white">{/* ... The rest of your sections are unchanged ... */}</section>
      <section className="py-24 bg-white text-[#1E1E28]">{/* ... */}</section>
      <section className="py-24 bg-white text-[#1E1E28]">{/* ... */}</section>
      <section className="py-24 bg-white">{/* ... */}</section>
      <section className="py-24 bg-white text-[#1E1E28]">{/* ... */}</section>
      <AnimatePresence>{/* ... */}</AnimatePresence>
      {showToast && (<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} className="fixed bottom-4 right-4 z-50 bg-[#3D52A0] text-white px-4 py-2 rounded-lg shadow-lg text-sm sm:text-base">You’re in! 🎉 Thanks for subscribing.</motion.div>)}
    </div>
  );
};

export default Home;