import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Terminal, Send, CheckCircle, XCircle } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: null, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ submitting: false, success: true, message: 'Message sent successfully. Connection closed.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ submitting: false, success: false, message: data.error || 'Connection failed.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ submitting: false, success: false, message: 'Network error. Host unreachable.' });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-card-border relative">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-accent font-mono-terminal text-sm mb-2 block">// ping_me.sh</span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Let's Build Something <span className="text-primary-500">Real</span></h2>
          <p className="mt-4 font-mono-terminal text-foreground/60 text-sm max-w-xl mx-auto">
            Whether you want to collaborate on a project, discuss tech, or just say hello — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Social Links Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 bg-card-bg border border-card-border p-6 font-mono-terminal text-sm"
          >
            <div className="flex items-center space-x-2 mb-6 border-b border-card-border pb-4">
              <Terminal size={16} className="text-foreground/50" />
              <span className="text-foreground/50">connections.log</span>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-accent mb-1">$ locate email</p>
                <a href={personalInfo.socials.email} className="text-foreground hover:text-primary-500 transition-colors">
                  {personalInfo.socials.email.replace('mailto:', '')}
                </a>
              </div>

              <div>
                <p className="text-accent mb-1">$ fetch socials</p>
                <ul className="space-y-2 mt-2">
                  <li>
                    <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                      <Linkedin size={16} /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                      <Github size={16} /> GitHub
                    </a>
                  </li>
                  <li>
                    <a href={personalInfo.socials.x} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                      <Twitter size={16} /> Twitter
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-accent mb-1">$ get_location</p>
                <p className="text-foreground/80">New Delhi, India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <form onSubmit={handleSubmit} className="font-mono-terminal space-y-4">

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-xs text-foreground/50 mb-1 uppercase">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-card-bg border border-card-border px-4 py-2 text-foreground focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-xs text-foreground/50 mb-1 uppercase">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-card-bg border border-card-border px-4 py-2 text-foreground focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs text-foreground/50 mb-1 uppercase">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-card-bg border border-card-border px-4 py-2 text-foreground focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-foreground/50 mb-1 uppercase">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-card-bg border border-card-border px-4 py-2 text-foreground focus:outline-none focus:border-primary-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full bg-foreground text-background font-bold uppercase tracking-widest py-3 hover:bg-primary-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status.submitting ? 'Transmitting...' : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>

              {/* Status Message */}
              {status.message && (
                <div className={`p-3 border text-xs flex items-center gap-2 ${status.success ? 'border-accent text-accent bg-accent/10' : 'border-red-500 text-red-500 bg-red-500/10'}`}>
                  {status.success ? <CheckCircle size={14} /> : <XCircle size={14} />}
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;