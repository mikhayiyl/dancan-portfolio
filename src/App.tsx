import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Process from "./components/Process/Process";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#08090A] text-[#F5F5F5]">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Skills />
      <About />
      <Experience />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
