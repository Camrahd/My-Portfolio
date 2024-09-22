import React from 'react';
// import Header from './Header';
import java_logo from '../Assets/java_logo.png';
import python_logo from '../Assets/python_logo.png';
import html_logo from '../Assets/html_logo.png';
import css_logo from '../Assets/css_logo.png';
import javascript_logo from '../Assets/javascript_logo.png';
import profile from '../Assets/profile.png';
import react_logo from '../Assets/react_logo.png';
import nodejs_logo from '../Assets/nodejs_logo.png';
import django_logo from '../Assets/django_logo.png';
import '../CSS/About.css';


const About = () => {
  return (
    <div id='about' className="about-container">
    <div className="about-background"></div> 
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <div className="about-image">
        <img src={profile} alt="Profile" className="skill-icon" />
        </div>
        <div className="about-text">
          <p>
          I am a Full Stack Developer passionate about learning, quick to adapt, and motivated to solve problems. I have a strong foundation in full-stack development and am eager to contribute to the industry.          </p>
          <h2 className="education-title">Education</h2>
          <div className="education-item">
  <div className="education-details">
    <h3>Master in Computer Science</h3>
    <span className="education-year">2023-2025</span>
  </div>
  <p>
    Oklahoma State University
    <span className="gpa">GPA: 4.0</span> {/* Add GPA here */}
  </p>
</div>
          <h2 className="skills-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <img src={java_logo} alt="Java" className="skill-icon" />
              <p>Java</p>
            </div>
            <div className="skill-item">
              <img src={python_logo} alt="Python" className="skill-icon" />
              <p>Python</p>
            </div>
            <div className="skill-item">
              <img src={html_logo} alt="HTML" className="skill-icon" />
              <p>HTML</p>
            </div>
            <div className="skill-item">
              <img src={css_logo} alt="CSS" className="skill-icon" />
              <p>CSS</p>
            </div>
            <div className="skill-item">
              <img src={javascript_logo} alt="JavaScript" className="skill-icon" />
              <p>JavaScript</p>
            </div>
            <div className="skill-item">
              <img src={react_logo}  alt="React.js" className="skill-icon" />
              <p>React.js</p>
            </div>
            <div className="skill-item">
              <img src={nodejs_logo} alt="Node.js" className="skill-icon" />
              <p>Node.js</p>
            </div>
            <div className="skill-item">
              <img src={django_logo}  alt="Django" className="skill-icon" />
              <p>Django</p>
            </div>
            {/* Add more skills as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;