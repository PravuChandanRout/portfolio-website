
const projects = [
  {
    name: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    name: 'Social Media App',
    description: 'A real-time social networking platform with video sharing.',
    technologies: ['Vue.js', 'Firebase', 'WebRTC'],
  },
  {
    name: 'Game Analytics Dashboard',
    description: 'Real-time analytics platform for game developers.',
    technologies: ['Angular', 'Python', 'AWS'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-neutral-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
