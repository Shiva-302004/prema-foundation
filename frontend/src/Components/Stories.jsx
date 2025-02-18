import { useRef } from 'react';
import impactImage from '../assets/images/contact.webp';
import news1 from "../assets/news/news1.webp"
import news2 from "../assets/news/news2.webp"
import news3 from "../assets/news/news3.webp"
import news4 from "../assets/news/news4.webp"
import news5 from "../assets/news/news5.webp"
import news6 from "../assets/news/news6.webp"
import news7 from "../assets/news/news7.webp"
import { Link } from 'react-router-dom';

const Stories = () => {
    const scrollRef = useRef(null);

    const stories = [
        {
            id: 1,
            image: impactImage,
            title: "Har Ghar Tiranga Campaign",
            
        },
        {
            id: 2,
            image: news1,
            title: "Self Defence Training Camp for Girls",
          
        },
        {
            id: 3,
            image: news2,
            title: "Self Defence for Eve Teasing",
          
        },
        {
            id: 4,
            image: news3,
            title: "Closing Ceremony of Self Defence Camp",
            
        },
        {
            id: 5,
            image: news4,
            title: "Mithila Painting Workshop",
          
        },
        {
            id: 6,
            image: news5,
            title: "Handmade Craft & Mithila Painting Workshop",
          
        },
        {
            id: 7,
            image: news6,
            title: "Self Defence Training Camp for Girls",
          
        },
        {
            id: 8,
            image: news7,
            title: "Self Defence Training Camp for Girls",
          
        },
        // Add more stories as needed
    ];

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
                        Popular Stories & News<span className="text-orange-500">.</span>
                    </h2>
                </div>

                {/* Stories Container */}
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
                        className="flex overflow-x-auto gap-6 p-5 scroll-smooth hide-scrollbar "
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {stories.map((story, index) => (
                            <div 
                                key={story.id}
                                className="flex-none w-[300px] bg-white rounded-lg shadow-lg overflow-hidden"
                                data-aos="fade-up"
                                data-aos-delay={300 + (index * 100)}
                            >
                                <img 
                                    src={story.image} 
                                    alt={story.title}
                                    className="w-full h-[250px]  rounded-xl"
                                />
                                <div className="p-6 ">
                                    <h3 className="text-base font-bold text-[#1e3a8a] mb-2">
                                        {story.title}
                                    </h3>
                                    <p className="text-gray-600">{story.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Add this after the stories container div */}
                <div className="flex justify-center mt-8" data-aos="fade-up" data-aos-delay="400">
                    <Link 
                        to="/news" 
                        className="bg-[#1e3a8a] hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center gap-2"
                    >
                        View All Stories
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Stories; 