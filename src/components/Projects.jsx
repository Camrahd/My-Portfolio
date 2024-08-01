import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Budget Allocation Application',
      skills: 'React.js | JavaScript | HTML5 | CSS3 | Git',
      about: 'Developed a comprehensive budgeting application for departmental expense planning, using React.js. Enhanced and completed the initial codebase with attention to specific feature requirements, ensuring efficient and accurate budget tracking.',
      learning: 'Strengthened skills in React.js and JavaScript by working on a real-world project. Learned how to enhance and complete an existing codebase, improved my ability to implement specific feature requirements, and refined my problem-solving skills in web development.',
      // visitLink: 'https://github.com/Dharma41/Budget-Allocation-App', // Placeholder link, update with actual if needed
      sourceLink: 'https://github.com/Dharma41/ejtos-react_budget_app' // Placeholder link, update with actual if needed
    },
    {
      title: 'Railroad Boxcar Condition Classification iOS App',
      skills: 'Swift | Core Machine Learning | iOS Development | Git',
      about: 'Developed an iOS app using Swift and Core Machine Learning to classify railroad boxcar conditions based on rust and corrosion in photos. Trained a deep learning model on a diverse dataset of boxcar images to assess condition levels on a custom five-point scale. Implemented real-time photo analysis, enabling users to upload new images for immediate condition evaluation.',
      learning: 'Enhanced my skills in Swift and Core Machine Learning through practical application. Gained experience in training deep learning models and integrating them into an iOS app. Improved my ability to implement real-time image analysis and condition classification, providing immediate feedback to users.',
      
      sourceLink: 'https://github.com/Dharma41/MAD_Grad_Chitte_DharmendraReddy',
    },

   
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-blue-purple to-queen-pink p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-archivo font-bold text-center text-cream my-10">PROJECTS</h2>
        <div className="flex flex-wrap -mx-2 mb-8">
          {projects.map(({ title, skills, about, learning, visitLink, sourceLink }, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/2 text-grape mb-10">
              <div className="bg-cream p-6 border border-grape rounded-md mb-4 flex flex-col gap-3 h-full">
                <h3 className="text-[23px] font-archivo font-bold mb-2">{title}</h3>
                <p className="text-[13px] text-grape mb-2">{skills}</p>
                <div className="flex flex-col justify-between">
                  <p className="text-base mb-4 font-medium">{about}</p>
                  <p className="text-base mb-4 font-medium"><span className='font-bold'>Learnings</span>: {learning}</p>
                </div>
                <div className="flex gap-4 text-grape">
                  <a href={visitLink} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:opacity-60">Visit</a>
                  <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:opacity-60">View Source</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
