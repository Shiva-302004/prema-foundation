import React from 'react'
import classImage from '../assets/images/class.webp';

function AboutPage() {
    const handleDownload = () => {
        // Create a link element
        const link = document.createElement('a');
        link.href = '/MPF-Brochure.pdf';  // PDF should be in public folder
        link.download = 'Brochure.pdf'; // Name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <section className="py-16 px-10 md:px-4 max-w-7xl mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0">
        <div className='w-full md:w-3/4 flex flex-col justify-center' data-aos="fade-right">   
        {/* Header */}
        <div className="mb-12">
          <p className="text-orange-500 text-sm font-medium mb-2" data-aos="fade-up" data-aos-delay="100">
            MAA PREMA FOUNDATION
          </p>
          <h2 className="text-6xl font-bold text-[#1e3a8a] mb-2" data-aos="fade-up" data-aos-delay="200">
            About<span className="text-orange-500">.</span>
          </h2>
        </div>
  
        {/* Content */}
        <div className="space-y-8 text-gray-900 text-lg dark:text-gray-900" data-aos="fade-up" data-aos-delay="300">
          <p className="leading-relaxed">
            The Maa Prema Foundation was born on December 5, 2017 out of the belief that equal opportunity is the cornerstone of civilization. All human beings must have the same opportunity to succeed in life. All Human beings must have, the same opportunity to succeed in life, irrespective of the circumstances they were born into. However, this is far from true.
          </p>
  
          <p className="leading-relaxed">
            Maa Prema foundation is an organization which is active in the fields of women empowerment and community health related issues and is active in organizing awareness and health camps related to medical needs of the community especially underprivileged section of the society. The organization is all active in organizing the women empowerment programs so that the women can be self-dependent. The idea of this project is to educate the primary level children by selecting the eligible children from various panchayats of Bihar.
          </p>
  
          {/* Download Button */}
          <div className="pt-8 text-center flex justify-center">
            <button onClick={handleDownload} className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
              Download Brochure
            </button>
          </div>
        </div>
        </div>
        <div className='flex justify-center items-center' data-aos="fade-left">
            <img src={classImage} alt="class" className="h-3/4 rounded-3xl shadow-2xl border-2 border-orange-500 p-2" />
        </div>

      </section>
  )
}

export default AboutPage