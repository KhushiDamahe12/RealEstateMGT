import React from 'react';

interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  status: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, description, status }) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-image" />
      <div className="project-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className={`status ${status.toLowerCase()}`}>{status}</span>
      </div>
      <div className="project-actions">
        <button>Edit</button>
        <button>Delete</button>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default ProjectCard;
