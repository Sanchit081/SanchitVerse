import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import NeuroBitBanner from '../components/NeuroBitBanner';

const productsAPI = {
  getAll: () => new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 1, name: "Digital Marketing Mastery", price: "$99", description: "Guide to digital marketing strategies and tools.", category: "course", image: "https://placehold.co/200x200/F3F4F6/1F2937?text=Course" },
          { id: 2, name: "Web Dev Toolkit", price: "$149", description: "Collection of dev resources and templates.", category: "toolkit", image: "https://placehold.co/200x200/F3F4F6/1F2937?text=Toolkit", highlight: true },
          { id: 3, name: "SEO Guide 2024", price: "$79", description: "Advanced SEO strategies for professionals.", category: "guide", image: "https://placehold.co/200x200/F3F4F6/1F2937?text=Guide" },
          { id: 4, name: "React Pro Templates", price: "$59", description: "Professional React templates for rapid development.", category: "templates", image: "https://placehold.co/200x200/F3F4F6/1F2937?text=Templates" },
          { id: 5, name: "Mastering Tailwind CSS", price: "$89", description: "A comprehensive course on Tailwind CSS.", category: "course", image: "https://placehold.co/200x200/F3F4F6/1F2937?text=Course" },
          { id: 6, name: "UI/UX Starter Kit", price: "$129", description: "Essential tools and guides for aspiring designers.", category: "toolkit", image: "https://placehold.co/200x200/F3F4F6/1F2937?text=Toolkit" },
        ]
      });
    }, 1000);
  })
};

const filterOptions = [
  { label: 'All Products', value: 'all', icon: '📦' },
  { label: 'Courses', value: 'course', icon: '📚' },
  { label: 'Toolkits', value: 'toolkit', icon: '🛠️' },
  { label: 'Guides', value: 'guide', icon: '📝' },
  { label: 'Templates', value: 'templates', icon: '🎨' },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await productsAPI.getAll();
      setProducts(response.data);
    } catch (err) {
      setError('Failed to load products. Please try again later.');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(product => product.category === filter);

  return (
    <div className="min-h-screen bg-brand-light font-body text-brand-dark">
      {/* Hero Section */}
      <div className="bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 leading-tight"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Explore Our Digital Universe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our premium collection of digital products, crafted to help you unlock your full potential.
          </motion.p>
        </motion.div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <NeuroBitBanner />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {filterOptions.map((opt) => (
            <motion.button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-md ${
                filter === opt.value
                  ? 'bg-brand-primary text-white ring-2 ring-brand-secondary ring-offset-2'
                  : 'bg-white text-brand-muted hover:bg-brand-light'
              }`}
            >
              <span className="text-xl">{opt.icon}</span>
              <span>{opt.label}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center py-20"
            >
              <motion.div
                className="w-16 h-16 border-4 border-t-4 border-brand-primary border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
            </motion.div>
          )}

          {error && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center py-12"
            >
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
                <p className="text-red-600 font-medium text-lg mb-4">{error}</p>
                <motion.button
                  onClick={fetchProducts}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-secondary transition-colors"
                >
                  Try Again
                </motion.button>
              </div>
            </motion.div>
          )}

          {!loading && !error && (
            <motion.div
              key="products"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <p className="text-brand-muted text-lg">No products found in this category.</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Products;
