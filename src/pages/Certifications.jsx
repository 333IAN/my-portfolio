import React from 'react';
import '../App.css';

// --- YOUR IMPORTS ---
import scriptCert from '../assets/AppSheet+AppScript.jpg'; 
import calenderCert from '../assets/Calender+Meet.jpg';
import driveCert from '../assets/Drive.jpg';
import geminiBadge from '../assets/GeminiforWorkspace.jpg';
import genaiCert from '../assets/GenAI.jpg';
import gmailCert from '../assets/Gmail.jpg';
import gmailBadge from '../assets/GmailBadge.jpg';
import calenderBadge from '../assets/GoogleCalender.jpg';
import chatBadge from '../assets/GoogleChat.jpg';
import docsBadge from '../assets/GoogleDocs.jpg';
import driveBadge from '../assets/GoogleDrive.jpg';
import meetBadge from '../assets/GoogleMeet.jpg';
import sheetsBadge from '../assets/GoogleSheets.jpg';
import slidesBadge from '../assets/GoogleSlides.jpg';
import sheetsadvBadge from'../assets/GsheetsAdv.jpg';
import sheetsfxnBadge from '../assets/GSheetsFxn.jpg';
import jsCert from '../assets/JavaScriptCert.jpg';
import pythonCert from '../assets/Python3.jpg';
import wcoresBadge from '../assets/WorkspaceCoreServices.jpg';
import wdatagBadge from '../assets/WorkspaceDataGovernance.jpg';
import wsecBadge from '../assets/WorkspaceSec.jpg';
import wusernresourceBadge from '../assets/WorkspaceUserandResource.jpg';
import wtroublesBadge from '../assets/WorkspaceTroubleshooting.jpg';

const certifications = [
  {
    title: "AppScript + AppSheet",
    image: scriptCert,
    link: "https://your-credential-link.com" 
  },
  {
    title: "Generative AI",
    image: genaiCert,
    link: "https://your-credential-link.com"
  },
  {
    title: "Google Drive",
    image: driveCert,
    link: "#"
  },
  {
    title: "Gmail Certification",
    image: gmailCert,
    link: "#"
  },
  {
    title: "Google Calendar",
    image: calenderCert,
    link: "#"
  },
  {
    title: "Javascript Strings",
    image: jsCert,
    link: "#"
  },
  {
    title: "Python 3 Turtle",
    image: pythonCert,
    link: "#"
  },
  // --- BADGES ---
  { title: "Gemini for Workspace", image: geminiBadge, link: "#" },
  { title: "Gmail Badge", image: gmailBadge, link: "#" },
  { title: "Google Calendar Badge", image: calenderBadge, link: "#" },
  { title: "Google Chat", image: chatBadge, link: "#" },
  { title: "Google Docs", image: docsBadge, link: "#" },
  { title: "Google Drive Badge", image: driveBadge, link: "#" },
  { title: "Google Meet", image: meetBadge, link: "#" },
  { title: "Google Sheets", image: sheetsBadge, link: "#" },
  { title: "Google Slides", image: slidesBadge, link: "#" },
  { title: "Sheets Advanced", image: sheetsadvBadge, link: "#" },
  { title: "Sheets Functions", image: sheetsfxnBadge, link: "#" },
  { title: "Workspace Core Services", image: wcoresBadge, link: "#" },
  { title: "Data Governance", image: wdatagBadge, link: "#" },
  { title: "Workspace Security", image: wsecBadge, link: "#" },
  { title: "User & Resource Mgmt", image: wusernresourceBadge, link: "#" },
  { title: "Troubleshooting", image: wtroublesBadge, link: "#" }
];

const Certifications = () => (
  <section id="certifications" className="certifications-section">
    <div className="container">
      <div className="section-header">
        <h1 className="section-title">Certifications & Badges</h1>
        <p className="section-subtitle">Professional credentials and verified skills</p>
      </div>

      <div className="cert-gallery">
        {certifications.map((cert, index) => (
          <a 
            key={index}
            href={cert.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="cert-item"
          >
            <div className="cert-circle">
              <img src={cert.image} alt={cert.title} className="cert-img" />
            </div>
            {/* The Title Tooltip - Only appears on hover */}
            <span className="cert-tooltip">{cert.title}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;