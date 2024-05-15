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
      <NavSection />
      <Router>
        <Routes>
          <Route path="/" element={<LandingSection />} />
          <Route path="/about" element={<InfoSection />} />
          <Route path="/content" element={<InfoSection location="about" />} />
        </Routes>
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
