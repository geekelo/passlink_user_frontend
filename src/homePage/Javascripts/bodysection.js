import React, { useState } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import '../stylesheets/bodysection.css';
import '../stylesheets/slides.scss';
import '../stylesheets/slidesMobile.scss';
import '../stylesheets/arrows.scss';
import SlideOne from './slide1';
import SlideTwo from './slide2';

function BodySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <SlideOne key={0} />,
    <SlideTwo key={1} />,
  ];

  const prevSlide = () => {
    setCurrentSlide(0);
    document.getElementsByClassName('arrow')[0].classList.remove('active-arrow');
    document.getElementsByClassName('arrow')[1].classList.add('active-arrow');
  };

  const nextSlide = () => {
    setCurrentSlide(1);
    document.getElementsByClassName('arrow')[1].classList.remove('active-arrow');
    document.getElementsByClassName('arrow')[0].classList.add('active-arrow');
  };

  return (
    <div className="body-section">
      <div className="arrow-section">
        <button type="button" className="arrow" onClick={prevSlide} aria-label="Previous Button"><MdArrowBack /></button>
        <button type="button" className="arrow active-arrow" onClick={nextSlide} aria-label="Next Button"><MdArrowForward /></button>
      </div>
      {slides[currentSlide]}
    </div>
  );
}

export default BodySection;
