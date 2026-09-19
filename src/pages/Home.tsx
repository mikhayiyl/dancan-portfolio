import Hero from "../components/Hero/Hero";
import TechStack from "../components/TechStack/TechStack";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Process from "../components/Process/Process";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <TechStack />
      <Projects />
      <Skills />
      <About />
      <Experience />
      <Process />
      <Contact />
    </>
  );
};

export default Home;
