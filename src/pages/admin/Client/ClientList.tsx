import React, { useState, useEffect } from 'react';
import ClientCard from './ClientCard';
import { Client } from '../../../types';
import {Link} from 'react-router-dom';

const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    // Fetching the clients from an API (dummy data for now)
    const fetchClients = async () => {
      try {
        // Placeholder for actual API call
        const clientsData: Client[] = [
          { id: '1', name: 'Client One', description: 'Description of Client One', image: 'client1.jpg', designation: 'CEO' },
          { id: '2', name: 'Client Two', description: 'Description of Client Two', image: 'client2.jpg', designation: 'CTO' },
          { id: '3', name: 'Client Three', description: 'Description of Client Three', image: 'client3.jpg', designation: 'CFO' },
          { id: '4', name: 'Client Four', description: 'Description of Client Four', image: 'client4.jpg', designation: 'COO' },
          { id: '5', name: 'Client Five', description: 'Description of Client Five', image: 'client5.jpg', designation: 'CMO' },
        ];
        setClients(clientsData);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="client-list-section">
      <div className='flex items-end'>

      <h2 className="text-2xl font-bold mb-4 mr-auto ">Clients</h2>
      <Link to={'/admin/add-client'}>
      <button className="my-4 w-32 bg-blue-500 text-white py-2 px-4 rounded">Add Client</button>
      </Link>
      </div>
      <div className="clients-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {clients.slice(0, 4).map((client) => (
          <ClientCard
            key={client.id}
            image={client.image}
            name={client.name}
            description={client.description}
            designation={client.designation}
          />
        ))}
      </div>
      
    </div>
  );
};

export default ClientList;
