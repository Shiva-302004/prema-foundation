import './App.css';
import About from "./components/About"
import Events from "./components/Events"
import Testimonial from "./components/Testimonial"
import Gallery from "./components/Gallery"
import News from "./components/News"
function App() {
  return (
    <div className="App">
      <About/>
      <Events/>
      <Testimonial/>
      <Gallery/>
      <News/>
    </div>
  );
}

export default App;
