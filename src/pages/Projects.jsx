import '../App.css';
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "PAWA IT Lunch Automation Script",
    description: "An automation bot built with Google's Apps Script to streamline lunch ordering for the team.",
    tech: ["JavaScript", "Google Apps Script"],
    codeLink: "https://github.com/333IAN/Company-Pawa-IT-Automation-Bot",
    features: ["Automated order placement", "Email notifications", "User-friendly interface"],
  },
  {
    title: "Wamunyiri Website",
    description: "Modern responsive website with animated UI elements built with Flask and SQLAlchemy",
    tech: ["Python", "Flask", "SQLAlchemy", "JavaScript"],
    codeLink: "https://github.com/333IAN/WAMUNYIRI-FOOTBALL-WEBSITE",
    features: ["Responsive design", "Animated UI elements", "Flask and SQLAlchemy integration"],
  },
  {
    title: "024GLOBALCONNECT",
    description: "Company website with admin dashboard built with React and Django REST framework",
    tech: ["React", "Django REST", "Tailwind CSS"],
    codeLink: "https://github.com/333IAN/024globalconnect",
    features: ["Admin dashboard", "React and Django REST framework integration", "Tailwind CSS","Responsive layout"],
  },
  {
    title: "Weather Application",
    description: "Real-time weather data visualization with 5-day forecast",
    tech: ["Next.js", "TypeScript", "Weather API"],
    codeLink: "https://github.com/333IAN/WEATHER-APPLICATION",
    features:["Location detection","5-day forecast","Real-time weather data"],
  },
  {
    title: "Euro 2024 Final Line Ups",
    description: "Python library that draws football pitch with player positions",
    tech: ["Python", "Matplotlib"],
    codeLink: "https://github.com/333IAN/LINE-UPS",
    features:["Custom formations","Player positioning mapping"]
  },
  {
    title: "Judging System",
    description: "LAMP stack application for competition judging with real-time scoring",
    tech: ["PHP", "MySQL", "JavaScript"],
    codeLink: "https://github.com/333IAN/WEB-APPLICATION",
    features:["Real-time updates","Admin dashboard","Score calculation","Participant management"]
  },
  {
    title: "Product Filter",
    description: "E-commerce product filtering system with search and rating functionality",
    tech: ["React", "Node.js"],
    codeLink: "https://github.com/333IAN/PRODUCT--FILTER",
    features:["Search functionality","Price-filtering","Rating system","Responsive design"]
  }
];


const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="project-particles"></div>
    <div className="container">
      <div className="section-header">
        <h1 className="section-title">My Projects</h1>
        <p className="section-subtitle">Here are some of my recent works</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <div className="project-icon">
                {project.title.charAt(0)}
              </div>
              <div className="project-title-wrapper">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="project-body">
              <p className="project-description">{project.description}</p>
              
              {project.features && (
                <div className="project-features">
                  <h4 className="features-title">Key Features:</h4>
                  <ul className="features-list">
                    {project.features.map((feature, i) => (
                      <li key={i} className="feature-item">
                        <span className="feature-marker">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="project-footer">
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <FiGithub className="link-icon" />
                View Code
              </a>
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FiExternalLink className="link-icon" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;