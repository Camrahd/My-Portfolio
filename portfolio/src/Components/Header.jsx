import React, { useState } from 'react';
import '../CSS/Header.css';

function Header() {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <header className={`Header ${darkMode ? 'dark' : 'light'}`}>
      <div className="about-background_header"></div> 
      <h1>Dharmendra Reddy Chitte</h1>
      <nav>
        <ul>
          <li><a href="#about" className="nav-button">About</a></li>
          <li><a href="#projects" className="nav-button">Projects</a></li>
          <li><a href="#contact" className="nav-button">Contact</a></li>
        </ul>
      </nav>
      <button onClick={toggleDarkMode} className="nav-button dark-mode-toggle">
        {darkMode ? '☀️ ' : '🌙 '} {/* Sun for light mode, moon for dark mode */}
      </button>
    </header>
  );
}

export default Header;