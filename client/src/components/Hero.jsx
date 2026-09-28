import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Code, Terminal, Database } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "I build production-grade web apps and systems from scalable databases to real-time engines. Currently deep in React, Node.js, and Cloud Architecture.";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    if (isTyping) {
      const typingInterval = setInterval(() => {
        setText(fullText.substring(0, i + 1));
        i++;
        if (i === fullText.length) {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 20);
      return () => clearInterval(typingInterval);
    }
  }, [isTyping]);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center z-10 text-center">

        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-mono-terminal text-sm md:text-base text-foreground/60 bg-card-bg border border-card-border px-6 py-2 rounded-full shadow-md"
        >
          <span className="text-accent">guest@aditya-dev</span>:~$ ./start_portfolio.sh
        </motion.div>

        {/* Main Headings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center mb-8"
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-foreground leading-none mb-2 uppercase text-glow-primary">
            ADITYA<span className="text-primary-500 text-glow-accent">.</span>
          </h1>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground/80 leading-none uppercase text-glow-primary">
            KUMAR
          </h2>
        </motion.div>

        {/* Terminal Typing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto mb-10 h-24 md:h-20 glass-panel p-4 rounded-md shadow-lg"
        >
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-mono-terminal">
            <span className="text-primary-500 font-bold">{"/>"}</span> {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="inline-block w-2.5 h-5 bg-accent ml-1 align-middle box-glow-accent"
            />
          </p>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="px-8 py-3 rounded-none border border-foreground bg-foreground text-background font-bold hover:bg-background hover:text-foreground transition-colors uppercase tracking-wider text-sm"
          >
            View My Work
          </a>
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-none border border-card-border bg-card-bg hover:border-primary-500 hover:text-primary-500 transition-colors uppercase tracking-wider text-sm font-bold"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="px-8 py-3 rounded-none border border-card-border bg-card-bg hover:border-accent hover:text-accent transition-colors uppercase tracking-wider text-sm font-bold"
          >
            Let's Connect
          </a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-card-border pt-10 text-center"
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-foreground mb-1">5+</span>
            <span className="text-sm text-foreground/50 uppercase tracking-widest font-mono-terminal">Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-foreground mb-1">2+</span>
            <span className="text-sm text-foreground/50 uppercase tracking-widest font-mono-terminal">Internships</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-foreground mb-1">20+</span>
            <span className="text-sm text-foreground/50 uppercase tracking-widest font-mono-terminal">Skills</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;