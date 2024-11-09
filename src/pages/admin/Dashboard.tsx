import React from 'react';
import DashboardLayout from './DashboardLayout';

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <h2 className="text-3xl font-bold mb-4">Welcome to the Admin Dashboard</h2>
      <p>Here you can manage your projects, clients, users, and contacts.</p>
    </DashboardLayout>
  );
};

export default Dashboard;
