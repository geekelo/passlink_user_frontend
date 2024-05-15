import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/footersection.css';

function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="column-one-text">
            <h6>Guests</h6>
            <p className="text-justify">
              With PassLink, guests no longer need to create accounts or fill
              out lengthy registration forms. Instead, they can simply present
              a passcode—generated upon registration—at the event, whether it&apos;s
              online or onsite.
            </p>
          </div>

          <div className="column-one-text">
            <h6>Organizations</h6>
            <p className="text-justify">
              From tracking registered guests and attendance to analyzing data and
              generating insightful reports, PassLink empowers organizers to make
              informed decisions and optimize their events for success.
            </p>
          </div>

          <div className="column-one-link">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <NavLink to="/about" className="links">About</NavLink>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/" className="links">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/" className="links">
                  Contribute
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/" className="links">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/" className="links">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>

      <div className="container">
        <div className="row">
          <div className="column-two">
            <p className="copyright-text">
              Copyright &copy; 2024 All Rights Reserved by &nbsp;
              <a href="https://geekelo.com.ng">Geekelo</a>
              .
            </p>
          </div>

          <div className="column-two">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="v.com" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a className="Facebook" href="v.com" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a className="twitter" href="v.com" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a className="linkedin" href="v.com" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </li>
              <li>
                <a className="email" href="mailto:efuelight12@gmail.com" aria-label="Email">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
