import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "../common/Icon";
import "@/App.css";

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
      <header className="desktop-header">
        <div className="header-content">
          <div className="logo" onClick={() => navigate("/")}>
            HealthPadi
          </div>
          <nav className="desktop-nav">
            {desktopNavItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="auth-section">
            <button
              className="login-btn"
              onClick={() => navigate("/auth-choice")}
            >
              Login
            </button>
            <button
              className="signup-btn"
              onClick={() => navigate("/auth-choice")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <div className="mobile-bottom-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${
                location.pathname === item.path ? "active" : ""
              }`}
              onClick={() => handleNavigation(item.path)}
            >
              <Icon name={item.icon} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Mobile Menu Button (for additional options) */}
      {isMobile && (
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon name={isMobileMenuOpen ? "close" : "menu"} />
        </button>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <button
              className="close-menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon name="close" />
            </button>
            {desktopNavItems.map((item) => (
              <button
                key={item.id}
                className={`menu-item ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </button>
            ))}
            <div className="mobile-auth-section">
              <button
                className="login-btn"
                onClick={() => navigate("/auth-choice")}
              >
                Login
              </button>
              <button
                className="signup-btn"
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
