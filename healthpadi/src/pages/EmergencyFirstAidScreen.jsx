import React, { useState } from 'react';
import '../App.css';

const EmergencyFirstAidScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Preloaded emergency guides
  const emergencyGuides = [
    {
      id: 1,
      title: "Choking",
      icon: "窒息",
      instructions: [
        "1. Encourage coughing if the person can still breathe and talk",
        "2. Perform back blows: Stand behind the person, lean them forward, and give up to 5 sharp blows between the shoulder blades",
        "3. Perform abdominal thrusts (Heimlich maneuver) if back blows don't work",
        "4. Call emergency services if the obstruction doesn't clear"
      ]
    },
    {
      id: 2,
      title: "Severe Bleeding",
      icon: "🩸",
      instructions: [
        "1. Apply direct pressure to the wound with a clean cloth or bandage",
        "2. Elevate the injured area above the heart if possible",
        "3. Apply pressure to nearby pressure points if bleeding continues",
        "4. Do not remove embedded objects",
        "5. Seek immediate medical attention"
      ]
    },
    {
      id: 3,
      title: "Burns",
      icon: "🔥",
      instructions: [
        "1. Cool the burn with running water for at least 10 minutes",
        "2. Remove jewelry and tight clothing near the burn before swelling occurs",
        "3. Cover the burn with a clean, dry cloth",
        "4. Do not apply ice, butter, or ointments",
        "5. Seek medical attention for severe burns"
      ]
    },
    {
      id: 4,
      title: "Heart Attack",
      icon: "❤️",
      instructions: [
        "1. Call emergency services immediately",
        "2. Help the person sit down and stay calm",
        "3. If conscious and not allergic, give aspirin (300mg)",
        "4. If the person becomes unconscious and stops breathing, start CPR",
        "5. Use an AED if available"
      ]
    },
    {
      id: 5,
      title: "Stroke (FAST)",
      icon: "🧠",
      instructions: [
        "1. Face: Ask the person to smile. Does one side droop?",
        "2. Arms: Ask the person to raise both arms. Does one arm drift downward?",
        "3. Speech: Ask the person to repeat a simple phrase. Is speech slurred?",
        "4. Time: If any of these signs are present, call emergency services immediately",
        "5. Note the time symptoms began"
      ]
    },
    {
      id: 6,
      title: "Seizure",
      icon: "⚡",
      instructions: [
        "1. Stay calm and time the seizure",
        "2. Protect the person from injury by clearing the area",
        "3. Place something soft under their head",
        "4. Do not restrain the person or put anything in their mouth",
        "5. Turn them on their side to help keep airway clear",
        "6. Stay with them until the seizure ends",
        "7. Call emergency services if seizure lasts more than 5 minutes"
      ]
    },
    {
      id: 7,
      title: "Poisoning",
      icon: "☠️",
      instructions: [
        "1. Call poison control or emergency services immediately",
        "2. Do not induce vomiting unless instructed by professionals",
        "3. If the person is unconscious, position them on their side",
        "4. Bring the poison container to the hospital if possible",
        "5. Follow instructions from emergency responders"
      ]
    },
    {
      id: 8,
      title: "Fractures",
      icon: "🦴",
      instructions: [
        "1. Stop any bleeding by applying pressure with a clean cloth",
        "2. Immobilize the injured area using splints or slings if available",
        "3. Apply ice packs to reduce swelling (wrap in cloth)",
        "4. Do not attempt to realign the bone",
        "5. Seek immediate medical attention"
      ]
    },
    {
      id: 9,
      title: "Allergic Reaction",
      icon: "🐝",
      instructions: [
        "1. Call emergency services if breathing is difficult or if there are signs of anaphylaxis",
        "2. Help the person use their epinephrine auto-injector if they have one",
        "3. Have them lie still on their back with feet elevated if not breathing difficulties",
        "4. Loosen tight clothing",
        "5. Monitor breathing and be prepared to perform CPR"
      ]
    },
    {
      id: 10,
      title: "Difficulty Breathing",
      icon: "💨",
      instructions: [
        "1. Call emergency services immediately",
        "2. Help the person sit upright in a comfortable position",
        "3. Loosen tight clothing around the neck and chest",
        "4. Administer prescribed inhalers if available",
        "5. Reassure the person and keep them calm",
        "6. Be prepared to start CPR if they become unconscious"
      ]
    }
  ];

  const filteredGuides = emergencyGuides.filter(guide =>
    guide.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCallEmergency = () => {
    // In a real app, this would initiate a phone call
    alert("Calling emergency services (112)...");
  };

  return (
    <div className="emergency-screen">
      <div className="emergency-header">
        <h1>Emergency First Aid</h1>
        <button className="emergency-call-btn top" onClick={handleCallEmergency}>
          Call 112
        </button>
      </div>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search emergency guides..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="guides-grid">
        {filteredGuides.map(guide => (
          <div key={guide.id} className="guide-card">
            <div className="guide-header">
              <div className="guide-icon">{guide.icon}</div>
              <h2>{guide.title}</h2>
            </div>
            <ol className="instructions-list">
              {guide.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      
      <button className="emergency-call-btn bottom" onClick={handleCallEmergency}>
        Call 112 / Emergency
      </button>
    </div>
  );
};

export default EmergencyFirstAidScreen;