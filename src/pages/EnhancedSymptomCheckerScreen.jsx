import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import Badge from "@/components/common/Badge";
import ChatBubble from "@/components/common/ChatBubble";

const EnhancedSymptomCheckerScreen = () => {
  const [userMessage, setUserMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  // Predefined quick symptoms
  const quickSymptoms = [
    "Headache",
    "Fever",
    "Stomach pain",
    "Cough",
    "Chest pain",
    "Fatigue",
    "Nausea",
    "Dizziness",
    "Joint pain",
    "Shortness of breath",
  ];

  // Scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const handleQuickSymptom = (symptom) => {
    // Add user message to conversation
    const newUserMessage = {
      id: Date.now(),
      sender: "user",
      text: symptom,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setConversation((prev) => [...prev, newUserMessage]);

    // Simulate AI response after a short delay
    setIsLoading(true);
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        sender: "ai",
        summary: `I understand you're experiencing ${symptom.toLowerCase()}.`,
        urgency:
          Math.random() > 0.7
            ? "High"
            : Math.random() > 0.4
            ? "Moderate"
            : "Low",
        nextSteps:
          "Rest and monitor your symptoms. If they persist or worsen, consult a healthcare professional.",
        firstAid: symptom.includes("Headache")
          ? "Try resting in a quiet, dark room and stay hydrated."
          : null,
        disclaimer:
          "This is not a diagnosis. Always consult a doctor for serious symptoms.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setConversation((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!userMessage.trim() || isLoading) return;

    // Add user message to conversation
    const newUserMessage = {
      id: Date.now(),
      sender: "user",
      text: userMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setConversation((prev) => [...prev, newUserMessage]);

    // Clear input
    setUserMessage("");

    // Simulate AI response after a short delay
    setIsLoading(true);
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        sender: "ai",
        summary: `I understand you're experiencing: ${userMessage}`,
        urgency:
          Math.random() > 0.7
            ? "High"
            : Math.random() > 0.4
            ? "Moderate"
            : "Low",
        nextSteps:
          "Monitor your symptoms closely. If they worsen, seek medical attention.",
        firstAid: "Stay hydrated and get plenty of rest.",
        disclaimer:
          "This is not a diagnosis. Always consult a doctor for serious symptoms.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setConversation((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSeeDoctor = () => {
    // In a real app, this would navigate to doctor booking
    navigate("/doctor-listing");
  };

  const handleSaveConversation = () => {
    // In a real app, this would save the conversation to health records
    alert("Conversation saved to health records!");
  };

  const handleClearChat = () => {
    setConversation([]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-gray-50">
      <div className="bg-white p-4 shadow-sm z-10 sticky top-0">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-bold text-gray-800">Symptom Checker</h1>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="small"
              onClick={handleSaveConversation}
              className="flex items-center gap-1"
            >
              <Icon name="save" className="text-sm" /> Save
            </Button>
            <Button
              variant="secondary"
              size="small"
              onClick={handleClearChat}
              className="flex items-center gap-1"
            >
              <Icon name="close" className="text-sm" /> Clear
            </Button>
          </div>
        </div>
        <p className="text-gray-500 text-sm">
          Describe your symptoms and get personalized health insights
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-4 max-w-3xl mx-auto pb-4">
          {conversation.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-20 text-center text-gray-500">
              <div className="text-6xl mb-4 text-primary/20 bg-primary/5 p-6 rounded-full">
                <Icon name="chat" size="large" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                How are you feeling today?
              </h3>
              <p className="max-w-xs">
                Describe your symptoms and I'll provide personalized health
                insights
              </p>
            </div>
          ) : (
            <>
              {conversation.map((message) => (
                <div key={message.id}>
                  {message.sender === "user" ? (
                    <ChatBubble
                      message={message.text}
                      sender="user"
                      timestamp={message.timestamp}
                    />
                  ) : (
                    <div className="flex flex-col max-w-[85%] bg-white rounded-2xl rounded-tl-none p-4 shadow-sm border border-gray-100 mr-auto self-start">
                      <div className="space-y-4">
                        <div className="bg-blue-50/50 rounded-xl p-3 border border-blue-50">
                          <h4 className="font-semibold text-sm mb-1 text-primary flex items-center gap-2">
                            <Icon name="info" className="text-primary" />{" "}
                            Summary
                          </h4>
                          <p className="text-sm text-gray-700">
                            {message.summary}
                          </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 flex items-center justify-between">
                          <h4 className="font-semibold text-sm text-gray-700 flex items-center gap-2">
                            <Icon name="warning" className="text-orange-500" />{" "}
                            Urgency Level
                          </h4>
                          <Badge
                            variant={
                              message.urgency === "High"
                                ? "danger"
                                : message.urgency === "Moderate"
                                ? "warning"
                                : "success"
                            }
                          >
                            {message.urgency}
                          </Badge>
                        </div>

                        <div className="bg-green-50/50 rounded-xl p-3 border border-green-50">
                          <h4 className="font-semibold text-sm mb-1 text-green-700 flex items-center gap-2">
                            <Icon name="check" className="text-green-600" />{" "}
                            Recommended Next Steps
                          </h4>
                          <p className="text-sm text-gray-700">
                            {message.nextSteps}
                          </p>
                        </div>

                        {message.firstAid && (
                          <div className="bg-red-50/50 rounded-xl p-3 border border-red-50">
                            <h4 className="font-semibold text-sm mb-1 text-red-700 flex items-center gap-2">
                              <Icon name="symptom" className="text-red-500" />{" "}
                              First-Aid Advice
                            </h4>
                            <p className="text-sm text-gray-700">
                              {message.firstAid}
                            </p>
                          </div>
                        )}

                        <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-100 text-xs text-yellow-800 flex items-start gap-2">
                          <Icon
                            name="warning"
                            className="text-yellow-600 shrink-0 mt-0.5"
                          />
                          <span>{message.disclaimer}</span>
                        </div>

                        <Button
                          variant="primary"
                          onClick={handleSeeDoctor}
                          className="w-full justify-center flex items-center gap-2"
                        >
                          <Icon name="doctor" /> See a Doctor
                        </Button>
                      </div>
                      <div className="text-[10px] text-gray-400 mt-2 text-right">
                        {message.timestamp}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm py-4">
                  <Icon name="spinner" className="animate-spin text-primary" />{" "}
                  HealthPadi is thinking...
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100 shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Quick Symptoms:
        </h3>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none mb-3">
          {quickSymptoms.map((symptom, index) => (
            <Button
              key={index}
              variant="secondary"
              size="small"
              onClick={() => handleQuickSymptom(symptom)}
              disabled={isLoading}
              className="whitespace-nowrap shrink-0 rounded-full px-4 text-xs font-normal bg-gray-100 hover:bg-gray-200 border-none"
            >
              {symptom}
            </Button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Describe how you're feeling..."
              className="flex-1 bg-gray-100 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              disabled={isLoading}
            />
            <Button
              variant="primary"
              onClick={handleSendMessage}
              disabled={!userMessage.trim() || isLoading}
              className="rounded-full w-12 h-12 p-0 flex items-center justify-center shrink-0 shadow-md transform active:scale-95 transition-all"
            >
              <Icon name="chat" className="text-white" />
            </Button>
          </div>
          <p className="text-xs text-center text-gray-400 mt-2">
            Press Enter to send
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSymptomCheckerScreen;
