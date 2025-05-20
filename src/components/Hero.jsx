const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
        Hey, I'm <span className="text-teal-400">Muthu</span>
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
        I build modern, performant web interfaces with React. Let's create something amazing.
      </p>
      <a
        href="#projects"
        className="mt-8 inline-block bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg shadow-lg transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
