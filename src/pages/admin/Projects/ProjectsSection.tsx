import ProjectCard from './ProjectCard';

// interface Project {
//   id: string;
//   image: string;
//   name: string;
//   description: string;
//   status: string;
// }


const projects = [
    {
        id:'1',
      image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
      name: 'Project One',
      description: 'Brief description of Project One',
      status: 'In Progress',
    },
    {
        id:'2',
      image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
      name: 'Project Two',
      description: 'Brief description of Project Two',
      status: 'Completed',
    },
    {
        id:'3',
      image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
      name: 'Project Three',
      description: 'Brief description of Project Three',
      status: 'In Progress',
    },
  ];


const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            name={project.name}
            description={project.description}
            status={project.status}
          />
        ))}
      </div>
      <button>View All Projects</button>
    </div>
  );
};

export default ProjectsSection;
