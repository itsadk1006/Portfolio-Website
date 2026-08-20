import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary-500/30 selection:text-primary-600 dark:selection:text-primary-400">
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
    </ThemeProvider>
  );
}

export default App;