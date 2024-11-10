import React from 'react';

interface ClientCardProps {
  _id:string;
  image: string;
  name: string;
  description: string;
  designation: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ image, name, description, designation }) => {
  return (
    <div className="client-card p-4 bg-white shadow-md rounded-lg flex flex-col justify-center items-center">
      <img src={image} alt={name} className="client-image w-32 h-32 object-cover rounded-full mb-4" />
      <div className="client-details">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-sm mb-2 w-full text-center text-wrap">{description}</p>
        <p className="text-sm mb-2 text-center">{designation}</p>
      </div>
      <div className="client-actions mt-4">
        <button className="text-blue-500 hover:underline mr-2">Edit</button>
        <button className="text-red-500 hover:underline mr-2">Delete</button>
        <button className="text-green-500 hover:underline">View Details</button>
      </div>
    </div>
  );
};

export default ClientCard;
