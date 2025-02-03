import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import profilePhoto from '../assets/profile-photo.jpg'

const S3_BUCKET_PHOTO_URL = 'https://gg-portfolio-site.s3.us-west-1.amazonaws.com/assets/profile-photo-BkGm7-EV.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      
      {/* Hero Section */}
      <div className="w-full px-6 lg:px-16 xl:px-24 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full"
        >
          

          {/* Text Content */}
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Hi, I'm </span>
              <span className="block text-indigo-600 mt-2">Gabriel</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-600 w-full">
              Full-stack developer passionate about creating beautiful, functional, and user-friendly applications.
            </p>
          </div>

          {/* Profile Photo */}
          <div className="mb-10 mt-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 
              }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  // src={profilePhoto}
                  src={S3_BUCKET_PHOTO_URL}
                  alt="Profile Photo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* animation shaded ring around photo on page load */}
              <div className="absolute -inset-4 rounded-full bg-indigo-100 -z-10"></div>
            </motion.div>
          </div>

          {/* Links */}
          <div className="mt-5">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-xl md:px-10"
            >
              View My Work
              <ArrowRightIcon className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="w-full bg-white py-16 px-6 lg:px-16 xl:px-24">
        <div className="w-full">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 text-center mb-16">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {['Python', 'JavaScript', 'React', 'Node.js', 'AWS', 'Docker', 'SQL', 'NoSQL', 'Bash', 'Git', 'REST API', 'CI/CD'].map((skill) => (
              <div
                key={skill}
                className="flex justify-center items-center py-8 px-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <span className="text-lg font-medium text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full bg-gray-50 py-16 px-6 lg:px-16 xl:px-24">
        <div className="w-full">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-12">
            Let's Connect
          </h2>
          <div className="flex justify-center space-x-12">

            {/* Github Icon */}
            <a href="https://github.com/goalie2013" className="text-gray-500 hover:text-gray-900 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 22 22">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/gabriel-grinstein" className="text-gray-500 hover:text-blue-500 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;