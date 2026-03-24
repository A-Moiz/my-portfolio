import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import Skill from "./sections/Skill";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Education from "./sections/Education";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Education />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
