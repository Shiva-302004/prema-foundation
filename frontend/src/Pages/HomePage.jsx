import Carousel from "../Components/Carousel";
import AboutSection from "../Components/About";
import Impact from '../Components/Impact';
import Stories from '../Components/Stories';
import WhatWeDo from '../Components/WhatWeDo';
import Values from '../Components/Values';

const HomePage = () => {
  return (
    <div>
         <Carousel />
         <AboutSection />
         <Impact />
         <WhatWeDo />
        <Values/>           
         <Stories />
    </div>
  )
}

export default HomePage