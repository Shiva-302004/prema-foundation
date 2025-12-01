import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SAMPLE DESCRIPTIONS — replace with your own
const descriptions = [
  "Gyanshala - A unit of Maa Prema Foundation At Pirapur Mathura, Goraul, Vaishali.",
  "Gyanshala started by Coal India in pirpur mathura on the initiative of Maa Prema Foundation. Enroll your daughters today.",
  "Distribution of necessary kit, school bag and dress among the children of Gyanshala in Pirapur Mathura Panchayat of Goraul Block.",
  "Children with kits at a function held in pirapur Mathura of Goraul Block.",
  "Har Ghar Tiranga Yatra by Maa Prema Foundation.",
  "Har Ghar Tiranga Yatra organised by Maa Prema Foundation.",
  "Independence day celebration by Maa Prema Foundation.",
  "Learning with dedication at Gyanshala.",
  "Gyanshala school girls engaged in joyful and active learning.",
];

const CoalIndiaPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const coalIndiaImages = Object.values(
    import.meta.glob('/src/assets/coalIndiaProject/*.{png,jpg,jpeg,webp,svg}', { eager: true })
  ).map((module) => module.default);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto mt-12">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-[#1e3a8a] mb-4">
            Coal India Project<span className="text-orange-500">.</span>
          </h1>
          <p className="text-orange-500 font-medium">MAA PREMA FOUNDATION</p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {coalIndiaImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative group rounded-xl overflow-hidden shadow-md bg-white cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={100 * index}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Description */}
              <div className="p-4 bg-white text-center">
                <p className="text-gray-700 text-sm font-medium">
                  {descriptions[index % descriptions.length]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL WITH NAVIGATION, CAPTION, DOWNLOAD & CLOSE */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300"
            >
              ✕
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = coalIndiaImages.indexOf(selectedImage);
                const prevIndex = (currentIndex - 1 + coalIndiaImages.length) % coalIndiaImages.length;
                setSelectedImage(coalIndiaImages[prevIndex]);
              }}
              className="absolute left-6 text-white text-4xl hover:text-gray-300"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = coalIndiaImages.indexOf(selectedImage);
                const nextIndex = (currentIndex + 1) % coalIndiaImages.length;
                setSelectedImage(coalIndiaImages[nextIndex]);
              }}
              className="absolute right-6 text-white text-4xl hover:text-gray-300"
            >
              ›
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="text-center"
            >
              <img
                src={selectedImage}
                className="max-w-3xl max-h-[70vh] rounded-xl shadow-lg mx-auto"
              />

              {/* Caption */}
              <p className="text-white mt-4 text-lg font-medium">
                {descriptions[coalIndiaImages.indexOf(selectedImage) % descriptions.length]}
              </p>

              {/* Download Button */}
              <a
                href={selectedImage}
                download
                className="inline-block mt-4 px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 shadow-md"
              >
                Download Image
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CoalIndiaPage;
