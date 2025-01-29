import contactImage2 from '../assets/images/contact.jpeg';

const Contact = () => {
    return (
        <section className="py-16 px-10 md:px-4" name="contact">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Content */}
                    <div className="lg:w-1/2" data-aos="fade-right">
                        <p className="text-orange-500 font-medium">Contact Us</p>
                        <h2 className="text-5xl font-bold text-[#1e3a8a] mb-4">
                            Easy to Contact us<span className="text-orange-500">.</span>
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Is there a problem finding your dream home? Need guide in buying first home? 
                            or need a consultation on residential issues? just contact us.
                        </p>

                        {/* Contact Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Call */}
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow" 
                                data-aos="fade-up" 
                                data-aos-delay="100"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#1e3a8a]">Call</h3>
                                        <p className="text-gray-600">+91 9431010013</p>
                                    </div>
                                </div>
                                <a href="tel:+919431010013" className="block text-center bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                                    Call Now
                                </a>
                            </div>

                            {/* Website */}
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow" 
                                data-aos="fade-up" 
                                data-aos-delay="200"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#1e3a8a]">Website</h3>
                                        <p className="text-gray-600">maapremafoundation.com</p>
                                    </div>
                                </div>
                                <a href="https://maapremafoundation.com" target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                                    Visit Now
                                </a>
                            </div>

                            {/* WhatsApp */}
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow" 
                                data-aos="fade-up" 
                                data-aos-delay="300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#1e3a8a]">WhatsApp</h3>
                                        <p className="text-gray-600">+91 9431010013</p>
                                    </div>
                                </div>
                                <a href="https://wa.me/919431010013" target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                                    Chat Now
                                </a>
                            </div>

                            {/* Mail */}
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow" 
                                data-aos="fade-up" 
                                data-aos-delay="400"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#1e3a8a]">Mail</h3>
                                        <p className="text-gray-600" title="maapremafoundation@gmail.com">
                                           
                                            <span className="block">maaprema....n@gmail.com</span>
                                        </p>
                                    </div>
                                </div>
                                <a href="mailto:maapremafoundation@gmail.com" className="block text-center bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                                    Mail us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Images */}
                    <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-left">
                        <img 
                            src={contactImage2} 
                            alt="Contact" 
                            className="w-full  rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 