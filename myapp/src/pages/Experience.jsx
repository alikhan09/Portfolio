import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Pace Technology, Islamabad',
      duration: 'May 2025 – Onward',
      description:
        'Worked with React and Tailwind CSS to build responsive UI components. Collaborated with backend teams to integrate REST APIs and delivered performance-optimized web pages.',
    },
    {
      title: 'Freelance Web Developer',
      company: 'Devention',
      duration: 'Oct,2024 – Jan,2025',
      description:
        'Developed multiple client websites with clean, responsive design. Handled both UI and functionality using React.js, Tailwind, and Firebase.',
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-50 p-10 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-10">🧑‍💻 Experience</h2>

      <div className="max-w-3xl space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-600">
              {exp.title}
            </h3>
            <p className="text-gray-700">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
            <p className="text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
