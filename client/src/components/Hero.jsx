import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Code, Terminal, Database } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Building scalable web apps & systems.";
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
      }, 50);
      return () => clearInterval(typingInterval);
    }
  }, [isTyping]);

  const floatingBadges = [
    { icon: <Code size={20} />, label: "React & Next.js", delay: 0 },
    { icon: <Database size={20} />, label: "Node & MongoDB", delay: 0.2 },
    { icon: <Terminal size={20} />, label: "C++ & Systems", delay: 0.4 },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl mix-blend-multiply opacity-50 dark:opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl mix-blend-multiply opacity-50 dark:opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

        {/* Left Column: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6 text-center lg:text-left"
        >
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-1 px-3 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4 border border-primary-500/20"
            >
              {personalInfo.yearMajor}
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-2">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-500">{personalInfo.name.split(' ')[0]}</span>
            </h1>
            <div className="h-12 sm:h-16 flex items-center justify-center lg:justify-start">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground/70">
                {text}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-1 h-6 sm:h-8 bg-primary-500 ml-1 translate-y-1 sm:translate-y-2"
                />
              </h2>
            </div>
          </div>

          <p className="text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0">
            {personalInfo.headline}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-colors shadow-lg shadow-primary-500/30"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-6 py-3 rounded-lg border border-foreground/20 hover:bg-foreground/5 font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-5 pt-6 text-foreground/60">
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:text-primary-500 transition-colors">
              <Github size={24} />
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={personalInfo.socials.x} target="_blank" rel="noreferrer" className="hover:text-primary-500 transition-colors">
              <Twitter size={24} />
            </a>
            <a href={personalInfo.socials.email} className="hover:text-primary-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual/Interactive Elements */}
        <div className="hidden lg:flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-80 h-80 md:w-96 md:h-96"
          >
            {/* Terminal Window Preview */}
            <div className="absolute inset-0 bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10">
              <div className="h-8 border-b border-foreground/10 flex items-center px-4 space-x-2 bg-foreground/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="p-6 font-mono text-sm flex-1 text-foreground/80 flex flex-col justify-center">
                <p className="mb-2"><span className="text-green-500">➜</span> <span className="text-blue-500">~</span> whoami</p>
                <p className="mb-4">{personalInfo.name} - {personalInfo.institution}</p>
                <p className="mb-2"><span className="text-green-500">➜</span> <span className="text-blue-500">~</span> cat skills.txt</p>
                <p className="text-primary-500 dark:text-primary-400">Loading modules...</p>
                <p>[████████████████████] 100%</p>
              </div>
            </div>

            {/* Floating Badges */}
            {floatingBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, -10, 0], opacity: 1 }}
                transition={{
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: badge.delay },
                  opacity: { duration: 0.5, delay: 0.8 + badge.delay }
                }}
                className={`absolute z-20 flex items-center space-x-2 px-4 py-2 rounded-xl bg-background/80 backdrop-blur-md border border-foreground/10 shadow-lg
                  ${idx === 0 ? '-top-4 -left-10' : idx === 1 ? 'top-1/2 -right-12' : '-bottom-6 left-10'}
                `}
              >
                <span className="text-primary-500">{badge.icon}</span>
                <span className="text-sm font-semibold">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;