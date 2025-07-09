import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaShoppingCart,
  FaCoffee,
  FaBuilding,
  FaTshirt,
  FaLaptopCode,
  FaLayerGroup,
  FaCode,
  FaUserGraduate
} from "react-icons/fa";
import {
  SiReact,
  SiLaravel,
  SiTailwindcss,
  SiMysql,
  SiFramer,
  SiFirebase,
  SiJavascript,
  SiVite
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const Projects = ({ currentpage, setCurrentPage }) => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "SHOPPER E-COMMERCE",
      company: "PACE TECHNOLOGY",
      description:
        "Enterprise-grade e-commerce platform with React frontend, Laravel backend, and MySQL database. Features real-time inventory, payment processing, and admin dashboard.",
      technologies: [
        { icon: <SiLaravel />, name: "LARAVEL" },
        { icon: <SiReact />, name: "REACT 18" },
        { icon: <SiMysql />, name: "MYSQL" },
        { icon: <SiTailwindcss />, name: "TAILWIND" },
      ],
      github: "",
      live: "",
      icon: <FaShoppingCart />,
      type: "FULLSTACK",
      color: "from-purple-600 to-indigo-600",
    },
    {
      title: "EDUVISION CAREER PORTAL",
      company: "EDUVISION",
      description:
        "A dynamic student career counseling platform built with React and Tailwind CSS. Developed responsive UI components, implemented reusable layout systems, and optimized user experience across devices.",
      technologies: [
        { icon: <SiReact />, name: "REACT 18" },
        { icon: <SiTailwindcss />, name: "TAILWIND CSS" },
        { icon: <SiJavascript />, name: "JAVASCRIPT" },
        { icon: <SiVite />, name: "VITE" },
      ],
      github: "",
      live: "",
      icon: <FaUserGraduate />,
      type: "FRONTEND",
      color: "from-blue-500 to-cyan-500",
    },

    {
      title: "COFFEE HUB",
      description:
        "Interactive coffee ordering PWA with animations, cart functionality, and responsive design. Achieved 95+ Lighthouse performance score.",
      technologies: [
        { icon: <SiReact />, name: "REACT" },
        { icon: <SiTailwindcss />, name: "TAILWIND" },
        { icon: <SiFramer />, name: "FRAMER" },
        { icon: <FaCode />, name: "PWA" },
      ],
      github: "https://github.com/alikhan09/Coffee-Hub",
      live: "https://alikhan09.github.io/Coffee-Hub/",
      icon: <FaCoffee />,
      type: "FRONTEND",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "REXCENTER CLOTHING",
      description:
        "Modern e-commerce frontend with product filtering, responsive layouts, and optimized image loading. Reduced initial load time by 40%.",
      technologies: [
        { icon: <SiReact />, name: "REACT" },
        { icon: <SiTailwindcss />, name: "TAILWIND" },
        { icon: <SiFirebase />, name: "FIREBASE" },
      ],
      github: "https://github.com/alikhan09/rexcenter",
      live: "https://alikhan09.github.io/rexcenter/",
      icon: <FaTshirt />,
      type: "FRONTEND",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "DEV PORTFOLIO",
      description:
        "This interactive portfolio featuring advanced animations, responsive design, and dark mode. Built with cutting-edge React techniques.",
      technologies: [
        { icon: <SiReact />, name: "REACT" },
        { icon: <SiTailwindcss />, name: "TAILWIND" },
        { icon: <SiFramer />, name: "FRAMER" },
        { icon: <GiArtificialIntelligence />, name: "AI" },
      ],
      github: "https://github.com/yourusername/portfolio",
      live: "",
      icon: <FaLaptopCode />,
      type: "FRONTEND",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const filters = ["ALL", "FULLSTACK", "FRONTEND"];

  // Floating tech particles
  const particles = Array(30)
    .fill()
    .map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      opacity: Math.random() * 0.2 + 0.05,
      delay: Math.random() * 5,
    }));

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            opacity: [
              particle.opacity,
              particle.opacity * 1.5,
              particle.opacity,
            ],
          }}
          transition={{
            duration: 15 + particle.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNzQxNTEiIG9wYWNpdHk9IjAuMiI+PHBhdGggZD0iTTM2IDM0aDEydjEySDM2em0tMTIgMTJoMTJ2MTJIMjR6bS0xMi0xMmgxMnYxMkgxMnptMTItMTJoMTJ2MTJIMjR6TTAgMGg2MHY2MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.h2
          className="text-5xl md:text-7xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            PROJECT SHOWCASE
          </span>
          <motion.div
            className="h-1 mt-4 bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.h2>

        {/* Filters */}
        <motion.div
          className="flex justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium text-sm ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {projects
              .filter(
                (project) =>
                  activeFilter === "ALL" || project.type === activeFilter
              )
              .map((project, index) => (
                <motion.div
                  key={index}
                  className={`rounded-3xl overflow-hidden bg-gradient-to-br ${project.color} p-0.5`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.15 + 0.3 },
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  layout
                >
                  <div
                    className="h-full bg-gray-900 rounded-[calc(1.5rem-2px)] p-8 flex flex-col"
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Project Header */}
                    <motion.div className="flex items-start gap-4 mb-6">
                      <motion.div
                        className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10"
                        animate={{
                          rotate: hoveredProject === index ? 10 : 0,
                          scale: hoveredProject === index ? 1.1 : 1,
                        }}
                      >
                        <div className="text-3xl">{project.icon}</div>
                      </motion.div>
                      <div>
                        <motion.h3
                          className="text-2xl font-bold mb-1"
                          animate={{
                            x: hoveredProject === index ? 10 : 0,
                          }}
                        >
                          {project.title}
                        </motion.h3>
                        {project.company && (
                          <p className="text-sm text-cyan-400 flex items-center gap-2">
                            <FaBuilding />
                            {project.company}
                          </p>
                        )}
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-300 mb-6 flex-1"
                      animate={{
                        x: hoveredProject === index ? 5 : 0,
                      }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                        <FaLayerGroup />
                        <span>TECH STACK</span>
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/10"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(255,255,255,0.1)",
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              transition: { delay: i * 0.1 + 0.5 },
                            }}
                          >
                            <span className="text-lg">{tech.icon}</span>
                            <span>{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-white/10"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub />
                          <span>CODE</span>
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-cyan-400/20"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt />
                          <span>LIVE DEMO</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
