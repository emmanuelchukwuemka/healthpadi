import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';
import '../App.css';

const ProfileScreen = () => {
  const navigate = useNavigate();

  // Mock user data
  const [userData, setUserData] = useState({
    name: "Chioma Johnson",
    phone: "+234 801 234 5678",
    email: "chioma.johnson@example.com",
    emergencyContact: {
      name: "John Johnson",
      phone: "+234 809 876 5432"
    },
    medicalInfo: {
      bloodGroup: "O+",
      allergies: "Penicillin, Bee stings",
      chronicConditions: "Asthma"
    }
  });

  // Mock health records
  const healthRecords = [
    {
      id: 1,
      date: "2023-06-15",
      type: "symptom",
      mainSymptom: "Headache",
      details: "Severe headache with nausea"
    },
    {
      id: 2,
      date: "2023-06-10",
      type: "consultation",
      doctor: "Dr. Adebayo",
      specialty: "Cardiologist"
    },
    {
      id: 3,
      date: "2023-06-05",
      type: "symptom",
      mainSymptom: "Fever",
      details: "High fever with body aches"
    }
  ];

  const handleEditProfile = () => {
    // In a real app, this would open an edit profile form
    alert("Edit profile functionality would go here");
  };

  const handleViewRecord = (recordId) => {
    // In a real app, this would show the full record details
    const record = healthRecords.find(r => r.id === recordId);
    alert(`Viewing record: ${record.type} on ${record.date}`);
  };

  const handleUploadPrescription = () => {
    // In a real app, this would open a file picker
    alert("Upload prescription functionality would go here");
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  return (
    <div className="profile-screen">
      <div className="profile-header">
        <h1>My Profile</h1>
        <button className="settings-btn" onClick={handleSettings}>
          Settings
        </button>
      </div>
      
      <div className="profile-section">
        <div className="profile-info">
          <div className="profile-avatar">
            👤
          </div>
          <div className="profile-details">
            <h2>{userData.name}</h2>
            <p>📞 {userData.phone}</p>
            <p>✉️ {userData.email}</p>
          </div>
          <button className="edit-profile-btn" onClick={handleEditProfile}>
            Edit Profile
          </button>
        </div>
        
        <div className="emergency-contact">
          <h3>Emergency Contact</h3>
          <p><strong>Name:</strong> {userData.emergencyContact.name}</p>
          <p><strong>Phone:</strong> {userData.emergencyContact.phone}</p>
          <button className="edit-emergency-btn">Edit Contact</button>
        </div>
        
        <div className="medical-info">
          <h3>Medical Information</h3>
          <p><strong>Blood Group:</strong> {userData.medicalInfo.bloodGroup}</p>
          <p><strong>Allergies:</strong> {userData.medicalInfo.allergies}</p>
          <p><strong>Chronic Conditions:</strong> {userData.medicalInfo.chronicConditions}</p>
        </div>
      </div>
      
      <div className="health-records-section">
        <div className="records-header">
          <h2>Health Records</h2>
          <button className="upload-prescription-btn" onClick={handleUploadPrescription}>
            Upload Prescription
          </button>
        </div>
        
        <div className="health-records">
          {healthRecords.map(record => (
            <div key={record.id} className="record-item" onClick={() => handleViewRecord(record.id)}>
              <div className="record-date">{record.date}</div>
              {record.type === "symptom" ? (
                <div className="record-content">
                  <h4>Symptom Log</h4>
                  <p>Main Symptom: {record.mainSymptom}</p>
                </div>
              ) : (
                <div className="record-content">
                  <h4>Consultation</h4>
                  <p>Doctor: {record.doctor}</p>
                  <p>Specialty: {record.specialty}</p>
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