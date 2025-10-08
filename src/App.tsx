import { useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { MagneticCursor } from './components/MagneticCursor';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { FutureGrowth } from './sections/FutureGrowth';
import { Contact } from './sections/Contact';
import { initSmoothScroll } from './utils/smoothScroll';

function App() {
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <AnimatedBackground />
      <MagneticCursor />
      <ScrollProgress />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <FutureGrowth />
      <Contact />
    </div>
  );
}

export default App;
