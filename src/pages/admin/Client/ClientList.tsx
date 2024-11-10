import React, { useState, useEffect } from 'react';
import ClientCard from './ClientCard';
import { Client } from '../../../types';
import { fetchClients } from '../../../services/api';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getClients = async () => {
      try {
        const clientsData = await fetchClients();
        setClients(clientsData);
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false);
      }
    };

    getClients();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="client-list-section">
      <div className="flex items-end">
        <h2 className="text-2xl font-bold mb-4 mr-auto">Clients</h2>
        <Link to="/admin/add-client">
          <button className="my-4 w-32 bg-blue-500 text-white py-2 px-4 rounded">Add Client</button>
        </Link>
      </div>
      <div className="clients-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {clients.slice(0, 4).map((client) => (
          <ClientCard
            _id={client.id}
            image={typeof client.image === 'string' ? client.image : ''} // Ensure it's a URL
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
