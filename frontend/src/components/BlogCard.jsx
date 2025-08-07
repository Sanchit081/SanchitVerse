import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05 }}
      tabIndex={0}
      role="button"
      aria-label={`Read blog post titled ${blog.title}`}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-metallic-500 mb-2">{blog.date}</p>
        <h3 className="text-xl font-bold text-metallic-900 mb-3">{blog.title}</h3>
        <p className="text-metallic-600 text-sm mb-4">{blog.excerpt}</p>
        <Link
          to={`/blog/${blog.id}`}
          className="text-metallic-700 font-semibold hover:text-metallic-900 transition-colors"
        >
          Read More →
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
