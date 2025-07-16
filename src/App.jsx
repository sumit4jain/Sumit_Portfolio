import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeClasses = isDark 
    ? 'bg-gray-900 text-white' 
    : 'bg-white text-gray-900';

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      <Navbar 
        isDark={isDark}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        toggleTheme={toggleTheme}
      />
      
      <main className="pt-16 relative z-10">
        {activeSection === 'home' && <Home isDark={isDark} isVisible={isVisible} />}
        {activeSection === 'skills' && <Skills isDark={isDark} />}
        {activeSection === 'projects' && <Projects isDark={isDark} />}
        {activeSection === 'about' && <About isDark={isDark} />}
        {activeSection === 'contact' && <Contact isDark={isDark} />}
      </main>
    </div>
  );
};

export default App;