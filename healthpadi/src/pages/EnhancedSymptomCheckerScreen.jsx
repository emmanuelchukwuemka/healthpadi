import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBubble from '../design-system/ChatBubble';
import Button from '../design-system/Button';
import Icon from '../design-system/Icon';
import '../App.css';

const EnhancedSymptomCheckerScreen = () => {
  const [userMessage, setUserMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  // Predefined quick symptoms
  const quickSymptoms = [
    "Headache", "Fever", "Stomach pain", "Cough", "Chest pain",
    "Fatigue", "Nausea", "Dizziness", "Joint pain", "Shortness of breath"
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
      sender: 'user', 
      text: symptom,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setConversation(prev => [...prev, newUserMessage]);
    
    // Simulate AI response after a short delay
    setIsLoading(true);
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        sender: 'ai',
        summary: `I understand you're experiencing ${symptom.toLowerCase()}.`,
        urgency: Math.random() > 0.7 ? 'High' : Math.random() > 0.4 ? 'Moderate' : 'Low',
        nextSteps: 'Rest and monitor your symptoms. If they persist or worsen, consult a healthcare professional.',
        firstAid: symptom.includes('Headache') ? 'Try resting in a quiet, dark room and stay hydrated.' : null,
        disclaimer: 'This is not a diagnosis. Always consult a doctor for serious symptoms.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setConversation(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!userMessage.trim() || isLoading) return;
    
    // Add user message to conversation
    const newUserMessage = { 
      id: Date.now(), 
      sender: 'user', 
      text: userMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setConversation(prev => [...prev, newUserMessage]);
    
    // Clear input
    setUserMessage('');
    
    // Simulate AI response after a short delay
    setIsLoading(true);
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        sender: 'ai',
        summary: `I understand you're experiencing: ${userMessage}`,
        urgency: Math.random() > 0.7 ? 'High' : Math.random() > 0.4 ? 'Moderate' : 'Low',
        nextSteps: 'Monitor your symptoms closely. If they worsen, seek medical attention.',
        firstAid: 'Stay hydrated and get plenty of rest.',
        disclaimer: 'This is not a diagnosis. Always consult a doctor for serious symptoms.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setConversation(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSeeDoctor = () => {
    // In a real app, this would navigate to doctor booking
    navigate('/doctor-listing');
  };

  const handleSaveConversation = () => {
    // In a real app, this would save the conversation to health records
    alert('Conversation saved to health records!');
  };

  const handleClearChat = () => {
    setConversation([]);
  };

  return (
    <div className="enhanced-symptom-checker-screen">
      <div className="symptom-header">
        <div className="header-content">
          <h1>Symptom Checker</h1>
          <div className="header-actions">
            <Button variant="secondary" size="small" onClick={handleSaveConversation}>
              <Icon name="save" /> Save
            </Button>
            <Button variant="secondary" size="small" onClick={handleClearChat}>
              <Icon name="close" /> Clear
            </Button>
          </div>
        </div>
        <p className="header-subtitle">Describe your symptoms and get personalized health insights</p>
      </div>
      
      <div className="symptom-conversation-container">
        <div className="symptom-conversation">
          {conversation.length === 0 ? (
            <div className="empty-conversation">
              <div className="empty-icon">
                <Icon name="chat" size="large" />
              </div>
              <h3>How are you feeling today?</h3>
              <p>Describe your symptoms and I'll provide personalized health insights</p>
            </div>
          ) : (
            <>
              {conversation.map(message => (
                <ChatBubble
                  key={message.id}
                  message={message.text}
                  sender={message.sender}
                  timestamp={message.timestamp}
                  className={`message-bubble ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
                >
                  {message.sender === 'ai' && (
                    <div className="ai-response-content">
                      <div className="response-section">
                        <h4><Icon name="info" /> Summary</h4>
                        <p>{message.summary}</p>
                      </div>
                      
                      <div className="response-section">
                        <h4><Icon name="warning" /> Urgency Level</h4>
                        <Badge 
                          variant={message.urgency === 'High' ? 'danger' : message.urgency === 'Moderate' ? 'warning' : 'success'}
                          className="urgency-badge"
                        >
                          {message.urgency}
                        </Badge>
                      </div>
                      
                      <div className="response-section">
                        <h4><Icon name="check" /> Recommended Next Steps</h4>
                        <p>{message.nextSteps}</p>
                      </div>
                      
                      {message.firstAid && (
                        <div className="response-section">
                          <h4><Icon name="firstaid" /> First-Aid Advice</h4>
                          <p>{message.firstAid}</p>
                        </div>
                      )}
                      
                      <div className="response-section disclaimer-section">
                        <p><Icon name="warning" /> {message.disclaimer}</p>
                      </div>
                      
                      <Button variant="primary" onClick={handleSeeDoctor} className="see-doctor-btn">
                        <Icon name="doctor" /> See a Doctor
                      </Button>
                    </div>
                  )}
                </ChatBubble>
              ))}
              {isLoading && (
                <div className="loading-indicator">
                  <Icon name="spinner" className="spin" /> HealthPadi is thinking...
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </div>
      
      <div className="quick-symptoms">
        <h3>Quick Symptoms:</h3>
        <div className="symptom-chips">
          {quickSymptoms.map((symptom, index) => (
            <Button 
              key={index} 
              variant="secondary"
              size="small"
              onClick={() => handleQuickSymptom(symptom)}
              disabled={isLoading}
              className="symptom-chip"
            >
              {symptom}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="message-input-container">
        <div className="input-wrapper">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Describe how you're feeling..."
            className="message-input"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            disabled={isLoading}
          />
          <Button 
            variant="primary" 
            onClick={handleSendMessage}
            disabled={!userMessage.trim() || isLoading}
            className="send-button"
          >
            <Icon name="send" />
          </Button>
        </div>
        <p className="input-hint">Press Enter to send</p>
      </div>
    </div>
  );
};

export default EnhancedSymptomCheckerScreen;