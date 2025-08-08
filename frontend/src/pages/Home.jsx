import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import Search from '../components/Search';
import ComputerAnim from '../assets/animations/student.json';
import DigitalMarketingImg from '../assets/products/img1.svg';
import WebDevToolkitImg from '../assets/products/img2.svg';
import SEOGuideImg from '../assets/products/img3.svg';
import JourneyIllustration from '../assets/products/growth.svg';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  const products = [
    {
      id: 1,
      name: "Digital Marketing Mastery",
      price: "Launching Soon",
      description: "Guide to digital marketing strategies and tools.",
      image: DigitalMarketingImg
    },
    {
      id: 2,
      name: "Web Dev Toolkit",
      price: "Launching Soon",
      description: "Collection of dev resources and templates.",
      image: WebDevToolkitImg
    },
    {
      id: 3,
      name: "SEO Guide 2024",
      price: "Launching Soon",
      description: "Advanced SEO strategies for professionals.",
      image: SEOGuideImg
    }
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
    }
  ];

  return (
    <div className="font-body bg-white text-[#1E1E28] relative overflow-hidden pb-28">
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 md:px-20 pt-6 pb-10 min-h-[75vh] md:min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-left w-full"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1E1E28] leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7091E6] to-[#3D52A0]">SanchitVerse</span>
          </h1>
          <p className="text-[#8697C4] mt-4 max-w-lg text-lg">
            Join thousands of creators, developers, and learners using SanchitVerse to stay ahead.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mt-6">
            <Link to="/products">
              <button className="px-6 py-3 bg-[#7091E6] text-white rounded-lg font-semibold hover:bg-[#3D52A0] transition-all shadow-lg">
                Explore Now
              </button>
            </Link>
            <Link to="/contact" className="mt-3 sm:mt-0 text-sm text-[#3D52A0] hover:underline">
              Learn more →
            </Link>
          </div>
          <div className="w-full mx-auto mt-8">
            <Search onSearch={(results) => setSearchResults(results)} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex justify-center items-center w-full relative"
        >
          <Player autoplay loop src={ComputerAnim} style={{ height: '400px', width: '100%', maxWidth: '520px' }} />
        </motion.div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-[#3D52A0]">Featured Products</motion.h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="bg-[#FCFCFD] rounded-2xl shadow-lg p-6 border border-[#EDE8F5] text-center relative"
              >
                <span className="absolute top-4 left-4 bg-gray-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Launching Soon
                </span>
                <img src={product.image} alt={product.name} className="h-20 w-20 object-contain mx-auto mb-6" />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-sm text-[#555] mt-2 mb-4">{product.description}</p>
                <div className="text-[#3D52A0] font-extrabold">{product.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#3D52A0]">Latest Articles</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-[#FCFCFD] p-6 rounded-xl shadow-lg hover:-translate-y-2 transition-transform"
              >
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <p className="text-[#7091E6] mt-2">{blog.excerpt}</p>
                <span className="text-sm text-[#3D52A0] mt-1 block">{blog.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Level Up Your Digital Journey</h2>
            <p className="text-[#555] mb-8">
              Join thousands of creators, developers, and learners using SanchitVerse to stay ahead of the curve.
            </p>
            <Link to="/contact">
              <button className="bg-[#7091E6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3D52A0] transition shadow-xl">
                Get Started
              </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={JourneyIllustration} alt="Digital Journey" className="w-full max-w-sm" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
