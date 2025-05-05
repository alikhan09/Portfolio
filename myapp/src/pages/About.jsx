
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS',
    'Git & GitHub', 'Responsive Design', 'Firebase', 'Framer Motion',
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-50 p-10 flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>

      {/* Bio */}
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        I'm <span className="text-yellow-500 font-semibold">Ali Ibrar Khan</span>, a passionate Frontend Developer based in Pakistan.
        I build interactive, user-centered websites using modern tech like React and Tailwind.
        I enjoy solving problems, learning new tools, and bringing UI/UX ideas to life.
      </p>

      {/* Skills */}
      <div className="w-full max-w-4xl mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">🏅 Skills & Technologies</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium shadow-sm hover:bg-yellow-200 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="w-full max-w-3xl">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">🎓 Education</h3>
        <div className="text-left text-gray-600 space-y-2 flex">
          <div className='mr-4'>
            <p className="font-semibold text-gray-800">Matric in Computer Science</p>
            <p>Naveed-e-Sahar Model School Lalamusa, Pakistan</p>
            <p className="text-sm">Completed: July,2018</p>
            <p className="text-sm">Marks: 956/1100</p>
          </div>
          <div className='mr-4'>
            <p className="font-semibold text-gray-800">FSC (Pre-Enginnering) </p>
            <p>Punjab Group Of Colleges Gujrat, Pakistan</p>
            <p className="text-sm">Completed: Oct,2020</p>
            <p className="text-sm">Marks: 840/1100</p>
          </div>
          <div className='mr-4'>
            <p className="font-semibold text-gray-800">BS in Computer Science</p>
            <p>University of Central Punjab Lahore, Pakistan</p>
            <p className="text-sm">Graduation: Mar,2025</p>
            <p className="text-sm">CGPA: 3.7</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
