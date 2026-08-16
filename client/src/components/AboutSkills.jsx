import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, skills } from '../data/portfolioData';
import { BookOpen, Code2, Cpu, Wrench, Layers } from 'lucide-react';

const AboutSkills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const SkillPill = ({ name }) => (
    <span className="px-3 py-1 text-sm rounded-full bg-foreground/5 border border-foreground/10 hover:bg-primary-500/10 hover:text-primary-600 hover:border-primary-500/30 transition-colors">
      {name}
    </span>
  );

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About & <span className="text-primary-500">Skills</span></h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* About Me Card (Spans 2 columns on md+) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-background border border-foreground/10 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-bl-full -z-10"></div>
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="text-primary-500" size={28} />
              <h3 className="text-2xl font-bold">Academic Background</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
              {personalInfo.bio}
            </p>
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-foreground/5 border border-foreground/5">
              <div className="w-12 h-12 flex-shrink-0 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-600 font-bold">
                IIITD
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{personalInfo.institution}</h4>
                <p className="text-sm text-foreground/60">{personalInfo.yearMajor}</p>
              </div>
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            variants={itemVariants}
            className="bg-background border border-foreground/10 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Code2 className="text-blue-500" size={24} />
              <h3 className="text-xl font-bold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map(skill => (
                <SkillPill key={skill} name={skill} />
              ))}
            </div>
          </motion.div>

          {/* Frameworks Card */}
          <motion.div
            variants={itemVariants}
            className="bg-background border border-foreground/10 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Layers className="text-green-500" size={24} />
              <h3 className="text-xl font-bold">Frameworks & Libs</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map(skill => (
                <SkillPill key={skill} name={skill} />
              ))}
            </div>
          </motion.div>

          {/* Core CS Card */}
          <motion.div
            variants={itemVariants}
            className="bg-background border border-foreground/10 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Cpu className="text-purple-500" size={24} />
              <h3 className="text-xl font-bold">Core CS</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.coreCS.map(skill => (
                <SkillPill key={skill} name={skill} />
              ))}
            </div>
          </motion.div>

          {/* Tools Card */}
          <motion.div
            variants={itemVariants}
            className="bg-background border border-foreground/10 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Wrench className="text-orange-500" size={24} />
              <h3 className="text-xl font-bold">Dev Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map(skill => (
                <SkillPill key={skill} name={skill} />
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSkills;