import React, { useState } from 'react';
import { Mail, Linkedin, Send, ArrowRight } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 hero-text">Get in Touch</h1>
        
        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <a 
            href="mailto:your.email@example.com" 
            className="bg-black/30 backdrop-blur-sm p-8 rounded-xl hover:bg-black/40 transition-all duration-300 group"
          >
            <Mail className="w-8 h-8 text-purple-400 mb-4" />
            <h2 className="text-xl font-bold mb-2">Email Me</h2>
            <p className="text-gray-400 mb-4">Drop me a line anytime</p>
            <span className="text-purple-400 flex items-center group-hover:translate-x-2 transition-transform">
              your.email@example.com
              <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </a>
          
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-black/30 backdrop-blur-sm p-8 rounded-xl hover:bg-black/40 transition-all duration-300 group"
          >
            <Linkedin className="w-8 h-8 text-purple-400 mb-4" />
            <h2 className="text-xl font-bold mb-2">Connect on LinkedIn</h2>
            <p className="text-gray-400 mb-4">Let's grow our network</p>
            <span className="text-purple-400 flex items-center group-hover:translate-x-2 transition-transform">
              View Profile
              <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 group"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;