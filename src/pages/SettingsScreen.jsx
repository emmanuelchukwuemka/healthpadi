import React from "react";
import { useNavigate } from "react-router-dom";

const SettingsScreen = () => {
  const navigate = useNavigate();

  const handlePrivacyPolicy = () => {
    alert("Privacy Policy page would open here");
  };

  const handleTermsOfService = () => {
    alert("Terms of Service page would open here");
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      // In a real app, this would clear user session
      navigate("/");
    }
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      // In a real app, this would delete the user account
      alert("Account deletion functionality would go here");
    }
  };

  const handleAbout = () => {
    navigate("/about");
  };

  return (
    <div className="p-5 max-w-[800px] mx-auto">
      <div className="mb-5">
        <h1 className="text-2xl font-bold m-0">Settings</h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg run-flow overflow-hidden">
        <div
          className="flex justify-between items-center p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={handlePrivacyPolicy}
        >
          <span>Privacy Policy</span>
          <span className="text-gray-400">›</span>
        </div>

        <div
          className="flex justify-between items-center p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={handleTermsOfService}
        >
          <span>Terms of Service</span>
          <span className="text-gray-400">›</span>
        </div>

        <div
          className="flex justify-between items-center p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={handleAbout}
        >
          <span>About HealthPadi</span>
          <span className="text-gray-400">›</span>
        </div>

        <div
          className="flex justify-between items-center p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={handleLogout}
        >
          <span>Logout</span>
          <span className="text-gray-400">›</span>
        </div>

        <div
          className="flex justify-between items-center p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors text-emergency"
          onClick={handleDeleteAccount}
        >
          <span>Delete Account</span>
          <span className="text-gray-400">›</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
