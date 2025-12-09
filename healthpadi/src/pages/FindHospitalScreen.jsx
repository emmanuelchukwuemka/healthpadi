import React, { useState } from 'react';
import '../App.css';

const FindHospitalScreen = () => {
  const [viewMode, setViewMode] = useState('map'); // 'map' or 'list'
  const [filters, setFilters] = useState({
    distance: '',
    twentyFourHours: false,
    emergencyUnit: false,
    verified: false
  });

  // Mock hospital data
  const hospitals = [
    {
      id: 1,
      name: "General Hospital Ikeja",
      verified: true,
      distance: "2.5 km",
      address: "Plot 1, Isaac John Street, Ikeja",
      services: ["X-ray", "Laboratory", "Surgery", "Emergency"],
      type: "government",
      open24Hours: true,
      hasEmergency: true
    },
    {
      id: 2,
      name: "Lagos University Teaching Hospital",
      verified: true,
      distance: "5.2 km",
      address: "Ishaga Road, Idi Araba, Lagos",
      services: ["Cardiology", "Neurology", "Pediatrics", "Emergency"],
      type: "government",
      open24Hours: true,
      hasEmergency: true
    },
    {
      id: 3,
      name: "Premium Medical Centre",
      verified: true,
      distance: "3.8 km",
      address: "15 Admiralty Way, Lekki Phase 1",
      services: ["General Medicine", "Dentistry", "Laboratory"],
      type: "private",
      open24Hours: false,
      hasEmergency: false
    },
    {
      id: 4,
      name: "Faith Hospital",
      verified: false,
      distance: "7.1 km",
      address: "123 Main Street, Ajah",
      services: ["General Medicine", "Maternity", "Laboratory"],
      type: "private",
      open24Hours: true,
      hasEmergency: true
    }
  ];

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'map' ? 'list' : 'map');
  };

  // Filter hospitals based on selected filters
  const filteredHospitals = hospitals.filter(hospital => {
    if (filters.twentyFourHours && !hospital.open24Hours) return false;
    if (filters.emergencyUnit && !hospital.hasEmergency) return false;
    if (filters.verified && !hospital.verified) return false;
    return true;
  });

  const handleCallHospital = (hospitalName) => {
    alert(`Calling ${hospitalName}...`);
  };

  const handleNavigate = (hospitalName) => {
    alert(`Opening navigation to ${hospitalName}...`);
  };

  return (
    <div className="find-hospital-screen">
      <div className="hospital-header">
        <h1>Find Hospital / Clinic</h1>
        <button className="toggle-view-btn" onClick={toggleViewMode}>
          View {viewMode === 'map' ? 'List' : 'Map'}
        </button>
      </div>
      
      <div className="filters-section">
        <h3>Filters</h3>
        <div className="filters">
          <label>
            <input
              type="checkbox"
              checked={filters.twentyFourHours}
              onChange={(e) => handleFilterChange('twentyFourHours', e.target.checked)}
            />
            24 Hours
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.emergencyUnit}
              onChange={(e) => handleFilterChange('emergencyUnit', e.target.checked)}
            />
            Has Emergency Unit
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.verified}
              onChange={(e) => handleFilterChange('verified', e.target.checked)}
            />
            Verified
          </label>
        </div>
      </div>
      
      {viewMode === 'map' ? (
        <div className="map-view">
          <div className="map-placeholder">
            <p>Map showing your location and nearby hospitals</p>
            <p>(Google Maps or Mapbox integration would go here)</p>
          </div>
        </div>
      ) : (
        <div className="list-view">
          <div className="hospitals-list">
            {filteredHospitals.map(hospital => (
              <div key={hospital.id} className="hospital-card">
                <div className="hospital-info">
                  <div className="hospital-header">
                    <h2>{hospital.name}</h2>
                    {hospital.verified && (
                      <span className="verified-badge">Verified</span>
                    )}
                  </div>
                  <p className="hospital-distance">{hospital.distance}</p>
                  <p className="hospital-address">{hospital.address}</p>
                  <div className="hospital-services">
                    <strong>Services:</strong> {hospital.services.join(', ')}
                  </div>
                </div>
                <div className="hospital-actions">
                  <button 
                    className="call-btn"
                    onClick={() => handleCallHospital(hospital.name)}
                  >
                    Call
                  </button>
                  <button 
                    className="navigate-btn"
                    onClick={() => handleNavigate(hospital.name)}
                  >
                    Navigate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FindHospitalScreen;