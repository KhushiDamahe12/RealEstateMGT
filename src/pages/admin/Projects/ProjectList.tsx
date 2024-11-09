import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../../../types';
import {Link} from 'react-router-dom';

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Fetching the projects from an API (dummy data for now)
    const fetchProjects = async () => {
      try {
        // Placeholder for actual API call
        const projectsData = [
          { id: '1', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D', name: 'Project One', description: 'Brief description of Project One', status: 'In Progress' },
          { id: '2', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D', name: 'Project Two', description: 'Brief description of Project Two', status: 'Completed' },
          { id: '3', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D', name: 'Project Three', description: 'Brief description of Project Three', status: 'In Progress' },
          { id: '4', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D', name: 'Project Four', description: 'Brief description of Project Four', status: 'Completed' },
          { id: '5', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D', name: 'Project Five', description: 'Brief description of Project Five', status: 'In Progress' },
        ];
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="project-list-section">
      <div className="flex items-end">

      <h2 className="text-2xl font-bold mb-4 mr-auto">Projects</h2>
      <Link to="/admin/add-project"> 
      <button className="my-4 bg-blue-500 text-white py-2 px-4 rounded w-32">
        Add Project
      </button>
        </Link>
      </div>
    
      <div className="projects-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.slice(0, 4).map((project) => (
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

export default ProjectList;
