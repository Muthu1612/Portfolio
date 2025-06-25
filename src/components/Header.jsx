import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/layout.css';
import '../styles/typography.css';

const NAV_ITEMS = [
  { label: 'Home', target: 'hero' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
];

const Header = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(true);
  const [transparency, setTransparency] = useState(0.0);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  // detect dark page if you still want that effect on other routes
  const isDarkPage = ['/projects', '/skills'].includes(location.pathname);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    // fade‐in config
    const config = isDarkPage
      ? { initial: 0.75, target: 1, threshold: 700 }
      : { initial: 0.0, target: 1, threshold: 700 };

    // transparency calc
    if (scrollTop >= config.threshold) {
      setTransparency(config.target);
    } else {
      const progress = scrollTop / config.threshold;
      setTransparency(config.initial + (config.target - config.initial) * progress);
    }

    // shrink
    setNavbarExpanded(scrollTop <= 50);

    // section spy
    const sections = NAV_ITEMS.map((i) => document.getElementById(i.target));
    for (let sec of sections) {
      if (sec) {
        const { top } = sec.getBoundingClientRect();
        if (top <= 80 && top + sec.offsetHeight > 80) {
          setActiveSection(sec.id);
          break;
        }
      }
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    // initial fade
    setTransparency(isDarkPage ? 0.75 : 0.0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isDarkPage]);

  return (
    <header
      className={`header ${isDarkPage ? 'dark' : ''}`}
      style={{
        backgroundColor: `rgba(27, 27, 27, ${transparency})`,
        backdropFilter: `blur(${transparency * 5}px)`,
        transition: 'background-color 0.4s ease-in-out, backdrop-filter 0.4s ease-in-out',
      }}
    >
      <div className="header-container">
        <h1 className="brand">Muthu</h1>
        <nav className="nav-links">
          {NAV_ITEMS.map(({ label, target }) => (
            <a
              key={target}
              href={`#${target}`}
              className={`nav-link whiteLink ${activeSection === target ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(target);
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
