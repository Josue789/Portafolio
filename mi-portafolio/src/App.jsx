import Navbar from "./components/navbar";
import AboutMe from "./pages/aboutme";
import Hero from "./pages/hero";
import Skills from "./pages/skills";


export default function App() {
  return (
   <div className="w-full h-full bg-gray-100">
      <Navbar />
      <Hero /> 
      <AboutMe />
      <Skills />
   </div>
  );
}