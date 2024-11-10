import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../../../types';
import { fetchProjects } from '../../../services/api';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projectsData = await fetchProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="project-list-section">
      <div className="flex items-end">
        <h2 className="text-2xl font-bold mb-4 mr-auto">Projects</h2>
        <Link to="/admin/add-project">
          <button className="my-4 w-32 bg-blue-500 text-white py-2 px-4 rounded">Add Project</button>
        </Link>
      </div>
      <div className="projects-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard
            key={project.id}
            image={typeof project.image === 'string' ? project.image : URL.createObjectURL(project.image)} // Handle both string and File
            name={project.name}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
