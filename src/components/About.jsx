import React from 'react';
import { User } from 'lucide-react';
import Profile from '../assets/profile.jpg'
const About = ({ isDark }) => {
  const cardClasses = isDark 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-gray-50 border-gray-200';

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className={`p-8 rounded-2xl ${cardClasses} border shadow-xl`}>
         <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
  <img 
    src={Profile} 
    alt="Profile" 
    className="w-full h-full object-cover" 
  />
</div>

          <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            I'm a passionate software developer with expertise in modern web technologies. 
            I love creating beautiful, functional, and user-friendly applications that solve real-world problems. 
            With a strong foundation in both frontend and backend development, I enjoy working on challenging projects 
            that push the boundaries of what's possible on the web.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">3+</div>
              <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>intern Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">10+</div>
              <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">100%</div>
              <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;