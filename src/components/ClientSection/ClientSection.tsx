import React, { useEffect, useState } from 'react';
import { Client } from '../../types';

// Dummy data for development
const dummyClients: Client[] = [
    {
        id: '1',
        name: 'John Doe',
        description: 'RealTrust helped us achieve our goals with remarkable ease and efficiency. Highly recommended!',
        image: 'https://via.placeholder.com/150x150', // Placeholder image URL
        designation: 'CEO, Company A',
    },
    {
        id: '2',
        name: 'Jane Smith',
        description: 'An outstanding experience from start to finish. RealTrust truly understands our needs.',
        image: 'https://via.placeholder.com/150x150', // Placeholder image URL
        designation: 'CTO, Company B',
    },
    {
        id: '3',
        name: 'Emily Johnson',
        description: 'Professional, efficient, and reliable. RealTrust is our go-to partner for all projects.',
        image: 'https://via.placeholder.com/150x150', // Placeholder image URL
        designation: 'Project Manager, Company C',
    },
];

export default function ClientsSection() {
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        // Simulate fetching data from the backend
        setClients(dummyClients);
    }, []);

    return (
        <section id="happy-clients" className="py-12 bg-white px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Happy Clients</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clients.map(client => (
                        <div key={client.id} className="bg-gray-100 rounded-lg shadow-md p-6">
                            <img src={client.image} alt={client.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                            <p className="text-gray-700 mb-4">{client.description}</p>
                            <h3 className="text-xl font-bold">{client.name}</h3>
                            <h4 className="text-md text-gray-500">{client.designation}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
