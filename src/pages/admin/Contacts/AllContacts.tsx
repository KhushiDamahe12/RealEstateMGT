import React, { useState, useEffect } from 'react';
import { fetchContacts } from '../../../services/api'; // Import the API function
import { Contact } from '../../../types';
import Loader from '../../../components/Loader/Loader';

const ContactFormDetails: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsData = await fetchContacts();
        setContacts(contactsData);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    getContacts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="contact-form-details-section  px-8 py-4">
      <h2 className="text-2xl font-bold mb-4">Contact Form Details</h2>
      <div className="overflow-y-auto max-h-64">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead className='bg-gray-900 text-white'>
            <tr>
              <th className="lg:px-4 py-2 border border-gray-300 text-left md:text-center">S.No.</th>
              <th className="lg:px-4 py-2 border border-gray-300 text-left md:text-center">Full Name</th>
              <th className="lg:px-4 py-2 border border-gray-300 text-left md:text-center">Email Address</th>
              <th className="lg:px-4 py-2 border border-gray-300 text-left md:text-center">Mobile Number</th>
              <th className="lg:px-4 py-2 border border-gray-300 text-left md:text-center">City</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact.id} className="border-t border-gray-300">
                <td className="lg:px-4 py-2 border border-gray-300 text-left md:text-center">{index + 1}</td>
                <td className="lg:px-4 py-2 border border-gray-300 text-left md:text-center">{contact.fullName}</td>
                <td className="lg:px-4 py-2 border border-gray-300 text-left md:text-center">{contact.email}</td>
                <td className="lg:px-4 py-2 border border-gray-300 text-left md:text-center">{contact.mobile}</td>
                <td className="lg:px-4 py-2 border border-gray-300 text-left md:text-center">{contact.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactFormDetails;
