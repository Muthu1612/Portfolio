import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

import Home from './pages/Home';

// page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -20 }
};

// wrapper that scrolls to a section after mounting
const HomeWithScroll = ({ scrollToId }) => {
  useEffect(() => {
    if (!scrollToId) return;
    // give the page a moment to render
    const t = setTimeout(() => {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
    return () => clearTimeout(t);
  }, [scrollToId]);

  return <Home />;
};

const App = () => {
  const location = useLocation();

  const wrapped = (Component, opts = {}) => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.25 }}
    >
      {Component}
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* default home */}
        <Route
          path="/"
          element={wrapped(<Home />)}
        />

        {/* /skills → Home + scroll to #skills */}
        <Route
          path="/skills"
          element={wrapped(
            <HomeWithScroll scrollToId="skills" />
          )}
        />

        {/* /projects → Home + scroll to #projects */}
        <Route
          path="/projects"
          element={wrapped(
            <HomeWithScroll scrollToId="projects" />
          )}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
