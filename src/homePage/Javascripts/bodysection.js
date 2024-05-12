import React from 'react';
import '../stylesheets/bodysection.scss';
import infograpghic1 from '../../assets/infographic1.png';

function BodySection() {
  return (
    <div className="body-section">
      <div>
        <span>P</span>
        <span>P</span>
      </div>
      <div className="body-slide">
        <div className="slide-content">
          <h1 className="title">
            Find online & onsite Events on PassLink
          </h1>
          <div className="ticks-cta-section">
            <div className="ticks-section">
              <p>
                <span className="ticks">✔</span>
                <span>Enhance your knowledge, skills, and career prospects</span>
              </p>
              <p>
                <span className="ticks">✔</span>
                <span>Participate in celeberations & social gatherings</span>
              </p>
              <p>
                <span className="ticks">✔</span>
                <span>Engage extensive collection of religious events</span>
              </p>
              <p>
                <span className="ticks">✔</span>
                <span>Access mentorship sessins & programs</span>
              </p>
            </div>
            <button className="btn" type="submit"><a href="v.com">FIND EVENTS</a></button>
          </div>
        </div>
        <div className="infographic-section">
          <img className="infographic" src={infograpghic1} alt="infographic" />
        </div>
      </div>
    </div>
  );
}

export default BodySection;
