// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { 
  projects, 
  getAllCategories, 
  getProjectsByCategory,
  getAllTechnologies 
} from '../data/projects';

const ProjectCard = ({ title, description, technologies, imageUrl, projectUrl, githubUrl, year }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col lg:flex-row gap-8 py-12"
  >
    {/* Project Image */}
    <div className="lg:w-1/2">
      <div className="relative group">
        <img 
          className="rounded-xl w-full h-[300px] object-cover object-center shadow-lg transition-transform duration-300 group-hover:scale-[1.02]" 
          src={imageUrl} 
          alt={title} 
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
          <div className="flex gap-4">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              View Live
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Project Details */}
    <div className="lg:w-1/2 flex flex-col justify-center">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <span className="text-gray-500">{year}</span>
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      {/* Technologies/Skills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
        >
          View Project <ArrowUpRightIcon className="w-4 h-4 ml-1" />
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-600 hover:text-gray-700 font-medium"
        >
          View Code <ArrowUpRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...getAllCategories()];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : getProjectsByCategory(selectedCategory);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A collection of my recent work showcasing problem-solving through code.
          </p>
          
          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;