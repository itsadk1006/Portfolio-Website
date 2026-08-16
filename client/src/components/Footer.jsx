import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background border-t border-foreground/10 py-10 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Brand / Name */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-bold tracking-tighter text-foreground mb-2">
            {personalInfo.name.split(' ')[0]}<span className="text-primary-500">.</span>
          </span>
          <p className="text-sm text-foreground/60 text-center md:text-left">
            Built with React, Tailwind CSS, & Framer Motion.
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-foreground/5 hover:bg-primary-500 hover:text-white text-foreground/70 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>

        {/* Copyright */}
        <div className="text-sm text-foreground/60 text-center md:text-right">
          &copy; {currentYear} {personalInfo.name}.<br className="hidden md:block" /> All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;