import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaGithub, FaLaravel, FaPhp
} from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiMysql,} from 'react-icons/si';

const About = ({ currentpage, setCurrentPage }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { 
      icon: <FaHtml5 className="text-orange-500" />,
      animation: { rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }
    },
    { 
      icon: <FaCss3Alt className="text-blue-500" />,
      animation: { scale: [1, 1.1, 1], rotate: [0, 5, 0] }
    },
    { 
      icon: <FaJs className="text-yellow-400" />,
      animation: { y: [0, -5, 0], rotate: [0, 15, 0] }
    },
    { 
      icon: <FaReact className="text-blue-400" />,
      animation: { rotate: [0, 360], scale: [1, 1.1, 1] }
    },
    { 
      icon: <FaLaravel className="text-red-500" />,
      animation: { x: [0, 5, -5, 0], y: [0, -5, 0] }
    },
     { 
      icon: <FaGithub className="text-red-500" />,
      animation: { x: [0, 5, -5, 0], y: [0, -5, 0] }
    },
    { 
      icon: <SiTailwindcss className="text-cyan-400" />,
      animation: { scale: [1, 1.15, 1], opacity: [1, 0.8, 1] }
    },
  
    { 
      icon: <SiFramer className="text-black" />,
      animation: { y: [0, -5, 5, 0], rotate: [0, 5, -5, 0] }
    },
    { 
      icon: <FaPhp className="text-purple-500" />,
      animation: { scale: [1, 1.1, 1], x: [0, 3, -3, 0] }
    },
    { 
      icon: <SiMysql className="text-blue-600" />,
      animation: { rotate: [0, 5, -5, 0], y: [0, -3, 0] }
    },
    
  ];

  // Floating shapes for background
  const shapes = Array(15).fill().map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    color: `rgba(253, 230, 138, ${Math.random() * 0.2 + 0.05})`,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10
  }));

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            backgroundColor: shape.color
          }}
          animate={{
            x: [0, 20, 0, -20, 0],
            y: [0, 15, 0, -15, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Mouse Follow Gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(253, 230, 138, 0.1), transparent 80%)`
        }}
        animate={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(253, 230, 138, 0.1), transparent 80%)`
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />

      <div className="relative z-10">
        <motion.div
          className="min-h-screen py-16 px-6 sm:px-10 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.h2 
            className="text-4xl font-bold mb-8 relative inline-block"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              About Me
            </span>
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>

          {/* Bio */}
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mb-12 leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold">Ali Ibrar Khan</span>, a passionate Full Stack Developer specializing in <span className="font-semibold text-yellow-400">Laravel</span> and <span className="font-semibold text-blue-400">React</span>. I create performant, accessible web applications with clean code and intuitive interfaces.
          </motion.p>

          {/* Skills */}
          <motion.div 
            className="w-full max-w-4xl mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Technical Skills
              </span>
            </h3>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <motion.div
                    className="bg-gray-800/50 p-4 rounded-xl shadow-md border border-gray-700/50 backdrop-blur-sm flex items-center justify-center"
                    animate={skill.animation}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut'
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      boxShadow: '0 10px 25px rgba(253, 230, 138, 0.2)',
                      backgroundColor: 'rgba(55, 65, 81, 0.7)'
                    }}
                  >
                    <div className="text-3xl">
                      {skill.icon}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            className="w-full max-w-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Education
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  level: "Matric in Computer Science",
                  institution: "Naveed-e-Sahar Model School Lalamusa",
                  completed: "July 2018",
                  marks: "956/1100 (87%)",
                  emoji: "1️⃣"
                },
                {
                  level: "FSC (Pre-Engineering)",
                  institution: "Punjab Group of Colleges Gujrat",
                  completed: "Oct 2020",
                  marks: "840/1100 (76%)",
                  emoji: "2️⃣"
                },
                {
                  level: "BS in Computer Science",
                  institution: "University of Central Punjab Lahore",
                  completed: "Mar 2025",
                  marks: "3.7/4.0 CGPA",
                  emoji: "3️⃣"
                }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl shadow-sm border border-gray-700/50 backdrop-blur-sm hover:shadow-md transition-all"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 10px 25px rgba(253, 230, 138, 0.2)',
                    backgroundColor: 'rgba(55, 65, 81, 0.7)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 p-3 rounded-full">
                      <span className="text-xl">{edu.emoji}</span>
                    </div>
                    <h4 className="font-bold text-white">{edu.level}</h4>
                  </div>
                  <p className="text-gray-300 mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-400"><span className="font-medium">Completed:</span> {edu.completed}</p>
                  <p className="text-sm text-gray-400"><span className="font-medium">Marks:</span> {edu.marks}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;