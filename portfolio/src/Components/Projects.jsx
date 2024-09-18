import React, { useRef } from 'react';
import '../CSS/Projects.css';

function Projects() {
  const projectContainerRef = useRef(null);

  // Scroll to the next project
  const handleNext = () => {
    if (projectContainerRef.current) {
      projectContainerRef.current.scrollBy({ left: projectContainerRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  // Scroll to the previous project
  const handlePrev = () => {
    if (projectContainerRef.current) {
      projectContainerRef.current.scrollBy({ left: -projectContainerRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-title">My Projects</h2>

      {/* Left Arrow Button */}
      <button className="arrow-btn arrow-left" onClick={handlePrev}>
        &#8249;
      </button>

      <div className="project-cards" ref={projectContainerRef}>
        {/* Library Management System */}
        <div className="project-card">
          <h3>Library Management System <span className="project-date">(Sept 2023 - Dec 2023)</span></h3>
          <p>
            <strong>Description:</strong> Designed and implemented a full-stack library management system with integrated web page functionality, using MySQL and MongoDB.
          </p>
          <a href="https://github.com/Dharma41/Library_Management_System" target="_blank" rel="noopener noreferrer" className="project-link">
            Github Repository
          </a>
        </div>

        {/* Budget Allocation Application */}
        <div className="project-card">
          <h3>Budget Allocation Application <span className="project-date">(June 2024)</span></h3>
          <p>
            <strong>Description:</strong> Developed a comprehensive budgeting application for departmental expense planning, using React.js. Enhanced and completed the initial codebase with attention to specific feature requirements.
          </p>
          <a href="https://github.com/Dharma41/ejtos-react_budget_app" target="_blank" rel="noopener noreferrer" className="project-link">
            Github Repository
          </a>
        </div>

        {/* GitHub User Bio Application */}
        <div className="project-card">
          <h3>GitHub User Bio Application <span className="project-date">(Sept 2024)</span></h3>
          <p>
            <strong>Description:</strong> Created a web application that fetches and displays GitHub user details using the GitHub API. Implemented using React.js and Axios for seamless API integration.
          </p>
          <a href="https://getgithubuserbio.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">
            Live Application
          </a>
          <a href="https://github.com/Dharma41/github_username" target="_blank" rel="noopener noreferrer" className="project-link">
            Github Repository
          </a>
        </div>
      </div>

      {/* Right Arrow Button */}
      <button className="arrow-btn arrow-right" onClick={handleNext}>
        &#8250;
      </button>
    </section>
  );
}

export default Projects;