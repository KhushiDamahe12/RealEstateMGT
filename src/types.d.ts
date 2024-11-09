export interface Project {
    id: string;
    name: string;
    description: string;
    image: string;
}

export interface Client {
    id: string;
    name: string;
    description: string;
    image: string;
    designation: string;
}

export interface ContactForm {
    fullName: string;
    email: string;
    mobile: string;
    city: string;
}

export interface Subscriber {
    email: string;
}
export type SetShowLogin = React.Dispatch<React.SetStateAction<boolean>>;
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface Project {
  id: string;
  image: string;
  name: string;
  description: string;
  status: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
}

export interface Subscription {
  id: string;
  email: string;
}
