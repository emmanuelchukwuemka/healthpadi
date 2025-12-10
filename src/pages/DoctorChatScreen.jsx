import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DoctorChatScreen = () => {
    const navigate = useNavigate();
    const [selectedChat, setSelectedChat] = useState(null);
    const [message, setMessage] = useState("");
    const messagesEndRef = useRef(null);

    const chats = [
        { id: 1, patient: "Chioma Adebayo", lastMessage: "Thank you doctor!", time: "2m ago", unread: 2, initials: "CA", color: "bg-teal-500", online: true },
        { id: 2, patient: "John Doe", lastMessage: "When is my next appointment?", time: "15m ago", unread: 0, initials: "JD", color: "bg-blue-500", online: false },
        { id: 3, patient: "Sarah Smith", lastMessage: "I'm feeling much better now", time: "1h ago", unread: 1, initials: "SS", color: "bg-purple-500", online: true },
        { id: 4, patient: "Michael Johnson", lastMessage: "Can I get a prescription refill?", time: "3h ago", unread: 0, initials: "MJ", color: "bg-orange-500", online: false },
    ];

    const messages = selectedChat ? [
        { id: 1, sender: "patient", text: "Hello Dr. Emmanuel, I have some questions about my medication", time: "10:30 AM", isOwn: false },
        { id: 2, sender: "doctor", text: "Of course! I'm here to help. What would you like to know?", time: "10:32 AM", isOwn: true },
        { id: 3, sender: "patient", text: "Should I take it before or after meals?", time: "10:33 AM", isOwn: false },
        { id: 4, sender: "doctor", text: "Take it 30 minutes before meals for best absorption. Also drink plenty of water.", time: "10:35 AM", isOwn: true },
        { id: 5, sender: "patient", text: "Thank you doctor!", time: "10:36 AM", isOwn: false },
    ] : [];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (message.trim()) {
            // Here you would send the message to your backend
            setMessage("");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-24 flex flex-col">
            {/* Header */}
            <header className="bg-white px-6 py-6 rounded-b-[2rem] shadow-sm sticky top-0 z-10">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                            Messages
                            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </h1>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-1">{chats.filter(c => c.unread > 0).length} Unread</p>
                    </div>
                    <button className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-slate-100 transition-colors">
                        <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Chat List or Conversation */}
            <div className="flex-1 overflow-hidden">
                {!selectedChat ? (
                    // Chat List View
                    <div className="p-6">
                        <div className="space-y-3">
                            {chats.map((chat) => (
                                <button
                                    key={chat.id}
                                    onClick={() => setSelectedChat(chat)}
                                    className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all active:scale-[0.98] text-left"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex-shrink-0">
                                            <div className={`w-12 h-12 ${chat.color} rounded-full flex items-center justify-center text-sm font-bold text-white`}>
                                                {chat.initials}
                                            </div>
                                            {chat.online && (
                                                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-slate-800 truncate">{chat.patient}</h3>
                                                <span className="text-xs text-slate-400 font-medium flex-shrink-0">{chat.time}</span>
                                            </div>
                                            <p className="text-sm text-slate-500 truncate">{chat.lastMessage}</p>
                                        </div>
                                        {chat.unread > 0 && (
                                            <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-xs font-bold text-white">{chat.unread}</span>
                                            </div>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    // Conversation View
                    <div className="flex flex-col h-full">
                        {/* Chat Header */}
                        <div className="bg-white border-b border-slate-100 px-6 py-4 flex items-center gap-3">
                            <button onClick={() => setSelectedChat(null)} className="text-slate-600 hover:text-slate-800">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <div className="relative">
                                <div className={`w-10 h-10 ${selectedChat.color} rounded-full flex items-center justify-center text-sm font-bold text-white`}>
                                    {selectedChat.initials}
                                </div>
                                {selectedChat.online && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-800">{selectedChat.patient}</h3>
                                <p className="text-xs text-slate-400">{selectedChat.online ? "Online" : "Offline"}</p>
                            </div>
                            <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-colors">
                                <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[75%] ${msg.isOwn ? "order-2" : "order-1"}`}>
                                        <div className={`px-4 py-3 rounded-2xl ${msg.isOwn
                                                ? "bg-teal-600 text-white rounded-tr-sm"
                                                : "bg-white border border-slate-100 text-slate-800 rounded-tl-sm"
                                            }`}>
                                            <p className="text-sm">{msg.text}</p>
                                        </div>
                                        <p className={`text-xs text-slate-400 mt-1 ${msg.isOwn ? "text-right" : "text-left"}`}>{msg.time}</p>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Message Input */}
                        <div className="bg-white border-t border-slate-100 p-4">
                            <div className="flex gap-2 items-center">
                                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-colors">
                                    <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    </svg>
                                </button>
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Type a message..."
                                    className="flex-1 px-4 py-3 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center hover:bg-teal-500 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Doctor Bottom Nav */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-4 flex justify-between items-center safe-area-pb shadow-[0_-2px_10px_rgba(0,0,0,0.03)]">
                <button onClick={() => navigate("/doctor-dashboard")} className="text-slate-400 flex flex-col items-center gap-1 hover:text-slate-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-[10px] font-bold">Home</span>
                </button>
                <button onClick={() => navigate("/doctor-schedule")} className="text-slate-400 flex flex-col items-center gap-1 hover:text-slate-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[10px] font-bold">Schedule</span>
                </button>
                <button className="flex flex-col items-center gap-1 transition-colors" style={{ color: '#00A0B0' }}>
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

export default DoctorChatScreen;
