import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/permissions');
  };

  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <h1>Welcome to HealthPadi</h1>
        <p>Get instant health guidance & find doctors near you</p>
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;