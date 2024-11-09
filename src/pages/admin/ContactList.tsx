import React from 'react';
import DashboardLayout from './DashboardLayout';

const ContactList: React.FC = () => {
  return (
    <DashboardLayout>
      <h2 className="text-3xl font-bold mb-4">Contacts</h2>
      <p>Manage your contacts here.</p>
    </DashboardLayout>
  );
};

export default ContactList;
