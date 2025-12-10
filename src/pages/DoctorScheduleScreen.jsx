import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorScheduleScreen = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [view, setView] = useState("day"); // day, week, month

    const appointments = [
        { id: 1, time: "09:00 AM", duration: "30 min", patient: "Chioma Adebayo", type: "Video Consult", status: "confirmed", color: "bg-teal-500" },
        { id: 2, time: "10:30 AM", duration: "45 min", patient: "John Doe", type: "In-Person", status: "confirmed", color: "bg-blue-500" },
        { id: 3, time: "01:00 PM", duration: "30 min", patient: "Sarah Smith", type: "Follow-up", status: "pending", color: "bg-purple-500" },
        { id: 4, time: "02:30 PM", duration: "1 hr", patient: "Michael Johnson", type: "Video Consult", status: "confirmed", color: "bg-orange-500" },
        { id: 5, time: "04:00 PM", duration: "30 min", patient: "Emma Wilson", type: "In-Person", status: "pending", color: "bg-pink-500" },
    ];

    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-24">
            {/* Header */}
            <header className="bg-white px-6 py-6 rounded-b-[2rem] shadow-sm sticky top-0 z-10">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                            Schedule
                            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </h1>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-1">Tuesday, Dec 10, 2024</p>
                    </div>
                    <button className="w-11 h-11 rounded-2xl bg-teal-600 text-white flex items-center justify-center hover:bg-teal-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>

                {/* View Toggle */}
                <div className="flex gap-2 bg-slate-100 p-1.5 rounded-xl">
                    {["day", "week", "month"].map((v) => (
                        <button
                            key={v}
                            onClick={() => setView(v)}
                            className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${view === v
                                    ? "bg-white text-teal-600 shadow-sm"
                                    : "text-slate-500 hover:text-slate-700"
                                }`}
                        >
                            {v.charAt(0).toUpperCase() + v.slice(1)}
                        </button>
                    ))}
                </div>
            </header>

            <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                        <div className="text-2xl font-bold text-slate-800">8</div>
                        <div className="text-xs text-slate-400 font-bold uppercase mt-1">Today</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                        <div className="text-2xl font-bold text-teal-600">5</div>
                        <div className="text-xs text-slate-400 font-bold uppercase mt-1">Confirmed</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                        <div className="text-2xl font-bold text-orange-500">3</div>
                        <div className="text-xs text-slate-400 font-bold uppercase mt-1">Pending</div>
                    </div>
                </div>

                {/* Appointments List */}
                <div>
                    <h2 className="text-lg font-bold text-slate-800 mb-4">Today's Appointments</h2>
                    <div className="space-y-3">
                        {appointments.map((apt) => (
                            <div key={apt.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0">
                                        <div className="text-center">
                                            <div className="text-sm font-bold text-slate-800">{apt.time.split(" ")[0]}</div>
                                            <div className="text-xs text-slate-400 font-medium">{apt.time.split(" ")[1]}</div>
                                        </div>
                                    </div>
                                    <div className={`w-1 h-16 ${apt.color} rounded-full`}></div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-bold text-slate-800">{apt.patient}</h3>
                                                <p className="text-xs text-slate-400 flex items-center gap-1">
                                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    {apt.duration} • {apt.type}
                                                </p>
                                            </div>
                                            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${apt.status === "confirmed"
                                                    ? "bg-green-50 text-green-600"
                                                    : "bg-orange-50 text-orange-600"
                                                }`}>
                                                {apt.status}
                                            </span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="flex-1 bg-teal-50 text-teal-600 py-2 rounded-xl text-xs font-bold hover:bg-teal-100 transition-colors">
                                                View Details
                                            </button>
                                            {apt.type === "Video Consult" && (
                                                <button className="px-4 bg-teal-600 text-white py-2 rounded-xl text-xs font-bold hover:bg-teal-500 transition-colors flex items-center gap-1">
                                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                    </svg>
                                                    Join
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Doctor Bottom Nav */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-4 flex justify-between items-center safe-area-pb shadow-[0_-2px_10px_rgba(0,0,0,0.03)]">
                <button onClick={() => navigate("/doctor-dashboard")} className="text-slate-400 flex flex-col items-center gap-1 hover:text-slate-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-[10px] font-bold">Home</span>
                </button>
                <button className="flex flex-col items-center gap-1 transition-colors" style={{ color: '#00A0B0' }}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[10px] font-bold">Schedule</span>
                </button>
                <button onClick={() => navigate("/doctor-chat")} className="text-slate-400 flex flex-col items-center gap-1 hover:text-slate-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-[10px] font-bold">Chat</span>
                </button>
                <button className="text-slate-400 flex flex-col items-center gap-1 hover:text-slate-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[10px] font-bold">Settings</span>
                </button>
            </div>
        </div>
    );
};

export default DoctorScheduleScreen;
