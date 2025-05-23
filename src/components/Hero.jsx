import { motion } from 'framer-motion';

const Hero = () => {

  const handleDownloadResume = () => {
    const resumeUrl = '/muthu_resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Muthu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };




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
         I’m a full-stack engineer with a backend bias and a soft spot for clean architecture, noisy data, and big clouds. Currently building smarter pipelines, scalable systems, and occasionally debugging the universe one log at a time.
      </motion.p>

      {/* Buttons wrapper without inline styles */}
      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a href="#projects" className="hero-button">
          View My Work
        </a>
        <motion.button
          onClick={handleDownloadResume}
          className="resume-button"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Resume
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
