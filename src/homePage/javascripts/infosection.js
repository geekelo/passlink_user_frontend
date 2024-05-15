import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faEye,
  faBullseye,
  faClipboardList,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/infosection.css';
import data from '../data/data.json';
import InfoNav from './infonav';

function InfoSection({ location }) {
  const pageLocation = useLocation();
  const { pathname } = location || pageLocation;

  // Define FontAwesome icons for each section
  const icons = {
    About: faInfoCircle,
    'Our Vision': faEye,
    'Our Mission': faBullseye,
    'Our Values': faClipboardList,
    Description: faCogs,
  };

  const content = data.data[pathname];
  return (
    <div className="info-section">
      <InfoNav />
      <h2 className="content-title">
        <FontAwesomeIcon icon={icons[content.title]} />
        &nbsp;
        {content.title}
      </h2>
      { content.sections.map((section) => (
        <div className="section" key={section.id}>
          <h3 className="section-title">
            <FontAwesomeIcon icon={icons[section.title]} />
            &nbsp;
            {section.title}
          </h3>
          <p className="section-content">{section.content}</p>
        </div>
      ))}
    </div>
  );
}

InfoSection.propTypes = {
  location: PropTypes.string.isRequired,
};

export default InfoSection;
