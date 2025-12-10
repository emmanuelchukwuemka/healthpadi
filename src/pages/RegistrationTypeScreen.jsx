import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationTypeScreen = () => {
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);
    const [selectedType, setSelectedType] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const accountTypes = [
        {
            id: "patient",
            title: "Patient",
            description: "Book appointments, track health, and manage medications",
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            ),
            color: "teal",
            gradient: "from-teal-500 to-teal-600",
            path: "/register/patient"
        },
        {
            id: "doctor",
            title: "Doctor",
            description: "Manage patients, appointments, and consultations",
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
            ),
            color: "purple",
            gradient: "from-purple-500 to-purple-600",
            path: "/register/doctor"
        },
        {
            id: "hospital",
            title: "Hospital / Clinic",
            description: "Manage facility, staff, and patient appointments",
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
            ),
            color: "blue",
            gradient: "from-blue-500 to-blue-600",
            path: "/register/hospital"
        }
    ];

    const handleSelectType = (type) => {
        setSelectedType(type.id);
        setTimeout(() => {
            navigate(type.path);
        }, 300);
    };

    return (
        <div className="relative min-h-screen bg-slate-50 overflow-auto font-sans selection:bg-teal-100 selection:text-teal-900 flex items-center justify-center p-4 py-10">

            {/* Background Decor */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-bl from-teal-50/50 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-50/50 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
            </div>

            <div
                className={`relative w-full max-w-4xl bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-50 z-10 transition-all duration-700 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >

                {/* Header */}
                <div className="text-center mb-10">
                    <img src="/logo.png" alt="HealthPadi" className="h-[180px] w-auto mx-auto mb-4" />
                    <h1 className="font-['Poppins'] text-3xl font-bold text-slate-900 mb-2">Choose Account Type</h1>
                    <p className="font-['Inter'] text-slate-500 text-sm">Select the type of account you want to create</p>
                </div>

                {/* Account Type Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {accountTypes.map((type, index) => (
                        <button
                            key={type.id}
                            onClick={() => handleSelectType(type)}
                            className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-2xl active:scale-[0.98] ${selectedType === type.id
                                    ? `border-${type.color}-500 bg-${type.color}-50 shadow-xl`
                                    : 'border-slate-200 bg-white hover:border-slate-300'
                                } ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                            style={{
                                transitionDelay: `${index * 100 + 200}ms`
                            }}
                        >
                            {/* Icon Container */}
                            <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${type.gradient} flex items-center justify-center text-white shadow-lg shadow-${type.color}-200/50 transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                {type.icon}
                            </div>

                            {/* Title & Description */}
                            <h3 className="font-['Poppins'] text-xl font-bold text-slate-900 mb-2 text-center">{type.title}</h3>
                            <p className="font-['Inter'] text-sm text-slate-500 text-center leading-relaxed">{type.description}</p>

                            {/* Selection Indicator */}
                            {selectedType === type.id && (
                                <div className="absolute top-4 right-4 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center animate-scale-in">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            )}

                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                        </button>
                    ))}
                </div>

                {/* Footer */}
                <div className={`mt-8 text-center transition-all duration-700 delay-500 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-slate-500 font-['Inter'] text-sm">
                        Already have an account?{' '}
                        <button
                            onClick={() => navigate("/login")}
                            className="text-teal-600 font-semibold hover:text-teal-500 relative group cursor-pointer border-none bg-transparent"
                        >
                            Sign In
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    </p>
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
        
        @keyframes scale-in {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-scale-in { animation: scale-in 0.3s ease-out; }
      `}</style>
        </div>
    );
};

export default RegistrationTypeScreen;
