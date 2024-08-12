import React from 'react';

function Header() {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <h1>My Portfolio</h1>
    </header>
  );
}

export default Header;
