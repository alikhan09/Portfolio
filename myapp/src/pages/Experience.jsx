import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaLaptopCode,
  FaCalendarAlt,
  FaBuilding,
  FaCodeBranch,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiReact,
  SiLaravel,
  SiTailwindcss,
  SiMysql
} from "react-icons/si";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const experiences = [
    {
      title: "FULL STACK ENGINEER",
      company: "PACE TECHNOLOGY",
      location: "ISLAMABAD",
      duration: "MAY 2025 – PRESENT",
      description: [
        " Developed a full-stack eCommerce platform, handling product management, user authentication, and order flow using modern technologies.",

        "Contributed as a Frontend Developer on EduVision, implementing dynamic UI components and enhancing user interaction with React and Tailwind CSS.",

        "Delivered fully responsive designs across multiple projects to ensure seamless user experience on desktop, tablet, and mobile devices.",
      ],
      icon: <FaLaptopCode />,
      technologies: [
        { icon: <SiLaravel />, name: "LARAVEL" },
        { icon: <SiReact />, name: "REACT " },
        { icon: <SiTailwindcss />, name: "TAILWIND" },
        { icon: <SiMysql />, name: "MySql" },
      ],
      color: "from-purple-600 to-blue-500",
    },
    {
      title: "FREELANCE DEVELOPER",
      company: "DEVENTION",
      location: "LAHORE | CONTRACT",
      duration: "OCT 2024 – JAN 2025",
      description: [
        "Worked as a Frontend Developer at Devention on two major projects: Towing Guy and Medico.",

        "Developed responsive, cross-browser compatible UIs using React.js and Tailwind CSS.",

        "Collaborated closely with UI/UX designers and backend developers to ensure seamless integration and design accuracy.",

        "Built and maintained reusable, scalable frontend components for both platforms.",

        "Integrated RESTful APIs to dynamically display and manage data across the applications.",

        "Focused on performance optimization and enhancing overall user experience.",

        "Played an active role in debugging, testing, and improving UI behavior for consistency and stability.",
      ],
      icon: <FaCodeBranch />,
      technologies: [
        { icon: <SiReact />, name: "REACT" },
        { icon: <SiTailwindcss />, name: "TAILWIND" },
      ],
      color: "from-amber-500 to-pink-600",
    },
  ];

  // Auto-rotate only on desktop
  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isMobile, experiences.length]);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      {/* Subtle grid background (desktop only) */}
      {!isMobile && (
        <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNzQxNTEiIG9wYWNpdHk9IjAuMiI+PHBhdGggZD0iTTM2IDM0aDEydjEySDM2em0tMTIgMTJoMTJ2MTJIMjR6bS0xMi0xMmgxMnYxMkgxMnptMTItMTJoMTJ2MTJIMjR6TTAgMGg2MHY2MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:px-6 md:py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              PROFESSIONAL JOURNEY
            </span>
          </h2>
          <motion.div
            className="h-1 mt-3 md:mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto max-w-xs"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Mobile Navigation Dots */}
        {isMobile && (
          <div className="flex justify-center gap-3 mb-6">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeIndex === index ? "bg-cyan-400" : "bg-white/30"
                }`}
                aria-label={`View experience ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Experience Cards */}
        <div className="relative h-auto min-h-[500px] md:min-h-[600px]">
          <AnimatePresence mode="wait">
            {experiences.map(
              (exp, index) =>
                activeIndex === index && (
                  <motion.div
                    key={index}
                    className={`flex flex-col gap-6 p-6 rounded-xl md:rounded-2xl bg-gradient-to-br ${exp.color} shadow-xl border border-white/10 backdrop-blur-sm`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { type: "spring", stiffness: 100 },
                    }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Card Header */}
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="text-3xl p-3 rounded-lg bg-white/10"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                      >
                        {exp.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-white/80 mt-1">
                          <FaBuilding size={12} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/60 mt-1">
                          <FaCalendarAlt size={12} />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 pl-1">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start text-sm md:text-base"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.1 * i },
                          }}
                        >
                          <span className="text-lg mr-2 text-cyan-300">▹</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <FaLayerGroup />
                        <span>TECH STACK</span>
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {exp.technologies.map((tech, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center gap-2 p-2 md:p-3 bg-white/10 rounded-lg border border-white/10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              transition: { delay: 0.2 + i * 0.05 },
                            }}
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "rgba(255,255,255,0.15)",
                            }}
                          >
                            <span className="text-lg">{tech.icon}</span>
                            <span className="font-mono text-xs md:text-sm">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Navigation Dots */}
        {!isMobile && (
          <div className="flex justify-center gap-3 mt-8 md:mt-12">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index
                    ? "bg-cyan-400 scale-125"
                    : "bg-white/30"
                }`}
                aria-label={`View experience ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
