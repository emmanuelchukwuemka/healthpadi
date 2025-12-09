import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const EmailAuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // In a real app, we would authenticate here
    // For prototype, we'll just navigate to profile setup
    navigate('/profile-setup');
  };

  return (
    <div className="email-auth-screen">
      <div className="email-auth-content">
        <h1>Login with Email</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default EmailAuthScreen;