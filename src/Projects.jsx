import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, technologies, imageUrl, projectUrl, githubUrl }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white"
  >
    <div className="flex-shrink-0">
      <img className="h-48 w-full object-cover" src={imageUrl} alt={title} />
    </div>
    <div className="flex-1 p-6 flex flex-col justify-between">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-3 text-base text-gray-500">{description}</p>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          View Project
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          View Code
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      imageUrl: "/path-to-your-image.jpg",
      projectUrl: "https://project-url.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with real-time updates.",
      technologies: ["React", "Firebase", "Stripe", "Tailwind CSS"],
      imageUrl: "/path-to-your-image.jpg",
      projectUrl: "https://project-url.com",
      githubUrl: "https://github.com/username/project"
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;