import React, { useEffect, useRef } from "react";
import { FaCode, FaLink } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./projects.css";

const Projects = () => {
  const projectRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.fromTo(
      projectRef.current,
      { 
        y: 300,
        opacity:0, // Reduced the initial offset for smoother animation
      },
      {
        y: 0,
        opacity:1,
        scrollTrigger: {
          trigger: projectRef.current,
          duration: 0.6,
          start: "top 130%", // Adjusted for better trigger point
          end: "top 80%",
          toggleActions: "play none none reverse", // Better animation control 
          scrub:true,// Set to true for debugging
        },
      }
    );

    return () => {
      // Cleanup ScrollTrigger on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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
        "A customizable front-page generator developed using React for college project title page",
      image: "/form.png",
      demoLink: "https://nccfrontpage.vercel.app/",
      githubLink:
        "https://github.com/dipendrabhandariofficial/FrontPageGenerator",
      className: "bg-[#90CCF4]",
    },
    {
      title: "Indo Global Foundation",
      description:
        "A project where I cloned a design from Figma to practice front-end skills.",
      image: "/indoglobal.png",
      demoLink: "#",
      githubLink: "#",
      className: "bg-[#F78888]",
    },
  ];

  return (
    <div id="projects" className="pt-16 bg-gradient-to-white from-black to-white pb-12"  >
      <div className="text-center mb-8 ">
        <h2 className="text-4xl font-bold font-[sansserif] text-gray-800">
          Projects
        </h2>
        <p className="mt-2 text-gray-600">
          These are the projects I've made so far
        </p>
      </div>
      <div 
        ref={projectRef} 
        className="flex flex-col gap-6 px-4 sm:px-8 md:px-32 lg:px-32 lg:flex-row animate-pulse"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg hover:scale-105 transform transition duration-300 overflow-hidden w-full ${project.className}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg hover:scale-105 transition duration-300"
            />
            <div className="p-6">
              <h3 className="text-2xl mb-2 font-semibold">{project.title}</h3>
              <p className="text-black mb-4 text-[14px]">
                {project.description}
              </p>
              <div className="flex justify-around">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
                >
                  <FaLink />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
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