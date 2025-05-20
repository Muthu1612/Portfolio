import { motion } from 'framer-motion';

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
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h2 className="text-xl font-semibold text-teal-400 mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-teal-700 text-white px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-teal-400 hover:underline"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
