import React, { useState } from 'react';
import { ContactForm as ContactFormType } from '../../types';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormType>({
        fullName: '',
        email: '',
        mobile: '',
        city: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement your submit logic here
        console.log('Form data submitted:', formData);
        setFormData({ fullName: '', email: '', mobile: '', city: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-indigo-500 p-4 px-8 rounded-lg shadow-md max-w-md sm:w-96 text-center bg-opacity-50">
            <h2 className="text-xl font-bold mb-4 text-white">Get a Free Consultation</h2>
            <div className="mb-2">
                <label className="block font-semibold text-gray-300 mb-1" htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="focus:outline-none text-white w-full px-3 py-1 border rounded-md bg-transparent bg-opacity-50"
                    
                />
            </div>
            <div className="mb-2">
                <label className="block font-semibold text-gray-300 mb-1" htmlFor="email">Your Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus:outline-none text-white w-full px-3 py-1 border rounded-md bg-transparent bg-opacity-50"
                />
            </div>
            <div className="mb-2">
                <label className="block font-semibold text-gray-300 mb-1" htmlFor="mobile">Mobile Number</label>
                <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="focus:outline-none text-white w-full px-3 py-1 border rounded-md bg-transparent bg-opacity-50"
                />
            </div>
            <div className="mb-2">
                <label className="block font-semibold text-gray-300 mb-1" htmlFor="mobile">City</label>
                <input
                    type="tel"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="focus:outline-none text-white w-full px-3 py-1 border rounded-md bg-transparent bg-opacity-50"
                />
            </div>
         
            <button type="submit" className="w-auto mt-1 bg-orange-500 text-white px-4 py-1.5 rounded-md hover:bg-orange-600 font-bold">
                Send Quick Query
            </button>
        </form>
    );
};

export default ContactForm;
