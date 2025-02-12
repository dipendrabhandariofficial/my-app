import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCode, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import "./projects.css";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      title: "k Stocks",
      description:
        "A project where I cloned a design from Figma to practice front-end skills.",
      image: "/kaystock.png",
      demoLink: "https://clonewebsite-smoky.vercel.app/",
      githubLink: "https://github.com/dipendrabhandariofficial/clonewebsite",
      className: "bg-[#F3D24F]",
    },
    {
      title: "Front Page Generator",
      description:
        "A customizable front-page generator developed using React for college project title page.",
      image: "/frontpage.png",
      demoLink: "https://nccfrontpage.vercel.app/",
      githubLink:
        "https://github.com/dipendrabhandariofficial/FrontPageGenerator",
      className: "bg-[#90CCF4]",
    },
    {
      title: "Weather App",
      description:
        "A simple and responsive weather application built with React and Tailwind CSS.",
      image: "/weather.png",
      demoLink: "https://weathertion.vercel.app/",
      githubLink: "https://github.com/dipendrabhandariofficial/weather-app",
      className: "bg-sky-400",
    },
    {
      title: "Indo Global Foundation",
      description:
        "A project where I cloned a design from Figma to practice front-end skills. This project is not live.",
      image: "/indoglobal.png",
      demoLink: "#",
      githubLink: "#",
      className: "bg-[#F78888]",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative flex flex-col items-center w-full px-4 py-16 sm:px-8 md:px-16 lg:px-32">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
        <p className="mt-2 text-gray-600">These are the projects I've made so far</p>
      </div>

      <div className="flex items-center justify-center w-full gap-4 sm:p-4">
        {/* Left Small Project */}
        <div className="w-1/3 mr-[-20px] h-96 opacity-90">
          <img src={projects[(currentIndex - 1 + projects.length) % projects.length].image} alt="Previous" className="object-cover w-full rounded-lg h-96" />
        </div>

        {/* Center Large Project */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`md:w-[80%] md:h-[450px] sm:w-full p-6 rounded-lg shadow-lg z-50 ${projects[currentIndex].className} flex flex-col items-center`}
        >
          <img src={projects[currentIndex].image} alt={projects[currentIndex].title} className="object-cover w-full h-48 mb-4 rounded-lg" />
          <h3 className="mb-2 text-2xl font-semibold text-center">{projects[currentIndex].title}</h3>
          <p className="text-black text-[14px] text-center mb-4">{projects[currentIndex].description}</p>
          <div className="flex gap-4">
            <a href={projects[currentIndex].demoLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-600">
              <FaLink />
            </a>
            <a href={projects[currentIndex].githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-white bg-gray-600 rounded-full hover:bg-gray-700">
              <FaCode />
            </a>
          </div>
        </motion.div>

        {/* Right Small Project */}
        <div className="w-1/3 ml-[-20px] h-96 opacity-90">
          <img src={projects[(currentIndex + 1) % projects.length].image} alt="Next" className="object-cover w-full rounded-lg h-96" />
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute text-gray-800 transform -translate-y-1/2 cursor-pointer left-4 top-1/2 hover:scale-110" onClick={handlePrevious}>
        <FaChevronLeft size={30} />
      </div>
      <div className="absolute text-gray-800 transform -translate-y-1/2 cursor-pointer right-4 top-1/2 hover:scale-110" onClick={handleNext}>
        <FaChevronRight size={30} />
      </div>
    </div>
  );
};

export default Projects;
