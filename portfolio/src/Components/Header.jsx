import React from 'react';
import '../CSS/Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="header-container">
        {/* Logo or Branding */}
        <div className="logo">
          <h1>Dharmendra Reddy Chitte</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-item">About</a>
            </li>
            <li>
              <a href="#projects" className="nav-item">Projects</a>
            </li>
            <li>
              <a href="#contact" className="nav-item">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;