import React from "react";
import { FaGithub, FaHtml5 } from "react-icons/fa";
import { RiCss3Fill, RiJavascriptFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";



const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <RiCss3Fill/>, color: "text-blue-500" },
    { name: "React", icon: <RiReactjsFill/>, color: "text-blue-400" },
    { name: "Tailwind", icon: <RiTailwindCssFill />, color: "text-teal-400" },
    { name: "JavaScript", icon: <RiJavascriptFill />, color: "text-yellow-400" },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-500" },
  ];

  return (
    <div className="h-screen w-screen  px-24 py-4 bg-gradient-to-b from-white to-slate-300 overflow-hidden">
     <p className="text-4xl font-semibold font-sans  uppercase text-orange-500 underline">Skills</p>
     <p  className="text-xl mt-2">These are the skills I have learned so far...</p>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-white-500 hover:scale-105 hover:bg-orange-300 transform transition"
            >
              <div className={`text-6xl mb-4 ${skill.color} mx-auto flex items-center justify-center`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-orange-500">{skill.name}</h3>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Skills;
