import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Ventures from './components/Ventures';
import Contact from './components/Contact';
import ThreeBackground from './components/ThreeBackground'; // Import it here

function App() {
  return (
    <>
      <ThreeBackground /> {/* Put this FIRST so it sits behind everything */}
      
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Ventures />
      <Contact />
    </>
  );
}

export default App;