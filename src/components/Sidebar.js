// Sidebar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUser,
  FaBriefcase,
  FaServicestack,
  FaFileAlt,
  FaBlog,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import "./Sidebar.css";

function Sidebar({ darkMode, toggleDarkMode }) {
  const location = useLocation();

  return (
    <div className={`sidebar ${darkMode ? "dark" : ""}`}>
      <div className="sidebar-content">
        <div className="top-section">
          <h2>M V Arun Prasad</h2>
          <img
            src="https://static.vecteezy.com/system/resources/previews/036/280/651/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
            alt="arun_profile-img"
            className="profile-img"
          />
          <p className="description">
            Hi, my name is M V Arun Prasad and I'm a senior software engineer.
            Welcome to my personal website!
          </p>

          <div className="social-icons">
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <SiThreads />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>

        <nav className="nav-menu">
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/about" ? "active" : ""}
              >
                <FaUser /> About Me
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className={location.pathname === "/resume" ? "active" : ""}
              >
                <FaFileAlt /> Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
              >
                <FaEnvelope /> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="bottom-section">
        <a href="#hire" className="hire-btn">
          Hire Me
        </a>
        <button className="toggle-mode" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}{" "}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
