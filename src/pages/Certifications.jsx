// src/pages/Certifications.jsx
import React from 'react';
import { FiExternalLink, FiAward, FiCheckCircle } from 'react-icons/fi';
import '../App.css';

const certifications = [
  {
    title: "Google Cloud Workspace Administrator",
    issuer: "Google",
    date: "2024",
    // You can replace 'badgeIcon' with an actual image path later if you have one
    icon: <FiAward />, 
    credentialLink: "https://your-credential-link.com",
    description: "Professional accreditation for managing Google Workspace services, security, and user lifecycles."
  },
  {
    title: "Full Stack Web Development",
    issuer: "Your Bootcamp/University",
    date: "2023",
    icon: <FiCheckCircle />,
    credentialLink: "https://your-credential-link.com",
    description: "Comprehensive training in React, Django, Database Management, and Cloud Deployment."
  },
  // Add more certifications here...
];

const Certifications = () => (
  <section id="certifications" className="certifications-section">
    <div className="container">
      <div className="section-header">
        <h1 className="section-title">Certifications</h1>
        <p className="section-subtitle">Professional credentials and verified skills</p>
      </div>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-icon-wrapper">
              {cert.icon}
            </div>
            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-date">• {cert.date}</span>
              </div>
              <p className="cert-description">{cert.description}</p>
              <a 
                href={cert.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                Verify Credential <FiExternalLink className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;