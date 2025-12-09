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
    <div className="flex justify-center items-center h-screen bg-primary text-white">
      <div className="text-center">
        {/* <div className="text-5xl font-bold mb-5">HealthPadi</div> */}
        <p className="text-xl">Your Health Companion</p>
      </div>
    </div>
  );
};

export default SplashScreen;
