import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = ({ isDark }) => {
  const projects = [
    {
      title: 'Research Assistant',
      description: 'AI-powered research assistant using Spring Boot backend and React frontend with Gemini API integration',
      tech: ['React', 'Spring Boot', 'Gemini API', 'REST API'],
      link: ''  // Update with your actual repository link
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack web application with React , tailwindcss',
      tech: ['React', 'tailwind css'],
      link: 'https://github.com/sumit4jain/shopMe_Ecommerce'
    },
    {
      title: 'Gemini AI Chatbot',
      description: 'AI-powered chatbot using Gemini API',
      tech: ['React', 'Gemini API','Spring Boot'],
      link: 'https://github.com/sumit4jain/Gemini-AI'
    },
    {
      title: 'Hotel Management System',
      description: 'Comprehensive hotel management system',
      tech: ['React', 'Spring Boot', 'MySQL'],
      link: '#'
    },
     {
      title: 'Admin Dashboard',
      description: 'Modern admin dashboard with dark mode, tables, charts and advanced analytics features',
      tech: ['React', 'Material UI', 'Chart.js', 'Redux'],
      link: 'https://github.com/sumit4jain/Dashboard'  // Update with your actual link
    },
    {
      title: 'Vaildation Form',
      description: 'Interactive weather forecast application',
      tech: ['React', 'API Integration', 'JavaScript'],
      link: 'https://github.com/sumit4jain/vaildationForm'
    }
  ];

  // ...existing code...

  const cardClasses = isDark 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-gray-50 border-gray-200';

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`p-6 rounded-xl ${cardClasses} border transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <ExternalLink className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              </div>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;