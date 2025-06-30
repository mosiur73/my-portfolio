import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';



const ProjectCard = () => {
    const { id } = useParams();  // Get the id from the URL
  const [project, setProject] = React.useState(null);

  useEffect(() => {
    fetch('/data.json')  // Fetch data from the public folder
      .then((response) => response.json())
      .then((data) => {
        const foundProject = data.find(p => p.id === parseInt(id));  // Find the project by ID
        setProject(foundProject);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  // If project is not found, show loading or error message
  if (!project) {
    return <div>Loading...</div>;
  }

   
    
    return (
    //     <div className='mt-16'>
    //     <div className="flex bg-base-100 shadow-xl p-4 gap-6">
    //     <div className='flex-1'>
    //     <figure>
    //      <img
    //        src={project.imgUrl}
    //        alt={project.title} />
    //    </figure>
    //     </div>
    //    <div className=" flex-1">
    //      <h2 className="text-2xl font-bold">{project.title}</h2>
    //      <p>Description:{project.description}</p>
    //      <Link to={project.link}>
    //      <button className="btn btn-outline">Live preview</button>
    //      </Link>
         
    //      </div>
    //      </div>
    //      </div>
    <div className="mt-16">
    <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg p-6 flex flex-col lg:flex-row gap-8">
      {/* Left Side - Image */}
      <div className="flex-1">
        <figure>
          <img
            src={project.imgUrl}
            alt={project.title}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </figure>
      </div>

      {/* Right Side - Project Details */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-extrabold text-gray-900">{project.title}</h2>

        <p className="text-lg text-gray-700">{project.description}</p>

        <div>
          <p className="text-sm text-gray-500 font-bold">Tech Stack:</p>
          <ul className="list-disc pl-6 space-y-1">
            {project.techStack.map((tech, index) => (
              <li key={index} className="text-gray-600">{tech}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 font-bold">Challenges Faced:</p>
            <p className="text-gray-600">{project.challenges}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500  font-bold">Improvements & Future Plans:</p>
            <p className="text-gray-600">{project.improvements}</p>
          </div>
        </div>

        <div className="flex space-x-4 mt-6">
          {/* Live Preview Link */}
          <Link to={project.link} target="_blank">
            <button className="btn btn-outline text-white bg-blue-600 hover:bg-blue-700 border-transparent rounded-lg py-2 px-6">
              Live Preview
            </button>
          </Link>

          {/* GitHub Link */}
          <Link to={project.github} target="_blank">
            <button className="btn btn-outline text-white bg-gray-800 hover:bg-gray-900 border-transparent rounded-lg py-2 px-6">
              GitHub Repo
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
   
        
    
    );
};

export default ProjectCard;