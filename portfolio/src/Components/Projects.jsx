import React from 'react';
import '../CSS/Projects.css';

const projects = [
  {
    title: 'Full-Stack eCommerce Platform',
    date: 'Mar 2025 - May 2025',
    description: (
      <>
        <p>A robust eCommerce platform supporting seamless shopping experiences, featuring:</p>
        <ul>
          <li><strong>RESTful APIs:</strong> Built with Spring Boot for efficient backend operations.</li>
          <li><strong>Optimized Database:</strong> Improved MySQL performance by 30%, handling 50+ concurrent users with 95% reliability.</li>
          <li><strong>Containerization:</strong> Used Docker and Compose to reduce deployment time by 40%.</li>
          <li><strong>Frontend Engagement:</strong> Leveraged Next.js Server-Side Rendering for a 25% increase in user engagement.</li>
        </ul>
        <p><strong>Technology Stack:</strong></p>
        <ul>
          <li><strong>Frontend:</strong> Next.js</li>
          <li><strong>Backend:</strong> Spring Boot</li>
          <li><strong>Database:</strong> MySQL</li>
          <li><strong>DevOps:</strong> Docker, Docker Compose</li>
        </ul>
      </>
    ),
    github: 'https://github.com/Camrahd/ecommerce-frontend',
     // Add GitHub URL here, e.g., 'https://github.com/Dharma41/ecommerce-platform'
    live: '', // Add live demo URL here, if available
  },
  {
    title: 'OSU MinHub Chatbot',
    date: 'Apr 2025',
    description: (
      <>
        <p>A voice-enabled chatbot for mental health support, recognized with 1st Prize in ACM Hackathon 2025, featuring:</p>
        <ul>
          <li><strong>Voice Interaction:</strong> Integrated Web Speech API for accessible speech-to-text self-care resources.</li>
          <li><strong>AI Integration:</strong> Utilized OpenAI for intelligent response generation.</li>
          <li><strong>Responsive UI:</strong> Built with React for a user-friendly interface.</li>
        </ul>
        <p><strong>Technology Stack:</strong></p>
        <ul>
          <li><strong>Frontend:</strong> React.js</li>
          <li><strong>Backend:</strong> Node.js</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>APIs:</strong> Web Speech API, OpenAI</li>
        </ul>
      </>
    ),
    github: 'https://github.com/Camrahd/appathon', // Add GitHub URL here, e.g., 'https://github.com/Dharma41/osu-minhub-chatbot'
    live: 'https://mentalsupport-osu.netlify.app/', // Replace with actual live demo URL
  },
  {
    title: 'Real-Time Chat Application',
    date: 'Sept 2024 - Dec 2024',
    description: (
      <>
        <p>A seamless and secure platform for real-time communication with the following features:</p>
        <ul>
          <li><strong>Google Authentication:</strong> Secure user login.</li>
          <li><strong>One-on-One Chats:</strong> Private, real-time conversations.</li>
        </ul>
        <p><strong>Technology Stack:</strong></p>
        <ul>
          <li><strong>Frontend:</strong> React.js</li>
          <li><strong>Backend:</strong> Node.js</li>
          <li><strong>Database:</strong> MongoDB Atlas</li>
        </ul>
      </>
    ),
    github: 'https://github.com/Dharma41/Chat_Application', // Updated to Dharma41
    live: 'https://realtimechatapp12.netlify.app/',
  },
  {
    title: 'Library Management System',
    date: 'Sept 2023 - Dec 2023',
    description: (
      <>
        <p>A full-stack system for managing library operations, featuring:</p>
        <ul>
          <li><strong>Web Interface:</strong> User-friendly dashboard for book management.</li>
          <li><strong>Database Integration:</strong> Efficient data handling with MySQL and MongoDB.</li>
        </ul>
        <p><strong>Technology Stack:</strong></p>
        <ul>
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Backend:</strong> PHP</li>
          <li><strong>Databases:</strong> MySQL</li>
        </ul>
      </>
    ),
    github: 'https://github.com/Dharma41/Library_Management_System', // Updated to Dharma41
  },
  {
    title: 'Budget Allocation Application',
    date: 'June 2024',
    description: (
      <>
        <p>A budgeting tool for departmental expense planning, featuring:</p>
        <ul>
          <li><strong>Interactive UI:</strong> Easy expense tracking and allocation.</li>
          <li><strong>Enhanced Features:</strong> Completed codebase with custom requirements.</li>
        </ul>
        <p><strong>Technology Stack:</strong></p>
        <ul>
          <li><strong>Frontend:</strong> React.js</li>
        </ul>
      </>
    ),
    github: 'https://github.com/Dharma41/ejtos-react_budget_app', // Updated to Dharma41
  },
  {
    title: 'GitHub User Bio Application',
    date: 'Sept 2024',
    description: (
      <>
        <p>A web app that fetches and displays GitHub user profiles using the GitHub API, with:</p>
        <ul>
          <li><strong>API Integration:</strong> Real-time user data retrieval.</li>
          <li><strong>Responsive Design:</strong> Clean, user-friendly interface.</li>
        </ul>
        <p><strong>Technology Stack:</strong></p>
        <ul>
          <li><strong>Frontend:</strong> React.js</li>
          <li><strong>API:</strong> Axios, GitHub API</li>
        </ul>
      </>
    ),
    github: 'https://github.com/Dharma41/github_username', // Updated to Dharma41
    live: 'https://getgithubuserbio.netlify.app/',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <h3 className="project-title">
              {project.title} <span className="project-date">({project.date})</span>
            </h3>
            <div className="project-description">{project.description}</div>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  GitHub Repository
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`Live demo of ${project.title}`}
                >
                  Live Application
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;