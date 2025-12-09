import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorCard from "@/components/common/DoctorCard";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import SearchBar from "@/components/common/SearchBar";

const EnhancedDoctorListingScreen = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  // Mock doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.8,
      experience: 12,
      location: "Central Medical Center",
      fee: 150,
      avatar: null,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Pediatrician",
      rating: 4.9,
      experience: 8,
      location: "Children's Hospital",
      fee: 120,
      avatar: null,
    },
    {
      id: 3,
      name: "Dr. Amanda Williams",
      specialty: "Dermatologist",
      rating: 4.7,
      experience: 15,
      location: "Skin Care Clinic",
      fee: 100,
      avatar: null,
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      rating: 4.6,
      experience: 20,
      location: "Ortho Medical Center",
      fee: 200,
      avatar: null,
    },
    {
      id: 5,
      name: "Dr. Emily Rodriguez",
      specialty: "General Practitioner",
      rating: 4.5,
      experience: 6,
      location: "Family Health Clinic",
      fee: 80,
      avatar: null,
    },
    {
      id: 6,
      name: "Dr. Robert Thompson",
      specialty: "Neurologist",
      rating: 4.9,
      experience: 18,
      location: "Brain & Nerve Center",
      fee: 250,
      avatar: null,
    },
  ];

  // Filter and sort doctors
  const filteredDoctors = doctors
    .filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty =
        !selectedSpecialty || doctor.specialty === selectedSpecialty;
      const matchesLocation =
        !selectedLocation || doctor.location.includes(selectedLocation);

      return matchesSearch && matchesSpecialty && matchesLocation;
    })
    .sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating;
      } else if (sortBy === "experience") {
        return b.experience - a.experience;
      } else if (sortBy === "fee") {
        return a.fee - b.fee;
      }
      return 0;
    });

  // Get unique specialties and locations for filters
  const specialties = [...new Set(doctors.map((doctor) => doctor.specialty))];
  const locations = [...new Set(doctors.map((doctor) => doctor.location))];

  const handleBookAppointment = (doctorId) => {
    // Navigate to booking screen with doctor ID
    navigate(`/book-appointment/${doctorId}`);
  };

  const handleViewProfile = (doctorId) => {
    // Navigate to doctor profile screen
    navigate(`/doctor-profile/${doctorId}`);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedSpecialty("");
    setSelectedLocation("");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-primary text-white pt-12 pb-24 px-6 rounded-b-[40px] shadow-lg mb-[-40px] relative z-0">
        <h1 className="text-2xl font-bold mb-2">Find a Doctor</h1>
        <p className="opacity-90 max-w-md">
          Browse and book appointments with top-rated healthcare professionals
        </p>
      </div>

      <div className="px-4 max-w-4xl mx-auto relative z-10">
        <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col md:flex-row gap-4">
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search doctors or specialties..."
            className="flex-1 min-w-[200px]"
          />

          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="bg-gray-50 border-none rounded-lg px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer min-w-[140px]"
            >
              <option value="">All Specialties</option>
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-gray-50 border-none rounded-lg px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer min-w-[140px]"
            >
              <option value="">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-50 border-none rounded-lg px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer min-w-[140px]"
            >
              <option value="rating">Sort by Rating</option>
              <option value="experience">Sort by Experience</option>
              <option value="fee">Sort by Fee (Low to High)</option>
            </select>
          </div>

          {(searchTerm || selectedSpecialty || selectedLocation) && (
            <Button
              variant="secondary"
              onClick={handleClearFilters}
              className="whitespace-nowrap md:w-auto w-full"
            >
              Clear Filters
            </Button>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-8 mb-4 text-gray-500 text-sm font-medium">
        <p>
          Showing {filteredDoctors.length} of {doctors.length} doctors
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 pb-8">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookAppointment={() => handleBookAppointment(doctor.id)}
              onViewProfile={() => handleViewProfile(doctor.id)}
              className="h-full"
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
            <div className="text-6xl text-gray-200 mb-4">
              <Icon name="search" size="large" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              No doctors found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search criteria
            </p>
            <Button variant="primary" onClick={handleClearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-blue-50 text-blue-700 p-4 rounded-xl flex items-center gap-3 text-sm border border-blue-100">
          <Icon name="info" />
          <p>
            All appointments are confirmed instantly. Cancellation policy
            applies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedDoctorListingScreen;
