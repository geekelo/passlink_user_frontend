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
  faEnvelope,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/desktop/infosection.css';
import '../stylesheets/mobile-tablets/infosectionMobile.css';
import data from '../data/data.json';
import InfoNav from './infonav';
import CopyButton from './copybtn';

function InfoSection({ location }) {
  const pageLocation = useLocation();
  const { pathname } = location || pageLocation;

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
            <FontAwesomeIcon icon={icons[section.title] || icons.default} />
            &nbsp;
            {section.title}
          </h3>
          <p className="section-content">
            {section.content}
            <CopyButton textToCopy={section.content} />
          </p>
        </div>
      ))}
    </div>
  );
}

InfoSection.propTypes = {
  location: PropTypes.string.isRequired,
};

export default InfoSection;
