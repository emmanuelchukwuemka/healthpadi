import React from 'react';
import '../App.css';

const AboutScreen = () => {
  return (
    <div className="about-screen">
      <div className="about-header">
        <h1>About HealthPadi</h1>
      </div>
      
      <div className="about-content">
        <div className="app-logo">
          HealthPadi
        </div>
        
        <p className="app-version">Version 1.0.0</p>
        
        <div className="about-description">
          <p>
            HealthPadi is your personal health companion designed to provide instant 
            health guidance and connect you with healthcare professionals near you.
          </p>
          
          <p>
            Our mission is to make quality healthcare accessible to everyone by 
            leveraging technology to bridge the gap between patients and healthcare providers.
          </p>
          
          <h3>Features</h3>
          <ul>
            <li>Symptom checker with AI-powered analysis</li>
            <li>Emergency first aid guides</li>
            <li>Hospital and clinic finder with map integration</li>
            <li>Doctor listing and appointment booking</li>
            <li>Personal health records management</li>
          </ul>
          
          <h3>Contact Us</h3>
          <p>Email: support@healthpadi.com</p>
          <p>Phone: +234 123 456 7890</p>
        </div>
        
        <div className="legal-info">
          <p>© 2023 HealthPadi. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;