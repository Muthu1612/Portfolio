// src/pages/Projects.js (or wherever you keep it)

import { motion } from 'framer-motion';
import Layout from '../layouts/Layout';
import '../styles/project.css'; // Make sure to import your CSS!

const projects = [
  {
    title: "Feedback-Driven Resource Controller",
    description:
      "Adaptive Kubernetes controller using PID logic for optimizing CPU utilization across clusters with 30% oscillatory variance.",
    stack: ["Kubernetes", "Go", "PID", "Prometheus"],
    link: "https://github.com/Muthu1612/Feedback-Driven-Resource-Controller-for-Kubernetes-Clusters",
  },
  {
    title: "GatorCan: E-Learning Platform",
    description:
      "Scalable platform with course management and collaboration. Built with Golang, React, and AWS ECS/RDS/S3.",
    stack: ["Golang", "React.js", "AWS", "SQLite"],
    link: "https://github.com/itswael/GatorCan",
  },
  {
    title: "Voice-based Virtual Assistant",
    description:
      "Deep learning-based voice assistant with 95% intent recognition accuracy. Improves query resolution by 30%.",
    stack: ["Python", "NLP", "Deep Learning"],
    link: "https://github.com/Muthu1612/Voice-based-virtual-assistant-using-Deep-Learning",
  },
  {
    title: "Placeholder Project 1",
    description:
      "This is a placeholder project to showcase horizontal scrolling.",
    stack: ["React", "CSS"],
    link: "#",
  },
  {
    title: "Placeholder Project 2",
    description:
      "Another example project card to test the scroll and animation.",
    stack: ["Next.js", "TypeScript"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className="projects-wrapper">
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
            >
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="project-tech">{tech}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Projects;
