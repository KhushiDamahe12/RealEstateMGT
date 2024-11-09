import React, { useState } from 'react';
import { Client } from '../../../types';
import { addClient } from'../../../services/api';

const AddClientForm: React.FC = () => {
  const [client, setClient] = useState<Omit<Client, 'id'>>({
    image: '',
    name: '',
    description: '',
    designation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addClient(client as Client); // assuming addClient function handles ID creation
      alert('Client added successfully!');
    } catch (error) {
      console.error('Error adding client:', error);
      alert('Failed to add client');
    }
  };

  return (
    <div className="add-client-form">
      <h2 className="text-2xl font-bold mb-4">Add New Client</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Client Image:
          <input
            type="text"
            name="image"
            value={client.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </label>
        <label className="block mb-2">
          Client Name:
          <input
            type="text"
            name="name"
            value={client.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </label>
        <label className="block mb-2">
          Client Description:
          <textarea
            name="description"
            value={client.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </label>
        <label className="block mb-2">
          Client Designation:
          <input
            type="text"
            name="designation"
            value={client.designation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
          Add Client
        </button>
      </form>
    </div>
  );
};

export default AddClientForm;
