import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { MdHome,MdDashboard,MdUnsubscribe,MdContacts } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-200">
      <aside className="w-64 bg-gray-800 text-white flex flex-col overflow-hidden">
        <div className="h-16 flex items-center justify-center shadow-md">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="flex-1 p-4 overflow-hidden">
          <ul>
            <li className='flex items-center'>
              <MdHome />
              <Link to="/" className="block py-2 px-4 hover:bg-gray-700">Home</Link>
              
            </li>
            <li className='flex items-center'>
              <MdDashboard />
              <Link to="/admin" className="block py-2 px-4 hover:bg-gray-700">Dashboard</Link>
            </li>
            <li className='flex items-center'>
              <AiFillProject />
              <Link to="/admin/projects" className="block py-2 px-4 hover:bg-gray-700">Projects</Link>
            </li>
            <li className='flex items-center'>
              <FaUser />
              <Link to="/admin/clients" className="block py-2 px-4 hover:bg-gray-700">Clients</Link>
            </li>
            <li className='flex items-center'>
              <MdContacts />
              <Link to="/admin/contacts" className="block py-2 px-4 hover:bg-gray-700">Contacts</Link>
            </li>
            <li className='flex items-center'>
              <MdUnsubscribe />
              <Link to="/admin/subscribers" className="block py-2 px-4 hover:bg-gray-700">Subscribers</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8 space-y-5 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
