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
