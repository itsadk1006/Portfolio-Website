import React from 'react';
import { motion } from 'framer-motion';
import { internships, achievements } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative border-t border-card-border">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-accent font-mono-terminal text-sm mb-2 block">// dev_journey.log</span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Verified <span className="text-primary-500">Track Record</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Experience Timeline */}
          <div className="lg:col-span-8">
            <h3 className="text-xl font-mono-terminal text-foreground/50 uppercase tracking-widest mb-8">Work Experience</h3>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-card-border before:to-transparent">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  {/* Icon / Dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary-500 bg-background text-primary-500 shadow-[0_0_10px_rgba(6,182,212,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono-terminal text-xs">
                    0{index + 1}
                  </div>

                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card-bg p-6 border border-card-border hover:border-primary-500/50 transition-colors rounded-none">
                    <div className="flex justify-between items-start mb-2 flex-col sm:flex-row gap-2 sm:gap-0">
                      <h4 className="font-bold text-lg text-foreground">{internship.role}</h4>
                      <span className="font-mono-terminal text-xs text-accent bg-accent/10 px-2 py-1">{internship.duration}</span>
                    </div>
                    <div className="text-primary-500 font-mono-terminal text-sm mb-4">
                      {internship.company}
                      {internship.location && <span className="text-foreground/40"> // {internship.location}</span>}
                    </div>

                    <ul className="space-y-2 text-sm text-foreground/70 mb-4 font-mono-terminal">
                      {internship.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent mr-2">-</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {internship.techStack && internship.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-card-border">
                        {internship.techStack.map((tech, idx) => (
                          <span key={idx} className="text-xs font-mono-terminal text-foreground/50 uppercase tracking-wider">
                            [{tech}]
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Sidebar */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-mono-terminal text-foreground/50 uppercase tracking-widest mb-8">Metrics & Achievements</h3>

            <div className="flex flex-col gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="bg-card-bg border-l-2 border-primary-500 p-5 hover:bg-card-border/30 transition-colors"
                >
                  <p className="text-foreground/80 font-mono-terminal text-sm leading-relaxed">
                    <span className="text-accent mr-2">&gt;</span>{achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;