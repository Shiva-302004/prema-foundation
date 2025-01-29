import founderImage from '../assets/images/founder.jpg';

const Founder = () => {
    return (
        <section className="py-16 px-10 md:px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12" data-aos="fade-up">
                    <p className="text-orange-500 font-medium mb-2">MAA PREMA FOUNDATION</p>
                    <h2 className="text-5xl font-bold text-[#1e3a8a] mb-8">
                        Our Founder<span className="text-orange-500">.</span>
                    </h2>
                </div>

                <div className="bg-[#EEF2FF] rounded-3xl w-10/12 mx-auto p-8 md:p-16 border-4 border-[#2c54d8]" 
                    data-aos="fade-up" 
                    data-aos-delay="200"
                >
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/3 flex flex-col items-center" data-aos="fade-right">
                            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-orange-500 shadow-xl mb-4">
                                <img 
                                    src={founderImage} 
                                    alt="Prema Kumari" 
                                    className="w-full h-full object-cover brightness-150"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-1">Prema Kumari</h3>
                            <p className="text-gray-600 uppercase tracking-wider text-sm">Founder</p>
                        </div>

                        <div className="md:w-2/3" data-aos="fade-left">
                            <svg className="w-12 h-12 text-orange-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed italic">
                                The idea of Maa Prema Foundation was born very simply to bridge the gap between two sets of people - people who want to give, who want to try and make a difference along with those who are doing phenomenal work but don&apos;t know how to reach out to the people who want to support them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder; 