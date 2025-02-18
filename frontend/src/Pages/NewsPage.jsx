import React from 'react';
import { motion } from 'framer-motion';

const NewsPage = () => {
  // Import all news images
  const newsImages = Object.values(
    import.meta.glob('/src/assets/news/*.{png,jpg,jpeg,svg}', { eager: true })
  ).map(module => module.default);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto mt-12">
        {/* Header Section */}
        <div className="mb-12" data-aos="fade-up">
          <p className="text-orange-500 font-medium mb-2">MAA PREMA FOUNDATION</p>
          <h2 className="text-5xl font-bold text-[#1e3a8a]">
            News & Stories<span className="text-orange-500">.</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Stay updated with our latest news, events, and inspiring stories of change and impact in our community.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={`News ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                  News Title {index + 1}
                </h3>
                <p className="text-gray-600 text-sm">
                  {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NewsPage; 