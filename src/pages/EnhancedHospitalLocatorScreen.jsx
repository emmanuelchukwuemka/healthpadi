import React, { useState } from "react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Icon from "@/components/common/Icon";
import SearchBar from "@/components/common/SearchBar";

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
    <div className="min-h-screen bg-gray-50 flex flex-col pb-20">
      <div className="bg-primary text-white pt-12 pb-24 px-6 rounded-b-[40px] shadow-lg mb-[-40px] relative z-0 flex-none">
        <h1 className="text-2xl font-bold mb-2">Find Hospitals & Clinics</h1>
        <p className="opacity-90 max-w-md">
          Locate nearby medical facilities and get directions
        </p>
      </div>

      <div className="px-4 max-w-4xl mx-auto relative z-10 w-full mb-6">
        <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col gap-4">
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search hospitals, services, or locations..."
            className="w-full"
          />

          <div className="flex bg-gray-100 p-1 rounded-lg self-center">
            <Button
              variant={mapView === "list" ? "primary" : "ghost"}
              onClick={() => setMapView("list")}
              className={`flex-1 rounded-md py-2 px-6 text-sm font-medium transition-all ${
                mapView === "list"
                  ? "shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon name="list" className="mr-2" /> List View
            </Button>
            <Button
              variant={mapView === "map" ? "primary" : "ghost"}
              onClick={() => setMapView("map")}
              className={`flex-1 rounded-md py-2 px-6 text-sm font-medium transition-all ${
                mapView === "map"
                  ? "shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon name="map" className="mr-2" /> Map View
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mb-4 text-gray-500 text-sm font-medium w-full">
        <p>
          Showing {filteredHospitals.length} of {hospitals.length} hospitals
        </p>
      </div>

      {mapView === "list" ? (
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 pb-8 w-full">
          {filteredHospitals.map((hospital) => (
            <Card
              key={hospital.id}
              variant="elevated"
              className="flex flex-col h-full hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg text-gray-800 leading-tight">
                    {hospital.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded-lg text-sm font-bold shrink-0">
                    <Icon name="star" className="text-yellow-500" />
                    <span>{hospital.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <Icon
                      name="location"
                      className="text-primary mt-0.5 shrink-0"
                    />
                    <span className="line-clamp-2">{hospital.address}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icon name="distance" className="text-primary shrink-0" />
                    <span>{hospital.distance} away</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icon name="clock" className="text-primary shrink-0" />
                    <span className="font-medium text-green-600">
                      Wait time: {hospital.waitTime}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Services:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {hospital.services.slice(0, 3).map((service, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {service}
                      </span>
                    ))}
                    {hospital.services.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        +{hospital.services.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 p-2 rounded-lg mb-4">
                  <Icon name="calendar" className="text-green-600" />
                  <span className="font-medium">{hospital.hours}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-auto">
                  <Button
                    variant="secondary"
                    size="small"
                    onClick={() => handleCallHospital(hospital.phone)}
                    className="justify-center"
                  >
                    <Icon name="call" />{" "}
                    <span className="hidden sm:inline ml-1">Call</span>
                  </Button>
                  <Button
                    variant="secondary"
                    size="small"
                    onClick={() => handleGetDirections(hospital.address)}
                    className="justify-center"
                  >
                    <Icon name="directions" />{" "}
                    <span className="hidden sm:inline ml-1">Map</span>
                  </Button>
                  <Button
                    variant="primary"
                    size="small"
                    onClick={() => selectHospital(hospital)}
                    className="justify-center"
                  >
                    <Icon name="info" /> Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-4 w-full h-[60vh] flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 bg-gray-200 rounded-xl relative overflow-hidden flex flex-col items-center justify-center border border-gray-300">
            <Icon
              name="map"
              size="large"
              className="text-gray-400 mb-4 text-6xl"
            />
            <h3 className="text-xl font-bold text-gray-600 mb-2">
              Interactive Map View
            </h3>
            <p className="text-gray-500 text-center max-w-xs mb-6">
              Hospital locations would be displayed on an interactive map in a
              production environment
            </p>
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md text-xs space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>Emergency Room</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Specialist Clinic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>General Hospital</span>
              </div>
            </div>
          </div>

          <div className="h-48 md:h-full md:w-80 flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-3 border-b border-gray-100 bg-gray-50">
              <h3 className="font-bold text-gray-700">Nearby Hospitals</h3>
            </div>
            <div className="overflow-y-auto p-3 space-y-3 flex-1">
              {filteredHospitals.map((hospital) => (
                <div
                  key={hospital.id}
                  className="bg-white border border-gray-200 rounded-lg p-3 hover:border-primary cursor-pointer transition-colors"
                  onClick={() => selectHospital(hospital)}
                >
                  <h4 className="font-bold text-sm text-gray-800 mb-1 line-clamp-1">
                    {hospital.name}
                  </h4>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Icon name="distance" className="text-[10px]" />{" "}
                      {hospital.distance}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-600 font-medium">
                      <Icon name="star" className="text-[10px]" />{" "}
                      {hospital.rating}
                    </span>
                  </div>
                  <Button
                    variant="secondary"
                    size="small"
                    className="w-full text-xs h-7 min-h-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      selectHospital(hospital);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedHospital && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeHospitalDetails}
        >
          <div
            className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-300 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-100 shrink-0">
              <h2 className="text-xl font-bold line-clamp-1 pr-4">
                {selectedHospital.name}
              </h2>
              <Button
                variant="ghost"
                onClick={closeHospitalDetails}
                className="w-8 h-8 rounded-full p-0 flex items-center justify-center hover:bg-gray-100 shrink-0"
              >
                <Icon name="close" />
              </Button>
            </div>

            <div className="overflow-y-auto p-6">
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider">
                    <Icon name="location" className="text-primary" /> Address
                  </h3>
                  <p className="text-gray-800 pl-6">
                    {selectedHospital.address}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider">
                    <Icon name="phone" className="text-primary" /> Contact
                  </h3>
                  <p className="text-gray-800 pl-6 font-medium text-lg">
                    {selectedHospital.phone}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider">
                    <Icon name="clock" className="text-primary" /> Hours
                  </h3>
                  <p className="text-green-700 bg-green-50 inline-block px-3 py-1 rounded-lg ml-6 self-start font-medium">
                    {selectedHospital.hours}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider">
                    <Icon name="services" className="text-primary" /> Services
                  </h3>
                  <div className="grid grid-cols-2 gap-2 pl-6">
                    {selectedHospital.services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 px-2 py-1.5 rounded"
                      >
                        <Icon name="check" className="text-green-500 text-xs" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-blue-800 mb-3">
                    <Icon name="info" /> Current Information
                  </h3>
                  <div className="grid grid-cols-3 gap-4 text-center divide-x divide-blue-200">
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-blue-600 mb-1 uppercase font-semibold">
                        Rating
                      </span>
                      <span className="font-bold text-gray-800 flex items-center gap-1">
                        <Icon name="star" className="text-yellow-500" />
                        {selectedHospital.rating}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-blue-600 mb-1 uppercase font-semibold">
                        Dist
                      </span>
                      <span className="font-bold text-gray-800">
                        {selectedHospital.distance}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-blue-600 mb-1 uppercase font-semibold">
                        Wait
                      </span>
                      <span className="font-bold text-green-600">
                        {selectedHospital.waitTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Button
                    variant="primary"
                    onClick={() => handleCallHospital(selectedHospital.phone)}
                    className="justify-center h-12 shadow-md"
                  >
                    <Icon name="call" /> Call Hospital
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() =>
                      handleGetDirections(selectedHospital.address)
                    }
                    className="justify-center h-12"
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
