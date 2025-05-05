import { motion } from 'framer-motion';

const projects = [
  {
    title: '☕ Coffee Ordering System',
    description:
      'A React + Tailwind CSS based coffee shop ordering app with category filters, cart functionality, and Framer Motion animations.',
    github: 'https://github.com/alikhan09/Coffee-Hub',
    live: 'https://alikhan09.github.io/Coffee-Hub/',
  },
  {
    title: '🛍️ RexCenter Clothing Website',
    description:
      'A modern React website for a clothing shop in Karachi with category filters, stylish pages, and responsive design using Tailwind CSS.',
    github: 'https://github.com/alikhan09/rexcenter',
    live: 'https://alikhan09.github.io/rexcenter/',
  },
  {
    title: '💼 Portfolio Website',
    description:
      'This portfolio site built using React, Tailwind CSS, and Framer Motion to showcase my work, experience, and skills.',
    github: 'https://github.com/yourusername/portfolio',
    live: '',
  },
];

const Projects = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 p-10 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-10">📁 My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-yellow-500 font-medium hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-yellow-500 font-medium hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
