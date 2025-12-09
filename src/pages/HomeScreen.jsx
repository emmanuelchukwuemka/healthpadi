import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/layout/BottomNavigation";
import "../App.css";

const HomeScreen = () => {
  const navigate = useNavigate();
  const userName = "Chioma"; // This would come from user context in a real app

  const handleSymptomChecker = () => {
    navigate("/symptom-checker");
  };

  const handleEmergencyFirstAid = () => {
    navigate("/emergency-first-aid");
  };

  const handleFindHospital = () => {
    navigate("/find-hospital");
  };

  const handleBookDoctor = () => {
    navigate("/doctor-listing");
  };

  // Mock recent activity data
  const recentActivity = [
    { id: 1, type: "symptom", date: "Today, 10:30 AM", symptom: "Headache" },
    {
      id: 2,
      type: "consultation",
      date: "Yesterday, 2:15 PM",
      doctor: "Dr. Adebayo",
    },
  ];

  // Mock health tips
  const healthTips = [
    { id: 1, tip: "Drink at least 8 glasses of water daily" },
    { id: 2, tip: "Take a 30-minute walk every day" },
    { id: 3, tip: "Get 7-8 hours of sleep each night" },
  ];

  return (
    <div className="home-screen">
      <div className="home-header">
        <h1>Good morning, {userName} 👋</h1>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button className="action-button" onClick={handleSymptomChecker}>
            <div className="action-icon">🩺</div>
            <span>How are you feeling?</span>
          </button>
          <button className="action-button" onClick={handleEmergencyFirstAid}>
            <div className="action-icon">🚨</div>
            <span>Emergency First Aid</span>
          </button>
          <button className="action-button" onClick={handleFindHospital}>
            <div className="action-icon">🏥</div>
            <span>Find Hospital / Clinic</span>
          </button>
          <button className="action-button" onClick={handleBookDoctor}>
            <div className="action-icon">📅</div>
            <span>Book a Doctor</span>
          </button>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-content">
                {activity.type === "symptom" ? (
                  <p>
                    Symptom logged: <strong>{activity.symptom}</strong> on{" "}
                    {activity.date}
                  </p>
                ) : (
                  <p>
                    Consultation with <strong>{activity.doctor}</strong> on{" "}
                    {activity.date}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="health-tips">
        <h2>Health Tip of the Day</h2>
        <div className="tips-carousel">
          {healthTips.map((tip) => (
            <div key={tip.id} className="tip-item">
              <p>{tip.tip}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default HomeScreen;
