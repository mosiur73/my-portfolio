import React from 'react';
import './About.css';
import { Zoom } from 'react-awesome-reveal';

const About = () => {
  return (
    <section
      id="about"
      className="bg-[url('https://i.ibb.co/1GZCcCry/adrien-olichon-RCAhi-GJs-UUE-unsplash.jpg')] bg-cover bg-center bg-no-repeat py-16"
    >
      <h2 className="text-4xl text-center font-bold text-white mb-6 fade-slide-up">
        About Me
      </h2>
      <div className="divider"></div>
         <Zoom>
           <div className="flex flex-col items-center text-center max-w-2xl mx-auto bg-white/70 backdrop-blur-sm p-6 rounded-md">
        <p className="text-lg text-gray-700 mb-4">
          Hi, I'm <span className="text-red-500 font-bold">Mosiur Rahman</span>, a passionate{' '}
          <span className="text-red-500 font-bold">Frontend Developer</span> dedicated to crafting stunning and functional web experiences.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I specialize in HTML, CSS, JavaScript, React, Next.js and Tailwind CSS, continuously learning new technologies to stay ahead in the industry.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Coding has been my passion since my fourth semester. Beyond coding, I enjoy exploring new technologies and reading books in my spare time.
        </p>
      </div>
      </Zoom>
 
    </section>
  );
};

export default About;
