import { useState, useEffect } from 'react';

import imageSix from '../assets/images/six.jpeg'
import imageOne from '../assets/images/one.jpg'
import imageTwo from '../assets/images/two.webp'
import imageThree from '../assets/images/three.webp'
import imageFour from '../assets/images/four.webp'
import imageFive from '../assets/images/five.webp'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-[100vh] overflow-hidden">
      {/* Images */}
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0 brightness-50"
          />
        ))}
      </div>

      {/* Text Overlay - Responsive text sizes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-center md:text-right md:-translate-x-0 md:left-auto md:right-[10%] text-white z-10 w-[90%] md:w-auto px-4 md:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4">
          <span className="text-orange-500">MAA PREMA</span>
          <br />
          Foundation
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-4 md:mb-8">
          Patna <span className='text-[#1e3a8a] '>.</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg max-w-[300px] sm:max-w-[400px] md:max-w-xl mx-auto md:mx-0">
          Maa Prema Foundation was born on December 5, 2017 out of 
          the belief that equal opportunity is the cornerstone of 
          civilization.
        </p>
      </div>

      {/* Navigation Arrows - Responsive sizing and positioning */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 md:p-2 rounded-full"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 md:p-2 rounded-full"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Navigation Dots - Responsive positioning */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 md:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;