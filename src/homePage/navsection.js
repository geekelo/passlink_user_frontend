import React from 'react';
import '../stylesheets/homePage/navsection.css';
import logo from '../assets/passlink.png';

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
          <p><a href="v.com" className="menuLinks">Registered Events</a></p>
        </section>
      </div>
    </div>
  );
}

export default NavSection;
