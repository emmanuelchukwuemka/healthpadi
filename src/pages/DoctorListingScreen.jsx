import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorListingScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
      photo: "👨‍⚕️",
    },
    {
      id: 2,
      name: "Dr. Okonkwo",
      title: "Pediatrician",
      hospital: "General Hospital Ikeja",
      experience: 8,
      rating: 4.9,
      availableToday: false,
      photo: "👩‍⚕️",
    },
    {
      id: 3,
      name: "Dr. Adeyemi",
      title: "Dermatologist",
      hospital: "Premium Medical Centre",
      experience: 15,
      rating: 4.7,
      availableToday: true,
      photo: "🧑‍⚕️",
    },
    {
      id: 4,
      name: "Dr. Okafor",
      title: "Orthopedic Surgeon",
      hospital: "Faith Hospital",
      experience: 10,
      rating: 4.6,
      availableToday: true,
      photo: "👨‍⚕️",
    },
  ];

  const filteredDoctors = doctors.filter(
    (doctor) =>
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
    <div className="p-5 max-w-[800px] mx-auto pb-24">
      <div className="mb-5">
        <h1 className="text-2xl font-bold m-0">Find a Doctor</h1>
      </div>

      <div className="mb-5">
        <input
          type="text"
          placeholder="Search doctors by specialty or name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-0"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-xl p-5 shadow-lg flex flex-row items-start gap-4"
          >
            <div className="text-4xl bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center shrink-0">
              {doctor.photo}
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold m-0 mb-1">{doctor.name}</h2>
              <p className="text-primary font-medium m-0 mb-1 text-sm">
                {doctor.title}
              </p>
              <p className="text-gray-500 text-sm m-0 mb-1">
                {doctor.hospital}
              </p>
              <p className="text-gray-500 text-sm m-0 mb-2">
                {doctor.experience} years of experience
              </p>
              <div className="flex items-center gap-2 mb-3 text-sm font-bold">
                <span className="text-yellow-500">★ {doctor.rating}</span>
                {doctor.availableToday && (
                  <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-xs font-normal">
                    Available Today
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  className="bg-transparent text-primary border border-primary text-xs py-2 px-3 rounded flex-1 hover:bg-primary/5 transition-colors"
                  onClick={() => handleViewDoctor(doctor.id)}
                >
                  View Profile
                </button>
                <button
                  className="bg-primary text-white text-xs py-2 px-3 rounded flex-1 hover:opacity-90 transition-opacity"
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
