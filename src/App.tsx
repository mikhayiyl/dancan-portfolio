import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TechStack from "./components/TechStack/TechStack";

function App() {
  return (
    <main className="min-h-screen bg-[#08090A] text-[#F5F5F5]">
      <Navbar />
      <Hero />
      <TechStack />
    </main>
  );
}

export default App;
