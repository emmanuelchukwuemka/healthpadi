import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/layout/BottomNavigation";

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
    <div className="p-5 max-w-[800px] mx-auto pb-24">
      <div className="mb-8">
        <h1 className="mt-0 font-bold text-3xl">Good morning, {userName} 👋</h1>
      </div>

      <div className="mb-8">
        <h2 className="mt-8 mb-4 font-semibold text-xl">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <button
            className="bg-white border border-border rounded-xl p-5 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
            onClick={handleSymptomChecker}
          >
            <div className="text-3xl mb-2">🩺</div>
            <span>How are you feeling?</span>
          </button>
          <button
            className="bg-white border border-border rounded-xl p-5 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
            onClick={handleEmergencyFirstAid}
          >
            <div className="text-3xl mb-2">🚨</div>
            <span>Emergency First Aid</span>
          </button>
          <button
            className="bg-white border border-border rounded-xl p-5 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
            onClick={handleFindHospital}
          >
            <div className="text-3xl mb-2">🏥</div>
            <span>Find Hospital / Clinic</span>
          </button>
          <button
            className="bg-white border border-border rounded-xl p-5 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
            onClick={handleBookDoctor}
          >
            <div className="text-3xl mb-2">📅</div>
            <span>Book a Doctor</span>
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mt-8 mb-4 font-semibold text-xl">Recent Activity</h2>
        <div className="bg-white rounded-xl p-5 shadow-lg">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="py-4 border-b border-border last:border-0 text-left"
            >
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

      <div className="mb-8">
        <h2 className="mt-8 mb-4 font-semibold text-xl">
          Health Tip of the Day
        </h2>
        <div className="bg-white rounded-xl p-5 shadow-lg">
          {healthTips.map((tip) => (
            <div key={tip.id} className="py-2">
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
