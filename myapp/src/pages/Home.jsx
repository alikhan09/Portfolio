import { motion } from 'framer-motion';
import profileImg from '../assets/Profile.jpg'; 

const Home = ({currentpage,setCurrentPage}) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white p-10 gap-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Profile Image */}
      <motion.img
        src={profileImg}
        alt="Profile"
        className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-yellow-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Text Content */}
      <motion.div
        className="max-w-xl text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-yellow-500">Ali Ibrar Khan</span>
        </h1>
        <h2 className="text-2xl text-gray-600 mb-6">
          A Frontend Developer passionate about clean design & code.
        </h2>
        <p className="text-gray-500 text-lg mb-6">
          I build responsive, accessible web apps with React and Tailwind CSS. Have a look at my work and let's connect!
        </p>

        {/*Resume Button*/}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/resume.pdf" 
            download
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Download Resume
          </a>
          <button
            onClick={() => setCurrentPage('Contact')}
            className="border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition"
          >
            Contact Me
            
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
