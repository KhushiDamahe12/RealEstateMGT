import React, { useState } from 'react';
import { Client } from '../../../types';
import { addClient } from '../../../services/api';

const AddClientForm: React.FC = () => {
  const [client, setClient] = useState<Omit<Client, 'id'>>({
    image: {} as File, // Initialize with empty File object
    name: '',
    description: '',
    designation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === 'image') {
      const target = e.target as HTMLInputElement; // Cast the target as HTMLInputElement
      setClient({
        ...client,
        image: target.files ? target.files[0] : ({} as File),
      });
    } else {
      setClient({
        ...client,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addClient(client as Client);
      alert('Client added successfully!');
    } catch (error) {
      console.error('Error adding client:', error);
      alert('Failed to add client');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
       
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Client Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Client Name:</label>
            <input
              type="text"
              name="name"
              value={client.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Client Description:</label>
            <textarea
              name="description"
              value={client.description}
              onChange={handleChange}
              className="w-full p-2 border rounded resize-none"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Client Designation:</label>
            <input
              type="text"
              name="designation"
              value={client.designation}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Add Client</button>
        </form>
      </div>
    </div>
  );
};

export default AddClientForm;
