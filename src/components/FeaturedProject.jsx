import { motion } from 'framer-motion';
import featuredImage from '../assets/featured-project.png';

const FeaturedProject = ({ project }) => {
  const defaultProject = {
    title: "Gatorcan: E-learning platform",
    description:
      "GatorCan is a full-stack educational platform designed to enhance the academic experience for students and instructors. GatorCan allows for efficient course management, assignment submissions as well as intuitive collaboration.",
    technologies: ['React', 'Golang', 'Sqlite'],
    links: {
      demo: "#",
      source: "#",
    },
  };

  const currentProject = project || defaultProject;

  return (
    <section className="bg-[#0b0c10] text-white py-16 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-300"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Latest Project
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-xl h-64 sm:h-80 md:h-96 lg:h-[28rem] rounded-xl overflow-hidden shadow-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300">
            <img
              src={featuredImage}
              alt="Featured Project"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80"></div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 md:pl-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col h-full justify-center items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-300">
              {currentProject.title}
            </h3>

            <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
              {currentProject.description}
            </p>

            <div className="mb-6">
              <h4 className="font-medium mb-3 text-lg sm:text-xl text-gray-400">Developed with</h4>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="bg-gray-800 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium text-white hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-4">
              <motion.a
                href={currentProject.links.demo}
                className="inline-block bg-teal-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-teal-300 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Check it out
              </motion.a>
              <motion.a
                href={currentProject.links.source}
                className="inline-block border border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
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
