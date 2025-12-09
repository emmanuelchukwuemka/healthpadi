import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/layout/BottomNavigation";

const ProfileScreen = () => {
  const navigate = useNavigate();

  // Mock user data
  const [userData, setUserData] = useState({
    name: "Chioma Johnson",
    phone: "+234 801 234 5678",
    email: "chioma.johnson@example.com",
    emergencyContact: {
      name: "John Johnson",
      phone: "+234 809 876 5432",
    },
    medicalInfo: {
      bloodGroup: "O+",
      allergies: "Penicillin, Bee stings",
      chronicConditions: "Asthma",
    },
  });

  // Mock health records
  const healthRecords = [
    {
      id: 1,
      date: "2023-06-15",
      type: "symptom",
      mainSymptom: "Headache",
      details: "Severe headache with nausea",
    },
    {
      id: 2,
      date: "2023-06-10",
      type: "consultation",
      doctor: "Dr. Adebayo",
      specialty: "Cardiologist",
    },
    {
      id: 3,
      date: "2023-06-05",
      type: "symptom",
      mainSymptom: "Fever",
      details: "High fever with body aches",
    },
  ];

  const handleEditProfile = () => {
    // In a real app, this would open an edit profile form
    alert("Edit profile functionality would go here");
  };

  const handleViewRecord = (recordId) => {
    // In a real app, this would show the full record details
    const record = healthRecords.find((r) => r.id === recordId);
    alert(`Viewing record: ${record.type} on ${record.date}`);
  };

  const handleUploadPrescription = () => {
    // In a real app, this would open a file picker
    alert("Upload prescription functionality would go here");
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <div className="p-5 max-w-[800px] mx-auto pb-24">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold m-0">My Profile</h1>
        <button
          className="text-gray-500 border border-border px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors"
          onClick={handleSettings}
        >
          Settings
        </button>
      </div>

      <div className="bg-white rounded-xl p-5 shadow-lg mb-5">
        <div className="flex items-center gap-4 mb-5 pb-5 border-b border-border">
          <div className="text-4xl bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center shrink-0">
            👤
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold m-0 mb-1">{userData.name}</h2>
            <p className="text-gray-600 m-0 mb-1">📞 {userData.phone}</p>
            <p className="text-gray-600 m-0">✉️ {userData.email}</p>
          </div>
          <button
            className="text-primary text-sm border border-primary px-3 py-1 rounded hover:bg-primary/5 transition-colors"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3 border-b border-gray-100 pb-2">
            Emergency Contact
          </h3>
          <p className="mb-2">
            <strong className="text-gray-700">Name:</strong>{" "}
            {userData.emergencyContact.name}
          </p>
          <p className="mb-3">
            <strong className="text-gray-700">Phone:</strong>{" "}
            {userData.emergencyContact.phone}
          </p>
          <button className="text-primary text-sm font-medium hover:underline">
            Edit Contact
          </button>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 border-b border-gray-100 pb-2">
            Medical Information
          </h3>
          <p className="mb-2">
            <strong className="text-gray-700">Blood Group:</strong>{" "}
            {userData.medicalInfo.bloodGroup}
          </p>
          <p className="mb-2">
            <strong className="text-gray-700">Allergies:</strong>{" "}
            {userData.medicalInfo.allergies}
          </p>
          <p>
            <strong className="text-gray-700">Chronic Conditions:</strong>{" "}
            {userData.medicalInfo.chronicConditions}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold m-0">Health Records</h2>
          <button
            className="bg-primary text-white text-xs px-3 py-2 rounded hover:opacity-90 transition-opacity"
            onClick={handleUploadPrescription}
          >
            Upload Prescription
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {healthRecords.map((record) => (
            <div
              key={record.id}
              className="flex gap-4 p-3 border border-gray-100 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => handleViewRecord(record.id)}
            >
              <div className="text-gray-400 text-xs w-20 shrink-0">
                {record.date}
              </div>
              {record.type === "symptom" ? (
                <div className="flex-1">
                  <h4 className="font-bold m-0 mb-1 text-sm">Symptom Log</h4>
                  <p className="m-0 text-sm text-gray-600">
                    Main Symptom: {record.mainSymptom}
                  </p>
                </div>
              ) : (
                <div className="flex-1">
                  <h4 className="font-bold m-0 mb-1 text-sm">Consultation</h4>
                  <p className="m-0 text-gray-600 text-sm">
                    Doctor: {record.doctor}
                  </p>
                  <p className="m-0 text-gray-600 text-sm">
                    Specialty: {record.specialty}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default ProfileScreen;
