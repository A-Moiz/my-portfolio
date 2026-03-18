import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
