import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-content">
        <h2 className="contact-title">CONTACT</h2>
        <p className="contact-subtitle">| I AM OPEN TO WORK AND NETWORK |</p>
        <p className="contact-text">
          If you have an exciting project in mind, want to collaborate, or simply wish to connect, let's initiate a conversation. 
        </p>
        <div className="animated-svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="blue" stroke-width="4" fill="none">
              <animate attributeName="r" values="40;20;40" dur="2s" repeatCount="indefinite" />
              <animate attributeName="stroke-width" values="4;8;4" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        <div className="contact-icons">
          <a href="mailto:dchitte@okstate.edu" className="contact-icon-link">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="tel:+14052692453" className="contact-icon-link">
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;