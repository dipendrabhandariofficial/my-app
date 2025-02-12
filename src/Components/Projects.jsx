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
      title: "To-Do list App",
      description:
        "A minimal and interactive to-do list application built with React and Tailwind CSS. It allows users to add, edit, delete, and mark tasks as complete.",
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
    <>
      <motion.div
        className="relative flex flex-col items-center w-full px-4 py-16 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-b from-purple-800 to-pink-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-black">Projects</h2>
          <p className="mt-2 text-black">These are the projects I've made so far</p>
        </div>

        <div className="flex items-center justify-center w-full gap-4 sm:p-4">
          {/* Left Small Project */}
          <motion.div className="w-1/3 mr-[-20px] h-96 opacity-90"
          initial={{ opacity: 0, x: -300 }} // Start off to the right
          animate={{ opacity: 1, x: 0 }}    // Animate to the center
          exit={{ opacity: 0, x: 300 }}    // Exit to the left
          transition={{ duration: 0.5 }}>
            <img
              src={projects[(currentIndex - 1 + projects.length) % projects.length].image}
              alt="Previous"
              className="object-cover w-full rounded-lg h-96"
            />
          </motion.div>

          {/* Center Large Project */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: -300 }} // Start off to the right
            animate={{ opacity: 1, y: 0 }}    // Animate to the center
            exit={{ opacity: 0, y: 300 }}    // Exit to the left
            transition={{ duration: 0.7 }}
            className={`sm:w-full md:w-[80%] md:h-[450px] sm:h-auto p-6 rounded-lg shadow-lg z-40 ${projects[currentIndex].className} flex flex-col items-center overflow-hidden`}
          >
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="object-cover w-full h-48 mb-4 rounded-lg"
            />
            <h3 className="mb-2 text-2xl font-semibold text-center">{projects[currentIndex].title}</h3>
            <p className="text-black text-[14px] text-center mb-4">{projects[currentIndex].description}</p>
            <div className="flex gap-4">
              <a
                href={projects[currentIndex].demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-600"
              >
                <FaLink />
              </a>
              <a
                href={projects[currentIndex].githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-gray-600 rounded-full hover:bg-gray-700"
              >
                <FaCode />
              </a>
            </div>
          </motion.div>

          {/* Right Small Project */}
          <motion.div className="w-1/3 ml-[-20px] h-96 opacity-90">
            <img
              src={projects[(currentIndex + 1) % projects.length].image}
              alt="Next"
              className="object-cover w-full rounded-lg h-96"
              initial={{ opacity: 0, x: 300 }} // Start off to the right
            animate={{ opacity: 1, x: 0 }}    // Animate to the center
            exit={{ opacity: 0, x: -300 }}    // Exit to the left
            transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <div
          className="absolute text-gray-800 transform -translate-y-1/2 cursor-pointer left-4 top-1/2 hover:scale-110"
          onClick={handlePrevious}
        >
          <FaChevronLeft size={30} />
        </div>
        <div
          className="absolute text-gray-800 transform -translate-y-1/2 cursor-pointer right-4 top-1/2 hover:scale-110"
          onClick={handleNext}
        >
          <FaChevronRight size={30} />
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
