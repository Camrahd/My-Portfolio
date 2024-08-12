const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-3xl font-bold my-8 text-gray-800">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center p-6">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          {/* Image or other content can go here */}
        </div>
        <div className="flex flex-col p-4 bg-white rounded shadow-md">
          <p className="text-base text-gray-700 mb-4">
            I am a Full Stack Developer and passionate about learning new
            things, a quick learner, a problem solver, and a highly motivated
            software developer entering the industry with a strong foundation
            in full-stack development. My skill set includes Java, Python, HTML, CSS, JavaScript,
            TypeScript, Node.js, Express.js, React.js, and I am proficient
            in MongoDB and MySQL databases.
          </p>
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            Education
          </h2>
          <div className="flex flex-col">
            <div className="bg-gray-200 p-2 rounded mb-2">
              <div className="flex justify-between">
                <h3 className="text-base font-semibold">
                  Master in Computer Science
                </h3>
                <span className="text-sm text-gray-500">2023-2025</span>
              </div>
              <p className="text-sm">Oklahoma State University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
