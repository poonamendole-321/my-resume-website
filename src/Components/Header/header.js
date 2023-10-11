import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../Images/logo.png";

import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          {" "}
          <img src={logo} alt="logo" />
        </div>
        <div className={`menu ${showMenu ? "active" : ""}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about-section">About</a>
            </li>
            <li>
              <a href="#skills-section">Skills</a>
            </li>
            <li>
              <a href="#footer_section">Contact</a>
            </li>
          </ul>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Header;
