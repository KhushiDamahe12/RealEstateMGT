import React, { useState } from 'react';
import { Project } from '../../../types';
import { addProject } from '../../../services/api';

const AddProjectForm: React.FC = () => {
  const [project, setProject] = useState<Omit<Project, 'id'>>({
    image: '',
    name: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addProject(project as Project); // assuming addProject function handles ID creation
      alert('Project added successfully!');
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Failed to add project');
    }
  };

  return (
    <div className="add-project-form">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Project Image:
          <input
            type="text"
            name="image"
            value={project.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </label>
        <label className="block mb-2">
          Project Name:
          <input
            type="text"
            name="name"
            value={project.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </label>
        <label className="block mb-2">
          Project Description:
          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjectForm;
