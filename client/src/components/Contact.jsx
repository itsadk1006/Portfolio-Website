import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Send, Mail, MapPin, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
        setStatus({ submitting: false, success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ submitting: false, success: false, message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ submitting: false, success: false, message: 'Network error. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/5 rounded-l-full blur-3xl -z-10 transform translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-primary-500">Touch</span></h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full mx-auto md:mx-0"></div>
          <p className="mt-6 text-foreground/70 max-w-2xl text-lg">
            Whether you have a question, a project opportunity, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-8 justify-center"
          >
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center flex-shrink-0 text-primary-500">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href={personalInfo.socials.email} className="text-foreground/70 hover:text-primary-500 transition-colors text-lg">
                  {personalInfo.socials.email.replace('mailto:', '')}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-500">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-foreground/70 text-lg">
                  New Delhi, India<br/>
                  <span className="text-sm">Available for remote work worldwide.</span>
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-foreground/10">
              <h3 className="text-lg font-medium mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                {Object.entries(personalInfo.socials).map(([key, url]) => (
                  key !== 'email' && (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all transform hover:-translate-y-1"
                    >
                      <span className="sr-only">{key}</span>
                      <i className={`icon-${key} capitalize text-sm font-medium`}>{key[0]}</i>
                    </a>
                  )
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-background border border-foreground/10 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold flex items-center justify-center space-x-2 transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status.submitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-center space-x-3 ${status.success ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}`}
                  >
                    {status.success ? <CheckCircle size={20} /> : <XCircle size={20} />}
                    <span className="font-medium text-sm">{status.message}</span>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;