import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <main className="min-h-screen bg-[#08090A] text-[#F5F5F5]">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
    </main>
  );
}

export default App;
