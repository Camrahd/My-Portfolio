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
  { logo: java_logo, name: 'Java' },
  { logo: python_logo, name: 'Python' },
  { logo: html_logo, name: 'HTML' },
  { logo: css_logo, name: 'CSS' },
  { logo: javascript_logo, name: 'JavaScript' },
  { logo: react_logo, name: 'React.js' },
  { logo: nodejs_logo, name: 'Node.js' },
  { logo: django_logo, name: 'Django' },
  { logo: git_logo, name: 'Git & GitHub' },
  { logo: mongodb_logo, name: 'MongoDB' },
  { logo: mysql_logo, name: 'MySQL' },
  { logo: ai_logo, name: 'Artificial Intelligence' },
];

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        {/* Profile Image */}
        <div className="about-image">
          <img src={profile} alt="Dharmendra Reddy Chitte's profile" className="profile-image" />
        </div>

        {/* Text Content */}
        <div className="about-text">
          <p className="about-description">
            I am a Full Stack Developer passionate about learning, quick to adapt, and motivated to solve problems. 
            I have a strong foundation in full-stack development and am eager to contribute to the industry.
          </p>

          {/* Education Section */}
          <div className="education">
            <h3 className="education-title">Education</h3>
            <div className="education-item">
              <h4>Master in Computer Science</h4>
              <p className="education-details">
                Oklahoma State University | 2023–2025 | GPA: 4.0
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills">
            <h3 className="skills-title">Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img src={skill.logo} alt={`${skill.name} logo`} className="skill-icon" />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;