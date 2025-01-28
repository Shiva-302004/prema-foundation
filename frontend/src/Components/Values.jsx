import { useState } from 'react';
import valuesImage from '../assets/images/values.jpeg';

const Values = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const values = [
        {
            title: "Approach",
            content: "We believe in a systematic and professional approach to addressing social issues. Our methods are research-based and result-oriented."
        },
        {
            title: "Passion",
            content: "Our work is driven by passion for social change. We are committed to making a real difference in people's lives through dedicated service."
        },
        {
            title: "Accountability",
            content: "We maintain complete transparency in our operations and are accountable to our donors, beneficiaries, and stakeholders."
        },
        {
            title: "Deserve our needs",
            content: "We believe every individual deserves access to basic needs and opportunities for growth, regardless of their background."
        },
        {
            title: "Sacrifice",
            content: "Our team works with dedication and selflessness, often going beyond the call of duty to serve those in need."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-10 md:px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left side - Image */}
                    <div className="lg:w-1/2">
                        <div className="rounded-3xl overflow-hidden">
                            <img 
                                src={valuesImage} 
                                alt="Our Values" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="lg:w-1/2">
                        <p className="text-orange-500 font-medium mb-2">MAA PREMA FOUNDATION</p>
                        <h2 className="text-5xl font-bold text-[#1e3a8a] mb-4">
                            Our Values<span className="text-orange-500">.</span>
                        </h2>
                        <p className="text-gray-600 mb-8">
                            We always ready to help by providing the best service.
                        </p>

                        {/* Accordion */}
                        <div className="space-y-4">
                            {values.map((value, index) => (
                                <div 
                                    key={index}
                                    className="border border-gray-200 rounded-lg overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50"
                                    >
                                        <span className="text-lg font-semibold text-[#1e3a8a]">
                                            {value.title}
                                        </span>
                                        <svg
                                            className={`w-6 h-6 transition-transform duration-200 ${
                                                openIndex === index ? 'transform rotate-180' : ''
                                            }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        className={`transition-all duration-200 ease-in-out ${
                                            openIndex === index
                                                ? 'max-h-40 opacity-100'
                                                : 'max-h-0 opacity-0'
                                        } overflow-hidden`}
                                    >
                                        <div className="p-4 bg-gray-50">
                                            <p className="text-gray-600">
                                                {value.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values; 