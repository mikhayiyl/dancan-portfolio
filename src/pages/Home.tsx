import Hero from "../components/Hero/Hero";
import TechStack from "../components/TechStack/TechStack";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Process from "../components/Process/Process";
import Contact from "../components/Contact/Contact";
import SEO from "../components/SEO/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Full-Stack Web Developer"
        description="Dancan is a full-stack web developer building modern, responsive web applications, SaaS products, and digital experiences."
      />

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
