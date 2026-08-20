import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { ExternalLink, Code } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = React.useState("All");
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-card-bg border-t border-card-border">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-accent font-mono-terminal text-sm mb-2 block">// case_studies.md</span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Projects, All <span className="text-primary-500">Shipped</span></h2>
        </motion.div>


          <div className="flex flex-wrap gap-4 mb-16 justify-center">
          {['All', ...new Set(projects.map(p => p.category))].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono-terminal text-sm px-4 py-2 border transition-colors ${
                filter === cat
                  ? 'border-primary-500 text-primary-500 bg-primary-500/10'
                  : 'border-card-border text-foreground/50 hover:border-foreground/30 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-24">
          {(filter === "All" ? projects : projects.filter(p => p.category === filter)).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* Project Image (Alternating sides) */}
                <div className={`lg:col-span-7 relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-primary-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                  <div className="relative border border-card-border overflow-hidden bg-background aspect-video flex items-center justify-center">
                    {project.featuredImage ? (
                      <img
                        src={project.featuredImage}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <Code size={64} className="text-foreground/20" />
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:text-right lg:order-1' : ''}`}>
                  <div className="font-mono-terminal text-primary-500 text-sm mb-2 uppercase tracking-widest">
                    0{index + 1} // {project.category}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4 uppercase">{project.title}</h3>

                  <div className={`bg-background border border-card-border p-6 shadow-xl mb-6 relative z-20 ${index % 2 !== 0 ? 'lg:-mr-12' : 'lg:-ml-12'}`}>
                    <p className="text-foreground/80 font-mono-terminal text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features as Engineering Metrics style */}
                  <div className={`flex flex-wrap gap-4 mb-6 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                    {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-accent font-bold text-lg leading-none">+</span>
                        <span className="text-xs font-mono-terminal text-foreground/60 uppercase">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className={`flex flex-wrap gap-2 mb-8 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="text-xs font-mono-terminal text-foreground/50 border border-card-border px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className={`flex gap-4 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-primary-500 transition-colors"
                      >
                        <Github size={18} /> View Source
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;