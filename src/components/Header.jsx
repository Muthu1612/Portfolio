import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/layout.css';
import '../styles/typography.css';

const Header = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(true);
  const [transparency, setTransparency] = useState(0.0);
  const location = useLocation();

  // Check if current page is Skills or Projects
  const isDarkPage = ['/skills', '/projects'].includes(location.pathname);

  const handleScroll = () => {
    if (window.pageYOffset > 50 && navbarExpanded) {
      setNavbarExpanded(false);
    } else if (window.pageYOffset < 50 && !navbarExpanded) {
      setNavbarExpanded(true);
    }
    
    // On dark pages, start with higher transparency (darker)
    const maxTransparency = isDarkPage ? 0.0 : 1;
    const scrollThreshold = isDarkPage ? 0 : 500;
    
    if (window.pageYOffset > scrollThreshold) {
      setTransparency(maxTransparency);
    } else {
      setTransparency(isDarkPage ? maxTransparency : window.pageYOffset / 500.0);
    }
  };

  useEffect(() => {
    // Set initial transparency based on page
    if (isDarkPage) {
      setTransparency(0.0); // More opaque by default
    } else {
      setTransparency(0.0); // More transparent by default
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navbarExpanded, isDarkPage]);

  return (
    <header 
      className={`header ${isDarkPage ? 'dark' : ''}`}
      style={{
        backgroundColor: `rgba(27, 27, 27, ${transparency})`,
        backdropFilter: `blur(${transparency * 5}px)`,
      }}
    >
      <div className="header-container">
        <h1 className="brand">Muthu</h1>
        <nav className="nav-links">
          <Link to="/" className="nav-link whiteLink">Home</Link>
          <Link to="/skills" className="nav-link whiteLink">Skills</Link>
          <Link to="/projects" className="nav-link whiteLink">Projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;