import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
          
          <div className="modal-body">
            <div className="modal-image">
              <img 
                src={project.image || '/src/assets/featured-project.png'} 
                alt={project.title}
                onError={(e) => {
                  e.target.src = '/src/assets/featured-project.png';
                }}
              />
            </div>
            
            <div className="modal-details">
              <h2 className="modal-title">{project.title}</h2>
              <p className="modal-description">{project.description}</p>
              
              <div className="modal-stack">
                <h3>Technologies Used:</h3>
                <div className="modal-tech-list">
                  {project.stack.map((tech) => (
                    <span key={tech} className="modal-tech">{tech}</span>
                  ))}
                </div>
              </div>
              
              {project.features && (
                <div className="modal-features">
                  <h3>Key Features:</h3>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="modal-actions">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  View on GitHub →
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link live-link"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal; 