import  { useEffect, useState } from 'react';
import { fetchProjects } from '../../services/api';
import { Project } from '../../types';

export default function ProjectsSection() {
    const [projects, setProjects] = useState<Project[]>([]);
    console.log(projects);
// Dummy data for development
const dummyProjects: Project[] = [
    {
        id: '1',
        name: 'Project Alpha',
        description: 'This is a short description of Project Alpha. It involves exciting features and developments.',
        image: 'https://via.placeholder.com/300x200', // Placeholder image URL
        
    },
    {
        id: '2',
        name: 'Project Beta',
        description: 'This is a short description of Project Beta. It is packed with innovative solutions and ideas.',
        image: 'https://via.placeholder.com/300x200', // Placeholder image URL
        
    },
    {
        id: '3',
        name: 'Project Gamma',
        description: 'This is a short description of Project Gamma. It focuses on cutting-edge technology.',
        image: 'https://via.placeholder.com/300x200', // Placeholder image URL
        
    },
];


    useEffect(() => {
        const loadProjects = async () => {
            const data = await fetchProjects();
            setProjects(data);
        };
        loadProjects();
    }, []);

    return (
        <section id="our-projects" className="py-12 bg-gray-100 px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dummyProjects.map(project => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md p-6">
                            <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
