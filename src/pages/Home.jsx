import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeaturedProject from '../components/FeaturedProject';
import Skills from './Skills';
import Projects from './Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="featured">
          <FeaturedProject />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id = "contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
