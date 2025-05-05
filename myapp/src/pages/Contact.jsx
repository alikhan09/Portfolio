import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      className="min-h-screen bg-white p-10 flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Interested in working together or have any questions? I'm always open to chatting about new opportunities, projects, or anything tech!
      </p>

      {/* Contact Info */}
      <div className="space-y-4 text-gray-700">
        <div className="flex items-center justify-center gap-3">
          <Mail className="text-yellow-500" /> aliibrar2002@example.com
        </div>
        <div className="flex items-center justify-center gap-3">
          <Phone className="text-yellow-500" /> +92 345 2434447
        </div>
        <div className="flex items-center justify-center gap-3">
          <Linkedin className="text-yellow-500" />
          <a
            href="https://linkedin.com/in/ali-ibrar-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin/ali-ibrar-khan
          </a>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Github className="text-yellow-500" />
          <a
            href="https://github.com/alikhan09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/alikhan09
          </a>
        </div>
        
        
      </div>
    </motion.div>
  );
};

export default Contact;
