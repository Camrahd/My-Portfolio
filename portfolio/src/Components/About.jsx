const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <div className="about-image">
          {/* Image or other content can go here */}
        </div>
        <div className="about-text">
          <p>
            I am a Full Stack Developer and passionate about learning new
            things, a quick learner, a problem solver, and a highly motivated
            software developer entering the industry with a strong foundation
            in full-stack development. My skill set includes Java, Python, HTML, CSS, JavaScript,
            TypeScript, Node.js, Express.js, React.js, and I am proficient
            in MongoDB and MySQL databases.
          </p>
          <h2 className="education-title">Education</h2>
          <div className="education-item">
            <div className="education-details">
              <h3>Master in Computer Science</h3>
              <span className="education-year">2023-2025</span>
            </div>
            <p>Oklahoma State University</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
