import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className='container mx-auto mt-4'>
      <h1 className='font-normal text-base text-orange-600'>MAA PREMA FOUNDATION</h1>
      <h2 className='heading1'>About<span className='text-orange-600'>.</span></h2>
      <p className='about_text'>The Maa Prema Foundation was born on December 5, 2017 out of the belief that equal opportunity
          is the cornerstone of civilization. All human beings must have the same opportunity to succeed in life.
          All Human beings must nave, the same opportunity to succeed in life, irrespective of the circumstances
          they were born into. However, this is far from true.</p>

      <p className=' about_text'>    Maa Prema foundation is an organization which is active in the fields of women empowerment and 
           community health related issues and is active in organizing awareness and health camps related to 
            medical needs of the community especially underprivileged section of the society. The organization is 
           all active in organizing the women empowerment programs so that the women can be self-dependent. 
           The idea of this project
          is to educate the primary level children by selecting the eligible children from various panchayats of Bihar.
      </p>
      <div className="btn_center">
                    <button className="button download_button" >Download Brochure</button>
                </div>
    </div>
  )
}

export default About
