import React from 'react';
import java_logo from '../Assets/java_logo.png';
import python_logo from '../Assets/python_logo.png';
import html_logo from '../Assets/html_logo.png';
import css_logo from '../Assets/css_logo.png';
import javascript_logo from '../Assets/javascript_logo.png';
import profile from '../Assets/profile.png';
import react_logo from '../Assets/react_logo.png';
import nodejs_logo from '../Assets/nodejs_logo.png';
import django_logo from '../Assets/django_logo.png';
import git_logo from '../Assets/git.png';
import mongodb_logo from '../Assets/mongodb.png';
import mysql_logo from '../Assets/mysql.png';
import ai_logo from '../Assets/ai.png';
import '../CSS/About.css';

const skills = [
  { logo: java_logo, name: "Java" },
  { logo: python_logo, name: "Python" },
  { logo: html_logo, name: "HTML" },
  { logo: css_logo, name: "CSS" },
  { logo: javascript_logo, name: "JavaScript" },
  { logo: react_logo, name: "React.js" },
  { logo: nodejs_logo, name: "Node.js" },
  { logo: django_logo, name: "Django" },
  { logo: git_logo, name: "Git & Github" },
  { logo: mongodb_logo, name: "mongo DB" },
  { logo: mysql_logo, name: "Mysql" },
  { logo: ai_logo, name: "Artificial Intelligence" },

];

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-background"></div>
      
      <h1 className="about-title">About Me</h1>
      
      <div className="about-content">
        {/* Profile Image */}
        <div className="about-image">
          <img src={profile} alt="Profile" className="profile-image" />
        </div>
        
        {/* Text Content */}
        <div className="about-text">
          <p>
            I am a Full Stack Developer passionate about learning, quick to adapt, and motivated to solve problems. 
            I have a strong foundation in full-stack development and am eager to contribute to the industry.
          </p>
          
          {/* Education Section */}
          <div className="education">
            <h2 className="education-title">Education</h2>
            <div className="education-item">
              <div className="education-details">
                <h3>Master in Computer Science</h3>
                <span className="education-year">2023-2025</span>
              </div>
              <p>
                Oklahoma State University
                <span className="gpa"> | GPA: 4.0</span>
              </p>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="skills">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img src={skill.logo} alt={skill.name} className="skill-icon" />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;