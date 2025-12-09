import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PermissionsScreen = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  // State for permissions to visually show status changes
  const [permissions, setPermissions] = useState({
    location: false,
    notification: false
  });

  // State for expanding "Why needed" sections
  const [expanded, setExpanded] = useState({
    location: false,
    notification: false
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleExpand = (type) => {
    setExpanded(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const handlePermissionRequest = (type) => {
    // Simulate permission request
    setPermissions(prev => ({ ...prev, [type]: true }));
  };

  const handleContinue = () => {
    navigate("/auth-choice");
  };

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-y-auto overflow-x-hidden font-sans selection:bg-teal-100 selection:text-teal-900">

      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-teal-50/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-blue-50/50 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative max-w-lg mx-auto min-h-screen p-6 pb-24 flex flex-col z-10">

        {/* Header Section */}
        <div className={`mt-8 mb-10 text-center transition-all duration-700 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="font-['Poppins'] text-3xl font-bold text-slate-900 mb-3">Permissions</h1>
          <p className="font-['Inter'] text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
            To provide the best healthcare experience, we need access to a few things.
          </p>
        </div>

        {/* Permissions Stack */}
        <div className="space-y-6 flex-1">

          {/* Location Permission Card */}
          <div className={`bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-700 delay-200 ease-out transform hover:shadow-lg hover:-translate-y-1 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-50 rounded-xl text-teal-600 animate-pulse-slow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-['Poppins'] font-semibold text-lg text-slate-900 mb-1">Location Access</h3>
                <p className="font-['Inter'] text-slate-500 text-sm leading-relaxed mb-4">
                  We need your location to find hospitals and doctors near you.
                </p>

                {permissions.location ? (
                  <div className="flex items-center text-teal-600 font-medium text-sm bg-teal-50 px-3 py-2 rounded-lg inline-block">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Allowed
                  </div>
                ) : (
                  <button
                    onClick={() => handlePermissionRequest('location')}
                    className="w-full py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium rounded-xl shadow-md shadow-teal-200/50 transition-all focus:ring-2 focus:ring-teal-200 active:scale-[0.98]"
                  >
                    Allow Location
                  </button>
                )}

                <div className="mt-4 pt-3 border-t border-slate-50">
                  <button
                    onClick={() => toggleExpand('location')}
                    className="flex items-center text-xs text-slate-400 hover:text-teal-600 transition-colors"
                  >
                    Why do we need this?
                    <svg className={`w-3 h-3 ml-1 transform transition-transform ${expanded.location ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  {expanded.location && (
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed font-['Inter'] animate-fadeIn">
                      Your precise location helps us calculate travel times to emergency centers, find the nearest open pharmacy, and connect you with local specialists.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Notification Permission Card */}
          <div className={`bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-700 delay-400 ease-out transform hover:shadow-lg hover:-translate-y-1 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-500 relative">
                <svg className="relative z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                {/* Gentle Ring Animation */}
                <span className="absolute inset-0 rounded-xl bg-blue-100 animate-ping opacity-20"></span>
              </div>
              <div className="flex-1">
                <h3 className="font-['Poppins'] font-semibold text-lg text-slate-900 mb-1">Notification Access</h3>
                <p className="font-['Inter'] text-slate-500 text-sm leading-relaxed mb-4">
                  We need to send you important health reminders and updates.
                </p>

                {permissions.notification ? (
                  <div className="flex items-center text-blue-600 font-medium text-sm bg-blue-50 px-3 py-2 rounded-lg inline-block">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Enabled
                  </div>
                ) : (
                  <button
                    onClick={() => handlePermissionRequest('notification')}
                    className="w-full py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-xl shadow-md shadow-blue-200/50 transition-all focus:ring-2 focus:ring-blue-200 active:scale-[0.98]"
                  >
                    Enable Notifications
                  </button>
                )}

                <div className="mt-4 pt-3 border-t border-slate-50">
                  <button
                    onClick={() => toggleExpand('notification')}
                    className="flex items-center text-xs text-slate-400 hover:text-blue-500 transition-colors"
                  >
                    Why do we need this?
                    <svg className={`w-3 h-3 ml-1 transform transition-transform ${expanded.notification ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  {expanded.notification && (
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed font-['Inter'] animate-fadeIn">
                      Timely notifications ensure you never miss a medication dose, appointment, or critical update from your doctor.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Action */}
        <div className={`mt-8 pt-6 transition-all duration-700 delay-500 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={handleContinue}
            className="w-full bg-teal-600 hover:bg-teal-500 text-white font-['Poppins'] font-semibold text-lg py-4 rounded-2xl shadow-xl shadow-teal-200/40 hover:shadow-teal-300/60 transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98]"
          >
            Continue
          </button>
          <button
            onClick={handleContinue}
            className="w-full mt-4 py-2 text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors"
          >
            Skip for now
          </button>
        </div>

      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        .animate-pulse-slow { animation: pulse-slow 3s infinite ease-in-out; }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-4px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default PermissionsScreen;
