import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorDashboardScreen = () => {
    const navigate = useNavigate();
    const userName = "Dr. Emmanuel";

    const [appointments] = useState([
        { id: 1, patient: "Chioma Adebayo", time: "09:00 AM", type: "Video Consult", status: "Upcoming", initials: "CA", color: "bg-teal-500" },
        { id: 2, patient: "John Doe", time: "10:30 AM", type: "In-Person", status: "Upcoming", initials: "JD", color: "bg-blue-500" },
        { id: 3, patient: "Sarah Smith", time: "01:00 PM", type: "Follow-up", status: "Pending", initials: "SS", color: "bg-purple-500" },
    ]);

    const stats = [
        {
            label: "Patients",
            value: "1.2k",
            trend: "+12%",
            icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>),
            color: "bg-blue-50 text-blue-600"
        },
        {
            label: "Appts",
            value: "8",
            trend: "+2",
            icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>),
            color: "bg-teal-50 text-teal-600"
        },
        {
            label: "Rating",
            value: "4.9",
            trend: "↑",
            icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>),
            color: "bg-yellow-50 text-yellow-600"
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-24">
            {/* Header */}
            <header className="bg-white px-6 py-6 rounded-b-[2rem] shadow-sm sticky top-0 z-10">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Welcome Back</p>
                        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                            {userName}
                            <span className="text-teal-600">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            </span>
                        </h1>
                    </div>
                    <button className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center relative hover:bg-slate-100 transition-colors">
                        <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white animate-pulse"></span>
                        <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-100 p-3.5 rounded-2xl flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm mb-2 ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <span className="text-lg font-bold text-slate-800 leading-none mb-0.5">{stat.value}</span>
                            <span className="text-[9px] text-green-600 font-bold mb-1">{stat.trend}</span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </header>

            <div className="p-6">
                {/* Next Appointment Card */}
                <div className="mb-8">
                    <h2 className="text-lg font-bold text-slate-800 mb-4">Up Next</h2>
                    <div className="p-6 text-white shadow-xl relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(to bottom right, #00A0B0, #6DDAD3)', borderRadius: '2rem', boxShadow: '0 20px 40px rgba(0,160,176,0.3)' }}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

                        <div className="flex justify-between items-start mb-6">
                            <div className="flex gap-3 items-center">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sm font-bold text-teal-600">
                                    CA
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Chioma Adebayo</h3>
                                    <p className="text-teal-100 text-sm flex items-center gap-1.5">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                        Video Consult
                                    </p>
                                </div>
                            </div>
                            <span className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                09:00 AM
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <button className="flex-1 bg-white py-3.5 rounded-xl font-bold text-sm shadow-sm hover:bg-white/90 transition-colors flex items-center justify-center gap-2" style={{ color: '#00A0B0' }}>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                Start Call
                            </button>
                            <button className="flex-1 text-white py-3.5 rounded-xl font-bold text-sm transition-colors" style={{ backgroundColor: 'rgba(0,48,135,0.5)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,48,135,0.7)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,48,135,0.5)'}>
                                Details
                            </button>
                        </div>
                    </div>
                </div>

                {/* Appointment Requests List */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold text-slate-800">Requests</h2>
                        <button className="text-xs font-bold text-teal-600 hover:text-teal-700">See All</button>
                    </div>

                    <div className="space-y-3">
                        {appointments.slice(1).map((apt) => (
                            <div key={apt.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                                <div className={`w-12 h-12 ${apt.color} rounded-full flex items-center justify-center text-sm font-bold text-white`}>
                                    {apt.initials}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-800 text-sm">{apt.patient}</h3>
                                    <p className="text-xs text-slate-400 flex items-center gap-1.5">
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        {apt.type} • {apt.time}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-9 h-9 rounded-full bg-green-50 text-green-600 flex items-center justify-center border border-green-100 hover:bg-green-100 transition-colors">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    </button>
                                    <button className="w-9 h-9 rounded-full bg-red-50 text-red-600 flex items-center justify-center border border-red-100 hover:bg-red-100 transition-colors">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Doctor Bottom Nav */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-4 flex justify-between items-center safe-area-pb shadow-[0_-2px_10px_rgba(0,0,0,0.03)]">
                <button className="flex flex-col items-center gap-1 transition-colors" style={{ color: '#00A0B0' }}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    <span className="text-[10px] font-bold">Home</span>
                </button>
                <button className="text-slate-400 flex flex-col items-center gap-1 hover:text-slate-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span className="text-[10px] font-bold">Schedule</span>
                </button>
                <button className="text-slate-400 flex flex-col items-center gap-1 hover:text-slate-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    <span className="text-[10px] font-bold">Chat</span>
                </button>
                <button className="text-slate-400 flex flex-col items-center gap-1 hover:text-slate-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-[10px] font-bold">Settings</span>
                </button>
            </div>

        </div>
    );
};

export default DoctorDashboardScreen;
