import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'certifications', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-container">
        {/* Logo - Clickable to scroll to top */}
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('home')}
          style={{ cursor: 'pointer' }}
        >
          <span className="logo-text">ISAVWA'S PORTFOLIO</span>
          <div className="logo-accent"></div>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <motion.button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div 
                      className="nav-indicator"
                      layoutId="nav-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`menu-line ${isMobileMenuOpen ? 'line-1' : ''}`}></span>
          <span className={`menu-line ${isMobileMenuOpen ? 'line-2' : ''}`}></span>
          <span className={`menu-line ${isMobileMenuOpen ? 'line-3' : ''}`}></span>
        </motion.button>
        
        {/* CTA Button */}
        <motion.div 
          className="header-cta"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button 
            className="cta-button"
            onClick={() => scrollToSection('contact')}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(108, 99, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.button>
        </motion.div>

        {/* Mobile Navigation Menu */}
        <motion.div 
          className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
          initial={{ opacity: 0, x: '100%' }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            x: isMobileMenuOpen ? 0 : '100%'
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="mobile-nav-content">
            <div className="mobile-nav-header">
              <span className="mobile-nav-title">Menu</span>
              <button 
                className="mobile-close-btn"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ×
              </button>
            </div>
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="mobile-nav-item">
                  <button
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className="mobile-nav-indicator"></div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </motion.header>
  );
};

export default Header;