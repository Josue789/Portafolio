import Navbar from "./components/navbar";
import AboutMe from "./pages/aboutme";
import Hero from "./pages/hero";


export default function App() {
  return (
   <div>
      <Navbar />
      <Hero /> 
      <AboutMe />
   </div>
  );
}