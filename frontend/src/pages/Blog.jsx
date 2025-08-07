import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockBlogs = [
      {
        id: 1,
        title: "The Future of Digital Marketing",
        excerpt: "Exploring upcoming trends and technologies that will shape the digital marketing landscape in 2024 and beyond.",
        date: "March 15, 2024",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
      },
      {
        id: 2,
        title: "Mastering React in 2024",
        excerpt: "A comprehensive guide to the latest React features and best practices for modern web development.",
        date: "March 10, 2024",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
      },
      {
        id: 3,
        title: "SEO Strategies That Work",
        excerpt: "Proven SEO techniques to boost your website's visibility and drive organic traffic.",
        date: "March 5, 2024",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
      },
      {
        id: 4,
        title: "Building Scalable Web Applications",
        excerpt: "Best practices for creating web applications that can handle millions of users.",
        date: "February 28, 2024",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
      }
    ];

    setTimeout(() => {
      setBlogs(mockBlogs);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-metallic-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-metallic-900 mb-4">
            Latest Insights
          </h1>
          <p className="text-xl text-metallic-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our blog
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
