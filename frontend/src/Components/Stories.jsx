import { useRef } from 'react';
import impactImage from '../assets/images/contact.jpeg';


const Stories = () => {
    const scrollRef = useRef(null);

    const stories = [
        {
            id: 1,
            image: impactImage,
            title: "Self Defence Training Camp for Girls",
            date: "Bihar Mahila Ayog, 24-07-2018",
        },
        {
            id: 2,
            image: impactImage,
            title: "Self Defence Training Camp for Girls",
            date: "Bihar Mahila Ayog, 24-07-2018",
        },
        {
            id: 3,
            image: impactImage,
            title: "Self Defence Training Camp for Girls",
            date: "Bihar Mahila Ayog, 24-07-2018",
        },
        {
            id: 4,
            image: impactImage,
            title: "Self Defence Training Camp for Girls",
            date: "Bihar Mahila Ayog, 24-07-2018",
        },
        {
            id: 5,
            image: impactImage,
            title: "Self Defence Training Camp for Girls",
            date: "Bihar Mahila Ayog, 24-07-2018",
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
                <div className="mb-12">
                    <p className="text-orange-500 font-medium mb-2">MAA PREMA FOUNDATION</p>
                    <h2 className="text-5xl font-bold text-[#1e3a8a]">
                        Popular Stories & News<span className="text-orange-500">.</span>
                    </h2>
                </div>

                {/* Stories Container */}
                <div className="relative bg-gray-200 rounded-3xl">
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
                        {stories.map((story) => (
                            <div 
                                key={story.id}
                                className="flex-none w-[300px] md:w-[300px] bg-white rounded-lg overflow-hidden shadow-lg  p-2"
                            >
                                <img 
                                    src={story.image} 
                                    alt={story.title}
                                    className="w-full h-[250px] object-cover rounded-xl"
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
            </div>
        </section>
    );
};

export default Stories; 