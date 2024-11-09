import React from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  image: string;
  name: string;
  description: string;
  status: 'In Progress' | 'Completed';
}

interface AllProjectsPageProps {
  projects: Project[];
}

const AllProjectsPage: React.FC<AllProjectsPageProps> = ({ projects }) => {
  return (
    <div className="all-projects-page">
      <h2>All Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            name={project.name}
            description={project.description}
            status={project.status}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;
