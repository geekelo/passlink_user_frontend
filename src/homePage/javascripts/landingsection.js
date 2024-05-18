import React, { useState } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import '../stylesheets/desktop/bodysection.css';
import '../stylesheets/desktop/slides.scss';
import '../stylesheets/mobile-tablets/slidesMobile.scss';
import '../stylesheets/desktop/arrows.scss';
import SlideOne from './slide1';
import SlideTwo from './slide2';

// LandingSection component for displaying slides with navigation arrows
function LandingSection() {
  // State to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slide components
  const slides = [
    <SlideOne key={0} />,
    <SlideTwo key={1} />,
  ];

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide(0); // Set to the first slide
    document.getElementsByClassName('arrow')[0].classList.remove('active-arrow'); // Deactivate the previous arrow
    document.getElementsByClassName('arrow')[1].classList.add('active-arrow'); // Activate the next arrow
  };

  // Function to navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide(1); // Set to the second slide
    document.getElementsByClassName('arrow')[1].classList.remove('active-arrow'); // Deactivate the next arrow
    document.getElementsByClassName('arrow')[0].classList.add('active-arrow'); // Activate the previous arrow
  };

  return (
    <div className="body-section">
      {/* Navigation arrows */}
      <div className="arrow-section">
        <button
          type="button"
          className="arrow"
          onClick={prevSlide}
          aria-label="Previous Button"
        >
          <MdArrowBack />
        </button>
        <button
          type="button"
          className="arrow active-arrow"
          onClick={nextSlide}
          aria-label="Next Button"
        >
          <MdArrowForward />
        </button>
      </div>
      {/* Render the current slide */}
      {slides[currentSlide]}
    </div>
  );
}

export default LandingSection;
