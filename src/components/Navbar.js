import React, { useState, useEffect } from "react";
import hamburger from "../assets/images/hamburger.svg";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import scrollWithOffset from "./scrollWithOffset";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <button className={`menu-toggle ${isOpen ? "hidden" : ""}`} onClick={toggleMenu}>
        <img src={hamburger} alt="Menu" />
      </button>
      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li className="nav-item">
          <Link smooth to="/#home" scroll={scrollWithOffset} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link smooth to="/#about" scroll={scrollWithOffset} onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link smooth to="/#menu" onClick={closeMenu}>
            Menu
          </Link>
        </li>
        <li className="nav-item">
          <Link smooth to="/reservation" onClick={closeMenu}>
            Reservation
          </Link>
        </li>
        <li className="nav-item ">
          <Link smooth to="/#orderonline" className="order-online" onClick={closeMenu}>
            Order Online
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
