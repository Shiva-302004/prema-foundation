import { useState } from 'react';
import valuesImage from '../assets/images/values.webp';

const Values = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const values = [
        {
            title: "Approach",
            content: "We must do things because they make sense to do, and not simply because that is how everyone else does it. Blind faith is the enemy of all innovation."
        },
        {
            title: "Passion",
            content: "Working with a 'burning desire' to make a difference is our greatest motivator adding value. We will constantly improve ourselves through our processes and technology to provide the best experience to ourselves through our processes and technology to provide the best experience to our donors."
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
            content: "We believe that every individual must demonstrate the willingness to share one's fortunes with those less privileged."
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
                    <div className="lg:w-1/2 flex justify-center items-center" data-aos="fade-right">
                        <img 
                            src={valuesImage} 
                            alt="Our Values" 
                            className="h-3/4 rounded-4xl shadow-2xl"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div className="lg:w-1/2 flex flex-col justify-center" data-aos="fade-left">
                        <p className="text-orange-500 font-medium mb-2">MAA PREMA FOUNDATION</p>
                        <h2 className="text-5xl font-bold text-[#1e3a8a] mb-8">
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
                                    className={`border border-gray-200 rounded-lg overflow-hidden  ${                                         openIndex === index ? 'shadow-lg shadow-[#1e3a8a]' : ''
                                            }`} 
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50"
                                    >
                                        <span className="text-lg font-bold  text-[#1e3a8a]">
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
                                        <div className="p-4 bg-gray-50 ">
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