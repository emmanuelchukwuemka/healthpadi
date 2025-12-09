import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/layout/BottomNavigation";

const MedicationsScreen = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("schedule"); // 'schedule' or 'cabinet'
    const [loaded, setLoaded] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Mock Data
    const [medications, setMedications] = useState([
        {
            id: 1,
            name: "Amoxicillin",
            dosage: "500mg",
            instructions: "Take with food",
            time: "08:00 AM",
            period: "Morning",
            status: "taken", // taken, skipped, upcoming
            stock: 12,
            totalStock: 30,
            icon: "💊",
            color: "bg-orange-50 text-orange-600 border-orange-100",
        },
        {
            id: 2,
            name: "Lisinopril",
            dosage: "10mg",
            instructions: "Before breakfast",
            time: "08:30 AM",
            period: "Morning",
            status: "upcoming",
            stock: 28,
            totalStock: 30,
            icon: "🩺",
            color: "bg-blue-50 text-blue-600 border-blue-100",
        },
        {
            id: 3,
            name: "Vitamin D3",
            dosage: "1000 IU",
            instructions: "Any time",
            time: "01:00 PM",
            period: "Afternoon",
            status: "upcoming",
            stock: 5, // Low stock
            totalStock: 60,
            icon: "☀️",
            color: "bg-yellow-50 text-yellow-600 border-yellow-100",
        },
        {
            id: 4,
            name: "Metformin",
            dosage: "500mg",
            instructions: "With dinner",
            time: "08:00 PM",
            period: "Evening",
            status: "upcoming",
            stock: 45,
            totalStock: 60,
            icon: "🧬",
            color: "bg-teal-50 text-teal-600 border-teal-100",
        },
    ]);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 100);
    }, []);

    const handleTakeMedication = (id) => {
        setMedications((prev) =>
            prev.map((med) =>
                med.id === id ? { ...med, status: "taken" } : med
            )
        );
        // Simple haptic/visual feedback could go here
    };

    const getProgress = () => {
        const total = medications.length;
        const taken = medications.filter((m) => m.status === "taken").length;
        return (taken / total) * 100;
    };

    const generateCalendar = () => {
        // Generate simple 7 days centered on today
        const dates = [];
        for (let i = -3; i <= 3; i++) {
            const d = new Date();
            d.setDate(d.getDate() + i);
            dates.push(d);
        }
        return dates;
    };

    const renderTimelineItem = (med, index) => (
        <div
            key={med.id}
            className={`group relative flex gap-4 mb-6 last:mb-0 transition-all duration-500 delay-${index * 100} ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
        >
            {/* Connector Line */}
            <div className="absolute left-[26px] top-12 bottom-[-24px] w-[2px] bg-slate-100 group-last:hidden"></div>

            {/* Time Column */}
            <div className="flex flex-col items-center pt-1 min-w-[52px]">
                <span className="text-xs font-bold text-slate-400 mb-1">{med.time.split(' ')[0]}</span>
                <div className={`w-3 h-3 rounded-full border-2 z-10 bg-white ${med.status === 'taken' ? 'border-teal-500 bg-teal-500' : 'border-slate-300'}`}></div>
            </div>

            {/* Card */}
            <div className={`flex-1 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md ${med.status === 'taken' ? 'opacity-60' : ''}`}>
                <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${med.color}`}>
                            {med.icon}
                        </div>
                        <div>
                            <h3 className={`font-bold text-slate-800 ${med.status === 'taken' ? 'line-through decoration-slate-400' : ''}`}>{med.name}</h3>
                            <p className="text-xs text-slate-500">{med.dosage} • {med.instructions}</p>
                        </div>
                    </div>
                    {med.stock <= 7 && (
                        <div className="flex items-center gap-1 bg-red-50 px-2 py-1 rounded-lg">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="text-[10px] font-bold text-red-600">Low Stock</span>
                        </div>
                    )}
                </div>

                {med.status !== 'taken' && (
                    <div className="flex gap-2 mt-3 pl-[52px]">
                        <button
                            onClick={() => handleTakeMedication(med.id)}
                            className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-xl text-xs font-bold transition-transform active:scale-95 shadow-md shadow-teal-200"
                        >
                            Take Now
                        </button>
                        <button className="px-4 py-2 bg-slate-50 text-slate-500 rounded-xl text-xs font-bold hover:bg-slate-100">
                            Skip
                        </button>
                    </div>
                )}
                {med.status === 'taken' && (
                    <div className="flex justify-end mt-1">
                        <span className="text-xs font-bold text-teal-600 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            Taken at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-24 overflow-x-hidden">

            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="relative z-10 max-w-lg mx-auto p-6">

                {/* Header & Tabs */}
                <div className="sticky top-0 bg-slate-50/95 backdrop-blur-sm z-20 pb-4 pt-2 -mx-6 px-6 mb-2">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-800 font-['Poppins']">My Cabinet</h1>
                            <p className="text-xs text-slate-500 font-medium">Keep track of your meds</p>
                        </div>
                        {/* Progress Ring Mini */}
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            <svg className="transform -rotate-90 w-12 h-12">
                                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-200" />
                                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-teal-500 transition-all duration-1000" strokeDasharray={125.6} strokeDashoffset={125.6 - (125.6 * getProgress() / 100)} />
                            </svg>
                            <span className="absolute text-[10px] font-bold text-slate-700">{Math.round(getProgress())}%</span>
                        </div>
                    </div>

                    {/* Toggle Switch */}
                    <div className="bg-white p-1 rounded-2xl border border-slate-100 flex shadow-sm">
                        <button
                            onClick={() => setActiveTab('schedule')}
                            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'schedule' ? 'bg-slate-800 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                        >
                            Schedule
                        </button>
                        <button
                            onClick={() => setActiveTab('cabinet')}
                            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'cabinet' ? 'bg-slate-800 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                        >
                            Cabinet
                        </button>
                    </div>
                </div>

                {activeTab === 'schedule' ? (
                    <>
                        {/* Calendar Strip */}
                        <div className="flex justify-between items-center mb-8 overflow-x-auto pb-2 scrollbar-hide snap-x">
                            {generateCalendar().map((date, i) => {
                                const isSelected = date.getDate() === selectedDate.getDate();
                                const isToday = date.getDate() === new Date().getDate();
                                return (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedDate(date)}
                                        className={`snap-center shrink-0 w-12 h-16 rounded-2xl flex flex-col items-center justify-center gap-1 border transition-all ${isSelected ? 'bg-teal-500 border-teal-500 text-white shadow-lg shadow-teal-200 scale-105' : 'bg-white border-slate-100 text-slate-400'}`}
                                    >
                                        <span className="text-[10px] font-bold uppercase">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                                        <span className="text-lg font-bold">{date.getDate()}</span>
                                        {isToday && !isSelected && <span className="w-1 h-1 bg-teal-500 rounded-full"></span>}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Timeline Sections */}
                        <div className="space-y-8">
                            {/* Morning */}
                            <div>
                                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="text-lg">🌅</span> Morning
                                </h2>
                                {medications.filter(m => m.period === 'Morning').map((med, i) => renderTimelineItem(med, i))}
                            </div>

                            {/* Afternoon */}
                            <div>
                                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="text-lg">☀️</span> Afternoon
                                </h2>
                                {medications.filter(m => m.period === 'Afternoon').map((med, i) => renderTimelineItem(med, i))}
                            </div>

                            {/* Evening */}
                            <div>
                                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="text-lg">🌙</span> Evening
                                </h2>
                                {medications.filter(m => m.period === 'Evening').map((med, i) => renderTimelineItem(med, i))}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className={`transition-all duration-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {/* Cabinet Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {medications.map((med) => (
                                <div key={med.id} className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-3 ${med.color}`}>
                                        {med.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-800 mb-0.5">{med.name}</h3>
                                    <p className="text-xs text-slate-400 mb-3">{med.stock} pills left</p>

                                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-3">
                                        <div
                                            className={`h-full rounded-full ${med.stock < 10 ? 'bg-red-500' : 'bg-teal-500'}`}
                                            style={{ width: `${(med.stock / med.totalStock) * 100}%` }}
                                        ></div>
                                    </div>

                                    <button className="text-xs font-bold text-teal-600 hover:text-teal-700 py-1">Details</button>
                                </div>
                            ))}
                            {/* Add New Card */}
                            <button className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-4 flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-teal-300 hover:text-teal-600 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                </div>
                                <span className="text-xs font-bold">Add Medication</span>
                            </button>
                        </div>

                        {/* Adherence Card */}
                        <div className="mt-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] p-6 text-white text-center shadow-xl shadow-indigo-200">
                            <h3 className="text-lg font-bold mb-1">Weekly Adherence</h3>
                            <p className="text-white/80 text-xs mb-6">You're doing great! Keep it up.</p>

                            <div className="flex justify-between items-end h-32 px-2">
                                {[80, 100, 60, 100, 100, 90, 85].map((val, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2">
                                        <div className="w-2 bg-white/30 rounded-full h-full relative overflow-hidden">
                                            <div className="absolute bottom-0 left-0 w-full bg-white rounded-full transition-all duration-1000" style={{ height: `${val}%` }}></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-white/70">
                                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* FAB */}
            <div className="fixed bottom-24 right-5 z-30">
                <button className="w-14 h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-xl shadow-slate-900/20 flex items-center justify-center transition-transform hover:-translate-y-1 active:scale-95">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </button>
            </div>

            <BottomNavigation />
        </div>
    );
};

export default MedicationsScreen;
