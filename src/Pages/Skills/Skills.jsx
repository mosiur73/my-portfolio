import React from 'react';
import { Slide, Zoom } from 'react-awesome-reveal';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress } from "react-icons/si";

const Skills = () => {
    const skills = [
        { name: "HTML 5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
        { name: "CSS 3 Animation", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-4xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
        { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
        { name: "Github", icon: <FaGithub className="text-gray-700 text-4xl" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-4xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
        { name: "Node", icon: <FaNodeJs className="text-green-400 text-4xl" /> },
        { name: "Express", icon: <SiExpress className="text-gray-500 text-4xl" /> },
    ];

    return (
        <section className="bg-gray-50 pt-16" id="skills">
            <div className="max-w-screen-lg h-fit mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 ">Skills</h2>
                <div className='divider'></div>

                {/* Skill Cards */}
                <Slide>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-indigo-100 p-6 rounded-xl shadow-md flex flex-col justify-center items-center text-center">
                            {skill.icon}
                            <h3 className="text-lg font-semibold text-gray-700 mt-4">{skill.name}</h3>
                        </div>
                    ))}
                </div>
                </Slide>
            </div>
        </section>
    );
};

export default Skills;
