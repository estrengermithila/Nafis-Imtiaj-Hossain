import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skill";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Awards from "./components/Awards/Awards";
import Publications from "./components/Publications/Publications";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div className="bg-white text-black">

      <Navbar />

      <Home />

      {/* About */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
       <About/>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center"
      >
  <Experience></Experience>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
       <Projects></Projects>
      </section>

      {/* Publications */}
      <section
        id="publications"
        className="min-h-screen flex items-center justify-center"
      >
       <Publications></Publications>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className=" flex items-center justify-center bg-gray-100"
      >
   <Skills></Skills>
      </section>

      {/* Education */}
      <section
        id="education"
        className="min-h-screen flex items-center justify-center"
      >
    <Education></Education>
      </section>

      {/* Awards */}
      <section
        id="awards"
        className=" flex items-center justify-center bg-gray-100"
      >
        <Awards></Awards>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        
        <Contact></Contact>
      </section>

    </div>
  );
};

export default App;