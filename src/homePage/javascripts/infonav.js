import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import data from '../data/datalist.json';
import '../stylesheets/infonav.css';

function InfoNav() {
  return (
    <div className="infoNav-section">
      <div className="back-button">
        <NavLink to="/" className="links infonav-icons">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
      </div>
      <div className="back-button">
        <div>
          <div>
            <button type="button" aria-label="nav-open" className="infonav-btn">
              <FontAwesomeIcon icon={faBars} className="infonav-icons" />
            </button>
            <button type="button" aria-label="nav-close" className="infonav-btn">
              <FontAwesomeIcon icon={faTimes} className="infonav-icons" />
            </button>
          </div>
          <div className="dropdown-section">
            {data.datalist.map((item) => (
              <NavLink key={item.id} to={item.url} className="infonav-links links">
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoNav;
