import '../App.css';
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "Wamunyiri Website",
    description: "Modern responsive website with animated UI elements built with Flask and SQLAlchemy",
    tech: ["Python", "Flask", "SQLAlchemy", "JavaScript"],
    codeLink: "https://github.com/333IAN/WAMUNYIRI-FOOTBALL-WEBSITE"
  },
  {
    title: "024GLOBALCONNECT",
    description: "Company website with admin dashboard built with React and Django REST framework",
    tech: ["React", "Django REST", "Tailwind CSS"],
    codeLink: "https://github.com/333IAN/024globalconnect"
  },
  {
    title: "Weather Application",
    description: "Real-time weather data visualization with 5-day forecast",
    tech: ["Next.js", "TypeScript", "Weather API"],
    codeLink: "https://github.com/333IAN/WEATHER-APPLICATION"
  },
  {
    title: "Euro 2024 Final Line Ups",
    description: "Python library that draws football pitch with player positions",
    tech: ["Python", "Matplotlib"],
    codeLink: "https://github.com/333IAN/LINE-UPS"
  },
  {
    title: "Judging System",
    description: "LAMP stack application for competition judging with real-time scoring",
    tech: ["PHP", "MySQL", "JavaScript"],
    codeLink: "https://github.com/333IAN/WEB-APPLICATION"
  },
  {
    title: "Product Filter",
    description: "E-commerce product filtering system with search and rating functionality",
    tech: ["React", "Node.js", "MongoDB"],
    codeLink: "https://github.com/333IAN/PRODUCT--FILTER"
  }
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="container">
      <h1>My Projects</h1>
      <p className="section-subtitle">Here are some of my recent works</p>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <div className="project-image-placeholder">
                {project.title.charAt(0)}
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                  </a>
                )}
                {project.codeLink && (
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Code <FiGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;