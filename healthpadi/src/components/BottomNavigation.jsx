import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/home' },
    { id: 'symptom', label: 'Symptom', path: '/symptom-checker' },
    { id: 'hospital', label: 'Hospital', path: '/find-hospital' },
    { id: 'doctors', label: 'Doctors', path: '/doctor-listing' },
    { id: 'profile', label: 'Profile', path: '/profile' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="bottom-navigation">
      {navItems.map(item => (
        <button
          key={item.id}
          className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          onClick={() => handleNavigation(item.path)}
        >
          <div className="nav-icon">
            {item.id === 'home' && '🏠'}
            {item.id === 'symptom' && '🩺'}
            {item.id === 'hospital' && '🏥'}
            {item.id === 'doctors' && '👨‍⚕️'}
            {item.id === 'profile' && '👤'}
          </div>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNavigation;