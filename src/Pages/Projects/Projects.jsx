import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className=" bg-gradient-to-br from-gray-100 to-blue-100 pt-16 px-6">
      <h2 className="text-center text-4xl font-extrabold text-gray-800 uppercase tracking-wide mb-12">
        Our Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-lg bg-white/20 border border-white/30 hover:scale-105 transform transition duration-500"
          >
            <img
              src={project.imgUrl}
              alt={project.title}
              className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <Link
                to={`/details/${project.id}`}
                className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-full font-semibold hover:from-indigo-600 hover:to-blue-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
