import './App.css';
import AboutMe from './sections/About/AboutMe';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero />
      <AboutMe></AboutMe>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
