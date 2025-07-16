import React, { useState } from 'react';
import { Moon, Sun, User, Code, Briefcase, MessageCircle, Menu, X } from 'lucide-react';

const Navbar = ({ isDark, activeSection, setActiveSection, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false); // Close mobile menu on click
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`w-12 h-12 rounded-xl ${isDark ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-purple-500 to-blue-500'} flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
              <span className="text-white text-2xl font-bold italic">SJ</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    activeSection === item.id
                      ? `${isDark ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white'} shadow-lg`
                      : `${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm md:text-base">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Theme & Menu Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Hamburger Menu for Mobile */}
            <button
              className="md:hidden p-2 text-gray-500 hover:text-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-4 pt-2 space-y-2 bg-inherit">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                    : `${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-black hover:bg-gray-100'}`
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { 
//   Home, 
//   Code, 
//   FolderOpen, 
//   User, 
//   MessageCircle, 
//   Menu, 
//   X, 
//   Sun
// } from 'lucide-react';

// const ExactNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isScrolled, setIsScrolled] = useState(false);

//   const navItems = [
//     { id: 'home', label: 'Home', icon: Home },
//     { id: 'skills', label: 'Skills', icon: Code },
//     { id: 'projects', label: 'Projects', icon: FolderOpen },
//     { id: 'about-me', label: 'About Me', icon: User },
//     { id: 'contact', label: 'Contact', icon: MessageCircle }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleNavClick = (sectionId) => {
//     setActiveSection(sectionId);
//     setIsOpen(false);
    
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-700/50">
//       <div className="max-w-full px-6 lg:px-12">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo - Exact match */}
//           <div className="flex items-center">
//             <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
//               SJ
//             </div>
//           </div>

//           {/* Desktop Navigation - Exact positioning and styling */}
//           <div className="hidden md:flex items-center justify-center flex-1 space-x-2 max-w-2xl mx-auto">
//             {navItems.map((item) => {
//               const IconComponent = item.icon;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => handleNavClick(item.id)}
//                   className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
//                     activeSection === item.id
//                       ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
//                       : 'text-gray-400 hover:text-white hover:bg-slate-800/70'
//                   }`}
//                 >
//                   <IconComponent className="w-4 h-4" />
//                   <span>{item.label}</span>
//                 </button>
//               );
//             })}
//           </div>

//           {/* Right side - Theme toggle */}
//           <div className="flex items-center space-x-4">
//             <button className="p-3 rounded-full text-gray-400 hover:text-white hover:bg-slate-800/50 transition-all duration-300">
//               <Sun className="w-5 h-5" />
//             </button>

//             {/* Mobile menu button */}
//             <button
//               onClick={toggleMenu}
//               className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div className={`md:hidden transition-all duration-300 ${
//         isOpen 
//           ? 'max-h-80 opacity-100' 
//           : 'max-h-0 opacity-0 overflow-hidden'
//       }`}>
//         <div className="bg-slate-900 border-t border-slate-700/50">
//           <div className="px-6 py-4 space-y-2">
//             {navItems.map((item) => {
//               const IconComponent = item.icon;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => handleNavClick(item.id)}
//                   className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
//                     activeSection === item.id
//                       ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
//                       : 'text-gray-400 hover:text-white hover:bg-slate-800/70'
//                   }`}
//                 >
//                   <IconComponent className="w-5 h-5" />
//                   <span>{item.label}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default ExactNavbar;