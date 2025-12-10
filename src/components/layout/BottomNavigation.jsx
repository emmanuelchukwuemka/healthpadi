import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home", path: "/home" },
    { id: "symptom", label: "Mypadi", path: "/symptom-checker" },
    { id: "hospital", label: "Hospital", path: "/find-hospital" },
    { id: "doctors", label: "Doctors", path: "/doctor-listing" },
    { id: "profile", label: "Profile", path: "/profile" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border flex justify-around p-3 z-50 md:hidden">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`flex flex-col items-center bg-transparent border-none p-2 text-gray-400 text-xs transition-colors ${
            location.pathname === item.path ? "text-primary" : ""
          }`}
          onClick={() => handleNavigation(item.path)}
        >
          <div className="text-xl mb-1">
            {item.id === "home" && "🏠"}
            {item.id === "symptom" && "🩺"}
            {item.id === "hospital" && "🏥"}
            {item.id === "doctors" && "👨‍⚕️"}
            {item.id === "profile" && "👤"}
          </div>
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNavigation;
