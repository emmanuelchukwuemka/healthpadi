import React from "react";
import { useNavigate } from "react-router-dom";

const HospitalDashboardScreen = () => {
    const navigate = useNavigate();
    const hospitalName = "Lagoon Hospital";

    const resources = [
        {
            label: "Available Beds",
            current: 42,
            total: 150,
            color: "text-green-600",
            bar: "bg-green-500",
            icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>)
        },
        {
            label: "Oxygen Tanks",
            current: 12,
            total: 50,
            color: "text-orange-600",
            bar: "bg-orange-500",
            icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>)
        },
        {
            label: "Ambulances",
            current: 3,
            total: 5,
            color: "text-blue-600",
            bar: "bg-blue-500",
            icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>)
        },
    ];

    const staff = [
        { name: "Dr. Okafor", role: "Surgeon", status: "In Surgery", statusColor: "text-orange-600 bg-orange-50", initials: "DO", color: "bg-orange-500" },
        { name: "Nurse Joyce", role: "ICU", status: "Available", statusColor: "text-green-600 bg-green-50", initials: "NJ", color: "bg-teal-500" },
        { name: "Dr. Sadiq", role: "Pediatrics", status: "Break", statusColor: "text-slate-500 bg-slate-100", initials: "DS", color: "bg-blue-500" },
        { name: "Dr. Chen", role: "Emergency", status: "On Call", statusColor: "text-blue-600 bg-blue-50", initials: "DC", color: "bg-indigo-500" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-24">

            {/* Admin Header */}
            <header className="text-white p-6 sticky top-0 z-10 rounded-b-3xl shadow-xl" style={{ backgroundImage: 'linear-gradient(to bottom right, #003087, #00A0B0)' }}>
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <svg className="w-5 h-5" style={{ color: '#6DDAD3' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            <h1 className="text-xl font-bold">{hospitalName}</h1>
                        </div>
                        <p className="text-xs flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            Admin Dashboard • ID: #8821
                        </p>
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-slate-700 flex items-center justify-center border border-slate-600">
                        <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-600">
                        <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Total Patients</span>
                        </div>
                        <span className="text-2xl font-bold block">1,204</span>
                        <span className="text-xs text-green-400 font-bold">+23 today</span>
                    </div>
                    <div className="bg-slate-700/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-600">
                        <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0h2a2 2 0 012 2v6a2 2 0 002 2h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2z" /></svg>
                            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Efficiency</span>
                        </div>
                        <span className="text-2xl font-bold block text-teal-400">85%</span>
                        <span className="text-xs text-green-400 font-bold">↑ 3%</span>
                    </div>
                </div>
            </header>

            <div className="p-6">

                {/* Resource Management */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mb-6">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            <h2 className="font-bold text-slate-800">Live Resources</h2>
                        </div>
                        <button className="bg-teal-50 border border-teal-100 px-3 py-2 rounded-xl text-xs font-bold text-teal-600 hover:bg-teal-100 transition-colors flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                            Update
                        </button>
                    </div>

                    <div className="space-y-6">
                        {resources.map((res, i) => (
                            <div key={i} className="group">
                                <div className="flex justify-between items-center text-sm mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-8 h-8 rounded-xl ${res.color.replace('text-', 'bg-').replace('-600', '-50')} ${res.color} flex items-center justify-center`}>
                                            {res.icon}
                                        </div>
                                        <span className="font-bold text-slate-600">{res.label}</span>
                                    </div>
                                    <span className={`font-bold ${res.color}`}>{res.current}/{res.total}</span>
                                </div>
                                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full transition-all duration-300 ${res.bar} ${(res.current / res.total) < 0.3 ? 'animate-pulse' : ''}`}
                                        style={{ width: `${(res.current / res.total) * 100}%` }}
                                    ></div>
                                </div>
                                {(res.current / res.total) < 0.3 && (
                                    <p className="text-[10px] text-orange-600 font-bold mt-1.5 flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                        Low stock warning
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Staff Overview */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-5">
                        <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        <h2 className="font-bold text-slate-800">Staff On Duty</h2>
                        <span className="ml-auto bg-teal-50 text-teal-600 text-xs font-bold px-2.5 py-1 rounded-full">{staff.length} Active</span>
                    </div>
                    <div className="space-y-3.5">
                        {staff.map((member, i) => (
                            <div key={i} className="flex justify-between items-center border-b border-slate-50 last:border-0 pb-3.5 last:pb-0 group hover:bg-slate-50/50 p-2 rounded-xl -m-2 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className={`w-11 h-11 ${member.color} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                                        {member.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm">{member.name}</h4>
                                        <p className="text-xs text-slate-400 flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                                <span className={`px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase ${member.statusColor} border ${member.statusColor.replace('text-', 'border-').replace('-600', '-100')}`}>
                                    {member.status}
                                </span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-5 py-3.5 border-2 border-slate-200 rounded-2xl text-slate-600 text-sm font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        Manage Schedule
                    </button>
                </div>

            </div>

        </div>
    );
};

export default HospitalDashboardScreen;
