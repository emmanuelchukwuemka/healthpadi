import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const FindHospitalScreen = () => {
  const [viewMode, setViewMode] = useState("map"); // 'map' or 'list'
  const [filters, setFilters] = useState({
    distance: "",
    twentyFourHours: false,
    emergencyUnit: false,
    verified: false,
  });

  // Mock hospital data with coordinates
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
      hasEmergency: true,
      position: [6.5931, 3.3461] // Latitude, Longitude
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
      hasEmergency: true,
      position: [6.5157, 3.3845]
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
      hasEmergency: false,
      position: [6.4313, 3.4856]
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
      hasEmergency: true,
      position: [6.4633, 3.5836]
    },
  ];

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "map" ? "list" : "map"));
  };

  // Filter hospitals based on selected filters
  const filteredHospitals = hospitals.filter((hospital) => {
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
    <div className="p-5 max-w-[800px] mx-auto">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold m-0">Find Hospital / Clinic</h1>
        <button
          className="bg-primary text-white py-2 px-4 text-sm rounded hover:bg-teal-600 transition-colors"
          onClick={toggleViewMode}
        >
          View {viewMode === "map" ? "List" : "Map"}
        </button>
      </div>

      <div className="bg-white rounded-xl p-5 mb-5 shadow-lg">
        <h3 className="m-0 font-semibold mb-2">Filters</h3>
        <div className="flex flex-wrap gap-4 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.twentyFourHours}
              onChange={(e) =>
                handleFilterChange("twentyFourHours", e.target.checked)
              }
            />
            24 Hours
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.emergencyUnit}
              onChange={(e) =>
                handleFilterChange("emergencyUnit", e.target.checked)
              }
            />
            Has Emergency Unit
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.verified}
              onChange={(e) => handleFilterChange("verified", e.target.checked)}
            />
            Verified
          </label>
        </div>
      </div>

      {viewMode === "map" ? (
        <div className="h-[500px] rounded-xl mb-5 overflow-hidden shadow-lg">
          <MapContainer 
            center={[6.5244, 3.3792]} // Center on Lagos
            zoom={12} 
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            {filteredHospitals.map((hospital) => (
              <Marker key={hospital.id} position={hospital.position}>
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold text-lg">{hospital.name}</h3>
                    <p className="text-sm text-gray-600">{hospital.address}</p>
                    <p className="text-sm mt-1">
                      <span className={`inline-block w-3 h-3 rounded-full mr-1 ${hospital.verified ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                      {hospital.verified ? 'Verified' : 'Not Verified'}
                    </p>
                    <div className="mt-2">
                      <button 
                        className="bg-primary text-white py-1 px-3 text-xs rounded mr-2"
                        onClick={() => handleCallHospital(hospital.name)}
                      >
                        Call
                      </button>
                      <button 
                        className="bg-gray-200 text-gray-800 py-1 px-3 text-xs rounded"
                        onClick={() => handleNavigate(hospital.name)}
                      >
                        Navigate
                      </button>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      ) : (
        <div className="list-view">
          <div className="flex flex-col gap-4">
            {filteredHospitals.map((hospital) => (
              <div
                key={hospital.id}
                className="bg-white rounded-xl p-5 shadow-lg flex flex-col md:flex-row justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-xl font-bold m-0">{hospital.name}</h2>
                    {hospital.verified && (
                      <span className="bg-primary text-white px-2 py-0.5 rounded-full text-xs">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 my-1">{hospital.distance}</p>
                  <p className="my-1">{hospital.address}</p>
                  <div className="mt-2 text-sm">
                    <strong>Services:</strong> {hospital.services.join(", ")}
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-w-[120px]">
                  <button
                    className="bg-primary text-white py-2 px-4 text-sm rounded w-full hover:opacity-90 transition-opacity"
                    onClick={() => handleCallHospital(hospital.name)}
                  >
                    Call
                  </button>
                  <button
                    className="bg-gray-100 text-text py-2 px-4 text-sm rounded w-full hover:bg-gray-200 transition-colors"
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