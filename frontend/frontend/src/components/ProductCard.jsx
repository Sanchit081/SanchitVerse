import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative bg-[#FCFCFD] rounded-2xl shadow-lg border border-[#EDE8F5]
                 flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {product.highlight && (
        <span className="absolute top-4 right-4 z-20 bg-[#7091E6] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          Most Selling
        </span>
      )}
      
      {/* Product Image Section with Animation */}
      <div className="relative overflow-hidden h-48 flex items-center justify-center bg-gray-50 p-4">
        <motion.img
          src={product.image}
          alt={product.name}
          className="h-28 w-28 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
          initial={{ scale: 0.9, opacity: 0.8 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Product Details Section */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-bold text-[#3D52A0] mb-2 transition-colors duration-300 group-hover:text-[#7091E6]">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-4 flex-grow">{product.description}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
          <span className="text-[#3D52A0] font-extrabold text-2xl">{product.price}</span>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <motion.button 
              className="bg-white border border-[#7091E6] text-[#7091E6] text-sm px-4 py-2 rounded-md font-semibold hover:bg-[#7091E6] hover:text-white transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Details
            </motion.button>
            <motion.button 
              className="bg-[#7091E6] text-white text-sm px-4 py-2 rounded-md font-semibold hover:bg-[#3D52A0] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;