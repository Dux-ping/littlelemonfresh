import React, { useState } from "react";
import hamburger from "../assets/images/hamburger.svg";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <button className={`menu-toggle ${isOpen ? "hidden" : ""}`} onClick={toggleMenu}>
        <img src={hamburger} alt="Menu" />
      </button>
      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About Us</a>
        </li>
        <li className="nav-item">
          <a href="/menu">Menu</a>
        </li>
        <li className="nav-item">
          <a href="/reservation">Reservation</a>
        </li>
        <li className="nav-item">
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
