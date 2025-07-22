import React from 'react';
import '../App.css';

const ProjectCard =  ({title, description, image, tech, link}) => {
    return (
        <div className="project-card">
            {image && <img src={image} alt={title} className="project-image" />}
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                {tech && <p className="project-tech">{tech}</p>}
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View Project➡</a>
                )}
            </div>
        </div>
    );
}
export default ProjectCard
