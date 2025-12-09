import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorDashboardScreen = () => {
    const navigate = useNavigate();
    const userName = "Dr. Emmanuel";

    const [appointments] = useState([
        { id: 1, patient: "Chioma Adebayo", time: "09:00 AM", type: "Video Consult", status: "Upcoming", img: "👩🏾" },
        { id: 2, patient: "John Doe", time: "10:30 AM", type: "In-Person", status: "Upcoming", img: "👨🏿" },
        { id: 3, patient: "Sarah Smith", time: "01:00 PM", type: "Follow-up", status: "Pending", img: "👩🏽" },
    ]);

    const stats = [
        { label: "Patients", value: "1.2k", icon: "👥", color: "bg-blue-50 text-blue-600" },
        { label: "Appts", value: "8", icon: "📅", color: "bg-teal-50 text-teal-600" },
        { label: "Rating", value: "4.9", icon: "⭐", color: "bg-yellow-50 text-yellow-600" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-24">
            {/* Header */}
            <header className="bg-white px-6 py-6 rounded-b-[2rem] shadow-sm sticky top-0 z-10">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Welcome Back</p>
                        <h1 className="text-2xl font-bold text-slate-800">{userName} 👨‍⚕️</h1>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center relative">
                        <span className="text-xl">🔔</span>
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-100 p-3 rounded-2xl flex flex-col items-center text-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm mb-2 ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <span className="text-lg font-bold text-slate-800 leading-none mb-1">{stat.value}</span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </header>

            <div className="p-6">
                {/* Next Appointment Card */}
                <div className="mb-8">
                    <h2 className="text-lg font-bold text-slate-800 mb-4">Up Next</h2>
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-[2rem] p-6 text-white shadow-xl shadow-blue-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

                        <div className="flex justify-between items-start mb-6">
                            <div className="flex gap-3 items-center">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl">
                                    👩🏾
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Chioma Adebayo</h3>
                                    <p className="text-blue-100 text-sm">General Checkup</p>
                                </div>
                            </div>
                            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-bold">09:00 AM</span>
                        </div>

                        <div className="flex gap-3">
                            <button className="flex-1 bg-white text-blue-600 py-3 rounded-xl font-bold text-sm shadow-sm">
                                Start Call
                            </button>
                            <button className="flex-1 bg-blue-800/50 text-white py-3 rounded-xl font-bold text-sm">
                                Details
                            </button>
                        </div>
                    </div>
                </div>

                {/* Appointment List */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold text-slate-800">Requests</h2>
                        <button className="text-xs font-bold text-blue-600">See All</button>
                    </div>

                    <div className="space-y-4">
                        {appointments.slice(1).map((apt) => (
                            <div key={apt.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-xl">
                                    {apt.img}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-800 text-sm">{apt.patient}</h3>
                                    <p className="text-xs text-slate-400">{apt.type} • {apt.time}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center border border-green-100">
                                        ✓
                                    </button>
                                    <button className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Doc Bottom Nav */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-4 flex justify-between items-center safe-area-pb">
                <button className="text-blue-600 flex flex-col items-center gap-1">
                    <span className="text-xl">🏠</span>
                    <span className="text-[10px] font-bold">Home</span>
                </button>
                <button className="text-slate-400 flex flex-col items-center gap-1">
                    <span className="text-xl">📅</span>
                    <span className="text-[10px] font-bold">Schedule</span>
                </button>
                <button className="text-slate-400 flex flex-col items-center gap-1">
                    <span className="text-xl">💬</span>
                    <span className="text-[10px] font-bold">Chat</span>
                </button>
                <button className="text-slate-400 flex flex-col items-center gap-1">
                    <span className="text-xl">⚙️</span>
                    <span className="text-[10px] font-bold">Settings</span>
                </button>
            </div>

        </div>
    );
};

export default DoctorDashboardScreen;
