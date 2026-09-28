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
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary-500/30 selection:text-primary-600 dark:selection:text-primary-400 relative">
        <ParticleBackground />
        <div className="relative z-10">
          <Toaster position="bottom-center" toastOptions={{ style: { background: '#333', color: '#fff', border: '1px solid #22d3ee' } }} />
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
      </div>
    </ThemeProvider>
  );
}

export default App;