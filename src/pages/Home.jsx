import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload } from 'react-icons/fi';
import profileImage from '../assets/isavwaprofile.jpg';
import reactIcon from '../assets/react.jpeg';
import pythonIcon from '../assets/python.png';
import djangoIcon from '../assets/django.jpeg';
import jsIcon from '../assets/javascript1.png';
import '../App.css';

const Home = () => {
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Full Stack Developer",
    "Python/DjangoRest Expert",
    "React Specialist",
    "PHP developer",
    "Javascript(Node.Js) specialist",
    "Frontend(HTML5,Tailwind CSS,Javascript ES6+",
    "Web Solutions architect",
    "Google Cloud Workspace administrator",
    "Golang developer",
  ];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    const type = () => {
      const currentText = texts[currentTextIndex];
      
      if (isDeleting) {
        setTypingText(currentText.substring(0, typingText.length - 1));
        if (typingText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      } else {
        setTypingText(currentText.substring(0, typingText.length + 1));
        if (typingText === currentText) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    const timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [typingText, currentTextIndex, isDeleting]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="home-section" id="home">
      <div className="tech-particles">
        {/* This would be replaced with actual particle animation */}
      </div>
      
      <div className="developer-intro">
        <motion.div 
          className="text-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <p className="text-primary font-mono mb-4">Hi, my name is</p>
          </motion.div>
          
          <motion.h1 className="main-heading" variants={itemVariants}>
            Ian Isavwa.
          </motion.h1>
          
          <motion.h2 className="sub-heading" variants={itemVariants}>
            I am a <span className="typing-effect">{typingText}</span>
          </motion.h2>
          
          <motion.p className="text-gray-300 mb-8 max-w-lg" variants={itemVariants}>
          I am a passionate Junior Full Stack Developer with expertise in Python, Django, React, and more. I create efficient and scalable web applications tailored to client needs. I worked on various projects, from dynamic websites to complex web applications, always focusing on clean code and user experience.
           My experience includes building RESTful APIs with Django Rest Framework, developing interactive UIs with React, and managing databases with PostgreSQL and MySQL.This journey has equipped me with a solid foundation in both frontend and backend development.Dedicated to continuous learning, I stay updated with the latest industry trends and technologies to deliver modern solutions.<br /><br />
           Also a Google Cloud Workspace administrator with a knack for optimizing workflows and enhancing productivity through cloud solutions. Worked with various startups and enterprises to streamline their operations using Google Workspace tools, e.g Pawa IT Solutions. Deploying applications on cloud platforms like Heroku and AWS, ensuring scalability and reliability. Committed to delivering high-quality code and collaborating effectively within teams to achieve project goals.Security-conscious developer, always prioritizing data protection and best practices in web development.
          </motion.p>
          
          <motion.div className="cta-buttons" variants={itemVariants}>
            <a 
              href="contact" 
              className="btn btn-primary"
            >
              <FiMail /> Contact Me
            </a>
            <a 
              href="/isavwaCV.docx"
              download="isavwaCV.docx"
              className="btn btn-outline"
            >
              <FiDownload /> Download CV
            </a>
          </motion.div>
          
          <motion.div className="social-links" variants={itemVariants}>
            <a href="https://github.com/333IAN" target="_blank" rel="noopener noreferrer" className="social-link">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/ian-isavwa" target="_blank" rel="noopener noreferrer" className="social-link">
              <FiLinkedin />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="profile-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="profile-frame">
            <img 
              src={profileImage} 
              alt="Ian Isavwa" 
              className="profile-image" 
            />
          </div>
          
          <div className="tech-stack-badge badge-1">
            <img src={reactIcon} alt="React" />
          </div>
          <div className="tech-stack-badge badge-2">
            <img src={pythonIcon} alt="Python" />
          </div>
          <div className="tech-stack-badge badge-3">
            <img src={djangoIcon} alt="Django" />
          </div>
          <div className="tech-stack-badge badge-4">
            <img src={jsIcon} alt="JavaScript" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;