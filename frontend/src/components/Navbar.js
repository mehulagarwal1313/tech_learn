// components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingpage.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">EduMentor</div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#why">Why Join Us?</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
        <li className="login-group">
  <Link to="/login">
    <button className="nav-btn">Login</button>
  </Link>
  </li>
        <li className="login-group">
  <Link to="/register">
    <button className="nav-btn nav-signup">Sign Up</button>
  </Link>
</li>

      </ul>
    </nav>
  );
}

export default Navbar;
