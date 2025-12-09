import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/layout/BottomNavigation";

const SymptomCheckerScreen = () => {
  const [userMessage, setUserMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const navigate = useNavigate();

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

  const handleQuickSymptom = (symptom) => {
    // Add user message to conversation
    const newUserMessage = { id: Date.now(), sender: "user", text: symptom };
    setConversation((prev) => [...prev, newUserMessage]);

    // Simulate AI response after a short delay
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
      };
      setConversation((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;

    // Add user message to conversation
    const newUserMessage = {
      id: Date.now(),
      sender: "user",
      text: userMessage,
    };
    setConversation((prev) => [...prev, newUserMessage]);

    // Clear input
    setUserMessage("");

    // Simulate AI response after a short delay
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
      };
      setConversation((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleSeeDoctor = () => {
    // In a real app, this would navigate to doctor booking
    alert(
      "In a complete implementation, this would navigate to doctor booking."
    );
  };

  const handleSaveConversation = () => {
    // In a real app, this would save the conversation to health records
    alert("Conversation saved to health records!");
  };

  return (
    <div className="p-5 max-w-[800px] mx-auto flex flex-col h-[calc(100vh-80px)] pb-16">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Symptom Checker</h1>
        <button
          className="bg-primary text-white py-2 px-4 rounded text-sm hover:opacity-90"
          onClick={handleSaveConversation}
        >
          Save Conversation
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-white rounded-xl p-5 mb-5 shadow-sm">
        {conversation.length === 0 ? (
          <div className="flex justify-center items-center h-full text-gray-400">
            <p>Describe how you're feeling...</p>
          </div>
        ) : (
          conversation.map((message) => (
            <div
              key={message.id}
              className={`mb-5 max-w-[80%] ${
                message.sender === "user" ? "ml-auto" : "mr-auto"
              }`}
            >
              {message.sender === "user" ? (
                <div className="bg-primary text-white rounded-2xl rounded-br-none p-4 shadow-sm text-left">
                  <p>{message.text}</p>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-2xl rounded-bl-none p-4 shadow-sm text-left">
                  <p className="mb-2">
                    <strong>Summary:</strong> {message.summary}
                  </p>
                  <p className="mb-2">
                    <strong>Urgency Level:</strong>{" "}
                    <span
                      className={
                        message.urgency === "High"
                          ? "text-emergency font-bold"
                          : message.urgency === "Moderate"
                          ? "text-orange-500 font-bold"
                          : "text-green-600 font-bold"
                      }
                    >
                      {message.urgency}
                    </span>
                  </p>
                  <p className="mb-2">
                    <strong>Recommended Next Steps:</strong> {message.nextSteps}
                  </p>
                  {message.firstAid && (
                    <p className="mb-2">
                      <strong>First-Aid Advice:</strong> {message.firstAid}
                    </p>
                  )}
                  <div className="bg-yellow-50 border border-yellow-200 rounded p-3 my-4">
                    <p className="text-sm text-yellow-800">
                      {message.disclaimer}
                    </p>
                  </div>
                  <button
                    className="bg-emergency text-white w-full py-2 rounded mt-2 hover:opacity-90"
                    onClick={handleSeeDoctor}
                  >
                    See a Doctor
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <div className="mb-5">
        <h3 className="font-semibold mb-2">Quick Symptoms:</h3>
        <div className="flex flex-wrap gap-2">
          {quickSymptoms.map((symptom, index) => (
            <button
              key={index}
              className="bg-gray-200 border-none rounded-full py-2 px-4 text-sm cursor-pointer hover:bg-gray-300 transition-colors"
              onClick={() => handleQuickSymptom(symptom)}
            >
              {symptom}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Describe how you're feeling..."
          className="flex-1"
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          className="bg-primary text-white px-6 rounded-lg hover:opacity-90 transition-opacity"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default SymptomCheckerScreen;
