import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landing';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/admin/Dashboard';
import ClientList from './pages/admin/Client/ClientList';
import ContactList from './pages/admin/ContactList';
import ProjectList from './pages/admin/Projects/ProjectList';
// import ProjectsSection from './pages/admin/Projects/ProjectsSection'
import SubscriberList from './pages/admin/SubscriberList';

export default function App() {
 

  return (
  
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/clients" element={<ClientList />} />
        <Route path="/admin/contacts" element={<ContactList />} />
        {/* <Route path="/admin/projects" element={<ProjectsSection />} /> */}
        <Route path="/admin/projects" element={<ProjectList />} />
        <Route path="/admin/subscribers" element={<SubscriberList />} />

 
      </Routes>

    
  );
}
