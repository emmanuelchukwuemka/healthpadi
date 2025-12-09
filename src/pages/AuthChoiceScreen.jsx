import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const AuthChoiceScreen = () => {
  const navigate = useNavigate();

  const handlePhoneSignup = () => {
    navigate('/phone-auth');
  };

  const handleEmailSignup = () => {
    navigate('/email-auth');
  };

  const handleGoogleSignup = () => {
    // For prototype, we'll just navigate to profile setup
    navigate('/profile-setup');
  };

  return (
    <div className="auth-choice-screen">
      <div className="auth-choice-content">
        <h1>Sign Up / Login</h1>
        <button className="auth-button primary" onClick={handlePhoneSignup}>
          Sign up with phone
        </button>
        <button className="auth-button secondary" onClick={handleEmailSignup}>
          Sign up with email
        </button>
        <button className="auth-button google" onClick={handleGoogleSignup}>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default AuthChoiceScreen;