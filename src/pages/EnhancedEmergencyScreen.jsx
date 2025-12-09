import React, { useState } from "react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import Badge from "@/components/common/Badge";

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
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-red-600 text-white pt-12 pb-24 px-6 rounded-b-[40px] shadow-lg mb-[-40px] relative z-0">
        <h1 className="text-2xl font-bold mb-2">Emergency Assistance</h1>
        <p className="opacity-90">
          Immediate help for critical situations - Call 911 if in doubt
        </p>
      </div>

      <div className="px-4 max-w-4xl mx-auto relative z-10 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4 px-2">
          Emergency Contacts
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {emergencyContacts.map((contact) => (
            <Card
              key={contact.id}
              variant="elevated"
              className="bg-white p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-3xl mb-3">
                <Icon name={contact.icon} size="large" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{contact.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{contact.number}</p>
              <Button
                variant="danger"
                onClick={() => handleCallEmergency(contact.number)}
                className="w-full mt-auto"
              >
                <Icon name="call" /> Call Now
              </Button>
            </Card>
          ))}
        </div>
      </div>

      <div className="px-4 max-w-4xl mx-auto mb-8">
        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
          <Icon name="search" className="text-gray-400 text-xl ml-2" />
          <input
            type="text"
            placeholder="Search emergency guides (e.g. burns, choking)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border-none focus:outline-none text-gray-700 placeholder-gray-400 h-10"
          />
        </div>
      </div>

      <div className="px-4 max-w-4xl mx-auto">
        <h2 className="text-lg font-bold text-gray-800 mb-4 px-2">
          Emergency Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredGuides.map((guide) => (
            <Card
              key={guide.id}
              variant="outlined"
              className="cursor-pointer hover:border-primary hover:shadow-md transition-all group"
              onClick={() => openGuide(guide)}
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center text-2xl group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <Icon name={guide.icon} size="medium" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-800">{guide.title}</h3>
                    <Badge
                      variant={
                        guide.severity === "Critical"
                          ? "danger"
                          : guide.severity === "High"
                          ? "warning"
                          : "secondary"
                      }
                      size="small"
                    >
                      {guide.severity}
                    </Badge>
                  </div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide font-medium block mb-2">
                    {guide.category}
                  </span>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {guide.instructions[0]}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedGuide && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeGuide}
        >
          <div
            className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Icon name={selectedGuide.icon} /> {selectedGuide.title}
              </h2>
              <Button
                variant="ghost"
                onClick={closeGuide}
                className="w-8 h-8 rounded-full p-0 flex items-center justify-center hover:bg-gray-100"
              >
                <Icon name="close" />
              </Button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-500 font-medium">
                  Category:{" "}
                  <span className="text-gray-800">
                    {selectedGuide.category}
                  </span>
                </span>
                <Badge
                  variant={
                    selectedGuide.severity === "Critical"
                      ? "danger"
                      : selectedGuide.severity === "High"
                      ? "warning"
                      : "info"
                  }
                >
                  {selectedGuide.severity} Severity
                </Badge>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-3 border-l-4 border-primary pl-3">
                  Step-by-step Instructions:
                </h3>
                <ol className="space-y-3">
                  {selectedGuide.instructions.map((step, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-gray-700 leading-relaxed"
                    >
                      <span className="font-bold text-primary">
                        {index + 1}.
                      </span>
                      <span>{step.replace(/^\d+\.\s*/, "")}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex gap-3 text-sm text-yellow-800">
                <Icon
                  name="warning"
                  className="text-xl shrink-0 text-yellow-600"
                />
                <p>
                  <strong>Warning:</strong> These are general guidelines. Always
                  call emergency services for life-threatening situations.
                </p>
              </div>

              <Button
                variant="danger"
                fullWidth
                onClick={() => handleCallEmergency("911")}
                className="h-12 text-lg font-bold shadow-md hover:shadow-lg active:scale-[0.98] transition-all"
              >
                <Icon name="call" /> Call Emergency Services
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedEmergencyScreen;
