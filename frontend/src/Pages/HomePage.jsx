import Carousel from "../Components/Carousel";
import AboutSection from "../Components/About";
import Impact from '../Components/Impact';
import Stories from '../Components/Stories';
import WhatWeDo from '../Components/WhatWeDo';

const HomePage = () => {
  return (
    <div>
         <Carousel />
         <AboutSection />
         <WhatWeDo />
         <Impact />
         <Stories />
    </div>
  )
}

export default HomePage