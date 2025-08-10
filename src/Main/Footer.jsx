import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-footer">
        <div className="about">
          <h3>ABOUT US:-</h3>
          <p>
            <strong>Kebora Trading Company Limited</strong> serves as the
            umbrella for a diverse portfolio of businesses, including diamond
            trading, machinery, gas supply, financial services and restaurant.
            We are committed to excellence, reliability, and fostering strong
            client relationships across all our operations.
          </p>
        </div>
        <div className="links">
          <div className="contact">
            <ul>
              <li>
                <NavLink to="/home" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contactus" onClick={() => window.scrollTo(0, 0)}>
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/policy" onClick={() => window.scrollTo(0, 0)}>
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="contact contact-flex">
            <div className="info">
              <p className="footer-social">
                <FaPhoneAlt /> +232 79343434
              </p>
              <p className="footer-social">
                <FaEnvelope /> keboraoxygen@gmail.com
              </p>
            </div>
            <div className="social-icons">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <span>Copyright © KEBORA TRADING COMPANY LIMITED</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
