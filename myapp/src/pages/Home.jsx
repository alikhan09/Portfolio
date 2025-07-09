import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import profileImg from '../assets/Profile.jpg';
import { FiDownload, FiArrowDown } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaLaravel, FaReact, FaPhp } from 'react-icons/fa';
import { SiMysql, SiTailwindcss} from 'react-icons/si';
import resumePdf from '../assets/Ali_Ibrar_Khan_Resume.pdf';

const Home = ({ scrollToAbout }) => {
  const [currentTech, setCurrentTech] = useState(0);
  const technologies = [
    { name: 'Laravel', color: 'text-red-500', icon: <FaLaravel className="inline mr-2" /> },
    { name: 'React', color: 'text-blue-400', icon: <FaReact className="inline mr-2" /> },
  ];

  // Floating particles background
  const particles = Array(30).fill().map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 0.5 + 0.5,
    delay: Math.random() * 2
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: <FaGithub size={20} />, url: "https://github.com/alikhan09" },
    { icon: <FaLinkedin size={20} />, url: "https://linkedin.com/in/ali-ibrar-khan" },
    { icon: <FaTwitter size={20} />, url: "https://twitter.com/yourusername" }
  ];

  const techStack = [
    { icon: <FaLaravel className="text-red-500" />, name: "Laravel" },
    { icon: <FaReact className="text-blue-400" />, name: "React.js" },
    { icon: <FaPhp className="text-purple-500" />, name: "PHP" },
    { icon: <SiMysql className="text-blue-600" />, name: "MySQL" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
  ];

 const handleDownload = () => {
  const link = document.createElement("a");
  link.href = resumePdf; // Absolute path
  link.setAttribute("download", "Ali_Ibrar_Khan_Resume.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden relative">
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-10"
          style={{
            width: `${particle.size}rem`,
            height: `${particle.size}rem`,
            left: `${particle.x}%`,
            top: `${particle.y}%`
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 5 + particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {/* Left Column - Profile */}
          <motion.div
            className="flex justify-center"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { type: 'spring', stiffness: 100 }
              }
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-tr from-red-500 to-blue-600 rounded-3xl blur-xl opacity-30 -z-10"
                animate={{
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: "easeInOut"
                }}
              />
              <motion.img
                src={profileImg}
                alt="Profile"
                className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-white/20 relative z-10"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                whileHover={{ scale: 1.03 }}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-6"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { type: 'spring', stiffness: 50 }
              }
            }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Available for work</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Ali Ibrar Khan
            </motion.h1>

            <div className="text-xl sm:text-2xl text-gray-300 font-medium h-10 flex items-center">
              <span>Specializing in </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={technologies[currentTech].name}
                  className={`ml-2 ${technologies[currentTech].color} font-semibold`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {technologies[currentTech].icon}
                  {technologies[currentTech].name}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              I architect high-performance web applications with cutting-edge technologies. 
              Specializing in building robust backends with Laravel and stunning frontends with React.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/10"
                  whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                onClick={handleDownload}
                className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload /> Download Resume
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full shadow-lg z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
        whileTap={{ scale: 0.9 }}
      >
        <FiArrowDown size={24} />
      </motion.button>
    </div>
  );
};

export default Home;