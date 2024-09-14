import React from 'react';
// import About from'./About';

function Header() {
  return (
    <header className="Header">
    <div className="about-background_header"></div> 
     <h1>Dharmendra Reddy Chitte</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
     
    </header>
  );
}

export default Header;
