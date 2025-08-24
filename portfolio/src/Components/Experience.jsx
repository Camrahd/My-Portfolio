import React from 'react';
import '../CSS/Experience.css';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'InfraTie Solutions',
    // company: 'Oklahoma State University',
    location: 'Stillwater, OK',
    date: 'Jan 2024 – Present',
    // responsibilities: [
    //   'Engineered an NLP-driven virtual assistant for Infratie’s sewer data, enabling non-technical staff to access records in plain English, reducing data retrieval time by 60%.',
    //   'Built a Python-based NLP pipeline to parse user queries, fine-tuned a large language model (LLM) to generate SQL queries with multi-column joins, achieving 70% query execution accuracy against SQL Server database.',
    //   'Designed a Retrieval-Augmented Generation (RAG) system to improve SQL query accuracy beyond 85% by dynamically retrieving schema metadata, addressing token limitation challenges.',
    //   'Integrated the NLP assistant into a Django web application for a user-friendly interface and seamless access.',
    // ],
  },
  {
    title: 'Software Developer',
    company: 'Oracle',
    // company: 'Oracle Financial Services Software',
    location: 'Karnataka, India',
    date: 'Jul 2022 – Aug 2023',
    // responsibilities: [
    //   'Designed and developed user interfaces for banking applications, creating responsive, client-specific frontends for 10+ financial institutions using JavaScript, HTML, and CSS, ensuring compliance with client specifications.',
    //   'Implemented backend microservices for core banking functions using Spring Boot and Java, connecting to SQL databases; boosted transaction processing speeds by 35% and reduced server latency.',
    //   'Partnered with cross-functional teams using Agile methodologies to deliver high-quality, scalable software, applying design patterns and best practices throughout the SDLC.',
    //   'Utilized version control systems to manage codebase, streamline collaboration, and ensure efficient team workflows across multiple banking projects.',
    // ],
  },
  {
    title: 'Software Development Intern',
    company: 'Cognizant',
    location: 'Hyderabad, India',
    date: 'Jan 2022 – Jun 2022',
    // responsibilities: [
    //   'Assisted in software development and collaborated with teams to meet project deadlines.',
    //   'Contributed to coding, testing, and debugging efforts, ensuring timely delivery of project milestones.',
    //   'Participated in Agile ceremonies, gaining experience in team workflows and software development processes.',
    // ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <article
            key={index}
            className={`experience-card ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="experience-content">
              <h3 className="experience-role">{exp.title}</h3>
              <p className="experience-company">
                {exp.company} | {exp.location}
              </p>
              <time className="experience-date">{exp.date}</time>
              {/* <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul> */}
            </div>
            <div className="timeline-marker"></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
