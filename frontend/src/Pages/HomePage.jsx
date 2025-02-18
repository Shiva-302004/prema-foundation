import Carousel from "../Components/Carousel";
import AboutSection from "../Components/About";
import Impact from '../Components/Impact';
import Stories from '../Components/Stories';
import WhatWeDo from '../Components/WhatWeDo';
import Values from '../Components/Values';
import Founder from '../Components/Founder';
import Contact from '../Components/Contact';
import Donation from '../Components/Donation';
import Events from '../Components/Events';
import Gallery from '../Components/Gallery';

const HomePage = () => {
  return (
    <div>
        
           <Carousel />
         <section id="about">
           <AboutSection />
         </section>
         <section id="impact">
           <Impact />
         </section>
         <section id="whatwedo">
           <WhatWeDo />
         </section>
         <section id="values">
           <Values/>           
         </section>
         <section id="events">
           <Events />
         </section>
         <section id="stories">
           <Stories />
         </section>
         {/* <section id="gallery">
           <Gallery />
         </section> */}
         <section id="founder">
           <Founder />
         </section>
         <section id="contact">
           <Contact />
         </section>
         <section id="donation">
           <Donation />
         </section>
         
    </div>
  )
}

export default HomePage