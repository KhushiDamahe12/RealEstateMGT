import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import bgImage from '../../assets/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg'
const ConsultationSection: React.FC = () => {
    return (
        <section className="relative w-full ">
            <img src={bgImage} alt="Consultation Background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 py-10">
                <div className="md:w-1/2 p-6 text-white text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4">Consultation, Design, & Marketing</h1>
                    <p className="text-lg mb-8">Get in touch with us for a free consultation and kickstart your project today!</p>
                </div>
                <div className="md:w-1/2 p-6 flex justify-center items-center ">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ConsultationSection;
