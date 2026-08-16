import React from 'react';
import { motion } from 'framer-motion';
import { internships, achievements } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & <span className="text-primary-500">Achievements</span></h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-8 flex items-center space-x-3 text-foreground/90">
              <Briefcase className="text-primary-500" />
              <span>Work Experience</span>
            </h3>

            <div className="relative border-l border-foreground/10 ml-4 md:ml-6 space-y-12">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(139,92,246,0.6)]"></div>

                  <div className="bg-background border border-foreground/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{internship.role}</h4>
                        <div className="text-primary-500 font-medium text-lg mt-1">{internship.company}</div>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm text-foreground/60 md:text-right">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 md:justify-end">
                          <MapPin size={16} />
                          <span>{internship.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6 marker:text-primary-500">
                      {internship.achievements.map((achievement, idx) => (
                        <li key={idx} className="leading-relaxed">{achievement}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-foreground/10">
                      {internship.techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/5 text-foreground/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Sidebar */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center space-x-3 text-foreground/90">
              <Award className="text-yellow-500" />
              <span>Achievements</span>
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="bg-background border border-foreground/10 rounded-2xl p-5 flex items-start space-x-4 shadow-sm hover:border-primary-500/50 transition-colors"
                >
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.8)]"></div>
                  <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                    {achievement}
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