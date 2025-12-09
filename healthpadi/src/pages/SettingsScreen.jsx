import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const SettingsScreen = () => {
  const navigate = useNavigate();

  const handlePrivacyPolicy = () => {
    alert("Privacy Policy page would open here");
  };

  const handleTermsOfService = () => {
    alert("Terms of Service page would open here");
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      // In a real app, this would clear user session
      navigate('/');
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // In a real app, this would delete the user account
      alert("Account deletion functionality would go here");
    }
  };

  const handleAbout = () => {
    navigate('/about');
  };

  return (
    <div className="settings-screen">
      <div className="settings-header">
        <h1>Settings</h1>
      </div>
      
      <div className="settings-menu">
        <div className="settings-item" onClick={handlePrivacyPolicy}>
          <span>Privacy Policy</span>
          <span className="arrow">›</span>
        </div>
        
        <div className="settings-item" onClick={handleTermsOfService}>
          <span>Terms of Service</span>
          <span className="arrow">›</span>
        </div>
        
        <div className="settings-item" onClick={handleAbout}>
          <span>About HealthPadi</span>
          <span className="arrow">›</span>
        </div>
        
        <div className="settings-item" onClick={handleLogout}>
          <span>Logout</span>
          <span className="arrow">›</span>
        </div>
        
        <div className="settings-item danger" onClick={handleDeleteAccount}>
          <span>Delete Account</span>
          <span className="arrow">›</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;