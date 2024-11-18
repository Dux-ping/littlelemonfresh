import React from "react";
import "./Footer.css";
import logo from "../assets/images/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
import scrollWithOffset from "../components/scrollWithOffset";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <Link smooth to="/#home" className="logo-link">
            <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
          </Link>
        </div>
        <div className="footer-column sitemap-column">
          <h3>Sitemap</h3>
          <ul>
            <li>
              <Link smooth to="/#home" scroll={scrollWithOffset}>
                Home
              </Link>
            </li>
            <li>
              <Link smooth to="/#about" scroll={scrollWithOffset}>
                About Us
              </Link>
            </li>
            <li>
              <Link smooth to="/#menu">
                Menu
              </Link>
            </li>
            <li>
              <Link smooth to="/#reservation">
                Reservation
              </Link>
            </li>
            <li>
              <Link smooth to="/#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column contact-column">
          <h3>Contact Us</h3>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Main Street, Chicago, IL 80800
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> Email: info@littlelemon.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> Phone: (123) 456-7890
          </p>
        </div>
        <div className="footer-column">
          <h3>Connect with Us</h3>
          <ul className="social-media">
            <li>
              <a href="https://www.facebook.com">
                {" "}
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
