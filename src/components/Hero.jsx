import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section">
      <motion.h2
        className="hero-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hey, I'm <span className="hero-highlight">Muthu :)</span>
      </motion.h2>

      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        I build modern, performant web interfaces with React. Let's create something amazing.
      </motion.p>

      <motion.a
        href="#projects"
        className="hero-button"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
