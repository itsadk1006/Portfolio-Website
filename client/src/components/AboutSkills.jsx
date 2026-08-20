import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, skills } from '../data/portfolioData';
import { Terminal, Code2, Database, Layout, Server, Settings } from 'lucide-react';

const AboutSkills = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-card-bg">
      <div className="max-w-6xl mx-auto">

        {/* About Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-accent font-mono-terminal text-sm mb-2 block">// about_me.sh</span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">System Architecture & <br/> <span className="text-primary-500">Problem Solving</span></h2>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-lg text-foreground/80 font-mono-terminal leading-relaxed"
          >
            <p>
              <span className="text-primary-500">01 // background</span><br/>
              My journey started at {personalInfo.institution}. While coursework taught me the fundamentals, real engineering started when I began building full-stack applications and encountering production-level bugs.
            </p>
            <p>
              <span className="text-primary-500">02 // philosophy</span><br/>
              I believe in clean architecture, writing code that is maintainable, and understanding the systems I work with from the database layer up to the UI. There is no magic, just logic.
            </p>
            <p>
              <span className="text-primary-500">03 // current_status</span><br/>
              Currently exploring distributed systems and scalable backend architectures while honing my frontend skills. {personalInfo.bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-primary-500/10 blur-3xl rounded-full"></div>
            <div className="relative bg-background border border-card-border p-6 rounded-xl font-mono-terminal text-sm h-full flex flex-col justify-center shadow-2xl">
              <div className="flex items-center space-x-2 mb-4 border-b border-card-border pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-accent mb-2">$ whoami</p>
              <p className="mb-4">{personalInfo.name}</p>

              <p className="text-accent mb-2">$ cat education.txt</p>
              <p className="mb-4">{personalInfo.yearMajor}<br/>{personalInfo.institution}</p>

              <p className="text-accent mb-2">$ ./get_status.sh</p>
              <p className="text-primary-400 animate-pulse">Running...</p>
            </div>
          </motion.div>
        </div>

        {/* Skills Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-accent font-mono-terminal text-sm mb-2 block">// skills.json</span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Technical <span className="text-primary-500">Arsenal</span></h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Languages", icon: <Code2 className="text-primary-500" />, items: skills.languages },
            { title: "Frameworks", icon: <Layout className="text-blue-500" />, items: skills.frameworks },
            { title: "Core CS", icon: <Server className="text-accent" />, items: skills.coreCS },
            { title: "Tools", icon: <Settings className="text-orange-500" />, items: skills.tools },
          ].map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background border border-card-border p-6 rounded-none hover:border-primary-500/80 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="font-bold text-lg uppercase tracking-wider">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map(skill => (
                  <span key={skill} className="font-mono-terminal text-xs px-2 py-1 bg-card-bg border border-card-border text-foreground/70 group-hover:border-primary-500/80 hover:text-primary-400 hover:shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSkills;