import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import Skill from "./sections/Skill";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Education from "./sections/Education";
import Experience from "./sections/Experience";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="lg:pl-64">
        <Hero />
        <Education />
        <Experience />
        <Project />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
