import Sidebar from './Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Experience';
import Contact from './pages/Contact';
import { useState } from 'react';
import Experience from './pages/Experience';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <Home currentPage={currentPage} setCurrentPage={setCurrentPage}/>;
      case 'About': return <About />;
      case 'Projects': return <Projects />;
      case 'Experience': return <Experience />;
      case 'Contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="ml-64 w-full min-h-screen bg-gray-100 p-8 transition-all duration-300">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
