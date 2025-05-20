import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hey, I'm <span className="text-teal-400">Muthu</span>
      </motion.h2>

      <motion.p
        className="text-xl md:text-2xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        I build modern, performant web interfaces with React. Let's create something amazing.
      </motion.p>

      <motion.a
        href="#projects"
        className="mt-8 inline-block bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg shadow-lg transition"
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
