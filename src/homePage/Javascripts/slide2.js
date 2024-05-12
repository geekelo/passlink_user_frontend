import React from 'react';
import infograpghic2 from '../../assets/infographic2.png';

function SlideTwo() {
  return (
    <div className="body-slide">
      <div className="slide-content">
        <h1 className="title">
          An effective event management portal.
        </h1>
        <div className="ticks-cta-section">
          <div className="ticks-section">
            <p>
              <span className="ticks">✔</span>
              <span>Get insights and analytics on event attendees</span>
            </p>
            <p>
              <span className="ticks">✔</span>
              <span>Get feedback on your private and public events</span>
            </p>
            <p>
              <span className="ticks">✔</span>
              <span>Let others know about your events & Limit access to registered attendees</span>
            </p>
            <p>
              <span className="ticks">✔</span>
              <span>Send reminders to registered attendees</span>
            </p>
          </div>
          <button className="btn" type="submit"><a href="v.com">FIND EVENTS</a></button>
        </div>
      </div>
      <div className="infographic-section">
        <img className="infographic" src={infograpghic2} alt="infographic" />
      </div>
    </div>
  );
}

export default SlideTwo;
