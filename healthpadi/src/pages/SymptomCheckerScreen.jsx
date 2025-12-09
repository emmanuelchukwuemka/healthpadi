import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';
import '../App.css';

const SymptomCheckerScreen = () => {
  const [userMessage, setUserMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const navigate = useNavigate();

  // Predefined quick symptoms
  const quickSymptoms = [
    "Headache", "Fever", "Stomach pain", "Cough", "Chest pain",
    "Fatigue", "Nausea", "Dizziness", "Joint pain", "Shortness of breath"
  ];

  const handleQuickSymptom = (symptom) => {
    // Add user message to conversation
    const newUserMessage = { id: Date.now(), sender: 'user', text: symptom };
    setConversation(prev => [...prev, newUserMessage]);
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        sender: 'ai',
        summary: `I understand you're experiencing ${symptom.toLowerCase()}.`,
        urgency: Math.random() > 0.7 ? 'High' : Math.random() > 0.4 ? 'Moderate' : 'Low',
        nextSteps: 'Rest and monitor your symptoms. If they persist or worsen, consult a healthcare professional.',
        firstAid: symptom.includes('Headache') ? 'Try resting in a quiet, dark room and stay hydrated.' : null,
        disclaimer: 'This is not a diagnosis. Always consult a doctor for serious symptoms.'
      };
      setConversation(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;
    
    // Add user message to conversation
    const newUserMessage = { id: Date.now(), sender: 'user', text: userMessage };
    setConversation(prev => [...prev, newUserMessage]);
    
    // Clear input
    setUserMessage('');
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        sender: 'ai',
        summary: `I understand you're experiencing: ${userMessage}`,
        urgency: Math.random() > 0.7 ? 'High' : Math.random() > 0.4 ? 'Moderate' : 'Low',
        nextSteps: 'Monitor your symptoms closely. If they worsen, seek medical attention.',
        firstAid: 'Stay hydrated and get plenty of rest.',
        disclaimer: 'This is not a diagnosis. Always consult a doctor for serious symptoms.'
      };
      setConversation(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleSeeDoctor = () => {
    // In a real app, this would navigate to doctor booking
    alert('In a complete implementation, this would navigate to doctor booking.');
  };

  const handleSaveConversation = () => {
    // In a real app, this would save the conversation to health records
    alert('Conversation saved to health records!');
  };

  return (
    <div className="symptom-checker-screen">
      <div className="symptom-header">
        <h1>Symptom Checker</h1>
        <button className="save-conversation-btn" onClick={handleSaveConversation}>
          Save Conversation
        </button>
      </div>
      
      <div className="symptom-conversation">
        {conversation.length === 0 ? (
          <div className="empty-conversation">
            <p>Describe how you're feeling...</p>
          </div>
        ) : (
          conversation.map(message => (
            <div 
              key={message.id} 
              className={`message-bubble ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
            >
              {message.sender === 'user' ? (
                <div className="user-message-content">
                  <p>{message.text}</p>
                </div>
              ) : (
                <div className="ai-message-content">
                  <p><strong>Summary:</strong> {message.summary}</p>
                  <p><strong>Urgency Level:</strong> 
                    <span className={`urgency-${message.urgency.toLowerCase()}`}>
                      {message.urgency}
                    </span>
                  </p>
                  <p><strong>Recommended Next Steps:</strong> {message.nextSteps}</p>
                  {message.firstAid && (
                    <p><strong>First-Aid Advice:</strong> {message.firstAid}</p>
                  )}
                  <div className="disclaimer-banner">
                    <p>{message.disclaimer}</p>
                  </div>
                  <button className="see-doctor-btn" onClick={handleSeeDoctor}>
                    See a Doctor
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
      
      <div className="quick-symptoms">
        <h3>Quick Symptoms:</h3>
        <div className="symptom-chips">
          {quickSymptoms.map((symptom, index) => (
            <button 
              key={index} 
              className="symptom-chip"
              onClick={() => handleQuickSymptom(symptom)}
            >
              {symptom}
            </button>
          ))}
        </div>
      </div>
      
      <div className="message-input-container">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Describe how you're feeling..."
          className="message-input"
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button className="send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default SymptomCheckerScreen;