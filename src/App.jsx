import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Skills from './components/Skills.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact/>
    </div>
  );
};

export default App;