import React from 'react';
import infograpghic2 from '../../assets/infographic2.png';

// SlideTwo component representing the second slide
function SlideTwo() {
  return (
    <div className="body-slide">
      <div className="slide-content">
        {/* Title of the slide */}
        <h1 className="title">
          An effective event management portal.
        </h1>

        {/* Section containing ticks and call-to-action button */}
        <div className="ticks-cta-section">
          {/* Section with ticked benefits */}
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

          {/* Call-to-action button */}
          <button className="btn" type="submit">
            <a href="v.com">
              <span>ADD EVENT &nbsp;</span>
              <i className="material-icons">event</i>
            </a>
          </button>
        </div>
      </div>

      {/* Section containing infographic */}
      <div className="infographic-section">
        <img className="infographic" src={infograpghic2} alt="infographic" />
      </div>
    </div>
  );
}

export default SlideTwo;
