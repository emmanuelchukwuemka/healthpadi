import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import OnboardingScreen from "./pages/OnboardingScreen";
import WelcomeScreen from "./pages/WelcomeScreen";
import PermissionsScreen from "./pages/PermissionsScreen";
import AuthChoiceScreen from "./pages/AuthChoiceScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import ProfileSetupScreen from "./pages/ProfileSetupScreen";
import HomeScreen from "./pages/HomeScreen";
import EnhancedSymptomCheckerScreen from "./pages/EnhancedSymptomCheckerScreen";
import EnhancedDoctorListingScreen from "./pages/EnhancedDoctorListingScreen";
import EnhancedEmergencyScreen from "./pages/EnhancedEmergencyScreen";
import EnhancedHospitalLocatorScreen from "./pages/EnhancedHospitalLocatorScreen";
import EnhancedProfileScreen from "./pages/EnhancedProfileScreen";
import MedicationsScreen from "./pages/MedicationsScreen";
import DoctorDashboardScreen from "./pages/DoctorDashboardScreen";
import HospitalDashboardScreen from "./pages/HospitalDashboardScreen";

const PlaceholderScreen = ({ title }) => (
  <div className="flex items-center justify-center min-h-screen bg-slate-50">
    <div className="text-center p-8">
      <div className="text-6xl mb-4">🚧</div>
      <h1 className="text-2xl font-bold text-slate-800 mb-2">{title}</h1>
      <p className="text-slate-500 mb-6">This feature is coming soon to HealthPadi.</p>
      <a href="/home" className="px-6 py-3 bg-teal-500 text-white rounded-xl font-semibold shadow-lg shadow-teal-200">Go Home</a>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text">
        <Routes>
          {/* App Entry & Onboarding */}
          <Route path="/" element={<SplashScreen />} />
          <Route path="/onboarding" element={<OnboardingScreen />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/permissions" element={<PermissionsScreen />} />
          <Route path="/auth-choice" element={<AuthChoiceScreen />} />

          {/* Authentication Flow */}
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile-setup" element={<ProfileSetupScreen />} />

          {/* Main App Screens (Patient) */}
          <Route path="/home" element={<HomeScreen />} />

          {/* Role-Based Dashboards (New) */}
          <Route path="/doctor-dashboard" element={<DoctorDashboardScreen />} />
          <Route path="/hospital-dashboard" element={<HospitalDashboardScreen />} />

          {/* Feature Screens - Using Enhanced Versions */}
          <Route path="/symptom-checker" element={<EnhancedSymptomCheckerScreen />} />
          <Route path="/emergency-first-aid" element={<EnhancedEmergencyScreen />} />
          <Route path="/find-hospital" element={<EnhancedHospitalLocatorScreen />} />
          <Route path="/doctor-listing" element={<EnhancedDoctorListingScreen />} />
          <Route path="/profile" element={<EnhancedProfileScreen />} />

          {/* New Premium Features */}
          <Route path="/medications" element={<MedicationsScreen />} />

          {/* Placeholders for New Features */}
          <Route path="/labs" element={<PlaceholderScreen title="Lab Results" />} />
          <Route path="/goals" element={<PlaceholderScreen title="Health Goals" />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
