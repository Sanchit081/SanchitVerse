import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      icon: "🚀",
      features: ["React/Next.js", "Node.js Backend", "Database Design", "API Development"]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your business",
      icon: "📈",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and functional designs that enhance user experience",
      icon: "🎨",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "Consulting",
      description: "Expert guidance to help you navigate the digital landscape",
      icon: "💡",
      features: ["Strategy Planning", "Tech Stack Selection", "Performance Optimization", "Team Training"]
    }
  ];

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
            Our Services
          </h1>
          <p className="text-xl text-metallic-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-metallic-900 mb-3">{service.title}</h3>
              <p className="text-metallic-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-metallic-700 flex items-center">
                    <span className="text-metallic-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
