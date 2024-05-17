import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/desktop/navsection.css';
import '../stylesheets/mobile-tablets/navsectionMobile.css';
import logo from '../../assets/passlink.png';

function NavSection() {
  return (
    <div className="navsection">
      <NavLink to="/" className="logoSection">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      <div className="menuSection">
        <p className="openHamburger menuIcons">Mobile icon</p>
        <p className="closeHamburger menuIcons">Close icon</p>
        <section className="menuItemsSection">
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
