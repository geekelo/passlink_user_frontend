import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/desktop/navsection.css';
import '../stylesheets/mobile-tablets/navsectionMobile.css';
import logo from '../../assets/passlink.png';

// NavSection component for the navigation bar
function NavSection() {
  return (
    <div className="navsection">
      {/* Logo Section */}
      <NavLink to="/" className="logoSection">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      {/* Menu Section */}
      <div className="menuSection">
        {/* Mobile menu icons */}
        <p className="openHamburger menuIcons">Mobile icon</p>
        <p className="closeHamburger menuIcons">Close icon</p>
        {/* Menu items section */}
        <section className="menuItemsSection">
          {/* Link to Registered Events */}
          <a href="v.com" className="menuLinks">
            <span className="registered-events">Registered Events</span>
            &nbsp;
            <i className="material-icons registered-events-icon">event_available</i>
          </a>
        </section>
      </div>
    </div>
  );
}

export default NavSection;
