import React, { useState, useEffect } from 'react';

interface Contact {
  id: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  city: string;
}

const ContactFormDetails: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    // Fetching the contact form responses from an API (dummy data for now)
    const fetchContacts = async () => {
      try {
        // Placeholder for actual API call
        const contactsData: Contact[] = [
          { id: '1', fullName: 'John Doe', email: 'john@example.com', mobileNumber: '1234567890', city: 'New York' },
          { id: '2', fullName: 'Jane Smith', email: 'jane@example.com', mobileNumber: '0987654321', city: 'Los Angeles' },
          { id: '3', fullName: 'Bob Brown', email: 'bob@example.com', mobileNumber: '1230984567', city: 'Chicago' },
          { id: '4', fullName: 'Alice Green', email: 'alice@example.com', mobileNumber: '4561237890', city: 'Houston' },
          { id: '5', fullName: 'Charlie White', email: 'charlie@example.com', mobileNumber: '7891234560', city: 'Phoenix' },
          { id: '6', fullName: 'Eve Black', email: 'eve@example.com', mobileNumber: '6549873210', city: 'San Francisco' },
        ];
        setContacts(contactsData);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="contact-form-details-section">
      <h2 className="text-2xl font-bold mb-4">Contact Form Details</h2>
      <div className="overflow-y-auto max-h-64">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead className='bg-gray-900 text-white'>
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left md:text-center">S.No.</th>
              <th className="px-4 py-2 border border-gray-300 text-left md:text-center">Full Name</th>
              <th className="px-4 py-2 border border-gray-300 text-left md:text-center">Email Address</th>
              <th className="px-4 py-2 border border-gray-300 text-left md:text-center">Mobile Number</th>
              <th className="px-4 py-2 border border-gray-300 text-left md:text-center">City</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact.id} className="border-t border-gray-300">
                <td className="px-4 py-2 border border-gray-300 text-left md:text-center">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-300 text-left md:text-center">{contact.fullName}</td>
                <td className="px-4 py-2 border border-gray-300 text-left md:text-center">{contact.email}</td>
                <td className="px-4 py-2 border border-gray-300 text-left md:text-center">{contact.mobileNumber}</td>
                <td className="px-4 py-2 border border-gray-300 text-left md:text-center">{contact.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactFormDetails;
