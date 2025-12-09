import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OTPVerificationScreen = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
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
    if (element.value !== "" && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    // In a real app, we would verify the OTP here
    // For prototype, we'll just navigate to profile setup
    navigate("/profile-setup");
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(30);
    }
  };

  return (
    <div className="p-5 max-w-[500px] mx-auto flex flex-col justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-center mb-2 text-2xl font-bold">
          Verify Phone Number
        </h1>
        <p className="text-center mb-8 text-gray-500">
          Enter the 6-digit code sent to your phone
        </p>
        <div className="flex justify-center gap-2 mb-8">
          {otp.map((data, index) => {
            return (
              <input
                className="w-12 h-12 text-center text-2xl p-0 border-2 rounded-lg focus:border-primary"
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
        <button
          className="bg-primary text-white w-full py-3 mb-5 text-lg"
          onClick={handleVerify}
        >
          Verify
        </button>
        <div className="text-center">
          <span>Didn't receive code? </span>
          <button
            className="bg-transparent text-primary underline ml-1 p-0 hover:no-underline disabled:text-gray-400 disabled:no-underline"
            onClick={handleResend}
            disabled={timer > 0}
          >
            Resend {timer > 0 ? `in ${timer}s` : ""}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationScreen;
