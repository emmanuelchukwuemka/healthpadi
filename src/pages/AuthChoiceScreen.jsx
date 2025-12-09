import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthChoiceScreen = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Staggered entrance
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    // Add small delay to let user see selection feedback before transition
    setTimeout(() => {
      setStep(2);
    }, 400);
  };

  const icons = {
    patient: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    doctor: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    hospital: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  };

  const roles = [
    {
      id: "patient",
      title: "Patient",
      description: "I need medical assistance",
      icon: icons.patient,
      color: "teal",
      bg: "bg-teal-50",
      border: "border-teal-200",
      hoverBorder: "hover:border-teal-500",
      shadow: "hover:shadow-teal-100",
    },
    {
      id: "doctor",
      title: "Doctor",
      description: "I am a medical professional",
      icon: icons.doctor,
      color: "blue",
      bg: "bg-blue-50",
      border: "border-blue-200",
      hoverBorder: "hover:border-blue-500",
      shadow: "hover:shadow-blue-100",
    },
    {
      id: "hospital",
      title: "Hospital",
      description: "Manage institution resources",
      icon: icons.hospital,
      color: "purple",
      bg: "bg-purple-50",
      border: "border-purple-200",
      hoverBorder: "hover:border-purple-500",
      shadow: "hover:shadow-purple-100",
    },
  ];

  const handleAuth = (method) => {
    // Mock routing for prototype
    if (method === "google") {
      if (selectedRole === 'doctor') navigate("/doctor-dashboard");
      else if (selectedRole === 'hospital') navigate("/hospital-dashboard");
      else navigate("/profile-setup");
    } else {
      navigate("/register", { state: { role: selectedRole } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">

      {/* Ambient Background Particles with SVGs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-teal-100/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-blue-100/40 rounded-full blur-3xl animate-pulse-slower"></div>

        {/* Floating Icons */}
        <div className="absolute top-[15%] right-[20%] text-teal-200 opacity-40 animate-float-slow">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
        </div>
        <div className="absolute bottom-[15%] left-[15%] text-blue-200 opacity-40 animate-float-medium" style={{ animationDelay: '1s' }}>
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        </div>
        <div className="absolute top-[40%] left-[5%] text-indigo-200 opacity-40 animate-float-slow" style={{ animationDelay: '2s' }}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
      </div>

      {/* Main Content Card */}
      <div className={`
        relative w-full max-w-md bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] 
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white/60 
        transition-all duration-700 ease-out transform
        ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
      `}>

        {/* Step Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${step === 1 ? 'w-6 bg-teal-500' : 'bg-teal-200'}`}></div>
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${step === 2 ? 'w-6 bg-teal-500' : 'bg-teal-200'}`}></div>
        </div>

        {step === 1 ? (
          <>
            {/* Header */}
            <div className="text-center mb-10 relative">
              <h1 className="font-['Poppins'] text-3xl font-bold text-slate-800 mb-2 tracking-tight">Who are you?</h1>
              <p className="text-slate-500 font-medium">Select your role to continue</p>

              {/* Info Tooltip Icon */}
              <div className="absolute -right-2 top-0 group cursor-help">
                <div className="w-6 h-6 rounded-full border border-slate-200 text-slate-400 flex items-center justify-center text-xs font-serif italic hover:border-teal-400 hover:text-teal-500 transition-colors">i</div>
                <div className="absolute bottom-full right-0 mb-2 w-48 bg-slate-800 text-white text-xs p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform scale-95 group-hover:scale-100 origin-bottom-right">
                  We customize your experience based on whether you're a patient or a provider.
                  <div className="absolute -bottom-1 right-2 w-2 h-2 bg-slate-800 rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Role Cards */}
            <div className="space-y-4">
              {roles.map((role, index) => (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelect(role.id)}
                  onMouseEnter={() => setHoveredCard(role.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`
                                w-full relative group overflow-hidden p-4 rounded-3xl border-2 text-left transition-all duration-300 ease-out
                                ${selectedRole === role.id
                      ? `border-${role.color}-500 bg-${role.color}-50 shadow-lg scale-[1.02]`
                      : `border-transparent bg-slate-50 hover:bg-white ${role.hoverBorder} hover:shadow-xl ${role.shadow}`
                    }
                                ${hoveredCard && hoveredCard !== role.id ? 'opacity-50 scale-95' : 'opacity-100'}
                            `}
                  style={{
                    animation: loaded ? `slideUpFade 0.5s ease-out ${index * 0.1 + 0.2}s backwards` : 'none'
                  }}
                >
                  <div className="flex items-center gap-5 relative z-10">
                    <div className={`
                                    w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300
                                    ${role.bg} group-hover:scale-110 group-active:scale-95 text-${role.color}-500
                                `}>
                      <span className="animate-float-subtle">{role.icon}</span>
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg text-slate-800 mb-0.5 group-hover:text-${role.color}-600 transition-colors`}>{role.title}</h3>
                      <p className="text-sm text-slate-500 font-medium">{role.description}</p>
                    </div>

                    {/* Selection Checkmark */}
                    <div className={`
                                    absolute right-4 w-6 h-6 rounded-full bg-${role.color}-500 flex items-center justify-center text-white
                                    transition-all duration-300 transform
                                    ${selectedRole === role.id ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                                `}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="animate-fadeIn">
            {/* Step 2: Auth Method */}
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-600 mb-6 transition-colors group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back to roles
            </button>

            <div className="text-center mb-8">
              <div className="inline-block p-4 rounded-full bg-teal-50 text-teal-600 mb-4 animate-bounce-subtle">
                {selectedRole === 'patient' && icons.patient}
                {selectedRole === 'doctor' && icons.doctor}
                {selectedRole === 'hospital' && icons.hospital}
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Welcome, {selectedRole === 'doctor' ? 'Doc' : selectedRole === 'hospital' ? 'Admin' : 'Friend'}!</h2>
              <p className="text-slate-500 mt-1">How would you like to sign in?</p>
            </div>

            <div className="space-y-3">
              <button onClick={() => handleAuth('google')} className="w-full py-4 px-6 bg-white border border-slate-200 rounded-2xl flex items-center justify-center gap-3 font-bold text-slate-700 hover:border-blue-400 hover:bg-blue-50/30 transition-all hover:-translate-y-1 hover:shadow-lg">
                <img src="https://www.google.com/favicon.ico" alt="G" className="w-5 h-5" />
                Continue with Google
              </button>
              <button onClick={() => handleAuth('email')} className="w-full py-4 px-6 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all hover:-translate-y-1 hover:shadow-xl shadow-slate-900/20">
                Sign up with Email
              </button>
            </div>

            <p className="text-center mt-8 text-sm text-slate-400">
              By continuing, you agree to our <span className="underline cursor-pointer hover:text-slate-600">Terms</span>.
            </p>
          </div>
        )}

      </div>

      {/* Styles for complex animations */}
      <style>{`
        @keyframes slideUpFade {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-slow {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(10px, -15px); }
        }
        @keyframes float-medium {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-10px, -10px) rotate(5deg); }
        }
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
        }
         @keyframes pulse-slower {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
        }
        @keyframes float-subtle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
        }
        .animate-float-slow { animation: float-slow 8s infinite ease-in-out; }
        .animate-float-medium { animation: float-medium 6s infinite ease-in-out; }
        .animate-pulse-slow { animation: pulse-slow 4s infinite ease-in-out; }
        .animate-pulse-slower { animation: pulse-slower 7s infinite ease-in-out; }
        .animate-float-subtle { animation: float-subtle 3s infinite ease-in-out; }
        .animate-bounce-subtle { animation: float-subtle 2s infinite ease-in-out; }
        .animate-fadeIn { animation: slideUpFade 0.4s ease-out forwards; }
      `}</style>

    </div>
  );
};

export default AuthChoiceScreen;
