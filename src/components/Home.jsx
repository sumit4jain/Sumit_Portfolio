
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = ({ isDark, isVisible }) => {
  const socialLinks = [
    { Icon: Github, href: "https://github.com/sumit4jain" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/sumit4jain/" },
    { Icon: Mail, href: "mailto:sumitjain7665@gmail.com" }
  ];

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-bounce">
          <div className={`w-32 h-32 mx-auto rounded-full ${isDark ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-purple-500 to-blue-500'} flex items-center justify-center shadow-2xl`}>
            <span className="text-white text-6xl font-bold italic">SJ</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
          Software Developer
        </h1>
        <p className={`text-xl md:text-2xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'} animate-fade-in`}>
          Creating amazing digital experiences with modern technologies
        </p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;