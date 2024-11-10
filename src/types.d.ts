export interface Project {
    id: string;
    name: string;
    description: string;
    image: File | string;
}

export interface Client {
  id: string;
  image: File | string;
  name: string;
  description: string;
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


export interface Subscription {
  _id: string;
  email: string;
  createdAt:string;
}


export interface Contact {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
}
