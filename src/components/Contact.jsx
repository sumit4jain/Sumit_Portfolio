import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = ({ isDark }) => {
  const cardClasses = isDark 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-gray-50 border-gray-200';

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className={`p-8 rounded-2xl ${cardClasses} border shadow-xl`}>
          <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Ready to work together? Let's create something amazing!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-100'} transform hover:scale-105 transition-all duration-300`}>
  <a
    href="mailto:sumitjain7665@gmail.com"
    className="block"
  >
    <Mail className="w-8 h-8 mx-auto mb-4 text-purple-500" />
    <h3 className="font-semibold mb-2">Email</h3>
    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>sumitjain7665@gmail.com</p>
  </a>
</div>
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-100'} transform hover:scale-105 transition-all duration-300`}>
  <a
    href="https://github.com/sumit4jain"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <Github className="w-8 h-8 mx-auto mb-4 text-purple-500" />
    <h3 className="font-semibold mb-2">GitHub</h3>
    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>sumit4jain</p>
  </a>
</div>
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-100'} transform hover:scale-105 transition-all duration-300`}>
  <a
    href="https://www.linkedin.com/feed/"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <Linkedin className="w-8 h-8 mx-auto mb-4 text-purple-500" />
    <h3 className="font-semibold mb-2">LinkedIn</h3>
    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Sumit Jain</p>
  </a>
</div>
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;