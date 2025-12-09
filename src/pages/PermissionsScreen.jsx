import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const PermissionsScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/auth-choice');
  };

  return (
    <div className="permissions-screen">
      <div className="permissions-content">
        <h1>Permissions</h1>
        <div className="permission-item">
          <h2>Location Access</h2>
          <p>We need your location to find hospitals and doctors near you.</p>
          <button className="permission-button">Allow Location</button>
        </div>
        <div className="permission-item">
          <h2>Notification Access</h2>
          <p>We need to send you important health reminders and updates.</p>
          <button className="permission-button">Enable Notifications</button>
        </div>
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default PermissionsScreen;