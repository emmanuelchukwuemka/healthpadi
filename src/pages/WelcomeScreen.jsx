import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    navigate("/permissions");
  };

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Background Decor - Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Gradient Blob */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl animate-pulse-slower"></div>

        {/* Floating Icons/Particles */}
        <div className="absolute top-[15%] left-[10%] opacity-20 animate-float-slow text-teal-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>
        <div className="absolute top-[40%] right-[15%] opacity-20 animate-float-slower text-blue-500">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <div className="absolute bottom-[20%] left-[20%] opacity-10 animate-float-medium text-purple-400">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative flex flex-col items-center justify-center min-h-screen p-6 max-w-4xl mx-auto z-10">
        <div className="w-full max-w-lg text-center space-y-8">

          {/* Logo */}
          <div className={`transition-all duration-1000 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <img src="/logo.png" alt="HealthPadi" className="h-[200px] w-auto mx-auto mb-6" />
          </div>

          {/* Headings */}
          <div className="space-y-4">
            <h1
              className={`font-['Poppins'] text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight transition-all duration-1000 delay-100 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Welcome to <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #00A0B0, #6DDAD3)' }}>HealthPadi</span>
            </h1>
            <p
              className={`font-['Inter'] text-lg md:text-xl text-gray-500 max-w-sm mx-auto leading-relaxed transition-all duration-1000 delay-300 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Get instant health guidance & find experts near you.
            </p>
          </div>

          {/* Action Button */}
          <div className={`pt-4 transition-all duration-1000 delay-500 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={handleContinue}
              className="group relative w-full sm:w-auto min-w-[200px] text-white font-['Inter'] font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-4"
              style={{ backgroundColor: '#00A0B0', boxShadow: '0 10px 25px rgba(0,160,176,0.3)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6DDAD3'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00A0B0'}
            >
              <span className="flex items-center justify-center gap-2">
                Continue
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

        </div>

        {/* Footer/Legal Text (Subtle) */}
        <div className={`absolute bottom-6 w-full text-center transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs text-gray-400 font-['Inter']">Trusted by top healthcare professionals</p>
        </div>
      </div>

      {/* Custom Animations Styles */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        @keyframes float-medium {
           0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.15); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;
