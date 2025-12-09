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

  const quickActions = [
    { id: "mood", title: "MyPadi", icon: "😊", path: "/symptom-checker", color: "bg-amber-50 text-amber-600 border-amber-100" },
    { id: "emergency", title: "Emergency", icon: "🚨", path: "/emergency-first-aid", color: "bg-red-50 text-red-600 border-red-100" },
    { id: "hospital", title: "Hospital", icon: "🏥", path: "/find-hospital", color: "bg-teal-50 text-teal-600 border-teal-100" },
    { id: "doctor", title: "Doctor", icon: "👨‍⚕️", path: "/doctor-listing", color: "bg-purple-50 text-purple-600 border-purple-100" },
    { id: "meds", title: "Meds", icon: "💊", path: "/medications", color: "bg-blue-50 text-blue-600 border-blue-100" },
    { id: "lab", title: "Lab Results", icon: "🧪", path: "/labs", color: "bg-indigo-50 text-indigo-600 border-indigo-100" },
    { id: "goals", title: "Goals", icon: "🎯", path: "/goals", color: "bg-rose-50 text-rose-600 border-rose-100" },
  ];

  const healthSummary = [
    { label: "Steps", value: "4,289", unit: "steps", icon: "👣", color: "text-orange-500", bg: "bg-orange-50" },
    { label: "Water", value: "1.2", unit: "L", icon: "💧", color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Sleep", value: "7h 20m", unit: "", icon: "😴", color: "text-purple-500", bg: "bg-purple-50" },
    { label: "Meds", value: "2/3", unit: "taken", icon: "💊", color: "text-teal-500", bg: "bg-teal-50" },
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
          <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          Updating...
        </div>
      </div>

      <div className="relative z-10 p-6 max-w-lg mx-auto">

        {/* Header Section */}
        <div className={`flex items-start justify-between mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div>
            <p className="text-slate-400 text-sm font-medium mb-1 tracking-wide">{greeting},</p>
            <h1 className="text-3xl font-bold text-slate-800 font-['Poppins'] flex items-center gap-2">
              {userName}
              <span className="animate-wave origin-bottom-right inline-block">👋</span>
            </h1>
          </div>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center relative hover:shadow-md transition-all active:scale-95">
              <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white animate-pulse"></span>
              <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </button>
            <button className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center overflow-hidden hover:shadow-md transition-all active:scale-95">
              <div className="w-full h-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">CH</div>
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
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${action.color.split(' ').slice(0, 2).join(' ')}`}>
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
            <div key={idx} className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.03)] flex items-center gap-3">
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
          <h2 className="text-lg font-bold text-slate-800 font-['Poppins'] mb-4 flex items-center gap-2">
            Up Next
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
          </h2>

          <div className="space-y-3">
            {/* Med Reminder */}
            <div className="bg-white p-5 rounded-[1.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal-400"></div>
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                    💊
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">Amoxicillin (500mg)</h3>
                    <p className="text-xs text-slate-500 mt-1">Due in 15 mins • After meal</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold rounded-xl shadow-lg shadow-teal-200 transition-all active:scale-95">
                  Take Now
                </button>
              </div>
            </div>

            {/* Appointment */}
            <div className="bg-white p-5 rounded-[1.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-400"></div>
              <div className="flex items-center gap-4">
                <div className="flex-col items-center justify-center text-center hidden min-[350px]:flex bg-blue-50 w-12 h-12 rounded-2xl text-blue-600">
                  <span className="text-[10px] font-bold uppercase">Oct</span>
                  <span className="text-sm font-bold">24</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">Dr. Ibrahim Sadiq</h3>
                  <p className="text-xs text-slate-500 mt-1">Cardiologist • Video Consultation</p>
                </div>
                <div className="ml-auto flex flex-col items-end">
                  <span className="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded-lg">2:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Motivation / Streak */}
        <div className={`mb-8 transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div
            onClick={triggerConfetti}
            className="relative overflow-hidden bg-gradient-to-r from-orange-400 to-rose-500 rounded-[2rem] p-6 text-white text-center shadow-lg shadow-orange-200 cursor-pointer active:scale-[0.98] transition-transform"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-4xl mb-2 animate-bounce-slow">🔥</span>
              <h3 className="text-2xl font-bold font-['Poppins']">7 Days Strong!</h3>
              <p className="text-white/90 text-xs mt-1 font-medium">You're on a roll. Keep it up!</p>
            </div>
          </div>
        </div>

        {/* Recent Activity Timeline */}
        <div className={`mb-8 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-lg font-bold text-slate-800 font-['Poppins'] mb-4">Recent Activity</h2>
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.02)] p-6">
            {[
              { title: "Symptom Report", desc: "Headache (Mild)", time: "10:30 AM", type: "symptom", icon: "📝" },
              { title: "Lab Results", desc: "Blood Test - Ready", time: "Yesterday", type: "lab", icon: "🔬" },
              { title: "Walk", desc: "3,500 Steps", time: "Yesterday", type: "activity", icon: "👣" },
            ].map((item, i, arr) => (
              <div key={i} className="relative flex gap-4 pb-6 last:pb-0">
                {i !== arr.length - 1 && <div className="absolute left-[19px] top-10 bottom-0 w-[2px] bg-slate-100"></div>}
                <div className="relative z-10 w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-lg shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                    <span className="text-[10px] font-semibold text-slate-400">{item.time}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Floating Action Button */}
      <div className={`fixed bottom-24 right-5 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        <button className="w-14 h-14 bg-teal-600 hover:bg-teal-500 text-white rounded-full shadow-xl shadow-teal-500/30 flex items-center justify-center transition-transform hover:-translate-y-1 active:scale-95 group">
          <svg className="w-7 h-7 transition-transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        </button>
      </div>

      <BottomNavigation />

      <style>{`
         @keyframes wave {
            0% { transform: rotate(0deg); }
            10% { transform: rotate(14deg); }
            20% { transform: rotate(-8deg); }
            30% { transform: rotate(14deg); }
            40% { transform: rotate(-4deg); }
            50% { transform: rotate(10deg); }
            60% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
         }
         .animate-wave { animation: wave 2s infinite; transform-origin: 70% 70%; }
         
         @keyframes bounce-slow {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-5px); }
         }
         .animate-bounce-slow { animation: bounce-slow 2s infinite ease-in-out; }

         @keyframes confetti-drop {
           0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
           100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
         }
         .animate-confetti-drop { animation: confetti-drop 3s ease-out forwards; }
         
         .scrollbar-hide::-webkit-scrollbar {
            display: none;
         }
         .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
         }
      `}</style>
    </div>
  );
};

export default HomeScreen;
