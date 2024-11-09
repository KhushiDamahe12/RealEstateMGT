import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-200">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center shadow-md">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li>
              <Link to="/admin" className="block py-2 px-4 hover:bg-gray-700">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/projects" className="block py-2 px-4 hover:bg-gray-700">Projects</Link>
            </li>
            <li>
              <Link to="/admin/clients" className="block py-2 px-4 hover:bg-gray-700">Clients</Link>
            </li>
            <li>
              <Link to="/admin/contacts" className="block py-2 px-4 hover:bg-gray-700">Contacts</Link>
            </li>
            <li>
              <Link to="/admin/subscribers" className="block py-2 px-4 hover:bg-gray-700">Subscribers</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
