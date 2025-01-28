import { FaBook, FaHeartbeat, FaFistRaised, FaFileAlt, FaParachuteBox, FaHandsHelping } from 'react-icons/fa';

const WhatWeDo = () => {
    const programs = [
        {
            icon: <FaBook className="w-12 h-12 text-[#f4d03f]" />,
            title: "EDUCATION",
            description: "Education, nutrition and holistic development of children",
            color: "text-[#f4d03f]",
            bgColor: "bg-[#f4d03f]/10",
        },
        {
            icon: <FaHeartbeat className="w-12 h-12 text-[#af7ac5]" />,
            title: "HEALTHCARE",
            description: "Taking healthcare services to doorsteps of hard to reach communities",
            color: "text-[#af7ac5]",
            bgColor: "bg-[#af7ac5]/10",
        },
        {
            icon: <FaFistRaised className="w-12 h-12 text-[#75b5c4]" />,
            title: "WOMEN EMPOWERMENT",
            description: "Empowering adolescent girls & women through community engagement",
            color: "text-[#75b5c4]",
            bgColor: "bg-[#75b5c4]/10",
        },
        {
            icon: <FaFileAlt className="w-12 h-12 text-[#e8b4a9]" />,
            title: "LIVELIHOOD",
            description: "Skill training and placement support for underprivileged youth",
            color: "text-[#e8b4a9]",
            bgColor: "bg-[#e8b4a9]/10",
        },
        {
            icon: <FaParachuteBox className="w-12 h-12 text-[#82e0aa]" />,
            title: "EMPOWERING GRASSROOTS",
            description: "Helping community-based organizations become locally sustainable",
            color: "text-[#82e0aa]",
            bgColor: "bg-[#82e0aa]/10",
        },
        {
            icon: <FaHandsHelping className="w-12 h-12 text-[#f1948a]" />,
            title: "DISASTER RESPONSE",
            description: "Reach out and respond to the needs of the disaster-affected people",
            color: "text-[#f1948a]",
            bgColor: "bg-[#f1948a]/10",
        },
    ];

    return (
        <section className="py-16 px-10 md:px-4">
            <div className="max-w-7xl mx-auto">
                {/* What We Do Section */}
                <div className="mb-20">
                    <p className="text-orange-500 font-medium mb-2">MAA PREMA FOUNDATION</p>
                    <h2 className="text-5xl font-bold text-[#1e3a8a] mb-8">
                        What we do<span className="text-orange-500">.</span>
                    </h2>
                    <p className="text-lg text-gray-600  w-full">
                        Maa Prema Foundation is a giving platform that allows you to support a cause of your choice from the NGOs that have been evaluated for transparency and credibility. We tell you exactly where your money went and also give you proof of it through donation reports. We have reviewed hundreds of non - profit organizations from all over India to identify and list the ones that meet our Give assured criteria. We work for a host of causes ranging from child welfare and education, blood donation, and women&apos;s empowerment and many others.
                    </p>
                </div>

                {/* Our Programs Section */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-center text-[#1e3a8a]  mb-16">OUR PROGRAMMES<span className="text-orange-500 text-5xl">{""}.</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <div 
                                key={index} 
                                className={`${program.bgColor} p-6 rounded-xl transition-transform duration-300 hover:scale-105`}
                            >
                                <div className="mb-4">
                                    {program.icon}
                                </div>
                                <h3 className={`${program.color} text-xl font-bold mb-2`}>
                                    {program.title}
                                </h3>
                                <p className="text-gray-600">
                                    {program.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo; 