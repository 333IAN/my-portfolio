import React from 'react';
import { FaCode, FaServer, FaDatabase, FaShieldAlt, FaUserCog } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiMysql, SiJavascript, SiReact, SiGo, SiPhp, SiNodedotjs } from 'react-icons/si';
import '../App';

const About = () => (
  <section id="about" className="about-section">
    <div className="about-container">
      
      <header className="about-header">
        <div className="header-accent"></div>
        <h1>
          <span className="highlight">My</span> Journey
        </h1>
        <p className="subtitle">
          <span className="role">Cloud Specialist & Developer</span>
          <span className="location">Building Digital Solutions</span>
        </p>
      </header>

      <article className="bio-card">
        <div className="bio-content">
          <p className="lead">
            Transforming ideas into efficient digital solutions through cloud engineering and full-stack development.
          </p>
          
          <p>
            With <strong>2 years of professional experience</strong>, I've been crafting solutions that bridge 
            the gap between cloud infrastructure and user-facing applications. At <strong>Pawa IT Solutions</strong>, 
            I specialize in Google Cloud Platform implementations, engineering robust software architectures, 
            and creating automation systems that streamline business operations.
          </p>
          
          <p>
            My technical arsenal includes <strong>Django and Python</strong> for building powerful backends, 
            <strong> React and JavaScript</strong> for creating dynamic user interfaces, and extensive experience 
            with <strong>Google Workspace administration</strong> and <strong>Google Apps Script</strong> for 
            workflow automation and productivity enhancement.
          </p>
          
          <p>
            As a dedicated student of technology, I combine academic learning with practical application, 
            constantly expanding my skills in software development, cloud solutions, and modern web technologies. 
            This dual perspective allows me to approach problems with both theoretical understanding and 
            real-world implementation experience.
          </p>
          
          <p>
            I'm passionate about creating solutions that are not just technically sound but also deliver 
            tangible value—whether it's through optimized cloud infrastructure, efficient automation scripts, 
            or user-friendly web applications.
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