import { motion } from "framer-motion";
import React from "react";


const Skill = () => {
  
  const skills = [
    { name: "HTML", percentage: 95, description:"Proficient in semantic HTML5, ensuring accessibility and SEO" },
    { name: "JavaScript", percentage: 60  , description:" Proficient in writing clean, efficient code for dynamic web applications" },
    { name: "Tailwind", percentage: 70, description:"Efficient in utility-first design, creating responsive, customizable UIs" },
    { name: "React", percentage: 80, description:" Experienced with functional components, hooks, and React Router" },
    { name: "GitHub", percentage: 55, description:"  Skilled in version control, branching, pull requests, and collaboration" },
    
  ];
  
  const getColor = (percentage) => {
    if (percentage > 50) return "text-green-500 border-green-500";
    if (percentage < 50) return "text-yellow-500 border-yellow-500";
    return "text-red-500 border-red-500";
  };
  
  const SkillProgress = ({ name, percentage,description }) => {
    return (
      <div className="flex flex-col items-center w-52 ">
            
        <div className="relative h-24 w-36">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              className="text-gray-200"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
              />
            <circle
              className={getColor(percentage)}
              strokeWidth="10"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - (Math.abs(percentage) / 100) * 251.2}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
            {percentage}%
          </span>
        </div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-center text-black">{description}</p>
      </div>
    );
  };
  return (
    <>
   <motion.div className=" bg-gradient-to-b to-purple-800 from-pink-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}>
            
     <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-black">Skills</h2>
        <p className="mt-2 text-black">These are the skills I've learned so far</p>
      </div>
    
    <div className="flex flex-wrap justify-center gap-8 p-8 ">
      {skills.map((skill) => (
        <SkillProgress key={skill.name} name={skill.name} percentage={skill.percentage} description={skill.description} />
      ))}
    </div>
      
      </motion.div>
      </>
  );
};

export default Skill;
