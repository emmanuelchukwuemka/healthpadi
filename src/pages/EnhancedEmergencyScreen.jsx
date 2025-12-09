import React, { useState } from "react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import "../App.css";

const EnhancedEmergencyScreen = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Emergency contact information
  const emergencyContacts = [
    { id: 1, name: "Ambulance", number: "911", icon: "ambulance" },
    { id: 2, name: "Poison Control", number: "1-800-222-1222", icon: "poison" },
    { id: 3, name: "Fire Department", number: "911", icon: "fire" },
    { id: 4, name: "Police", number: "911", icon: "police" },
  ];

  // Emergency guides
  const emergencyGuides = [
    {
      id: 1,
      title: "Choking",
      icon: "choking",
      category: "Respiratory",
      severity: "High",
      instructions: [
        "1. Encourage coughing if the person can still breathe and talk",
        "2. Perform back blows: Stand behind the person, lean them forward, and give up to 5 sharp blows between the shoulder blades",
        "3. Perform abdominal thrusts (Heimlich maneuver) if back blows don't work",
        "4. Call emergency services if the obstruction doesn't clear",
      ],
    },
    {
      id: 2,
      title: "Severe Bleeding",
      icon: "bleeding",
      category: "Injury",
      severity: "High",
      instructions: [
        "1. Apply direct pressure to the wound with a clean cloth or bandage",
        "2. Elevate the injured area above the heart if possible",
        "3. Apply pressure to nearby pressure points if bleeding continues",
        "4. Do not remove embedded objects",
        "5. Seek immediate medical attention",
      ],
    },
    {
      id: 3,
      title: "Burns",
      icon: "burn",
      category: "Injury",
      severity: "Medium",
      instructions: [
        "1. Cool the burn with running water for at least 10 minutes",
        "2. Remove jewelry and tight clothing near the burn before swelling occurs",
        "3. Cover the burn with a clean, dry cloth",
        "4. Do not apply ice, butter, or ointments",
        "5. Seek medical attention for severe burns",
      ],
    },
    {
      id: 4,
      title: "Heart Attack",
      icon: "heart",
      category: "Cardiac",
      severity: "Critical",
      instructions: [
        "1. Call emergency services immediately",
        "2. Help the person sit down and stay calm",
        "3. Loosen tight clothing",
        "4. If prescribed, help them take nitroglycerin",
        "5. If unconscious and not breathing, begin CPR",
      ],
    },
    {
      id: 5,
      title: "Stroke",
      icon: "stroke",
      category: "Neurological",
      severity: "Critical",
      instructions: [
        "1. Recognize signs: Face drooping, arm weakness, speech difficulty",
        "2. Call emergency services immediately",
        "3. Note the time symptoms began",
        "4. Do not give food or drink",
        "5. Keep the person comfortable and still",
      ],
    },
    {
      id: 6,
      title: "Allergic Reaction",
      icon: "allergy",
      category: "Immune",
      severity: "High",
      instructions: [
        "1. Call emergency services if difficulty breathing or swallowing",
        "2. Administer epinephrine if available and prescribed",
        "3. Have the person lie still with legs elevated",
        "4. Loosen tight clothing",
        "5. Monitor breathing and pulse",
      ],
    },
  ];

  // Filter guides based on search term
  const filteredGuides = emergencyGuides.filter(
    (guide) =>
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCallEmergency = (number) => {
    // In a real app, this would initiate a phone call
    alert(`Calling ${number}...`);
  };

  const openGuide = (guide) => {
    setSelectedGuide(guide);
  };

  const closeGuide = () => {
    setSelectedGuide(null);
  };

  return (
    <div className="enhanced-emergency-screen">
      <div className="emergency-header">
        <h1>Emergency Assistance</h1>
        <p>Immediate help for critical situations</p>
      </div>

      <div className="emergency-contacts">
        <h2>Emergency Contacts</h2>
        <div className="contacts-grid">
          {emergencyContacts.map((contact) => (
            <Card key={contact.id} variant="elevated" className="contact-card">
              <div className="contact-content">
                <div className="contact-icon">
                  <Icon name={contact.icon} size="large" />
                </div>
                <h3>{contact.name}</h3>
                <p className="contact-number">{contact.number}</p>
                <Button
                  variant="danger"
                  onClick={() => handleCallEmergency(contact.number)}
                  className="call-button"
                >
                  <Icon name="call" /> Call Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="emergency-search">
        <div className="search-container">
          <Icon name="search" className="search-icon" />
          <input
            type="text"
            placeholder="Search emergency guides..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="emergency-search-input"
          />
        </div>
      </div>

      <div className="emergency-guides">
        <h2>Emergency Guides</h2>
        <div className="guides-grid">
          {filteredGuides.map((guide) => (
            <Card
              key={guide.id}
              variant="outlined"
              className="guide-card"
              onClick={() => openGuide(guide)}
            >
              <div className="guide-content">
                <div className="guide-header">
                  <div className="guide-icon">
                    <Icon name={guide.icon} size="medium" />
                  </div>
                  <div className="guide-info">
                    <h3>{guide.title}</h3>
                    <div className="guide-meta">
                      <span className="guide-category">{guide.category}</span>
                      <Badge
                        variant={
                          guide.severity === "Critical"
                            ? "danger"
                            : guide.severity === "High"
                            ? "warning"
                            : "info"
                        }
                        className="severity-badge"
                      >
                        {guide.severity}
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="guide-preview">
                  {guide.instructions[0].substring(0, 60)}...
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedGuide && (
        <div className="guide-modal-overlay" onClick={closeGuide}>
          <div className="guide-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedGuide.title}</h2>
              <Button
                variant="icon"
                onClick={closeGuide}
                className="close-button"
              >
                <Icon name="close" />
              </Button>
            </div>

            <div className="modal-content">
              <div className="guide-details">
                <div className="guide-meta">
                  <span className="guide-category">
                    {selectedGuide.category}
                  </span>
                  <Badge
                    variant={
                      selectedGuide.severity === "Critical"
                        ? "danger"
                        : selectedGuide.severity === "High"
                        ? "warning"
                        : "info"
                    }
                    className="severity-badge"
                  >
                    {selectedGuide.severity}
                  </Badge>
                </div>

                <div className="instructions">
                  <h3>Step-by-step Instructions:</h3>
                  <ol>
                    {selectedGuide.instructions.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="emergency-warning">
                  <Icon name="warning" />
                  <p>
                    <strong>Warning:</strong> These are general guidelines.
                    Always call emergency services for life-threatening
                    situations.
                  </p>
                </div>

                <Button
                  variant="danger"
                  fullWidth
                  onClick={() => handleCallEmergency("911")}
                  className="call-emergency-button"
                >
                  <Icon name="call" /> Call Emergency Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedEmergencyScreen;
