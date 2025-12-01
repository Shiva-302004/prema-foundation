import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from './Pages/HomePage';
import EventsPage from './Pages/EventsPage';
import OpeningsPage from './Pages/OpeningsPage';
import NewsPage from './Pages/NewsPage';
import GalleryPage from './Pages/GalleryPage';
import AboutPage from './Pages/AboutPage';
import CoalIndiaPage from './Pages/CoalIndiaPage';
import ContactPage from './Pages/ContactPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease',
    });
  }, []);

  return (
    <ThemeProvider>
      <Router basename="/">
        <div className="min-h-screen bg-white  transition-colors duration-200">
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/events" element={<EventsPage />} />
            <Route path="/openings" element={<OpeningsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/coal-proj" element={<CoalIndiaPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
