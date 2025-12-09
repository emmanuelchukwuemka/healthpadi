import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate to welcome screen after 3 seconds
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="logo">HealthPadi</div>
        <p className="tagline">Your Health Companion</p>
      </div>
    </div>
  );
};

export default SplashScreen;