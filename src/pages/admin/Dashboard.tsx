import React from 'react';
import DashboardLayout from './DashboardLayout';
import ProjectList from './Projects/ProjectList';
import ClientList from './Client/ClientList';
import NewsletterSubscriptions from './Subscriber/SubscriberList';
import ContactFormDetails from './Contacts/ContactList';

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div>

      <h2 className="text-3xl font-bold mb-4">Welcome to the Admin Dashboard</h2>
      <p>Here you can manage your projects, clients, users, and contacts.</p>
      </div>

      <div>
        <ProjectList />
      </div>
      <div className="client-section">
        <ClientList />
      </div>
      <div className="subscriber">
        <NewsletterSubscriptions />
      </div>
      <div className="contactDetails">
        <ContactFormDetails />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
