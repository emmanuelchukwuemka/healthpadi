import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSetupScreen = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    dob: "",
    gender: "",
    phone: "",
    bloodGroup: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Staggered animation trigger
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenderSelect = (gender) => {
    setFormData((prev) => ({ ...prev, gender }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/home");
    }, 1500);
  };

  // Helper for floating label logic
  const isFilled = (value) => value !== "" && value !== null && value !== undefined;

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans selection:bg-teal-100 selection:text-teal-900 flex items-center justify-center p-4 overflow-hidden">

      {/* Background Decor - Subtle Particles & Gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-teal-50/80 to-transparent rounded-full blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tl from-blue-50/60 to-transparent rounded-full blur-[80px] animate-pulse-slower"></div>

        {/* Floating Particles (Simulated) */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-200/40 rounded-full animate-float delay-100"></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-blue-200/30 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-teal-300/30 rounded-full animate-float delay-300"></div>
      </div>

      <div
        className={`relative w-full max-w-lg bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-white/50 z-10 transition-all duration-1000 ease-out transform ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        {/* Progress Dots */}
        <div className={`flex justify-center gap-2 mb-8 transition-all duration-700 delay-100 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200 transition-colors"></div>
          <div className="w-8 h-2.5 rounded-full bg-teal-500 shadow-sm shadow-teal-200 animate-fill-width"></div>
        </div>

        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="font-['Poppins'] text-3xl font-bold text-slate-800 mb-3 tracking-tight">Complete Profile</h1>
          <p className="font-['Inter'] text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
            Tell us a bit more about yourself to personalize your experience.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Date of Birth */}
          <div className={`group relative transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div
              className={`relative border rounded-2xl bg-white transition-all duration-300 ${focusedField === "dob" ? "border-teal-500 shadow-[0_0_0_4px_rgba(20,184,166,0.1)]" : "border-slate-100 hover:border-slate-200"
                }`}
            >
              <input
                type="date"
                name="dob"
                id="dob"
                className="w-full px-5 pt-6 pb-2.5 bg-transparent text-slate-800 font-medium rounded-2xl focus:outline-none appearance-none z-10 relative placeholder-transparent"
                value={formData.dob}
                onChange={handleChange}
                onFocus={() => setFocusedField("dob")}
                onBlur={() => setFocusedField(null)}
                required
              />
              <label
                className={`absolute left-5 transition-all duration-200 pointer-events-none font-medium ${focusedField === "dob" || isFilled(formData.dob)
                    ? "top-2 text-[10px] uppercase tracking-wider text-teal-600"
                    : "top-4 text-sm text-slate-400"
                  }`}
              >
                Date of Birth
              </label>
              {/* Custom Date Icon */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none transition-transform group-hover:scale-110 duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
            </div>
          </div>

          {/* Gender */}
          <div className={`transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 ml-1">Gender</label>
            <div className="grid grid-cols-3 gap-3">
              {['Male', 'Female', 'Other'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleGenderSelect(option)}
                  className={`relative overflow-hidden py-3.5 rounded-xl border font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 active:scale-95 ${formData.gender === option
                      ? "bg-teal-50 border-teal-500 text-teal-700 shadow-sm"
                      : "bg-white border-slate-100 text-slate-500 hover:border-slate-200 hover:bg-slate-50/50"
                    }`}
                >
                  <span className="relative z-10">{option}</span>
                  {formData.gender === option && (
                    <span className="absolute inset-0 bg-teal-100/50 animate-fade-in"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Phone Number */}
          <div className={`relative transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div
              className={`relative border rounded-2xl bg-white transition-all duration-300 ${focusedField === "phone" ? "border-teal-500 shadow-[0_0_0_4px_rgba(20,184,166,0.1)]" : "border-slate-100 hover:border-slate-200"
                }`}
            >
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-full px-5 pt-6 pb-2.5 bg-transparent text-slate-800 font-medium rounded-2xl focus:outline-none z-10 relative"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                placeholder=" "
              />
              <label
                className={`absolute left-5 transition-all duration-200 pointer-events-none font-medium ${focusedField === "phone" || isFilled(formData.phone)
                    ? "top-2 text-[10px] uppercase tracking-wider text-teal-600"
                    : "top-4 text-sm text-slate-400"
                  }`}
              >
                Phone Number <span className="text-slate-300 font-normal">(Optional)</span>
              </label>
            </div>
          </div>

          {/* Blood Group */}
          <div className={`group relative transition-all duration-700 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div
              className={`relative border rounded-2xl bg-white transition-all duration-300 ${focusedField === "bloodGroup" ? "border-teal-500 shadow-[0_0_0_4px_rgba(20,184,166,0.1)]" : "border-slate-100 hover:border-slate-200"
                }`}
            >
              <select
                name="bloodGroup"
                id="bloodGroup"
                className="w-full px-5 pt-6 pb-2.5 bg-transparent text-slate-800 font-medium rounded-2xl focus:outline-none appearance-none z-10 relative cursor-pointer"
                value={formData.bloodGroup}
                onChange={handleChange}
                onFocus={() => setFocusedField("bloodGroup")}
                onBlur={() => setFocusedField(null)}
              >
                <option value=""></option>
                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
              <label
                className={`absolute left-5 transition-all duration-200 pointer-events-none font-medium ${focusedField === "bloodGroup" || isFilled(formData.bloodGroup)
                    ? "top-2 text-[10px] uppercase tracking-wider text-teal-600"
                    : "top-4 text-sm text-slate-400"
                  }`}
              >
                Blood Group <span className="text-slate-300 font-normal">(Optional)</span>
              </label>
              {/* Chevron Icon */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none transition-transform duration-300 group-hover:translate-y-0.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full relative overflow-hidden bg-[#00C4B4] hover:bg-[#00B2A3] text-white font-['Poppins'] font-semibold py-4 rounded-2xl shadow-lg shadow-teal-200/40 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-teal-300/50 active:scale-[0.98] flex items-center justify-center gap-2 mt-8 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {/* Button Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            ) : "Complete Setup"}
          </button>
        </form>

        {/* Security Note */}
        <div className={`mt-8 flex items-center justify-center gap-1.5 transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Your information is private and secure</span>
        </div>

      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 0.6; }
        }
        .animate-pulse-slow { animation: pulse-slow 8s infinite ease-in-out; }
        
         @keyframes pulse-slower {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.4; }
        }
        .animate-pulse-slower { animation: pulse-slower 10s infinite ease-in-out; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default ProfileSetupScreen;
