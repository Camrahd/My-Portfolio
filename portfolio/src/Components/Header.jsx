import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../CSS/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo or Branding */}
        <div className="logo">
          <h1>
            <a href="/" aria-label="Dharmendra Reddy Chitte Home">Dharmendra Reddy Chitte</a>
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav aria-label="Main navigation">
          {/* Desktop Menu */}
          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-item" aria-label="About section">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-item" aria-label="Projects section">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-item" aria-label="Contact section">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-links">
            <li>
              <a
                href="#about"
                className="nav-item"
                onClick={toggleMenu}
                aria-label="About section"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="nav-item"
                onClick={toggleMenu}
                aria-label="Projects section"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-item"
                onClick={toggleMenu}
                aria-label="Contact section"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
