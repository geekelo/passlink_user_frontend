import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavSection from './homePage/javascripts/navsection';
import LandingSection from './homePage/javascripts/landingsection';
import FooterSection from './homePage/javascripts/footersection';
import InfoSection from './homePage/javascripts/infosection';

function App() {
  return (
    <div className="App">
      <Router>
        <NavSection />
        <Routes>
          <Route path="/" element={<LandingSection />} />
          <Route path="/about" element={<InfoSection />} />
          <Route path="/contact" element={<InfoSection />} />
          <Route path="/privacy-policy" element={<InfoSection />} />
          <Route path="/features" element={<InfoSection />} />
          <Route path="/faqs" element={<InfoSection />} />
        </Routes>
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
