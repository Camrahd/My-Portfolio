import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Contact.css';

function Contact() {
  // Optional Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Firebase integration (uncomment and configure)
    /*
    import firebase from 'firebase/app';
    import 'firebase/firestore';
    
    const firebaseConfig = {
      // Your Firebase config object
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();
    
    db.collection('contacts')
      .add({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setFormStatus('Error sending message. Please try again.');
        console.error('Error:', error);
      });
    */
    // Placeholder for testing
    setFormStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">| Open to Work and Networking |</p>
      <p className="contact-text">
        Have an exciting project, want to collaborate, or just wish to connect? Let's start a conversation!
      </p>
      <div className="contact-icons">
        <a
          href="mailto:dchitte@okstate.edu"
          className="contact-icon-link"
          aria-label="Email Dharmendra Reddy Chitte"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a
          href="tel:+14052692453"
          className="contact-icon-link"
          aria-label="Call Dharmendra Reddy Chitte"
        >
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </a>
      </div>
      <div className="animated-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#4c1d95"
            strokeWidth="4"
            fill="none"
          >
            <animate
              attributeName="r"
              values="40;30;40"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="4;6;4"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Optional Contact Form (Uncomment to Enable) */}
      {/*
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3 className="form-title">Send a Message</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            aria-required="true"
          ></textarea>
        </div>
        <button type="submit" className="form-submit">
          Send Message
        </button>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </form>
      */}
    </section>
  );
}

export default Contact;
