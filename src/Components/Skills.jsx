import React from "react";
import { FaGithub, FaHtml5 } from "react-icons/fa";
import { RiCss3Fill, RiJavascriptFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <RiCss3Fill />, color: "text-blue-500" },
    { name: "React", icon: <RiReactjsFill />, color: "text-blue-400" },
    { name: "Tailwind", icon: <RiTailwindCssFill />, color: "text-teal-400" },
    { name: "JavaScript", icon: <RiJavascriptFill />, color: "text-yellow-400" },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-500" },
  ];

  return (
    <div className="h-screen w-screen px-10 py-10 bg-gradient-to-b from-white to-slate-300 overflow-hidden">
      {/* Section Title */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
      >
        <h1 className="text-3xl font-bold translate-x-2 ">
            Skills
          </h1>
        <p className="text-lg mt-4 text-gray-700">
          These are the skills I have learned so far...
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl shadow-md bg-gradient-to-t from-orange-50 to-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.1,
              rotate: 1,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
            }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          >
            <div
              className={`text-6xl mb-4 ${skill.color} mx-auto flex items-center justify-center`}
            >
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-center text-orange-500">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
