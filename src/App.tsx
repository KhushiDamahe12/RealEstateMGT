import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './pages/Landing';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/admin/Dashboard';
import AllContacts from './pages/admin/Contacts/AllContacts';
import AllProjects from './pages/admin/Projects/AllProjects';
import AllSubscriber from './pages/admin/Subscriber/AllSubscribers';
import AllClientsPage from './pages/admin/Client/AllClients';
import AddProjectPage from './pages/AddProjectPage';
import AddClientPage from './pages/AddClientPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'; // Import the ProtectedRoute component
import { AuthProvider } from './context/authContext';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/admin/clients" 
            element={
              <ProtectedRoute>
                <AllClientsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/contacts" 
            element={
              <ProtectedRoute>
                <AllContacts />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/projects" 
            element={
              <ProtectedRoute>
                <AllProjects />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/subscribers" 
            element={
              <ProtectedRoute>
                <AllSubscriber />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/add-project" 
            element={
              <ProtectedRoute>
                <AddProjectPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/add-client" 
            element={
              <ProtectedRoute>
                <AddClientPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
