import React from 'react';
import AddClientForm from './admin/Client/ClientForm';

const AddClientPage: React.FC = () => {
  return (
    <div className="add-client-page">
      <h2 className="text-3xl font-bold mb-4">Add New Client</h2>
      <AddClientForm />
    </div>
  );
};

export default AddClientPage;
