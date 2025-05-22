import { Link } from 'react-router-dom';
import '../styles/layout.css';
import '../styles/typography.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="brand">Muthu</h1>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
