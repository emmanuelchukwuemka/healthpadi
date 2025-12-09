import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "../common/Icon";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", path: "/home", icon: "home" },
    {
      id: "symptom",
      label: "Symptom",
      path: "/symptom-checker",
      icon: "symptom",
    },
    {
      id: "hospital",
      label: "Hospital",
      path: "/find-hospital",
      icon: "hospital",
    },
    {
      id: "doctors",
      label: "Doctors",
      path: "/doctor-listing",
      icon: "doctor",
    },
    { id: "profile", label: "Profile", path: "/profile", icon: "profile" },
  ];

  const desktopNavItems = [
    { id: "home", label: "Home", path: "/home" },
    { id: "symptom", label: "Symptom Checker", path: "/symptom-checker" },
    { id: "emergency", label: "Emergency", path: "/emergency-first-aid" },
    { id: "hospital", label: "Find Hospital", path: "/find-hospital" },
    { id: "doctors", label: "Doctors", path: "/doctor-listing" },
    { id: "about", label: "About", path: "/about" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  // Check if we're on a mobile screen size (simplified check)
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center p-4">
          <div
            className="text-2xl font-bold text-primary cursor-pointer"
            onClick={() => navigate("/")}
          >
            HealthPadi
          </div>
          <nav className="flex gap-6">
            {desktopNavItems.map((item) => (
              <button
                key={item.id}
                className={`bg-transparent border-none text-text hover:text-primary transition-colors cursor-pointer text-base font-medium ${
                  location.pathname === item.path ? "text-primary" : ""
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center">
            <button
              className="bg-transparent text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer font-medium"
              onClick={() => navigate("/auth-choice")}
            >
              Login
            </button>
            <button
              className="bg-primary text-white border border-primary px-4 py-2 rounded-lg hover:opacity-90 transition-opacity cursor-pointer font-medium ml-3"
              onClick={() => navigate("/auth-choice")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation is usually handled by BottomNavigation component, avoiding duplication here if possible, but keeping logic if intent is to have it here */}
      {/* Assuming BottomNavigation component handles the main mobile nav, checking if this is redundant or specific. */}
      {/* The original code had mobile-bottom-nav here. If BottomNavigation component exists and is used in App, this might be redundant. */}
      {/* However, for direct refactor, I will keep it matching original logic. */}

      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border flex justify-around p-3 z-50 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`flex flex-col items-center bg-transparent border-none p-2 text-gray-400 text-xs transition-colors ${
                location.pathname === item.path ? "text-primary" : ""
              }`}
              onClick={() => handleNavigation(item.path)}
            >
              <Icon name={item.icon} className="text-xl mb-1" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Mobile Menu Button (for additional options) */}
      {isMobile && (
        <button
          className="fixed top-4 right-4 z-60 bg-white p-2 rounded-full shadow-md border-none text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon name={isMobileMenuOpen ? "close" : "menu"} />
        </button>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-55 flex justify-end">
          <div className="w-[80%] max-w-[300px] h-full bg-white p-5 shadow-xl flex flex-col">
            <button
              className="self-end mb-6 bg-transparent border-none text-2xl text-gray-500 p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon name="close" />
            </button>
            {desktopNavItems.map((item) => (
              <button
                key={item.id}
                className={`w-full text-left bg-transparent border-none py-3 px-2 text-lg border-b border-gray-100 ${
                  location.pathname === item.path
                    ? "text-primary font-bold"
                    : "text-text"
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <button
                className="w-full bg-transparent text-primary border border-primary px-4 py-3 rounded-lg font-medium"
                onClick={() => navigate("/auth-choice")}
              >
                Login
              </button>
              <button
                className="w-full bg-primary text-white border border-primary px-4 py-3 rounded-lg font-medium"
                onClick={() => navigate("/auth-choice")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
