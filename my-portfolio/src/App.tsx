import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Project />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
