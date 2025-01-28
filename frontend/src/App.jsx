import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
      <Router >
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
