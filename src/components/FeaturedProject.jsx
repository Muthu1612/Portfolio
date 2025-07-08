import { motion } from 'framer-motion';
import featuredImage from '../assets/featured-project.png';
import '../styles/featured-project.css';

const FeaturedProject = ({ project }) => {
  const defaultProject = {
    title: "Gatorcan: E-learning platform",
    description:
      "GatorCan is a full-stack educational platform designed to enhance the academic experience for students and instructors. GatorCan allows for efficient course management, assignment submissions as well as intuitive collaboration.",
    technologies: ['React Native', 'Golang', 'Sqlite'],
    links: {
      demo: "#",
      source: "#",
    },
  };

  const currentProject = project || defaultProject;

  return (
    <section className="featured-section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.h2
        className="featured-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Latest Project
      </motion.h2>

      <div className="featured-container">
        {/* Image Section */}
        <motion.div
          className="featured-image-wrapper"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="featured-image-container">
            <img
              src={featuredImage}
              alt="Featured Project"
              className="featured-image"
            />
            <div className="image-overlay" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="featured-text"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-content">
            <h3 className="project-title">{currentProject.title}</h3>

            <p className="project-description">
              {currentProject.description}
            </p>

            <div className="tech-stack">
              <h4 className="tech-heading">Developed with</h4>
              <div className="tech-list">
                {currentProject.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="tech-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="project-links">
              <motion.a
                href={currentProject.links.demo}
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Check it out
              </motion.a>
              <motion.a
                href={currentProject.links.source}
                className="btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Source Code
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
