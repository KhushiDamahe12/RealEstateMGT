import React from 'react';

interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, description }) => {
  return (
    <div className="project-card p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
      <img src={image} alt={name} className="project-image w-full h-32 px-1 object-cover rounded-md mb-4" />
      <div className="project-details">
        <h3 className="text-lg font-bold mb-2 text-center">{name}</h3>
        <p className="text-sm mb-2 text-center text-wrap">{description}</p>
       
      </div>
      <div className="project-actions mt-4 mr-auto ">
        <button className="text-blue-500 hover:underline mr-2">Edit</button>
        <button className="text-red-500 hover:underline mr-2">Delete</button>
        <button className="text-green-500 hover:underline">View Details</button>
      </div>
    </div>
  );
};

export default ProjectCard;
