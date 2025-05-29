import { motion } from 'framer-motion';
import featuredImage from '../assets/featured-project.png';

const FeaturedProject = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Latest Project
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 mx-auto" style={{ maxWidth: '84rem' }}>
        {/* Image Section */}
        <motion.div 
          className="w-full lg:w-5/12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={featuredImage}
            alt="Featured Project"
            className="w-full h-auto rounded-lg shadow-xl object-cover"
            style={{ maxHeight: '400px' }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-7/12 lg:pl-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4">Gatorcan: E-learning platform</h3>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            GatorCan is a full-stack educational platform designed to enhance the academic experience for students and instructors. 
GatorCan allows for efficient course management, assignment submissions as well as intuitive collaboration.
          </p>

          <h4 className="font-medium mb-3 text-xl">Developed with</h4>
          <div className="flex flex-wrap gap-3 mb-8">
            {['React Native', 'Golang', 'Sqlite'].map((tech) => (
              <span
                key={tech}
                className="bg-gray-800 px-4 py-2 rounded-md text-sm font-medium text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              className="inline-block border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition-colors duration-300"
            >
              Check it out
            </a>
            <a
              href="#"
              className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-300"
            >
              Source Code
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;