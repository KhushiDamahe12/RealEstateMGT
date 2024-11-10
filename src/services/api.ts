import axios from 'axios';
import endpoints from './apiconfig';
import { Project, User, Client, ContactForm, Subscription, Contact } from '../types';

const instance = axios.create({
  baseURL: endpoints.fetchProjects, // Base URL can be set dynamically
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Export instance
export default instance;
// Authentication
export const register = async (userData: User): Promise<User> => {
  try {
    const response = await instance.post(endpoints.register, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const login = async (credentials: { email: string; password: string }): Promise<{ token: string }> => {
  try {
    const response = await instance.post(endpoints.login, credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Projects
export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await instance.get(endpoints.fetchProjects);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};
export const addProject = async (projectData: Project): Promise<Project> => {
  const formData = new FormData();
  if (projectData.image instanceof File) {
    formData.append('image', projectData.image);
  } else {
    formData.append('image', projectData.image); // Assuming backend handles string URL correctly
  }
  formData.append('name', projectData.name);
  formData.append('description', projectData.description);

  try {
    const response = await instance.post(endpoints.addProject, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding project:', error);
    throw error;
  }
};


export const updateProject = async (projectId: string, projectData: Partial<Project>): Promise<Project> => {
  try {
    const response = await instance.put(endpoints.updateProject(projectId), projectData);
    return response.data;
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};


export const deleteProject = async (projectId: string): Promise<void> => {
  try {
    await instance.delete(endpoints.deleteProject(projectId));
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};
// Clients
export const fetchClients = async (): Promise<Client[]> => {
  try {
    const response = await instance.get(endpoints.fetchClients);
    return response.data;
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
};
export const addClient = async (clientData: Client): Promise<Client> => {
  const formData = new FormData();
  if (clientData.image instanceof File) {
    formData.append('image', clientData.image);
  }
  formData.append('name', clientData.name);
  formData.append('description', clientData.description);
  formData.append('designation', clientData.designation);

  try {
    const response = await instance.post(endpoints.addClient, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding client:', error);
    throw error;
  }
};



export const updateClient = async (clientId: string, clientData: Partial<Client>): Promise<Client> => {
  try {
    const response = await instance.put(endpoints.updateClient(clientId), clientData);
    return response.data;
  } catch (error) {
    console.error('Error updating client:', error);
    throw error;
  }
};


export const deleteClient = async (clientId: string): Promise<void> => {
  try {
    await instance.delete(endpoints.deleteClient(clientId));
  } catch (error) {
    console.error('Error deleting client:', error);
    throw error;
  }
};


// Users
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await instance.get(endpoints.fetchUsers);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const fetchUserById = async (userId: string): Promise<User> => {
  try {
    const response = await instance.get(endpoints.fetchUserById(userId));
    return response.data;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};

export const addUser = async (userData: User): Promise<User> => {
  try {
    const response = await instance.post(endpoints.addUser, userData);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

export const updateUser = async (userId: string, userData: Partial<User>): Promise<User> => {
  try {
    const response = await instance.put(endpoints.updateUser(userId), userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (userId: string): Promise<void> => {
  try {
    await instance.delete(endpoints.deleteUser(userId));
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

// Contacts
export const fetchContacts = async (): Promise<Contact[]> => {
  try {
    const response = await instance.get(endpoints.fetchContacts);
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};


export const addContact = async (contactData: ContactForm): Promise<ContactForm> => {
  try {
    const response = await instance.post(endpoints.addContact, contactData);
    return response.data;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};

export const deleteContact = async (contactId: string): Promise<void> => {
  try {
    await instance.delete(endpoints.deleteContact(contactId));
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};

// Newsletters
export const fetchSubscriptions = async (): Promise<Subscription[]> => {
  try {
    const response = await instance.get(endpoints.fetchSubscriptions);
    return response.data;
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    throw error;
  }
};


export const subscribe = async (subscriptionData: { email: string }): Promise<Subscription> => {
  try {
    const response = await instance.post(endpoints.subscribe, subscriptionData);
    return response.data;
  } catch (error) {
    console.error('Error subscribing:', error);
    throw error;
  }
};

export const unsubscribe = async (subscriptionId: string): Promise<void> => {
  try {
    await instance.delete(endpoints.unsubscribe(subscriptionId));
  } catch (error) {
    console.error('Error unsubscribing:', error);
    throw error;
  }
};

// File Uploads
export const uploadFile = async (file: File): Promise<{ url: string }> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await instance.post(endpoints.uploadFile, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};
