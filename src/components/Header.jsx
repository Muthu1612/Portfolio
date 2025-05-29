import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/layout.css';
import '../styles/typography.css';

const Header = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(true);
  const [transparency, setTransparency] = useState(0.0); // Start with light page default
  const location = useLocation();

  // Check if current page is a dark page
  const isDarkPage = ['/projects', '/skills'].includes(location.pathname);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    
    // Configuration for different page types
    const darkPageConfig = {
      initial: 0.75,  // Start slightly more visible on dark pages
      target: 1,     // Full opacity
      threshold: 700 // Scroll distance to reach full opacity
    };

    const lightPageConfig = {
      initial: 0.0,  // Start more transparent on light pages
      target: 1,
      threshold: 700
    };

    const config = isDarkPage ? darkPageConfig : lightPageConfig;

    // Calculate new transparency based on scroll position
    if (scrollTop >= config.threshold) {
      setTransparency(config.target);
    } else {
      const progress = scrollTop / config.threshold;
      const newTransparency = config.initial + (config.target - config.initial) * progress;
      setTransparency(newTransparency);
    }

    // Header shrink logic
    setNavbarExpanded(scrollTop <= 50);
  };

  useEffect(() => {
    // Set initial transparency when page loads or changes
    const initialTransparency = isDarkPage ? 0.75 : 0.0;
    setTransparency(initialTransparency);

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, isDarkPage]);

  return (
    <header 
      className={`header ${isDarkPage ? 'dark' : ''}`}
      style={{
        backgroundColor: `rgba(27, 27, 27, ${transparency})`,
        backdropFilter: `blur(${transparency * 5}px)`,
        transition: 'background-color 0.4s ease-in-out, backdrop-filter 0.4s ease-in-out'
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