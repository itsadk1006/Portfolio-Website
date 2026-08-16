import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-card-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-mono-terminal text-xs text-foreground/50">

        <div className="flex flex-col items-center md:items-start">
          <span className="text-foreground font-bold tracking-widest uppercase mb-1">
            {personalInfo.name.split(' ')[0]}.DEV <span className="text-primary-500 ml-2">Open to Work</span>
          </span>
          <p>Built with React, Node.js, and Tailwind CSS.</p>
        </div>

        <div className="flex gap-4">
           <a href="#home" className="hover:text-primary-500 transition-colors uppercase">Home</a>
           <a href="#about" className="hover:text-primary-500 transition-colors uppercase">About</a>
           <a href="#projects" className="hover:text-primary-500 transition-colors uppercase">Projects</a>
           <a href="#contact" className="hover:text-primary-500 transition-colors uppercase">Contact</a>
        </div>

        <div className="text-center md:text-right">
          &copy; {currentYear} {personalInfo.name}.<br />
          Built with precision, not templates.
        </div>

      </div>
    </footer>
  );
};

export default Footer;