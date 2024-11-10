import React, { useState } from 'react';
import { Project } from '../../../types';
import { addProject } from '../../../services/api';

const AddProjectForm: React.FC = () => {
  const [project, setProject] = useState<Omit<Project, 'id'>>({
    image: '' as File | string, // Initialize with empty File or string
    name: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === 'image') {
      const target = e.target as HTMLInputElement; // Cast the target as HTMLInputElement
      setProject({
        ...project,
        image: target.files ? target.files[0] : '',
      });
    } else {
      setProject({
        ...project,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addProject(project as Project);
      alert('Project added successfully!');
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Failed to add project');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Project Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Project Name:</label>
            <input
              type="text"
              name="name"
              value={project.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 ">Project Description:</label>
            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              className="w-full p-2 border rounded resize-none"
              required
            />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Add Project</button>
        </form>
      </div>
    </div>
  );
};

export default AddProjectForm;
