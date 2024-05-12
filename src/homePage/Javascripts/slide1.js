import React from 'react';
import infograpghic1 from '../../assets/infographic1.png';

function SlideOne() {
  return (
    <div className="body-slide">
      <div className="slide-content">
        <h1 className="title">
          Find online & onsite events on PassLink
        </h1>
        <div className="ticks-cta-section">
          <div className="ticks-section">
            <p>
              <span className="ticks">✔</span>
              <span>Enhance your knowledge, skills, and career prospects</span>
            </p>
            <p>
              <span className="ticks">✔</span>
              <span>Participate in celebrations & social gatherings</span>
            </p>
            <p>
              <span className="ticks">✔</span>
              <span>Engage extensive collection of religious events</span>
            </p>
            <p>
              <span className="ticks">✔</span>
              <span>Access mentorship sessions & programs</span>
            </p>
          </div>
          <button className="btn" type="submit">
            <a href="v.com">
              <span>FIND EVENTS &nbsp;</span>
              <i className="material-icons">travel_explore</i>
            </a>
          </button>
        </div>
      </div>
      <div className="infographic-section">
        <img className="infographic" src={infograpghic1} alt="infographic" />
      </div>
    </div>
  );
}

export default SlideOne;
