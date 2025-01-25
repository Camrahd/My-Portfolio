import React from 'react';
import '../CSS/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="project-grid">
      <div className="project-card">
          <h3>Real Time Chat Application <span className="project-date">(Sept 2024 - Dec 2024)</span></h3>
          
  <strong>Description:</strong>
  <p>
    The Real-Time Chat Application is designed to offer a seamless and secure communication platform for users to interact in real-time. Key features include:
  </p>
  <ul>
    <li><strong>Google Authentication:</strong> Enables users to securely log in and access the platform.</li>
    <li><strong>One-on-One Chats:</strong> Supports private and secure individual conversations.</li>
  </ul>
  <p><strong>Technology Stack:</strong></p>
  <ul>
    <li><strong>Frontend:</strong> Built with React.js to deliver an interactive and user-friendly interface.</li>
    <li><strong>Backend:</strong> Developed using Node.js to handle server-side operations efficiently.</li>
    <li><strong>Database:</strong> Utilized MongoDB Atlas for scalable and reliable data storage.</li>
  </ul>


          <a href="https://github.com/Dharma41/Chat_Application" target="_blank" rel="noopener noreferrer" className="project-link">
            Github Repository
          </a><br />
          <a href="https://realtimechatapp12.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">
            Live Application
          </a>
        </div>
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
          </a><br />
          <a href="https://github.com/Dharma41/github_username" target="_blank" rel="noopener noreferrer" className="project-link">
            Github Repository
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;