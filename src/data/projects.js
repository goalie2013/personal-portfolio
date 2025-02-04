export const projects = [
    {
      id: 1,
      title: "Real Estate Auction Data & Mapping",
      description: "Sample of a winning submission to work on real estate proprietary software for finding good deals on home auctions.",
      technologies: ["Python", "Flask", "API", "Data Analysis", "Database"],
      imageUrl: "https://gg-portfolio-site.s3.us-west-1.amazonaws.com/assets/screenshot_auction--1d3JNwO.png",
      projectUrl: "https://auctions-zz9g.onrender.com/",
      githubUrl: "https://github.com/goalie2013/auctions",
      featured: true,
      year: "2023",
      category: "Web Application"
    },
    {
      id: 2,
      title: "Notecard Application",
      description: "A classic notecard application with additional features, including full-text search, filters, categorical grouping, and storage capabilities. Also includes themes for light and dark mode.",
      technologies: ["JavaScript", "React", "AWS", "Tailwind CSS"],
      imageUrl: "https://gg-portfolio-site.s3.us-west-1.amazonaws.com/assets/screenshot_notecard_app-6z5XajIf.png",
      projectUrl: "http://gg-notecard-web-app.s3-website-us-west-1.amazonaws.com/",
      githubUrl: "https://github.com/goalie2013/notecards-web-app",
      featured: true,
      year: "2024",
      category: "Web Application"
    },
    {
      id: 3,
      title: "Banking Simulation Application",
      description: "A banking simulation showcases full-stack capabilities, including front-end, authentication, back-end, database, configuration, and hosting.",
      technologies: ["React", "Express", "Node.js", "MongoDB", "Firebase", "Docker"],
      imageUrl: "https://gg-portfolio-site.s3.us-west-1.amazonaws.com/assets/screenshot_banking_app-BiPWXlPq.png",
      projectUrl: "https://betterbankingapp.net/",
      githubUrl: "https://github.com/goalie2013/capstone-bank",
      featured: true,
      year: "2022",
      category: "Full Stack Application"
    },
    {
      id: 4,
      title: "Nasa Images Search Engine",
      description: "A simple yet fun project searching through NASA's catalogue for images. The focus was on API calls, forms, pagination, and vanilla CSS.",
      technologies: ["Rest API", "React"],
      imageUrl: "https://gg-portfolio-site.s3.us-west-1.amazonaws.com/assets/screenshot_nasa-DOlrFbKJ.png",
      projectUrl: "https://goalie2013.github.io/nasa-images/",
      githubUrl: "https://github.com/goalie2013/nasa-images",
      featured: false,
      year: "2022",
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