import React, { useState } from "react";
import "./Header.css";
import myImage from "../Image/15.jpeg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handlecontact = () => {
    navigate("/contactus");
  };

  return (
    <div className="header-main-div">
      <div className="header-container">
        {/* Top Navigation */}
        <div className="navbar-firstline">
          <div className="navbar-firstline-left">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              HOME
            </NavLink>
            <select
              className={
                location.pathname.startsWith("/kebora") ? "active" : ""
              }
              value={location.pathname}
              onChange={(e) => {
                navigate(e.target.value);
              }}
            >
              <option
                value="/kebora-diamond"
                className={
                  location.pathname === "/kebora-diamond" ? "active" : ""
                }
              >
                KEBORA DIAMOND
              </option>
              <option
                value="/kebora-machines"
                className={
                  location.pathname === "/kebora-machines" ? "active" : ""
                }
              >
                KEBORA MACHINES
              </option>
              <option
                value="/kebora-gas-supply"
                className={
                  location.pathname === "/kebora-gas-supply" ? "active" : ""
                }
              >
                KEBORA GAS SUPPLY
              </option>
              <option
                value="/kebora-finance"
                className={
                  location.pathname === "/kebora-finance" ? "active" : ""
                }
              >
                KEBORA FINANCE
              </option>
            </select>
            {/* <NavLink
              to="/kebora-gas-supply"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              KEBORA GAS SUPPLY
            </NavLink>
            <NavLink
              to="/kebora-finance"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              KEBORA FINANCE
            </NavLink> */}
            <NavLink
              to="/dhl"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              DHL EXPRESS
            </NavLink>
            <NavLink
              to="/carrental"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CAR RENTAL
            </NavLink>
            <NavLink
              to="/internationalflight"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              FLIGHT BOOKING
            </NavLink>
            <NavLink
              to="/tablic-restaurants"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              KEBORA TABLIC RESTAURANTS
            </NavLink>
            <NavLink
              to="/photogallery"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              PHOTO GALLERY
            </NavLink>
            <NavLink
              to="/teammember"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              TEAM MEMBER
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CONTACT US
            </NavLink>
          </div>
          <div className="navbar-firstline-right">
            <a href="mailto:keboraoxygen@gmail.com" className="navbar-email">
              keboraoxygen@gmail.com
            </a>
          </div>
        </div>

        {/* Second Line with Logo and Search */}
        <div className="navbar-secondline">
          <div className="navbar-second hide-on-mobile">
            {/* <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search..."
                className="navbar-searchbar"
              />
              <span className="search-icon">
                <FaSearch />
              </span>
            </div> */}
          </div>

          <div className="navbar-second">
            <img src={myImage} alt="Logo" />
          </div>

          <div className="navbar-secondline-right hide-on-mobile">
            <button className="navbar-contact-button" onClick={handlecontact}>
              Contact Us
            </button>
          </div>

          <div className="menu-icon" onClick={handleMenuToggle}>
            ☰
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu-overlay" onClick={handleMenuClose}>
            <div
              className="mobile-menu slide-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-menu-header">
                {/* <input
                  type="text"
                  placeholder="Search..."
                  className="mobile-search"
                />
                <span className="mobile-search-icon">
                  <FaSearch />
                </span> */}
                <span className="close-icon" onClick={handleMenuClose}>
                  ×
                </span>
              </div>
              <NavLink to="/" onClick={handleMenuClose}>
                HOME
              </NavLink>
              <NavLink to="/kebora-diamond" onClick={handleMenuClose}>
                KEBORA DIAMOND
              </NavLink>
              <NavLink to="/kebora-machines" onClick={handleMenuClose}>
                KEBORA MACHINES
              </NavLink>
              <NavLink to="/kebora-gas-supply" onClick={handleMenuClose}>
                KEBORA GAS SUPPLY
              </NavLink>
              <NavLink to="/kebora-finance" onClick={handleMenuClose}>
                KEBORA FINANCE
              </NavLink>
              <NavLink to="/dhl" onClick={handleMenuClose}>
                DHL EXPRESS
              </NavLink>
              <NavLink to="/carrental" onClick={handleMenuClose}>
                CAR RENTAL
              </NavLink>
              <NavLink to="/internationalflight" onClick={handleMenuClose}>
                FLIGHT BOOKING
              </NavLink>
              <NavLink to="/tablic-restaurants" onClick={handleMenuClose}>
                KEBORA TABLIC RESTAURANTS
              </NavLink>
              <NavLink to="/photogallery" onClick={handleMenuClose}>
                PHOTO GALLERY
              </NavLink>
              <NavLink to="/teammember" onClick={handleMenuClose}>
                TEAM MEMBERS
              </NavLink>
              <NavLink to="/contactus" onClick={handleMenuClose}>
                CONTACT US
              </NavLink>
              <div className="mobile-contact">
                <p>📧 keboraoxygen@gmail.com</p>
              </div>
              <div className="mobile-buttons">
                {/* <button className="sign-in-btn">Sign in</button>   */}
                <button className="contact-us-btn">Contact Us</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
