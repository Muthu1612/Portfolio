import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Muthu</h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-teal-400 transition">Home</Link>
          <Link to="/skills" className="hover:text-teal-400 transition">Skills</Link>
          <Link to="/projects" className="hover:text-teal-400 transition">Projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
