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
  const openDropdown = () => {
    const openDropdown = document.querySelector('.opendropdown-icon');
    const closeDropdown = document.querySelector('.closedropdown-icon');
    const dropdown = document.querySelector('.dropdown-section');
    openDropdown.classList.add('hide');
    dropdown.classList.remove('hide');
    dropdown.classList.add('show');
    closeDropdown.classList.remove('hide');
    closeDropdown.classList.add('show');
  };

  const closeDropdown = () => {
    const openDropdown = document.querySelector('.opendropdown-icon');
    const closeDropdown = document.querySelector('.closedropdown-icon');
    const dropdown = document.querySelector('.dropdown-section');
    openDropdown.classList.remove('hide');
    openDropdown.classList.add('show');
    dropdown.classList.remove('show');
    dropdown.classList.add('hide');
    closeDropdown.classList.add('hide');
  };

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
            <button type="button" onClick={openDropdown} aria-label="nav-open" className="infonav-btn opendropdown-icon">
              <FontAwesomeIcon icon={faBars} className="infonav-icons" />
            </button>
            <button type="button" onClick={closeDropdown} aria-label="nav-close" className="infonav-btn closedropdown-icon hide">
              <FontAwesomeIcon icon={faTimes} className="infonav-icons" />
            </button>
          </div>
          <div className="dropdown-section hide">
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
