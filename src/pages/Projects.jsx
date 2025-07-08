// src/pages/Projects.js (or wherever you keep it)

import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '../layouts/Layout';
import ProjectModal from '../components/ProjectModal';
import '../styles/project.css'; // Make sure to import your CSS!

const projects = [
  {
    title: "Feedback-Driven Resource Controller",
    description:
      "Adaptive Kubernetes controller using PID logic for optimizing CPU utilization across clusters with 30% oscillatory variance.",
    stack: ["Kubernetes", "Go", "PID", "Prometheus"],
    link: "https://github.com/Muthu1612/Feedback-Driven-Resource-Controller-for-Kubernetes-Clusters",
    image: "/src/assets/featured-project.png",
    features: [
      "Real-time CPU utilization monitoring and optimization",
      "PID controller implementation for resource management",
      "30% reduction in oscillatory variance",
      "Prometheus integration for metrics collection",
      "Scalable architecture for large Kubernetes clusters"
    ]
  },
  {
    title: "GatorCan: E-Learning Platform",
    description:
      "Scalable platform with course management and collaboration. Built with Golang, React, and AWS ECS/RDS/S3.",
    stack: ["Golang", "React.js", "AWS", "SQLite"],
    link: "https://github.com/itswael/GatorCan",
    image: "/src/assets/featured-project.png",
    features: [
      "Course creation and management system",
      "Real-time collaboration features",
      "AWS cloud infrastructure deployment",
      "User authentication and authorization",
      "Responsive design for multiple devices"
    ]
  },
  {
    title: "Voice-based Virtual Assistant",
    description:
      "Deep learning-based voice assistant with 95% intent recognition accuracy. Improves query resolution by 30%.",
    stack: ["Python", "NLP", "Deep Learning"],
    link: "https://github.com/Muthu1612/Voice-based-virtual-assistant-using-Deep-Learning",
    image: "/src/assets/featured-project.png",
    features: [
      "95% intent recognition accuracy",
      "Natural language processing capabilities",
      "Voice-to-text and text-to-speech integration",
      "30% improvement in query resolution",
      "Customizable response system"
    ]
  },
  {
    title: "Placeholder Project 1",
    description:
      "This is a placeholder project to showcase horizontal scrolling.",
    stack: ["React", "CSS"],
    link: "#",
    image: "/src/assets/featured-project.png",
    features: [
      "Responsive design implementation",
      "Modern UI/UX principles",
      "Cross-browser compatibility",
      "Performance optimization"
    ]
  },
  {
    title: "Placeholder Project 2",
    description:
      "Another example project card to test the scroll and animation.",
    stack: ["Next.js", "TypeScript"],
    link: "#",
    image: "/src/assets/featured-project.png",
    features: [
      "TypeScript implementation",
      "Next.js framework utilization",
      "Server-side rendering",
      "SEO optimization"
    ]
  },
  {
    title: "Placeholder Project 3",
    description:
      "Another example project card to test the scroll and animation.",
    stack: ["Next.js", "TypeScript"],
    link: "#",
    image: "/src/assets/featured-project.png",
    features: [
      "TypeScript implementation",
      "Next.js framework utilization",
      "Server-side rendering",
      "SEO optimization"
    ]
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Layout>
      <div className="projects-wrapper" style={{ minHeight: '100vh', flexDirection: 'column', justifyContent: 'center' }}>
        <motion.h1
          className="projects-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h1>

        <motion.div
          className="projects-scroll"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              onClick={() => handleProjectClick(project)}
              style={{ cursor: 'pointer' }}
            >
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="project-tech">{tech}</span>
                ))}
              </div>
              <div className="project-link">
                Click to view details →
              </div>
            </motion.div>
          ))}
        </motion.div>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </Layout>
  );
};

export default Projects;
