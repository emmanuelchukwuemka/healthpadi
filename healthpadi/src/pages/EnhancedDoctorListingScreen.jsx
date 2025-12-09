import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorCard from '../design-system/DoctorCard';
import SearchBar from '../design-system/SearchBar';
import Button from '../design-system/Button';
import Icon from '../design-system/Icon';
import '../App.css';

const EnhancedDoctorListingScreen = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [sortBy, setSortBy] = useState('rating');

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
      avatar: null
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Pediatrician",
      rating: 4.9,
      experience: 8,
      location: "Children's Hospital",
      fee: 120,
      avatar: null
    },
    {
      id: 3,
      name: "Dr. Amanda Williams",
      specialty: "Dermatologist",
      rating: 4.7,
      experience: 15,
      location: "Skin Care Clinic",
      fee: 100,
      avatar: null
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      rating: 4.6,
      experience: 20,
      location: "Ortho Medical Center",
      fee: 200,
      avatar: null
    },
    {
      id: 5,
      name: "Dr. Emily Rodriguez",
      specialty: "General Practitioner",
      rating: 4.5,
      experience: 6,
      location: "Family Health Clinic",
      fee: 80,
      avatar: null
    },
    {
      id: 6,
      name: "Dr. Robert Thompson",
      specialty: "Neurologist",
      rating: 4.9,
      experience: 18,
      location: "Brain & Nerve Center",
      fee: 250,
      avatar: null
    }
  ];

  // Filter and sort doctors
  const filteredDoctors = doctors
    .filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
      const matchesLocation = !selectedLocation || doctor.location.includes(selectedLocation);
      
      return matchesSearch && matchesSpecialty && matchesLocation;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (sortBy === 'experience') {
        return b.experience - a.experience;
      } else if (sortBy === 'fee') {
        return a.fee - b.fee;
      }
      return 0;
    });

  // Get unique specialties and locations for filters
  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];
  const locations = [...new Set(doctors.map(doctor => doctor.location))];

  const handleBookAppointment = (doctorId) => {
    // Navigate to booking screen with doctor ID
    navigate(`/book-appointment/${doctorId}`);
  };

  const handleViewProfile = (doctorId) => {
    // Navigate to doctor profile screen
    navigate(`/doctor-profile/${doctorId}`);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedSpecialty('');
    setSelectedLocation('');
  };

  return (
    <div className="enhanced-doctor-listing-screen">
      <div className="doctor-listing-header">
        <h1>Find a Doctor</h1>
        <p>Browse and book appointments with top-rated healthcare professionals</p>
      </div>
      
      <div className="doctor-filters">
        <div className="filter-row">
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search doctors or specialties..."
            className="search-filter"
          />
          
          <select 
            value={selectedSpecialty} 
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="filter-select"
          >
            <option value="">All Specialties</option>
            {specialties.map(specialty => (
              <option key={specialty} value={specialty}>{specialty}</option>
            ))}
          </select>
          
          <select 
            value={selectedLocation} 
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="filter-select"
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
          
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="rating">Sort by Rating</option>
            <option value="experience">Sort by Experience</option>
            <option value="fee">Sort by Fee (Low to High)</option>
          </select>
          
          {(searchTerm || selectedSpecialty || selectedLocation) && (
            <Button variant="secondary" onClick={handleClearFilters} className="clear-filters-btn">
              Clear Filters
            </Button>
          )}
        </div>
      </div>
      
      <div className="doctor-results-summary">
        <p>Showing {filteredDoctors.length} of {doctors.length} doctors</p>
      </div>
      
      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(doctor => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookAppointment={() => handleBookAppointment(doctor.id)}
              onViewProfile={() => handleViewProfile(doctor.id)}
              className="doctor-card-item"
            />
          ))
        ) : (
          <div className="no-doctors-found">
            <Icon name="search" size="large" />
            <h3>No doctors found</h3>
            <p>Try adjusting your search criteria</p>
            <Button variant="primary" onClick={handleClearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
      
      <div className="booking-info-banner">
        <Icon name="info" />
        <p>All appointments are confirmed instantly. Cancellation policy applies.</p>
      </div>
    </div>
  );
};

export default EnhancedDoctorListingScreen;