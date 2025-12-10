import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/layout/BottomNavigation";

const HomeScreen = () => {
  const navigate = useNavigate();
  const userName = "Chioma";
  const [loaded, setLoaded] = useState(false);
  const [greeting, setGreeting] = useState("Good morning");
  const [showConfetti, setShowConfetti] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Touch handling for pull-to-refresh
  const touchStart = useRef(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Staggered enter animation
    const timer = setTimeout(() => setLoaded(true), 100);

    // Time based greeting
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");

    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2500);
  };

  // Professional SVG Icons
  const icons = {
    mood: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
    emergency: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>),
    hospital: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>),
    doctor: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>),
    meds: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>),
    lab: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>),
    goals: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>),
    steps: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
    water: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>),
    sleep: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>),
    pill: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" /></svg>),
  };

  const quickActions = [
    { id: "mood", title: "Mood", icon: icons.mood, path: "/symptom-checker", color: "bg-amber-50 text-amber-600 border-amber-100" },
    { id: "emergency", title: "Emergency", icon: icons.emergency, path: "/emergency-first-aid", color: "bg-red-50 text-red-600 border-red-100" },
    { id: "hospital", title: "Hospital", icon: icons.hospital, path: "/find-hospital", color: "bg-teal-50 text-teal-600 border-teal-100" },
    { id: "doctor", title: "Doctor", icon: icons.doctor, path: "/doctor-listing", color: "bg-purple-50 text-purple-600 border-purple-100" },
    { id: "meds", title: "Meds", icon: icons.meds, path: "/medications", color: "bg-blue-50 text-blue-600 border-blue-100" },
    { id: "lab", title: "Lab Results", icon: icons.lab, path: "/labs", color: "bg-indigo-50 text-indigo-600 border-indigo-100" },
    { id: "goals", title: "Goals", icon: icons.goals, path: "/goals", color: "bg-rose-50 text-rose-600 border-rose-100" },
  ];

  const healthSummary = [
    { label: "Steps", value: "4,289", unit: "steps", icon: icons.steps, color: "text-orange-500", bg: "bg-orange-50" },
    { label: "Water", value: "1.2", unit: "L", icon: icons.water, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Sleep", value: "7h 20m", unit: "", icon: icons.sleep, color: "text-purple-500", bg: "bg-purple-50" },
    { label: "Meds", value: "2/3", unit: "taken", icon: icons.pill, color: "text-teal-500", bg: "bg-teal-50" },
  ];

  return (
    <div
      className="relative min-h-screen bg-slate-50 font-sans pb-32 overflow-hidden selection:bg-teal-100 selection:text-teal-900"
      ref={scrollRef}
    >

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-teal-50/40 to-transparent rounded-full blur-[80px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50/40 to-transparent rounded-full blur-[80px] opacity-40"></div>
      </div>

      {/* Confetti Animation Layer */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
          {/* Simple CSS-only confetti mock */}
          <div className="absolute top-0 left-1/4 w-3 h-3 bg-red-400 rounded-full animate-confetti-drop delay-100"></div>
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-teal-400 rounded-md animate-confetti-drop delay-300"></div>
          <div className="absolute top-0 left-3/4 w-3 h-3 bg-yellow-400 rounded-full animate-confetti-drop delay-200"></div>
          <div className="absolute top-0 right-10 w-2 h-4 bg-purple-400 rotate-45 animate-confetti-drop delay-500"></div>
          <div className="absolute top-0 left-10 w-4 h-2 bg-blue-400 rotate-12 animate-confetti-drop delay-0"></div>
        </div>
      )}

      {/* Pull to Refresh Loader */}
      <div className={`flex justify-center transition-all duration-500 overflow-hidden ${isRefreshing ? 'h-16 opacity-100' : 'h-0 opacity-0'}`}>
        <div className="flex items-center gap-2 text-teal-600 font-medium text-sm mt-4">
          <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
          Updating...
        </div>
      </div>

      <div className="relative z-10 p-6 max-w-lg mx-auto">

        {/* Header Section */}
        <div className={`flex items-start justify-between mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div>
            <p className="text-slate-400 text-sm font-medium mb-1 tracking-wide">{greeting},</p>
            <h1 className="text-3xl font-bold text-slate-800 font-['Poppins']">{userName}</h1>
          </div>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center relative hover:shadow-md transition-all active:scale-95">
              <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white animate-pulse"></span>
              <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </button>
            <button className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center overflow-hidden hover:shadow-md transition-all active:scale-95">
              <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-xs font-bold text-white">CH</div>
            </button>
          </div>
        </div>

        {/* Quick Actions - Horizontal Scroll */}
        <div className={`mb-10 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide gap-3 snap-x">
            <div className="ml-1"></div> {/* Spacer */}
            {quickActions.map((action) => (
              <button
                key={action.id}
                onClick={() => handleNavigation(action.path)}
                className={`snap-start shrink-0 w-24 flex flex-col items-center gap-3 p-4 rounded-3xl border bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] ${action.color.replace('text-', 'border-').split(' ')[2]}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${action.color.split(' ').slice(0, 2).join(' ')}`}>
                  {action.icon}
                </div>
                <span className="text-[11px] font-bold text-slate-700 text-center leading-tight">{action.title}</span>
              </button>
            ))}
            <div className="mr-2"></div> {/* Spacer */}
          </div>
        </div>

        {/* Health Summary Chips */}
        <div className={`grid grid-cols-2 gap-3 mb-8 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {healthSummary.map((item, idx) => (
            <div key={idx} className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.03)] flex items-center gap-3 hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}>
                {item.icon}
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">{item.label}</p>
                <p className="text-sm font-bold text-slate-800">{item.value} <span className="text-[10px] font-medium text-slate-400 ml-0.5">{item.unit}</span></p>
              </div>
            </div>
          ))}
        </div>

        {/* Active Reminders & Alerts */}
        <div className={`mb-8 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Active Reminders</h3>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 p-4 rounded-2xl flex gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-800 text-sm mb-1">Medicine Reminder</h4>
              <p className="text-xs text-slate-500">Take Metformin 500mg at 2:00 PM</p>
            </div>
            <button className="text-xs font-bold text-amber-600 hover:text-amber-700">Mark Done</button>
          </div>
        </div>

        {/* Recent Activity Timeline */}
        <div className={`mb-8 transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Recent Activity</h3>
            <button className="text-xs font-bold text-teal-600">See All</button>
          </div>
          <div className="space-y-3">
            {[
              { time: "Today, 09:00", action: "Logged Blood Pressure", value: "120/80 mmHg", icon: icons.pill, color: "text-teal-600", bg: "bg-teal-50" },
              { time: "Yesterday, 14:30", action: "Dr. Visit Completed", value: "General Checkup", icon: icons.doctor, color: "text-purple-600", bg: "bg-purple-50" },
            ].map((activity, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-2xl border border-slate-100 flex gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${activity.bg} ${activity.color} shrink-0`}>
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-800">{activity.action}</p>
                  <p className="text-xs text-slate-400">{activity.time}</p>
                </div>
                <span className="text-xs font-medium text-slate-500">{activity.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Motivation with Confetti */}
        <div className={`mb-8 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="p-5 rounded-3xl text-white shadow-xl relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(to bottom right, #00A0B0, #6DDAD3)', boxShadow: '0 10px 25px rgba(0,160,176,0.3)' }}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-8 -mt-8"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <h4 className="font-bold">3-Day Streak!</h4>
              </div>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>You're on fire! Keep up your healthy habits.</p>
              <button onClick={triggerConfetti} className="bg-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-white/90 transition-colors" style={{ color: '#00A0B0' }}>
                Celebrate 🎉
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 rounded-2xl shadow-xl flex items-center justify-center text-white hover:scale-110 transition-transform active:scale-95 z-30" style={{ backgroundImage: 'linear-gradient(to bottom right, #00A0B0, #6DDAD3)', boxShadow: '0 10px 25px rgba(0,160,176,0.4)' }}>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
      </button>

      {/* Bottom Navigation */}
      <BottomNavigation />

      {/* Custom Animations */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20%, 40% { transform: rotate(-8deg); }
          50%, 60% { transform: rotate(14deg); }
          70% { transform: rotate(-4deg); }
          80% { transform: rotate(10deg); }
        }
        .animate-wave { animation: wave 2.5s infinite; }
        
        @keyframes confetti-drop {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti-drop { animation: confetti-drop 2s ease-in forwards; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default HomeScreen;
