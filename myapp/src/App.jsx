import Sidebar from './Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import { useState } from 'react';
import { Menu } from 'lucide-react'; 

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isOpen, setIsopen] = useState(true); 

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      case 'About': return <About />;
      case 'Projects': return <Projects />;
      case 'Experience': return <Experience />;
      case 'Contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isOpen={isOpen}
        setIsopen={setIsopen}
      />

      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 text-white bg-yellow-400 p-2 rounded"
        onClick={() => setIsopen(!isOpen)}
      >
        <Menu />
      </button>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 w-full min-h-screen bg-gray-100 p-6 ${
          isOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
