import React from "react";
import { useNavigate } from "react-router-dom";

const AuthChoiceScreen = () => {
  const navigate = useNavigate();

  const handlePhoneSignup = () => {
    navigate("/phone-auth");
  };

  const handleEmailSignup = () => {
    navigate("/email-auth");
  };

  const handleGoogleSignup = () => {
    // For prototype, we'll just navigate to profile setup
    navigate("/profile-setup");
  };

  return (
    <div className="p-5 max-w-[500px] mx-auto flex flex-col justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-center mb-8 text-2xl font-bold">Sign Up / Login</h1>
        <button
          className="p-4 mb-4 text-base w-full text-center rounded-lg bg-primary text-white"
          onClick={handlePhoneSignup}
        >
          Sign up with phone
        </button>
        <button
          className="p-4 mb-4 text-base w-full text-center rounded-lg bg-gray-100 text-text"
          onClick={handleEmailSignup}
        >
          Sign up with email
        </button>
        <button
          className="p-4 mb-4 text-base w-full text-center rounded-lg bg-blue-500 text-white"
          onClick={handleGoogleSignup}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default AuthChoiceScreen;
