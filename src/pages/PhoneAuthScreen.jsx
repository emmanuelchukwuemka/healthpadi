import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const PhoneAuthScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = () => {
    // In a real app, we would send the OTP here
    // For prototype, we'll just navigate to OTP verification
    navigate('/otp-verification');
  };

  return (
    <div className="phone-auth-screen">
      <div className="phone-auth-content">
        <h1>Enter Phone Number</h1>
        <p>We'll send a verification code to your phone</p>
        <input
          type="tel"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="phone-input"
        />
        <button className="send-otp-button" onClick={handleSendOTP}>
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default PhoneAuthScreen;