import React from 'react';

const About = () => {
  return (
    <section id="about" className="h-screen bg-gradient-to-r from-blue-purple to-queen-pink p-8 text-grape flex justify-center items-center">
      <div className="max-w-3xl mx-auto text-center">
        <div>
          <h2 className="text-[26px] font-archivo font-bold mb-6 border-b-2 border-white pb-6">CRAFTING IDEAS INTO STUNNING WEB REALITIES</h2>
          <div className="text-lg font-medium flex flex-col gap-4">
            <p>Passionate about web design and development since my early days, I bring a creative and tech-driven journey to your team.</p>
            <p>With a strong eye for design and precision, I focus on crafting visually appealing and user-friendly websites.</p>
            <p>I have experience with HTML, CSS, JavaScript, and Adobe Creative Suite, and I am eager to contribute to maintaining and enhancing client websites.</p>
            <p>As a team player with excellent communication skills, I seamlessly fit into any collaborative environment.</p>
            <p>Let's connect and craft remarkable web experiences together!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
