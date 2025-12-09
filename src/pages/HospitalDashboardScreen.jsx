import React from "react";
import { useNavigate } from "react-router-dom";

const HospitalDashboardScreen = () => {
    const navigate = useNavigate();
    const hospitalName = "Lagoon Hospital";

    const resources = [
        { label: "Available Beds", current: 42, total: 150, color: "text-green-500", bar: "bg-green-500" },
        { label: "Oxygen Tanks", current: 12, total: 50, color: "text-orange-500", bar: "bg-orange-500" },
        { label: "Ambulances", current: 3, total: 5, color: "text-blue-500", bar: "bg-blue-500" },
    ];

    return (
        <div className="min-h-screen bg-slate-100 font-sans pb-24">

            {/* Admin Header */}
            <header className="bg-slate-900 text-white p-6 sticky top-0 z-10 rounded-b-3xl shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-xl font-bold">{hospitalName}</h1>
                        <p className="text-xs text-slate-400">Admin Dashboard • ID: #8821</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                        🏥
                    </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                        <span className="text-2xl font-bold block mb-1">1,204</span>
                        <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Total Patients</span>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                        <span className="text-2xl font-bold block mb-1 text-teal-400">85%</span>
                        <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Efficiency</span>
                    </div>
                </div>
            </header>

            <div className="p-6">

                {/* Resource Management */}
                <div className="bg-white p-6 rounded-3xl shadow-sm mb-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="font-bold text-slate-800">Live Resources</h2>
                        <button className="bg-slate-100 p-2 rounded-lg text-xs font-bold text-slate-600">Update</button>
                    </div>

                    <div className="space-y-6">
                        {resources.map((res, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-sm font-bold mb-2">
                                    <span className="text-slate-600">{res.label}</span>
                                    <span className={res.color}>{res.current}/{res.total}</span>
                                </div>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className={`h-full rounded-full ${res.bar}`} style={{ width: `${(res.current / res.total) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Staff Overview */}
                <div className="bg-white p-6 rounded-3xl shadow-sm">
                    <h2 className="font-bold text-slate-800 mb-4">Staff On Duty</h2>
                    <div className="space-y-4">
                        {[
                            { name: "Dr. Okafor", role: "Surgeon", status: "In Surgery", statusColor: "text-orange-500 bg-orange-50" },
                            { name: "Nurse Joyce", role: "ICU", status: "Available", statusColor: "text-green-500 bg-green-50" },
                            { name: "Dr. Sadiq", role: "Pediatrics", status: "Break", statusColor: "text-slate-500 bg-slate-100" },
                        ].map((staff, i) => (
                            <div key={i} className="flex justify-between items-center border-b border-slate-50 last:border-0 pb-3 last:pb-0">
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">{staff.name}</h4>
                                    <p className="text-xs text-slate-400">{staff.role}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${staff.statusColor}`}>
                                    {staff.status}
                                </span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 py-3 border border-slate-200 rounded-xl text-slate-600 text-xs font-bold hover:bg-slate-50">
                        Manage Schedule
                    </button>
                </div>

            </div>

        </div>
    );
};

export default HospitalDashboardScreen;
