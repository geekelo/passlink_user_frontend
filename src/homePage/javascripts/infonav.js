import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import data from '../data/datalist.json';
import '../stylesheets/desktop/infonav.css';

// InfoNav component
function InfoNav() {
  // Function to open the dropdown menu
  const openDropdown = () => {
    const openDropdown = document.querySelector('.opendropdown-icon');
    const closeDropdown = document.querySelector('.closedropdown-icon');
    const dropdown = document.querySelector('.dropdown-section');

    // Hide the open icon and show the close icon and dropdown menu
    openDropdown.classList.add('hide');
    dropdown.classList.remove('hide');
    dropdown.classList.add('show');
    closeDropdown.classList.remove('hide');
    closeDropdown.classList.add('show');
  };

  // Function to close the dropdown menu
  const closeDropdown = () => {
    const openDropdown = document.querySelector('.opendropdown-icon');
    const closeDropdown = document.querySelector('.closedropdown-icon');
    const dropdown = document.querySelector('.dropdown-section');

    // Show the open icon and hide the close icon and dropdown menu
    openDropdown.classList.remove('hide');
    openDropdown.classList.add('show');
    dropdown.classList.remove('show');
    dropdown.classList.add('hide');
    closeDropdown.classList.add('hide');
  };

  return (
    <div className="infoNav-section">
      {/* Home button */}
      <div className="back-button">
        <NavLink to="/" className="links infonav-icons">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
      </div>

      {/* Dropdown menu buttons */}
      <div className="back-button">
        <div>
          {/* Button to open the dropdown menu */}
          <button
            type="button"
            onClick={openDropdown}
            aria-label="nav-open"
            className="infonav-btn opendropdown-icon"
          >
            <FontAwesomeIcon icon={faBars} className="infonav-icons" />
          </button>

          {/* Button to close the dropdown menu */}
          <button
            type="button"
            onClick={closeDropdown}
            aria-label="nav-close"
            className="infonav-btn closedropdown-icon hide"
          >
            <FontAwesomeIcon icon={faTimes} className="infonav-icons" />
          </button>
        </div>

        {/* Dropdown menu */}
        <div className="dropdown-section hide">
          {data.datalist.map((item) => (
            <NavLink key={item.id} to={item.url} className="infonav-links links">
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoNav;
