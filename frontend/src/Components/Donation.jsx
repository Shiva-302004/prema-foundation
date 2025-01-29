import { useState, useEffect } from 'react';

const DonationModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to restore scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-[#000033] rounded-2xl w-9/12 lg:w-4/12 max-w-2xl mt-24 text-[#1e3a8a]">
                <div className="p-6 border-b">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold text-orange-500">Bank Account Details</h3>
                        <button 
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-200 rounded-lg">
                            <span className="font-semibold text-orange-500 ">Bank Name</span>
                            <span className="font-bold">Punjab National Bank</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-200 rounded-lg">
                            <span className="font-semibold text-orange-500">Account Name</span>
                            <span className="font-bold">Maa Prema Foundation</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-200 rounded-lg">
                            <span className="font-semibold text-orange-500">Bank Name</span>
                            <span className="font-bold">State Bank of India</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-200 rounded-lg">
                            <span className="font-semibold text-orange-500">Account Number</span>
                            <span className="font-bold">39819703195</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-200 rounded-lg">
                            <span className="font-semibold text-orange-500">IFSC Code</span>
                            <span className="font-bold">SBIN0001474</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-200 rounded-lg">
                            <span className="font-semibold text-orange-500  ">Branch</span>
                            <span className="font-bold">PATNA MAIN BRANCH</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Donation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className=" md:px-4 my-10">
            <div className="flex border-8 border-[#1e3a8a] rounded-4xl justify-center items-center bg-[#2c54d8] text-white px-8 py-10 md:w-8/12 w-11/12 mx-auto">

            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Help Us Make the World A Better Place!
                </h2>
                <h3 className="text-2xl md:text-4xl font-bold mb-8">
                    Join Our Hands To Save Lives!
                </h3>
                <p className="text-base md:text-xl mb-10 opacity-90">
                    Support us at the Maa Prema Foundation by donating through bank account 
                    and contribute to our mission to provide the masses throughout the 
                    Patna region with facilities and resources.
                </p>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-[#2c54d8] px-8 py-3 rounded-lg font-semibold text-lg 
                             hover:bg-opacity-90 transition-colors duration-300 shadow-lg"
                >
                    Donate
                </button>
            </div>

            <DonationModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
            </div>

        </section>
    );
};

export default Donation; 