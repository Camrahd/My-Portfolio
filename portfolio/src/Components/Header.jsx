import React from 'react';
import '../CSS/Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="about-background_header"></div> 
      <h1>Dharmendra Reddy Chitte</h1>
      <nav>
        <ul>
          <li><a href="#about" className="nav-button">About</a></li>
          <li><a href="#projects" className="nav-button">Projects</a></li>
          <li><a href="#contact" className="nav-button">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;