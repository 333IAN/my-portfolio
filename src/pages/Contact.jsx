import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import '../App.css';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://my-portfolio-us.up.railway.app/api/contact/';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  // In your Contact.jsx - update the handleSubmit function
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message || 'Message sent successfully! I will get back to you soon.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      const errorData = await response.json();
      alert(errorData.errors || 'Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Network error. Please check if the backend server is running.');
  }
};

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h1>Get In Touch</h1>
        <p className="section-subtitle">Have a project in mind? Let's talk</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out to me for any questions or opportunities. 
              I'm always open to discussing new projects, creative ideas or 
              opportunities to be part of your vision.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> amuguneisavwa@gmail.com
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> +254 726 339 718
              </div>
              <div className="contact-item">
                <strong>Location:</strong> Nairobi, Kenya
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message <FiSend className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;