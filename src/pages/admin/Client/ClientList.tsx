import React from 'react';
import DashboardLayout from '../DashboardLayout';

const ClientList: React.FC = () => {
  return (
    <DashboardLayout>
      <h2 className="text-3xl font-bold mb-4">Clients</h2>
      <p>Manage your clients here.</p>
    </DashboardLayout>
  );
};

export default ClientList;
