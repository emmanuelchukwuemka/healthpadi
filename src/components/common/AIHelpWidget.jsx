import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const AIHelpWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);
    const location = useLocation();

    // Context-aware initial greeting based on current page
    const getContextualGreeting = () => {
        const path = location.pathname;
        const greetings = {
            "/home": "Hi! I see you're on the Home screen. Need help navigating your health dashboard?",
            "/symptom-checker": "Hello! I can help you understand how to use the Symptom Checker effectively.",
            "/medications": "Hi there! Let me guide you through managing your medications.",
            "/doctor-listing": "Hey! Looking for a doctor? I can help you find the right one.",
            "/doctor-dashboard": "Hello Doctor! Need help with your dashboard features?",
            "/hospital-dashboard": "Hi Admin! I can assist with hospital management features.",
            "/profile": "Hi! Let me help you update your profile settings.",
        };
        return greetings[path] || "Hi! I'm your HealthPadi assistant. How can I help you today?";
    };

    // Predefined help topics
    const quickTopics = [
        { label: "How to book a doctor?", key: "book-doctor" },
        { label: "Check my symptoms", key: "symptoms" },
        { label: "Manage medications", key: "medications" },
        { label: "Emergency contacts", key: "emergency" },
    ];

    // Mock AI responses
    const getAIResponse = (userMessage) => {
        const responses = {
            "book-doctor": "To book a doctor:\n1. Go to 'Find Doctors' from your home screen\n2. Browse specialists or search by name\n3. View their profile and availability\n4. Click 'Book Appointment' and select a time slot\n5. Confirm your booking!",
            "symptoms": "The Symptom Checker helps you understand your health:\n1. Click 'Symptom Checker' from home\n2. Describe how you're feeling in detail\n3. Our AI will analyze and provide insights\n4. You'll get urgency level and recommendations\n5. Book a doctor if needed!",
            "medications": "Managing medications is easy:\n1. Go to 'My Cabinet' from home\n2. Add your medications with dosage\n3. Set reminder times (morning/afternoon/evening)\n4. Track your adherence daily\n5. Get alerts when stock is low!",
            "emergency": "For emergencies:\n1. Click the red 'Emergency' button on home\n2. Access first-aid guides instantly\n3. Find nearest hospitals\n4. Call emergency services directly\nStay safe! 🚨",
        };

        // Check for predefined topics
        for (const [key, response] of Object.entries(responses)) {
            if (userMessage.toLowerCase().includes(key) || userMessage === key) {
                return response;
            }
        }

        // Generic helpful responses
        if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
            return "Hello! I'm here to help you navigate HealthPadi. What would you like to know?";
        }
        if (userMessage.toLowerCase().includes("navigate") || userMessage.toLowerCase().includes("use")) {
            return "HealthPadi is easy to use! From your home screen, you can:\n• Check symptoms with our AI\n• Find and book doctors\n• Manage medications\n• Access emergency help\n• Track your health goals\n\nWhat would you like to explore first?";
        }

        return "That's a great question! While I'm still learning, I can help you with:\n• Booking doctors\n• Checking symptoms\n• Managing medications\n• Emergency assistance\n\nFeel free to ask about any of these!";
    };

    // Initialize with greeting when opened
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    id: 1,
                    sender: "ai",
                    text: getContextualGreeting(),
                    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                },
            ]);
        }
    }, [isOpen]);

    // Auto-scroll to bottom
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Handle ESC key to close
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen]);

    const handleSendMessage = () => {
        if (!inputValue.trim() || isTyping) return;

        const userMessage = {
            id: Date.now(),
            sender: "user",
            text: inputValue,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI thinking
        setTimeout(() => {
            const aiMessage = {
                id: Date.now() + 1,
                sender: "ai",
                text: getAIResponse(inputValue),
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };
            setMessages((prev) => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1200);
    };

    const handleQuickTopic = (key) => {
        const topicMessage = {
            id: Date.now(),
            sender: "user",
            text: quickTopics.find((t) => t.key === key)?.label || "",
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages((prev) => [...prev, topicMessage]);
        setIsTyping(true);

        setTimeout(() => {
            const aiMessage = {
                id: Date.now() + 1,
                sender: "ai",
                text: getAIResponse(key),
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };
            setMessages((prev) => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
          fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full 
          shadow-lg text-white
          flex items-center justify-center
          transition-all duration-300 hover:scale-110 active:scale-95
          ${isOpen ? "rotate-0" : "animate-pulse-subtle"}
        `}
                style={{ backgroundImage: 'linear-gradient(to bottom right, #00A0B0, #6DDAD3)', boxShadow: '0 10px 25px rgba(0,160,176,0.4)' }}
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>

            {/* Chat Panel */}
            <div
                className={`
          fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-40
          transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
            >
                {/* Header */}
                <div className="text-white p-4 flex items-center gap-3" style={{ backgroundImage: 'linear-gradient(to right, #00A0B0, #6DDAD3)' }}>
                    <img src="/logo.png" alt="HealthPadi" className="h-[200px] w-auto" />
                    <div className="flex-1">
                        <h3 className="font-bold text-lg">HealthPadi Assistant</h3>
                        <p className="text-xs text-teal-100">Here to help you navigate</p>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Quick Topics */}
                <div className="p-4 bg-slate-50 border-b border-slate-200">
                    <p className="text-xs font-semibold text-slate-600 mb-2">Quick Help Topics:</p>
                    <div className="flex flex-wrap gap-2">
                        {quickTopics.map((topic) => (
                            <button
                                key={topic.key}
                                onClick={() => handleQuickTopic(topic.key)}
                                disabled={isTyping}
                                className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-700 hover:bg-teal-50 hover:border-teal-300 transition-colors disabled:opacity-50"
                            >
                                {topic.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`
                  max-w-[80%] rounded-2xl px-4 py-2.5
                  ${message.sender === "user"
                                        ? "bg-teal-500 text-white rounded-br-none"
                                        : "bg-slate-100 text-slate-800 rounded-bl-none"
                                    }
                `}
                            >
                                <p className="text-sm whitespace-pre-line">{message.text}</p>
                                <p className={`text-[10px] mt-1 ${message.sender === "user" ? "text-teal-100" : "text-slate-500"}`}>
                                    {message.timestamp}
                                </p>
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-slate-100 rounded-2xl rounded-bl-none px-4 py-3 flex gap-1">
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-slate-200 bg-white">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                            placeholder="Ask me anything..."
                            disabled={isTyping}
                            className="flex-1 px-4 py-2.5 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm disabled:bg-slate-50"
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={!inputValue.trim() || isTyping}
                            className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2 text-center">Press Enter to send • ESC to close</p>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
                />
            )}
        </>
    );
};

export default AIHelpWidget;
