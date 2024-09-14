import React from 'react';
import '../CSS/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-title">My Projects</h2>

      <div className="project-cards">
        <div className="project-card">
          <h3>Library Management System <span className="project-date">(Sept 2023 - Dec 2023)</span></h3>
          <p>
            <strong>Description:</strong> Designed and implemented a full-stack library management system with integrated web page functionality, using MySQL and MongoDB.
          </p>
          <a href="https://github.com/Dharma41/Library_Management_System" target="_blank" rel="noopener noreferrer" className="project-link">
            Github Repository
          </a>
        </div>

        <div className="project-card">
          <h3>Budget Allocation Application <span className="project-date">(June 2024)</span></h3>
          <p>
            <strong>Description:</strong> Developed a comprehensive budgeting application for departmental expense planning, using React.js. Enhanced and completed the initial codebase with attention to specific feature requirements.
          </p>
          <a href="https://github.com/Dharma41/ejtos-react_budget_app" target="_blank" rel="noopener noreferrer" className="project-link">
            Github Repository
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;