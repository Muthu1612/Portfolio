const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Muthu</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:text-teal-400 transition">Home</a>
          <a href="/skills" className="hover:text-teal-400 transition">Skills</a>
          <a href="/projects" className="hover:text-teal-400 transition">Projects</a>
          <a href="#contact" className="hover:text-teal-400 transition">Contact</a>

        </nav>
      </div>
    </header>
  );
};

export default Header;
