import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const DoctorListingScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Mock doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Adebayo",
      title: "Cardiologist",
      hospital: "Lagos University Teaching Hospital",
      experience: 12,
      rating: 4.8,
      availableToday: true,
      photo: "👨‍⚕️"
    },
    {
      id: 2,
      name: "Dr. Okonkwo",
      title: "Pediatrician",
      hospital: "General Hospital Ikeja",
      experience: 8,
      rating: 4.9,
      availableToday: false,
      photo: "👩‍⚕️"
    },
    {
      id: 3,
      name: "Dr. Adeyemi",
      title: "Dermatologist",
      hospital: "Premium Medical Centre",
      experience: 15,
      rating: 4.7,
      availableToday: true,
      photo: "🧑‍⚕️"
    },
    {
      id: 4,
      name: "Dr. Okafor",
      title: "Orthopedic Surgeon",
      hospital: "Faith Hospital",
      experience: 10,
      rating: 4.6,
      availableToday: true,
      photo: "👨‍⚕️"
    }
  ];

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDoctor = (doctorId) => {
    // In a real app, this would navigate to the doctor's profile
    alert(`Viewing profile for doctor ID: ${doctorId}`);
  };

  const handleBookAppointment = (doctorId) => {
    // In a real app, this would open the booking calendar
    alert(`Booking appointment with doctor ID: ${doctorId}`);
  };

  return (
    <div className="doctor-listing-screen">
      <div className="doctor-header">
        <h1>Find a Doctor</h1>
      </div>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search doctors by specialty or name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="doctors-grid">
        {filteredDoctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-photo">
              {doctor.photo}
            </div>
            <div className="doctor-info">
              <h2>{doctor.name}</h2>
              <p className="doctor-title">{doctor.title}</p>
              <p className="doctor-hospital">{doctor.hospital}</p>
              <p className="doctor-experience">{doctor.experience} years of experience</p>
              <div className="doctor-rating">
                <span>★ {doctor.rating}</span>
                {doctor.availableToday && (
                  <span className="available-tag">Available Today</span>
                )}
              </div>
              <div className="doctor-actions">
                <button 
                  className="view-profile-btn"
                  onClick={() => handleViewDoctor(doctor.id)}
                >
                  View Profile
                </button>
                <button 
                  className="book-btn"
                  onClick={() => handleBookAppointment(doctor.id)}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorListingScreen;