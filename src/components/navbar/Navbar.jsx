import React, { useState } from "react"; // ✅ Added useState
import "./Navbar.css";
import logo from "../../assets/Assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" />
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#overview" onClick={() => setIsOpen(false)}>
            Overview
          </a>
        </li>
        <li>
          <a href="#highlights" onClick={() => setIsOpen(false)}>
            Highlights
          </a>
        </li>
        <li>
          <a href="#prices" onClick={() => setIsOpen(false)}>
            Price list
          </a>
        </li>
        <li>
          <a href="#amenities" onClick={() => setIsOpen(false)}>
            Amenities
          </a>
        </li>

        <li>
          <a href="#gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </a>
        </li>
      </ul>
      <div
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") toggleMenu();
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
