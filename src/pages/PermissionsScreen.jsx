import React from "react";
import { useNavigate } from "react-router-dom";

const PermissionsScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/auth-choice");
  };

  return (
    <div className="p-5 max-w-[500px] mx-auto">
      <div className="permissions-content">
        <h1 className="text-center mb-8 text-2xl font-bold">Permissions</h1>
        <div className="bg-white rounded-xl p-5 mb-5 shadow-lg">
          <h2 className="mt-0 text-xl font-semibold mb-2">Location Access</h2>
          <p className="mb-4">
            We need your location to find hospitals and doctors near you.
          </p>
          <button className="bg-primary text-white w-full mt-2 py-3 px-4">
            Allow Location
          </button>
        </div>
        <div className="bg-white rounded-xl p-5 mb-5 shadow-lg">
          <h2 className="mt-0 text-xl font-semibold mb-2">
            Notification Access
          </h2>
          <p className="mb-4">
            We need to send you important health reminders and updates.
          </p>
          <button className="bg-primary text-white w-full mt-2 py-3 px-4">
            Enable Notifications
          </button>
        </div>
        <button
          className="bg-primary text-white px-10 py-4 text-lg w-full"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PermissionsScreen;
