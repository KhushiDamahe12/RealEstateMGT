import React from 'react';
import DashboardLayout from './DashboardLayout';

const SubscriberList: React.FC = () => {
  return (
    <DashboardLayout>
      <h2 className="text-3xl font-bold mb-4">Subscribers</h2>
      <p>Manage your subscribers here.</p>
    </DashboardLayout>
  );
};

export default SubscriberList;
