import React from 'react';
import AddProjectForm from './admin/Projects/ProjectForm';

const AddProjectPage: React.FC = () => {
  return (
    <div className="add-project-page">
      <h2 className="text-3xl font-bold mb-4">Add New Project</h2>
      <AddProjectForm />
    </div>
  );
};

export default AddProjectPage;
