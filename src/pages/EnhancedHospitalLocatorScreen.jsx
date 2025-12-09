import React, { useState } from "react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Icon from "@/components/common/Icon";
import "../App.css";

const EnhancedHospitalLocatorScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [mapView, setMapView] = useState("list"); // 'list' or 'map'

  // Mock hospital data
  const hospitals = [
    {
      id: 1,
      name: "Central General Hospital",
      address: "123 Main Street, Downtown",
      distance: "0.5 miles",
      rating: 4.5,
      phone: "(555) 123-4567",
      services: ["Emergency", "Cardiology", "Pediatrics", "Orthopedics"],
      hours: "Open 24/7",
      waitTime: "15 mins",
    },
    {
      id: 2,
      name: "Community Medical Center",
      address: "456 Oak Avenue, Midtown",
      distance: "1.2 miles",
      rating: 4.2,
      phone: "(555) 234-5678",
      services: ["Emergency", "Dermatology", "Oncology"],
      hours: "Open 24/7",
      waitTime: "30 mins",
    },
    {
      id: 3,
      name: "Specialty Heart Institute",
      address: "789 Pine Road, Uptown",
      distance: "2.1 miles",
      rating: 4.8,
      phone: "(555) 345-6789",
      services: ["Cardiology", "Cardiac Surgery"],
      hours: "Mon-Fri: 8AM-6PM",
      waitTime: "45 mins",
    },
    {
      id: 4,
      name: "Children's Hospital",
      address: "321 Elm Street, Suburbia",
      distance: "3.5 miles",
      rating: 4.7,
      phone: "(555) 456-7890",
      services: ["Pediatrics", "Neonatology", "Child Psychology"],
      hours: "Open 24/7",
      waitTime: "20 mins",
    },
    {
      id: 5,
      name: "Regional Trauma Center",
      address: "654 Maple Drive, Outskirts",
      distance: "5.2 miles",
      rating: 4.6,
      phone: "(555) 567-8901",
      services: ["Emergency", "Trauma", "Neurosurgery"],
      hours: "Open 24/7",
      waitTime: "10 mins",
    },
  ];

  // Filter hospitals based on search term
  const filteredHospitals = hospitals.filter(
    (hospital) =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.services.some((service) =>
        service.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleCallHospital = (phoneNumber) => {
    // In a real app, this would initiate a phone call
    alert(`Calling ${phoneNumber}...`);
  };

  const handleGetDirections = (address) => {
    // In a real app, this would open maps with directions
    alert(`Getting directions to ${address}...`);
  };

  const toggleMapView = () => {
    setMapView(mapView === "list" ? "map" : "list");
  };

  const selectHospital = (hospital) => {
    setSelectedHospital(hospital);
  };

  const closeHospitalDetails = () => {
    setSelectedHospital(null);
  };

  return (
    <div className="enhanced-hospital-locator-screen">
      <div className="hospital-locator-header">
        <h1>Find Hospitals & Clinics</h1>
        <p>Locate nearby medical facilities and get directions</p>
      </div>

      <div className="hospital-search-controls">
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search hospitals, services, or locations..."
          className="hospital-search-bar"
        />

        <div className="view-toggle">
          <Button
            variant={mapView === "list" ? "primary" : "secondary"}
            onClick={() => setMapView("list")}
            className="view-toggle-btn"
          >
            <Icon name="list" /> List View
          </Button>
          <Button
            variant={mapView === "map" ? "primary" : "secondary"}
            onClick={() => setMapView("map")}
            className="view-toggle-btn"
          >
            <Icon name="map" /> Map View
          </Button>
        </div>
      </div>

      <div className="hospital-results-summary">
        <p>
          Showing {filteredHospitals.length} of {hospitals.length} hospitals
        </p>
      </div>

      {mapView === "list" ? (
        <div className="hospital-list">
          {filteredHospitals.map((hospital) => (
            <Card
              key={hospital.id}
              variant="elevated"
              className="hospital-card"
            >
              <div className="hospital-card-content">
                <div className="hospital-header">
                  <h3>{hospital.name}</h3>
                  <div className="hospital-rating">
                    <Icon name="star" />
                    <span>{hospital.rating}</span>
                  </div>
                </div>

                <div className="hospital-details">
                  <div className="hospital-address">
                    <Icon name="location" />
                    <span>{hospital.address}</span>
                  </div>

                  <div className="hospital-distance">
                    <Icon name="distance" />
                    <span>{hospital.distance} away</span>
                  </div>

                  <div className="hospital-wait-time">
                    <Icon name="clock" />
                    <span>Current wait: {hospital.waitTime}</span>
                  </div>
                </div>

                <div className="hospital-services">
                  <h4>Services:</h4>
                  <div className="services-tags">
                    {hospital.services.slice(0, 3).map((service, index) => (
                      <span key={index} className="service-tag">
                        {service}
                      </span>
                    ))}
                    {hospital.services.length > 3 && (
                      <span className="service-tag">
                        +{hospital.services.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="hospital-hours">
                  <Icon name="calendar" />
                  <span>{hospital.hours}</span>
                </div>

                <div className="hospital-actions">
                  <Button
                    variant="secondary"
                    onClick={() => handleCallHospital(hospital.phone)}
                    className="action-btn"
                  >
                    <Icon name="call" /> Call
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handleGetDirections(hospital.address)}
                    className="action-btn"
                  >
                    <Icon name="directions" /> Directions
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => selectHospital(hospital)}
                    className="action-btn"
                  >
                    <Icon name="info" /> Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="map-view-container">
          <div className="map-placeholder">
            <Icon name="map" size="large" />
            <h3>Interactive Map View</h3>
            <p>
              Hospital locations would be displayed on an interactive map in a
              production environment
            </p>
            <div className="map-legend">
              <div className="legend-item">
                <div className="legend-color emergency"></div>
                <span>Emergency Room</span>
              </div>
              <div className="legend-item">
                <div className="legend-color specialist"></div>
                <span>Specialist Clinic</span>
              </div>
              <div className="legend-item">
                <div className="legend-color general"></div>
                <span>General Hospital</span>
              </div>
            </div>
          </div>

          <div className="map-sidebar">
            <h3>Nearby Hospitals</h3>
            {filteredHospitals.map((hospital) => (
              <Card
                key={hospital.id}
                variant="outlined"
                className="sidebar-hospital-card"
              >
                <div className="sidebar-hospital-content">
                  <h4>{hospital.name}</h4>
                  <div className="sidebar-hospital-distance">
                    <Icon name="distance" />
                    <span>{hospital.distance}</span>
                  </div>
                  <div className="sidebar-hospital-rating">
                    <Icon name="star" />
                    <span>{hospital.rating}</span>
                  </div>
                  <Button
                    variant="primary"
                    size="small"
                    onClick={() => selectHospital(hospital)}
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {selectedHospital && (
        <div className="hospital-detail-overlay" onClick={closeHospitalDetails}>
          <div
            className="hospital-detail-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>{selectedHospital.name}</h2>
              <Button
                variant="icon"
                onClick={closeHospitalDetails}
                className="close-button"
              >
                <Icon name="close" />
              </Button>
            </div>

            <div className="modal-content">
              <div className="hospital-detail-content">
                <div className="detail-section">
                  <h3>
                    <Icon name="location" /> Address
                  </h3>
                  <p>{selectedHospital.address}</p>
                </div>

                <div className="detail-section">
                  <h3>
                    <Icon name="phone" /> Contact
                  </h3>
                  <p>{selectedHospital.phone}</p>
                </div>

                <div className="detail-section">
                  <h3>
                    <Icon name="clock" /> Hours
                  </h3>
                  <p>{selectedHospital.hours}</p>
                </div>

                <div className="detail-section">
                  <h3>
                    <Icon name="services" /> Services
                  </h3>
                  <div className="services-grid">
                    {selectedHospital.services.map((service, index) => (
                      <div key={index} className="service-item">
                        <Icon name="check" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="detail-section">
                  <h3>
                    <Icon name="info" /> Current Information
                  </h3>
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="info-label">Rating:</span>
                      <span className="info-value">
                        <Icon name="star" />
                        {selectedHospital.rating}
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Distance:</span>
                      <span className="info-value">
                        {selectedHospital.distance}
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Wait Time:</span>
                      <span className="info-value">
                        {selectedHospital.waitTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="modal-actions">
                  <Button
                    variant="primary"
                    onClick={() => handleCallHospital(selectedHospital.phone)}
                    className="modal-action-btn"
                  >
                    <Icon name="call" /> Call Hospital
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() =>
                      handleGetDirections(selectedHospital.address)
                    }
                    className="modal-action-btn"
                  >
                    <Icon name="directions" /> Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedHospitalLocatorScreen;
