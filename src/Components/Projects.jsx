import React from 'react';
import { FaCode, FaLink } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "k Stocks",
      description:
        "The Pharmacy Management System is a sophisticated web-based platform.",
      image: "public/kaystock.png", 
      demoLink: "https://clonewebsite-smoky.vercel.app/",
      githubLink: "https://github.com/dipendrabhandariofficial/clonewebsite",
    },
    {
      title: "Front Page  Generator",
      description:
        "A customizable front-page generator developed using React.",
      image: "src/assets/Screenshot 2024-12-27 121822.png", 
      demoLink: "https://frontpage-q18nknmau-dipendra-s-projects.vercel.app/",
      githubLink: "https://github.com/dipendrabhandariofficial/FrontPageGenerator",
    },
    {
      title: "Indo Global Foundation  ",
      description:
        "A project where I cloned a design from Figma to practice front-end skills.",
      image: "src/assets/Screenshot 2024-12-27 122529.png",
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <div id='projects' className=" pt-16  bg-gradient-to-b to-orange-100 from-orange-300">
      <div className="text-center mb-8 ">
        <h2 className="text-4xl font-bold font-[sansserif]">Projects</h2>
        <p className=" mt-2">These are the projects I've made so far</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-4 sm:px-8 md:px-16 lg:px-32">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-100 rounded-lg shadow-lg hover:scale-105 transform transition overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover  rounded-t-lg hover:scale-105  "
            />
            <div className="p-6">
              <h3 className="text-2xl mb-2">{project.title}</h3>
              <p className="text-black mb-4 text-[14px]">{project.description}</p>
              <div className="flex justify-around">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
                >
                  <FaLink />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
                >
                  <FaCode />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
