import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../../../types';

const AllProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Fetching the projects from an API (dummy data for now)
    const fetchProjects = async () => {
      try {
        // Placeholder for actual API call
        const projectsData = [
          { id: '1', image: 'project1.jpg', name: 'Project One', description: 'Brief description of Project One', status: 'In Progress' },
          { id: '2', image: 'project2.jpg', name: 'Project Two', description: 'Brief description of Project Two', status: 'Completed' },
          { id: '3', image: 'project3.jpg', name: 'Project Three', description: 'Brief description of Project Three', status: 'In Progress' },
          { id: '4', image: 'project4.jpg', name: 'Project Four', description: 'Brief description of Project Four', status: 'Completed' },
          { id: '5', image: 'project5.jpg', name: 'Project Five', description: 'Brief description of Project Five', status: 'In Progress' },
        ];
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="all-projects-page">
      <h2 className="text-2xl font-bold mb-4">All Projects</h2>
      <div className="projects-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            name={project.name}
            description={project.description}

          />
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;
