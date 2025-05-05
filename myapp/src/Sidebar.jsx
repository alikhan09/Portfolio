const Sidebar = ({ currentPage, setCurrentPage, isOpen, setIsopen }) => {
  const sections = ['Home', 'About', 'Projects', 'Experience', 'Contact'];

  return (
    <div
      className={`
        fixed top-0 left-0 h-full bg-gray-900 text-white p-6 z-40 transition-transform duration-300
        ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'}
      `}
    >
      <h1 className="text-2xl font-bold mb-8 mt-10">My Portfolio</h1>
      <nav className="flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => {
              setCurrentPage(section);
              setIsopen(false);
            }}
            className={`text-left ${
              currentPage === section
                ? 'text-yellow-400 font-semibold'
                : 'hover:text-yellow-400'
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
