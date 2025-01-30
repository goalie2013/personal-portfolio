export const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce businesses featuring real-time analytics, inventory management, and sales forecasting. Built with a focus on performance and user experience, this application handles large datasets while maintaining responsive interactions.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redis"],
      imageUrl: "/path-to-your-image.jpg",
      projectUrl: "https://project-url.com",
      githubUrl: "https://github.com/username/project",
      featured: true,
      year: "2024",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Notecard Application",
      description: "A classic notecard application with additional features, including full-text search, filters, categorical grouping, storage capabilities",
      technologies: ["JavaScript", "React", "AWS", "Tailwind CSS"],
      imageUrl: "/path-to-your-image.jpg",
      projectUrl: "https://project-url.com",
      githubUrl: "https://github.com/username/project",
      featured: true,
      year: "2024",
      category: "Web Application"
    },
    {
      id: 3,
      title: "Real-Time Collaboration Tool",
      description: "A collaborative workspace application enabling teams to work together in real-time on documents, diagrams, and code. Implements WebSocket technology for instant updates and includes features like version control and automatic conflict resolution.",
      technologies: ["TypeScript", "Socket.io", "Redis", "AWS", "Docker"],
      imageUrl: "/path-to-your-image.jpg",
      projectUrl: "https://project-url.com",
      githubUrl: "https://github.com/username/project",
      featured: false,
      year: "2023",
      category: "Web Development"
    }
  ];
  
  // Helper functions to filter and sort projects
  export const getFeaturedProjects = () => projects.filter(project => project.featured);
  
  export const getProjectsByCategory = (category) => 
    projects.filter(project => project.category === category);
  
  export const getProjectsByTechnology = (tech) => 
    projects.filter(project => project.technologies.includes(tech));
  
  export const getAllCategories = () => 
    [...new Set(projects.map(project => project.category))];
  
  export const getAllTechnologies = () => 
    [...new Set(projects.flatMap(project => project.technologies))];
  
  export const sortProjectsByYear = (projectsArray) => 
    [...projectsArray].sort((a, b) => b.year - a.year);