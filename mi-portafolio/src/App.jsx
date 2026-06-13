
import Navbar from "./components/navbar";
import AboutMe from "./pages/aboutme";
import Hero from "./pages/hero";
import Projects from "./pages/projects";
import Skills from "./pages/skills";


export default function App() {
  return (
      <div className="w-full h-full bg-gray-100 scroll-smooth">
        <Navbar />
        <Hero /> 
        <AboutMe />
        <Skills />
        <Projects/>
      </div>
  );
}