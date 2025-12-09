import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/permissions");
  };

  return (
    <div className="flex justify-center items-center h-screen p-5 text-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-5">Welcome to HealthPadi</h1>
        <p className="text-lg mb-8 text-gray-500">
          Get instant health guidance & find doctors near you
        </p>
        <button
          className="bg-primary text-white px-10 py-4 text-lg"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
