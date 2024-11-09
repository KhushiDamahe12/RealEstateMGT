import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landing';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/admin/Dashboard';
import ContactList from './pages/admin/ContactList';
import AllProjects from './pages/admin/Projects/AllProjects';
import SubscriberList from './pages/admin/SubscriberList';
import AllClientsPage from './pages/admin/Client/AllClients';
import AddProjectPage from './pages/AddProjectPage';
import AddClientPage from './pages/AddClientPage';



export default function App() {

  return (
  
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/clients" element={  <AllClientsPage />} />
    
        <Route path="/admin/contacts" element={<ContactList />} />
        <Route path="/admin/projects" element={<AllProjects />} />
        <Route path="/admin/subscribers" element={<SubscriberList />} />
        <Route path="/admin/add-project" element={<AddProjectPage />} />
        <Route path="/admin/add-client" element={<AddClientPage />} />
 
      </Routes>

    
  );
}
