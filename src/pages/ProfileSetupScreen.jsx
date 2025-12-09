import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSetupScreen = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [chronicConditions, setChronicConditions] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    // In a real app, we would save the profile data here
    // For prototype, we'll just navigate to the home screen
    navigate("/home");
  };

  return (
    <div className="p-5 max-w-[600px] mx-auto min-h-screen">
      <div className="py-5">
        <h1 className="text-center mb-8 text-2xl font-bold">
          Basic Profile Setup
        </h1>
        <div className="mb-5">
          <label className="block mb-2 font-medium">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 font-medium">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 font-medium">Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-2 font-medium">
            Blood Group (Optional)
          </label>
          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
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
        <div className="mb-5">
          <label className="block mb-2 font-medium">
            Any Chronic Conditions (Optional)
          </label>
          <textarea
            value={chronicConditions}
            onChange={(e) => setChronicConditions(e.target.value)}
            className="min-h-[100px]"
            placeholder="List any chronic conditions..."
          />
        </div>
        <button
          className="bg-primary text-white w-full mt-5 py-3 text-lg"
          onClick={handleSave}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default ProfileSetupScreen;
