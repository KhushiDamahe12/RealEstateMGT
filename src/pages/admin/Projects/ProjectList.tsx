import React from 'react';
import DashboardLayout from '../DashboardLayout';

const ProjectList: React.FC = () => {
  return (
    <DashboardLayout>
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <p>Manage your projects here.</p>
    </DashboardLayout>
  );
};

export default ProjectList;
