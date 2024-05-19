import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faEye,
  faBullseye,
  faClipboardList,
  faCogs,
  faEnvelope,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/desktop/infosection.css';
import '../stylesheets/mobile-tablets/infosectionMobile.css';
import data from '../data/data.json';
import InfoNav from './infonav';
import CopyButton from './copybtn';

// InfoSection component
function InfoSection({ location }) {
  // Get the current pathname from the location
  const pageLocation = useLocation();
  const { pathname } = location || pageLocation;

  // Scroll to the top of the page whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Define FontAwesome icons for each section
  const icons = {
    default: faThumbsUp,
    About: faInfoCircle,
    'Our Vision': faEye,
    'Our Mission': faBullseye,
    'Our Values': faClipboardList,
    Description: faCogs,
    'Reach Developer': faEnvelope,
    'Request Features': faEnvelope,
    'Request Developer services': faEnvelope,
    'Give Feedback': faEnvelope,
    Contact: faEnvelope,
  };

  // Get the content for the current page from the data
  const content = data.data[pathname];

  return (
    <div className="info-section">
      {/* Navigation component */}
      <InfoNav />

      {/* Page title with icon */}
      <h2 className="content-title">
        <FontAwesomeIcon icon={icons[content.title] || icons['Our Mission']} />
        &nbsp;
        {content.title}
      </h2>

      {/* Render each section */}
      {content.sections.map((section) => (
        <div className="section" key={section.id}>
          {/* Section title with icon */}
          <h3 className="section-title">
            <FontAwesomeIcon icon={icons[section.title] || icons.default} />
            &nbsp;
            {section.title}
          </h3>

          {/* Section content with copy button */}
          <p className="section-content">
            {section.content}
            <CopyButton textToCopy={section.content} />
          </p>
        </div>
      ))}
    </div>
  );
}

// Define the prop types for the component
InfoSection.propTypes = {
  location: PropTypes.string.isRequired,
};

export default InfoSection;
