import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    // Import all gallery images
    const galleryImages = Object.values(
        import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true })
    ).map(module => module.default);

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-16 px-10 md:px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12" data-aos="fade-up">
                    <p className="text-orange-500 font-medium mb-2">MAA PREMA FOUNDATION</p>
                    <h2 className="text-5xl font-bold text-[#1e3a8a]">
                        Our Gallery<span className="text-orange-500">.</span>
                    </h2>
                </div>

                {/* Gallery Container */}
                <div className="relative bg-gray-200 rounded-3xl" data-aos="fade-up" data-aos-delay="200">
                    {/* Scroll Buttons */}
                    <button 
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    {/* Scrollable Container */}
                    <div 
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 p-5 scroll-smooth hide-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {galleryImages.slice(0, 8).map((image, index) => (
                            <div 
                                key={index}
                                className="flex-none w-[300px] bg-white rounded-lg shadow-lg overflow-hidden group"
                                data-aos="fade-up"
                                data-aos-delay={300 + (index * 100)}
                            >
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={image} 
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-[250px] object-cover transform group-hover:scale-110 transition duration-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-8" data-aos="fade-up" data-aos-delay="400">
                    <Link 
                        to="/gallery" 
                        className="bg-[#1e3a8a] hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center gap-2"
                    >
                        View All Gallery
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Gallery; 