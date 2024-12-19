import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Pharmacy Management System",
      description:
        "The Pharmacy Management System is a sophisticated web-based platform.",
      image: "/path/to/image1.jpg", // Replace with actual image paths
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Password Generator",
      description:
        "A customizable front-page generator developed using React.",
      image: "/path/to/image2.jpg", // Replace with actual image paths
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Hello World",
      description:
        "A project where I cloned a design from Figma to practice front-end skills.",
      image: "/path/to/image3.jpg", // Replace with actual image paths
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className=" mt-2">These are the projects I've made.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                >
                  GitHub
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
