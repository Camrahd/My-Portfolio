import React from 'react';

function Projects() {
  return (
    <section id="projects" className="Projects">
      <h2>My Projects</h2>

      <div className="project">
        <h3>Library Management System   (Sept 2023 - Dec 2023)</h3>
        <p>
           <br />
          <strong>Description:</strong> Designed and implemented a full-stack library management system with integrated web page functionality, using MySQL and MongoDB.
          <br />
          <a href="https://github.com/Dharma41/Library_Management_System" target="_blank" rel="noopener noreferrer">
            Github Repository
          </a>
        </p>
      </div>

      <div className="project">
        <h3>Budget Allocation Application   (June 2024) </h3>
        <p>
           <br />
          <strong>Description:</strong> Developed a comprehensive budgeting application for departmental expense planning, using React.js. Enhanced and completed the initial codebase with attention to specific feature requirements.
          <br />
          <a href="https://github.com/Dharma41/ejtos-react_budget_app" target="_blank" rel="noopener noreferrer">
            Github Repository
          </a>
        </p>
      </div>
    </section>
  );
}

export default Projects;
