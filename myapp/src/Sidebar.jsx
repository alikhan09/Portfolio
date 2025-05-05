const Sidebar = ({ currentPage, setCurrentPage }) => {
    const sections = ['Home', 'About', 'Projects', 'Experience', 'Contact'];
  
    return (
      <div className="h-screen w-64 bg-gray-900 text-white p-6 fixed">
        <h1 className="text-2xl font-bold mb-8">My Portfolio</h1>
        <nav className="flex flex-col space-y-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setCurrentPage(section)}
              className={`text-left ${
                currentPage === section ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-400'
              } transition`}
            >
              {section}
            </button>
          ))}
        </nav>
      </div>
    );
  };
  
  export default Sidebar;
  