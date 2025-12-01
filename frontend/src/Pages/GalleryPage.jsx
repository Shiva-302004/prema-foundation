import { motion } from 'framer-motion';

const GalleryPage = () => {
  // Import all gallery images
  const galleryImages = Object.values(
    import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true })
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
            Our Gallery<span className="text-orange-500">.</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Explore our collection of memorable moments and impactful activities through these captured memories.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-20 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold"></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryPage; 