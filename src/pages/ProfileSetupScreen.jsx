import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ProfileSetupScreen = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [chronicConditions, setChronicConditions] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    // In a real app, we would save the profile data here
    // For prototype, we'll just navigate to the home screen
    navigate('/home');
  };

  return (
    <div className="profile-setup-screen">
      <div className="profile-setup-content">
        <h1>Basic Profile Setup</h1>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="profile-input"
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="profile-input"
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="profile-select"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Blood Group (Optional)</label>
          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="profile-select"
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="form-group">
          <label>Any Chronic Conditions (Optional)</label>
          <textarea
            value={chronicConditions}
            onChange={(e) => setChronicConditions(e.target.value)}
            className="profile-textarea"
            placeholder="List any chronic conditions..."
          />
        </div>
        <button className="save-button" onClick={handleSave}>
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default ProfileSetupScreen;