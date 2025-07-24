import React from 'react';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import '../App.css';


const About = () => (
  <section id="about" className="about-section">
    <div className="container">
      <h1>About Me</h1>
      <p className="section-subtitle">Get to know me better</p>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate Full Stack Developer based in Nairobi, Kenya, specializing in building 
            modern web applications with Django and React. With a strong foundation in both frontend 
            and backend technologies, I create seamless, scalable solutions.
          </p>
          <p>
            My journey in web development started 3 years ago, and since then I've worked on various 
            projects ranging from simple websites to complex web applications. I'm constantly learning 
            new technologies and best practices to improve my craft.
          </p>
        </div>
        
        <div className="skills-container">
          <div className="skill-card">
            <div className="skill-icon">
              <FaCode className="text-primary text-3xl" />
            </div>
            <h3>Frontend</h3>
            <p><ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>Tailwind CSS</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                </ul>
            </p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <FaServer className="text-primary text-3xl" />
            </div>
            <h3>Backend</h3>
            <p>
                <ul>
                    <li>DjangoRest</li>
                    <li>PHP</li>
                    <li>Python</li>
                    <li>Node.JS</li>
               </ul>
            </p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <FaDatabase className="text-primary text-3xl" />
            </div>
            <h3>Database</h3>
            <p>PostgreSQL, MySQL</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;