const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL || 'https://realtrust-backend.onrender.com/api';

const endpoints = {
  // Authentication
  register: `${API_BASE_URL}/admin/register`,
  login: `${API_BASE_URL}/admin/login`,
  
  
  // Projects
  fetchProjects: `${API_BASE_URL}/projects`,
  addProject: `${API_BASE_URL}/projects`,
  updateProject: (projectId: string) => `${API_BASE_URL}/projects/${projectId}`,
  deleteProject: (projectId: string) => `${API_BASE_URL}/projects/${projectId}`,
  
  // Clients
  fetchClients: `${API_BASE_URL}/clients`,
  addClient: `${API_BASE_URL}/clients`,
  updateClient: (clientId: string) => `${API_BASE_URL}/clients/${clientId}`,
  deleteClient: (clientId: string) => `${API_BASE_URL}/clients/${clientId}`,

  // Users
  fetchUsers: `${API_BASE_URL}/users`,
  fetchUserById: (userId: string) => `${API_BASE_URL}/users/${userId}`,
  addUser: `${API_BASE_URL}/users`,
  updateUser: (userId: string) => `${API_BASE_URL}/users/${userId}`,
  deleteUser: (userId: string) => `${API_BASE_URL}/users/${userId}`,

  // Contacts
  fetchContacts: `${API_BASE_URL}/contacts`,
  addContact: `${API_BASE_URL}/contacts`,
  deleteContact: (contactId: string) => `${API_BASE_URL}/contacts/${contactId}`,

  // Newsletters
  fetchSubscriptions: `${API_BASE_URL}/newsletter`,
  subscribe: `${API_BASE_URL}/newsletter`,
  unsubscribe: (subscriptionId: string) => `${API_BASE_URL}/newsletter/${subscriptionId}`,

  // File Uploads
  uploadFile: `${API_BASE_URL}/uploads`
};

export default endpoints;
