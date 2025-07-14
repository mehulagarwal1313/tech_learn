import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">EduMentor</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#why">Why Join Us?</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
        <li>
          <button className="nav-btn">Login</button>
        </li>
        <li>
          <Link to="/register">
            <button className="nav-btn nav-signup">Sign Up</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
