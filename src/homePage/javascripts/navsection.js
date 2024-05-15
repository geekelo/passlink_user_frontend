import React from 'react';
import '../stylesheets/navsection.css';
import logo from '../../assets/passlink.png';

function NavSection() {
  return (
    <div className="navsection">
      <div className="logoSection">
        <img className="logo" src={logo} alt="logo" />
      </div>
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
