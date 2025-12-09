import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const OTPVerificationScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Move to next input field if current field is filled
    if (element.value !== '' && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    // In a real app, we would verify the OTP here
    // For prototype, we'll just navigate to profile setup
    navigate('/profile-setup');
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(30);
    }
  };

  return (
    <div className="otp-screen">
      <div className="otp-content">
        <h1>Verify Phone Number</h1>
        <p>Enter the 6-digit code sent to your phone</p>
        <div className="otp-input-container">
          {otp.map((data, index) => {
            return (
              <input
                className="otp-input"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                id={`otp-input-${index}`}
              />
            );
          })}
        </div>
        <button className="verify-button" onClick={handleVerify}>
          Verify
        </button>
        <div className="resend-container">
          <span>Didn't receive code? </span>
          <button 
            className="resend-button" 
            onClick={handleResend}
            disabled={timer > 0}
          >
            Resend {timer > 0 ? `in ${timer}s` : ''}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationScreen;