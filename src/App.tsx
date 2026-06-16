import { useEffect, useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import SpotlightCursor from './components/SpotlightCursor';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500">
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Cursor spotlight effect */}
      <SpotlightCursor />

      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 mesh-gradient pointer-events-none z-0" />

      {/* Grid background overlay */}
      <div className="fixed inset-0 grid-background pointer-events-none z-0 opacity-50" />

      {/* Navigation */}
      <Header currentSection={currentSection} />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;