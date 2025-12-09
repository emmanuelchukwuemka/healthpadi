import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PhoneAuthScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = () => {
    // In a real app, we would send the OTP here
    // For prototype, we'll just navigate to OTP verification
    navigate("/otp-verification");
  };

  return (
    <div className="p-5 max-w-[500px] mx-auto flex flex-col justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-center mb-2 text-2xl font-bold">
          Enter Phone Number
        </h1>
        <p className="text-center mb-8 text-gray-500">
          We'll send a verification code to your phone
        </p>
        <input
          type="tel"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mb-5"
        />
        <button
          className="bg-primary text-white w-full py-3 text-lg"
          onClick={handleSendOTP}
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default PhoneAuthScreen;
