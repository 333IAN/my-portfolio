import React from 'react';
import { FaCode, FaServer, FaDatabase, FaShieldAlt, FaUserCog } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiMysql, SiJavascript, SiReact, SiGo, SiPhp, SiNodedotjs } from 'react-icons/si';
import '../App';

const About = () => (
  <section id="about" className="about-section">
    <div className="about-container">
      
      {/* Header remains the same */}
      <header className="about-header">
        <div className="header-accent"></div>
        <h1>
          <span className="highlight">Professional</span> Profile
        </h1>
        <p className="subtitle">
          <span className="role">Full Stack Developer</span>
          <span className="location">Nairobi, Kenya</span>
        </p>
      </header>

      {/* Bio section remains the same */}
      <article className="bio-card">
        <div className="bio-content">
          <p className="lead">
            I specialize in building <strong>scalable web applications</strong> with modern 
            architectures, focusing on both technical excellence and user experience.
          </p>
          <p>
            With 2 years of experience, I've successfully delivered 
            projects ranging from startup websites to enterprise solutions, always emphasizing 
            clean code and maintainable systems.
          </p>
        </div>
      </article>

      {/* Updated Skills Section with Node.js */}
      <section className="skills-section">
        <h2 className="section-title">
          <span>Technical</span> Expertise
        </h2>
        
        <div className="skills-grid">
          
          {/* Frontend card remains the same */}
          <div className="skill-card frontend">
            <div className="card-header">
              <FaCode className="card-icon" />
              <h3>Frontend</h3>
            </div>
            <ul className="skill-list">
              <li>
                <SiReact className="skill-icon react" />
                <span>React JS</span>
              </li>
              <li>
                <SiJavascript className="skill-icon javascript" />
                <span>JavaScript (ES6+)</span>
              </li>
              <li>
                <div className="skill-icon htmlcss">{"</>"}</div>
                <span>HTML5/CSS3</span>
              </li>
            </ul>
          </div>

          {/* Updated Backend card with Node.js */}
          <div className="skill-card backend">
            <div className="card-header">
              <FaServer className="card-icon" />
              <h3>Backend</h3>
            </div>
            <ul className="skill-list">
              <li>
                <SiDjango className="skill-icon django" />
                <span>Django REST</span>
              </li>
              <li>
                <SiGo className="skill-icon golang" />
                <span>Golang</span>
              </li>
              <li>
                <SiPhp className="skill-icon php" />
                <span>PHP</span>
              </li>
              <li>
                <SiNodedotjs className="skill-icon nodejs" />
                <span>Node JS</span>
              </li>
              <li>
                <FaDatabase className="skill-icon api" />
                <span>API Design</span>
              </li>
            </ul>
          </div>

          {/* Database card remains the same */}
          <div className="skill-card database">
            <div className="card-header">
              <FaDatabase className="card-icon" />
              <h3>Database</h3>
            </div>
            <ul className="skill-list">
              <li>
                <SiPostgresql className="skill-icon postgres" />
                <span>PostgreSQL</span>
              </li>
              <li>
                <SiMysql className="skill-icon mysql" />
                <span>MySQL</span>
              </li>
              <li>
                <FaDatabase className="skill-icon architecture" />
                <span>Database Architecture</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Principles section remains the same */}
      <section className="principles-section">
        <h2 className="section-title">
          <span>Development</span> Principles
        </h2>
        
        <div className="principles-grid">
          <div className="principle">
            <div className="principle-icon">
              <FaCode />
            </div>
            <h3>Code Quality</h3>
            <p>Clean, documented, and maintainable codebase</p>
          </div>
          
          <div className="principle">
            <div className="principle-icon">
              <FaServer />
            </div>
            <h3>Performance</h3>
            <p>Optimized solutions built to scale</p>
          </div>
          
          <div className="principle">
            <div className="principle-icon">
              <FaShieldAlt />
            </div>
            <h3>Security</h3>
            <p>Industry-standard security practices</p>
          </div>
          
          <div className="principle">
            <div className="principle-icon">
              <FaUserCog />
            </div>
            <h3>User Focus</h3>
            <p>Intuitive and accessible interfaces</p>
          </div>
        </div>
      </section>
    </div>
  </section>
);

export default About;