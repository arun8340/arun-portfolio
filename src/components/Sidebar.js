import React, { useState, useEffect } from "react";
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
  FaBars,
} from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import "./Sidebar.css";

function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBars />
      </button>

      <div
        className={`sidebar ${darkMode ? "dark" : ""} ${
          sidebarOpen ? "open" : ""
        }`}
      >
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
                className={location.pathname === "/" ? "active" : ""}
              >
                <FaUser /> About Me
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={location.pathname === "/portfolio" ? "active" : ""}
              >
                <FaBriefcase /> Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={location.pathname === "/services" ? "active" : ""}
              >
                <FaServicestack /> Services
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
                to="/blog"
                className={location.pathname === "/blog" ? "active" : ""}
              >
                <FaBlog /> Blog
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

        <div className="bottom-section">
          <a href="#hire" className="hire-btn">
            Hire Me
          </a>
          <button
            className="toggle-mode"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}{" "}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
