import { useState, useEffect, useRef } from 'react';

const Impact = () => {
    const [charitable, setCharitable] = useState(0);
    const [programs, setPrograms] = useState(0);
    const [donations, setDonations] = useState(0);
    const [people, setPeople] = useState(0);
    const sectionRef = useRef(null);

    const animateValue = (start, end, duration, setValue) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setValue(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    animateValue(0, 3120, 2000, setCharitable);
                    animateValue(0, 1195, 2000, setPrograms);
                    animateValue(0, 23150, 2000, setDonations);
                    animateValue(0, 17542, 2000, setPeople);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-16 px-4 bg-gray-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-orange-500 font-medium mb-2">MAA PREMA FOUNDATION</p>
                    <h2 className="text-4xl font-bold text-[#1e3a8a]">
                        Impact<span className="text-orange-500">.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="p-6">
                        <h3 className="text-5xl font-bold text-orange-500 mb-4">{charitable}+</h3>
                        <p className="text-[#1e3a8a] font-medium">Charitable</p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-5xl font-bold text-orange-500 mb-4">{programs}+</h3>
                        <p className="text-[#1e3a8a] font-medium">Programs</p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-5xl font-bold text-orange-500 mb-4">{donations}+</h3>
                        <p className="text-[#1e3a8a] font-medium">Collected Donations</p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-5xl font-bold text-orange-500 mb-4">{people}+</h3>
                        <p className="text-[#1e3a8a] font-medium">People Served</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact; 