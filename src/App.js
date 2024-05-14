import React from 'react';
import './App.css';
import NavSection from './homePage/Javascripts/navsection';
import BodySection from './homePage/Javascripts/bodysection';
import FooterSection from './homePage/Javascripts/footersection';

function App() {
  return (
    <div className="App">
      <NavSection />
      <BodySection />
      <FooterSection />
    </div>
  );
}

export default App;
