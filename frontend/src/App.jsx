import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from './Pages/HomePage';
import EventsPage from './Pages/EventsPage';
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
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
