import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Admin = () => {
  const { user } = useAuth();

  // In a real app, you'd check for admin role
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-metallic-900 mb-8">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-metallic-900 mb-2">Products</h3>
              <p className="text-metallic-600">Manage your digital products</p>
              <button className="mt-4 btn-primary">Manage Products</button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-metallic-900 mb-2">Blog Posts</h3>
              <p className="text-metallic-600">Create and edit blog posts</p>
              <button className="mt-4 btn-primary">Manage Blog</button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-metallic-900 mb-2">Analytics</h3>
              <p className="text-metallic-600">View site statistics</p>
              <button className="mt-4 btn-primary">View Analytics</button>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-metallic-900 mb-4">Quick Actions</h3>
            <div className="space-y-4">
              <button className="btn-secondary mr-4">Add New Product</button>
              <button className="btn-secondary mr-4">Write New Blog Post</button>
              <button className="btn-secondary">View Contact Messages</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;
