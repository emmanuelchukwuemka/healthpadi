import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, getUserRole } from "../services/authService";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Trigger entry animations
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors on change
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      const { data, error } = await signIn(formData.email, formData.password);

      if (error) {
        setErrors({ general: error.message || 'Login failed. Please check your credentials.' });
        setIsLoading(false);
        return;
      }

      if (data?.user) {
        // Get user role and redirect to appropriate dashboard
        const role = getUserRole(data.user);

        switch (role) {
          case 'doctor':
            navigate("/doctor-dashboard");
            break;
          case 'hospital':
            navigate("/hospital-dashboard");
            break;
          case 'patient':
          default:
            navigate("/home");
            break;
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: 'An unexpected error occurred. Please try again.' });
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden font-sans selection:bg-teal-100 selection:text-teal-900 flex items-center justify-center p-4">

      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] bg-gradient-to-br from-teal-50/40 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-gradient-to-tl from-blue-50/40 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>

        {/* Subtle Heartbeat Particle */}
        <div className="absolute top-[10%] right-[10%] opacity-10 text-teal-500 animate-float-slow">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>
      </div>

      <div
        className={`relative w-full max-w-md bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-50 z-10 transition-all duration-700 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >

        {/* Header */}
        <div className="text-center mb-8">
          <img src="/logo.png" alt="HealthPadi" className="h-[200px] w-auto mx-auto mb-4" />
          <h1 className="font-['Poppins'] text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
          <p className="font-['Inter'] text-slate-500 text-sm">Sign in to continue your health journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email Input */}
          <div
            className={`relative transition-all duration-700 delay-100 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className={`relative border rounded-xl transition-all duration-300`} style={{ borderColor: focusedField === 'email' ? '#00A0B0' : '#e2e8f0' }}>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 pt-5 pb-2 bg-transparent text-slate-900 font-medium rounded-xl focus:outline-none z-10 relative"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
              />
              <label
                htmlFor="email"
                className={`absolute left-4 transition-all duration-200 pointer-events-none`} style={{ top: (focusedField === 'email' || formData.email) ? '8px' : '14px', fontSize: (focusedField === 'email' || formData.email) ? '12px' : '14px', color: (focusedField === 'email' || formData.email) ? '#00A0B0' : '#94a3b8', fontWeight: (focusedField === 'email' || formData.email) ? 600 : 400 }}
              >
                Email Address
              </label>
            </div>
          </div>

          {/* Password Input */}
          <div
            className={`relative transition-all duration-700 delay-200 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className={`relative border rounded-xl transition-all duration-300 ${focusedField === 'password' ? 'border-teal-500 ring-4 ring-teal-500/10' : 'border-slate-200 hover:border-slate-300'}`}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="w-full px-4 pt-5 pb-2 bg-transparent text-slate-900 font-medium rounded-xl focus:outline-none z-10 relative"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                required
              />
              <label
                htmlFor="password"
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'password' || formData.password ? 'top-2 text-xs text-teal-600 font-semibold' : 'top-3.5 text-sm text-slate-400'}`}
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors z-20"
              >
                {showPassword ? (
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                ) : (
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                )}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {errors.general && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
              {errors.general}
            </div>
          )}

          {/* Remember & Forgot */}
          <div className={`flex items-center justify-between transition-all duration-700 delay-300 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 border-2 border-slate-300 rounded transition-colors peer-checked:bg-teal-500 peer-checked:border-teal-500"></div>
                <svg className="absolute top-1 left-1 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-sm text-slate-500 font-medium group-hover:text-slate-700 transition-colors">Remember me</span>
            </label>
            <button type="button" className="text-sm font-semibold text-teal-600 hover:text-teal-500 hover:underline transition-all">
              Forgot Password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-white font-['Poppins'] font-semibold py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-2 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ backgroundColor: isLoading ? '#6DDAD3' : '#00A0B0', boxShadow: '0 10px 25px rgba(0,160,176,0.3)' }}
            onMouseEnter={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#6DDAD3')}
            onMouseLeave={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#00A0B0')}
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            ) : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className={`mt-8 mb-6 flex items-center gap-4 transition-all duration-700 delay-500 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex-1 h-px bg-slate-100"></div>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">or continue with</p>
          <div className="flex-1 h-px bg-slate-100"></div>
        </div>

        {/* Social Buttons */}
        <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-600 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-[0.98]">
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
            <span className="text-sm font-semibold text-slate-600">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-3 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-xl transition-all active:scale-[0.98] shadow-md shadow-blue-500/20">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            <span className="text-sm font-semibold">Facebook</span>
          </button>
        </div>

        {/* Footer */}
        <div className={`mt-8 text-center transition-all duration-700 delay-700 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-slate-500 font-['Inter'] text-sm">
            Don't have an account?{' '}
            <button
              onClick={() => navigate("/register-type")}
              className="font-semibold relative group cursor-pointer border-none bg-transparent" style={{ color: '#00A0B0' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#003087'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#00A0B0'}
            >
              Sign Up
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-xs font-['Inter']">
            <svg className="w-3 h-3 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            Your data is safe with us
          </div>
        </div>

      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 0.6; }
        }
        .animate-pulse-slow { animation: pulse-slow 5s infinite ease-in-out; }
         @keyframes pulse-slower {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.4; }
        }
        .animate-pulse-slower { animation: pulse-slower 6s infinite ease-in-out; }

         @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-slow { animation: float-slow 4s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default LoginScreen;