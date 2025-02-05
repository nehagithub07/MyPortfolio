import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiJavascript, SiCss3, SiHtml5, SiMysql, SiFlask, SiDjango, SiPostman, SiLinux, SiAmazon } from "react-icons/si"; // Corrected
import { FaPython, FaCode, FaNode, FaDatabase, FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delayChildren: 0.2, staggerChildren: 0.2 },
  },
};

const iconVariants = (duration) => ({
  initial: { y: -10, opacity: 0 },
  animate: {
    y: [10, -10],
    opacity: 1,
    transition: { duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse" },
  },
});

const Technologies = () => {
  const techIcons = [
    { component: RiReactjsLine, color: "text-blue-500", duration: 2.5 },
    { component: SiMongodb, color: "text-green-600", duration: 2 },
    { component: FaPython, color: "text-yellow-500", duration: 2.2 },
    { component: FaCode, color: "text-blue-600", duration: 2.8 },
    { component: SiJavascript, color: "text-yellow-500", duration: 2.4 },
    { component: SiCss3, color: "text-blue-500", duration: 2.6 },
    { component: SiHtml5, color: "text-orange-500", duration: 2.1 },
    { component: FaNode, color: "text-green-500", duration: 2.3 },
    { component: SiMysql, color: "text-blue-600", duration: 2.7 },
  ];

  const skillCategories = [
    { 
      title: "Programming Languages", 
      skills: ["C++", "Python", "JavaScript", "SQL"], 
      icon: FaCode, color: "text-red-500" 
    },
    { 
      title: "Web Development", 
      skills: ["HTML", "CSS", "React.js", "Node.js"], 
      icon: SiDjango, color: "text-green-600" 
    },
    { 
      title: "Databases", 
      skills: ["MongoDB", "MySQL"], 
      icon: FaDatabase, color: "text-blue-500" 
    },
    { 
      title: "Software Development Concepts", 
      skills: ["Data Structures & Algorithms", "Object-Oriented Design", "Database Management System", "Agile"], 
      icon: SiFlask, color: "text-purple-500" 
    },
    { 
      title: "Tools & Technologies", 
      skills: ["AWS (Basics)", "Git", "Flask"], 
      icon: FaGitAlt, color: "text-orange-500" 
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-8 mb-20 border border-neutral-800 rounded-3xl shadow-xl m-2 transform transition duration-200 bg-opacity-80"
    >
      {/* Technologies Section */}
      <h2 className=" mb-10 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl font-semibold text-transparent tracking-wide animate-text">
        Technologies
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {techIcons.map(({ component: Icon, color, duration }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </div>

      {/* Skills Section */}
      <h2 className="mt-16 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent animate-text">
        Technical Skills
      </h2>

      <div 
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {skillCategories.map(({ title, skills, icon: Icon, color }, index) => (
          <div key={index} className="p-8 bg-gradient-to-r from-purple-800 via-indigo-900 to-blue-900 border border-neutral-700 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <Icon className={`text-4xl ${color} hover:scale-110 transition-all duration-300`} />
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-300">
              {skills.map((skill, i) => (
                <li key={i} className="text-lg">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </motion.div>
  );
};

export default Technologies;
