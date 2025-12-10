import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate to welcome screen after 3 seconds
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen text-white" style={{ backgroundColor: '#003087' }}>
      <div className="text-center">
        <img src="/logo.png" alt="HealthPadi" className="h-[200px] w-auto mx-auto mb-4 animate-pulse" />
        <p className="text-xl">Your Health Companion</p>
      </div>
    </div>
  );
};

export default SplashScreen;
