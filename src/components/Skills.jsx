// import React from 'react';
// import {
//   SiReact,
//   SiJavascript,
//   SiPython,
//   SiMongodb,
//   SiGit,
//   SiPostman,
//   SiCplusplus,
//   SiSpring,
//   SiHibernate,
//   SiMysql,
//   SiIntellijidea,
//   SiEclipseide,
//   SiAmazonaws
// } from 'react-icons/si';
// import { DiJava } from 'react-icons/di';
// import { VscSymbolClass } from 'react-icons/vsc';

// const Skills = ({ isDark }) => {
//   const skills = [
//     { name: 'React.js', icon: SiReact },
//     { name: 'JavaScript', icon: SiJavascript },
//     { name: 'Postman', icon: SiPostman },
//     { name: 'C++', icon: SiCplusplus },
//     { name: 'Python', icon: SiPython },
//     { name: 'Java', icon: DiJava },
//     { name: 'DSA', icon: VscSymbolClass },
//     { name: 'Spring Boot', icon: SiSpring },
//     { name: 'Hibernate', icon: SiHibernate },
//     { name: 'MongoDB', icon: SiMongodb },
//     { name: 'MySQL', icon: SiMysql },
//     { name: 'IntelliJ IDEA', icon: SiIntellijidea },
//     { name: 'Eclipse', icon: SiEclipseide },
//     { name: 'AWS', icon: SiAmazonaws },
//     { name: 'Git', icon: SiGit }
//   ];


//   const cardClasses = isDark 
//     ? 'bg-gray-800 border-gray-700' 
//     : 'bg-gray-50 border-gray-200';

//   return (
//     <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-10">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
//           Skills & Technologies
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {skills.map((skill, index) => {
//             const Icon = skill.icon;
//             return (
//               <div
//                 key={skill.name}
//                 className={`p-6 rounded-xl ${cardClasses} border transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className={`w-12 h-12 mx-auto mb-4 rounded-lg ${isDark ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-purple-500 to-blue-500'} flex items-center justify-center`}>
//                   <Icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="font-semibold">{skill.name}</h3>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



import React from 'react';
import {
  SiReact,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiGit,
  SiPostman,
  SiCplusplus,
  SiSpring,
  SiHibernate,
  SiMysql,
  SiIntellijidea,
  SiEclipseide,

} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { VscSymbolClass } from 'react-icons/vsc';

const Skills = ({ isDark }) => {
  const cardClasses = isDark 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-gray-50 border-gray-200';

  const skills = [
    { name: 'React.js', icon: SiReact },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Postman', icon: SiPostman },
    { name: 'C++', icon: SiCplusplus },
    { name: 'Python', icon: SiPython },
    { name: 'Java', icon: DiJava },
    { name: 'DSA', icon: VscSymbolClass },
    { name: 'Spring Boot', icon: SiSpring },
    { name: 'Hibernate', icon: SiHibernate },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
    { name: 'IntelliJ IDEA', icon: SiIntellijidea },

    { name: 'Eclipse', icon: SiEclipseide },
    
    { name: 'Git', icon: SiGit }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`p-6 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-100'} transform hover:scale-105 transition-all duration-300`}
              >
                <Icon className="w-8 h-8 mx-auto mb-4 text-purple-500" />
                <h3 className="font-semibold mb-2">{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;