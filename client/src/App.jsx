import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import { ThemeProvider } from './context/ThemeContext';
import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const particlesInit = async (engine) => {
  await loadSlim(engine);
};

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary-500/30 selection:text-primary-600 dark:selection:text-primary-400 relative">
        <ParticlesProvider init={particlesInit}>
        <ParticleBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <AboutSkills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
        </ParticlesProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;