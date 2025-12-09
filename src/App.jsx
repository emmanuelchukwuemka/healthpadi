import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Import all the page components (we'll create these later)
import SplashScreen from './pages/SplashScreen'
import WelcomeScreen from './pages/WelcomeScreen'
import PermissionsScreen from './pages/PermissionsScreen'
import AuthChoiceScreen from './pages/AuthChoiceScreen'
import PhoneAuthScreen from './pages/PhoneAuthScreen'
import OTPVerificationScreen from './pages/OTPVerificationScreen'
import EmailAuthScreen from './pages/EmailAuthScreen'
import ProfileSetupScreen from './pages/ProfileSetupScreen'
import HomeScreen from './pages/HomeScreen'
import SymptomCheckerScreen from './pages/SymptomCheckerScreen'
import EmergencyFirstAidScreen from './pages/EmergencyFirstAidScreen'
import FindHospitalScreen from './pages/FindHospitalScreen'
import DoctorListingScreen from './pages/DoctorListingScreen'
import ProfileScreen from './pages/ProfileScreen'
import SettingsScreen from './pages/SettingsScreen'
import AboutScreen from './pages/AboutScreen'

// Import enhanced components
import OnboardingScreen from './pages/OnboardingScreen'
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'
import EnhancedSymptomCheckerScreen from './pages/EnhancedSymptomCheckerScreen'
import EnhancedDoctorListingScreen from './pages/EnhancedDoctorListingScreen'
import EnhancedEmergencyScreen from './pages/EnhancedEmergencyScreen'
import EnhancedHospitalLocatorScreen from './pages/EnhancedHospitalLocatorScreen'
import EnhancedProfileScreen from './pages/EnhancedProfileScreen'

function App() {
  return (
    <Router>
      <div className="App">
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
          <Route path="/phone-auth" element={<PhoneAuthScreen />} />
          <Route path="/otp-verification" element={<OTPVerificationScreen />} />
          <Route path="/email-auth" element={<EmailAuthScreen />} />
          <Route path="/profile-setup" element={<ProfileSetupScreen />} />
          
          {/* Main App Screens */}
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/symptom-checker" element={<SymptomCheckerScreen />} />
          <Route path="/symptom-checker-enhanced" element={<EnhancedSymptomCheckerScreen />} />
          <Route path="/emergency-first-aid" element={<EmergencyFirstAidScreen />} />
          <Route path="/emergency-enhanced" element={<EnhancedEmergencyScreen />} />
          <Route path="/find-hospital" element={<FindHospitalScreen />} />
          <Route path="/hospital-locator-enhanced" element={<EnhancedHospitalLocatorScreen />} />
          <Route path="/doctor-listing" element={<DoctorListingScreen />} />
          <Route path="/doctor-listing-enhanced" element={<EnhancedDoctorListingScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/profile-enhanced" element={<EnhancedProfileScreen />} />
          
          {/* Additional Screens */}
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App