import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import "../App.css";

const EnhancedProfileScreen = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  // Mock user data
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-05-15",
    bloodType: "O+",
    height: "5'10\"",
    weight: "165 lbs",
    emergencyContact: {
      name: "Sarah Johnson",
      relationship: "Spouse",
      phone: "+1 (555) 987-6543",
    },
  };

  // Mock health history
  const healthHistory = [
    {
      id: 1,
      date: "2023-10-15",
      type: "Check-up",
      doctor: "Dr. Smith",
      diagnosis: "Routine check-up - all vitals normal",
      notes: "Patient reported occasional headaches",
    },
    {
      id: 2,
      date: "2023-08-22",
      type: "Vaccination",
      doctor: "Dr. Williams",
      diagnosis: "Flu shot administered",
      notes: "No adverse reactions",
    },
    {
      id: 3,
      date: "2023-06-10",
      type: "Consultation",
      doctor: "Dr. Chen",
      diagnosis: "Mild allergy symptoms",
      notes: "Prescribed antihistamine",
    },
  ];

  // Mock appointments
  const appointments = [
    {
      id: 1,
      date: "2023-11-20",
      time: "10:30 AM",
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      location: "Central Medical Center",
      status: "Confirmed",
    },
    {
      id: 2,
      date: "2023-12-05",
      time: "2:15 PM",
      doctor: "Dr. Michael Chen",
      specialty: "Pediatrician",
      location: "Children's Hospital",
      status: "Pending",
    },
  ];

  const handleEditProfile = () => {
    // Navigate to profile edit screen
    navigate("/edit-profile");
  };

  const handleLogout = () => {
    // In a real app, this would log the user out
    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/");
    }
  };

  const handleCancelAppointment = (appointmentId) => {
    // In a real app, this would cancel the appointment
    alert(`Appointment #${appointmentId} has been canceled.`);
  };

  return (
    <div className="enhanced-profile-screen">
      <div className="profile-header">
        <h1>My Profile</h1>
        <div className="header-actions">
          <Button variant="secondary" onClick={handleEditProfile}>
            <Icon name="edit" /> Edit Profile
          </Button>
          <Button variant="secondary" onClick={handleLogout}>
            <Icon name="logout" /> Logout
          </Button>
        </div>
      </div>

      <div className="profile-tabs">
        <button
          className={`tab ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`tab ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          Health History
        </button>
        <button
          className={`tab ${activeTab === "appointments" ? "active" : ""}`}
          onClick={() => setActiveTab("appointments")}
        >
          Appointments
        </button>
        <button
          className={`tab ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>
      </div>

      {activeTab === "profile" && (
        <div className="profile-content">
          <Card variant="elevated" className="profile-card">
            <div className="profile-card-header">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <Icon name="user" size="large" />
                </div>
                <div className="profile-basic-info">
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </div>
              <Button variant="primary" onClick={handleEditProfile}>
                <Icon name="edit" /> Edit Profile
              </Button>
            </div>

            <div className="profile-details">
              <div className="detail-section">
                <h3>Personal Information</h3>
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="detail-label">Phone Number</span>
                    <span className="detail-value">{user.phone}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Date of Birth</span>
                    <span className="detail-value">{user.dateOfBirth}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Blood Type</span>
                    <span className="detail-value">{user.bloodType}</span>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>Health Metrics</h3>
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="detail-label">Height</span>
                    <span className="detail-value">{user.height}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Weight</span>
                    <span className="detail-value">{user.weight}</span>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>Emergency Contact</h3>
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="detail-label">Name</span>
                    <span className="detail-value">
                      {user.emergencyContact.name}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Relationship</span>
                    <span className="detail-value">
                      {user.emergencyContact.relationship}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Phone</span>
                    <span className="detail-value">
                      {user.emergencyContact.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="quick-actions">
            <h3>Quick Actions</h3>
            <div className="actions-grid">
              <Button variant="secondary" className="action-button">
                <Icon name="health-record" /> Health Records
              </Button>
              <Button variant="secondary" className="action-button">
                <Icon name="insurance" /> Insurance
              </Button>
              <Button variant="secondary" className="action-button">
                <Icon name="medication" /> Medications
              </Button>
              <Button variant="secondary" className="action-button">
                <Icon name="allergies" /> Allergies
              </Button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "history" && (
        <div className="history-content">
          <h2>Health History</h2>
          <div className="history-list">
            {healthHistory.map((record) => (
              <Card key={record.id} variant="outlined" className="history-card">
                <div className="history-card-content">
                  <div className="history-header">
                    <h3>{record.type}</h3>
                    <span className="history-date">{record.date}</span>
                  </div>
                  <div className="history-details">
                    <p>
                      <strong>Doctor:</strong> {record.doctor}
                    </p>
                    <p>
                      <strong>Diagnosis:</strong> {record.diagnosis}
                    </p>
                    {record.notes && (
                      <p>
                        <strong>Notes:</strong> {record.notes}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === "appointments" && (
        <div className="appointments-content">
          <h2>Upcoming Appointments</h2>
          <div className="appointments-list">
            {appointments.map((appointment) => (
              <Card
                key={appointment.id}
                variant="elevated"
                className="appointment-card"
              >
                <div className="appointment-card-content">
                  <div className="appointment-header">
                    <h3>{appointment.doctor}</h3>
                    <Badge
                      variant={
                        appointment.status === "Confirmed"
                          ? "success"
                          : "warning"
                      }
                      className="appointment-status"
                    >
                      {appointment.status}
                    </Badge>
                  </div>
                  <div className="appointment-details">
                    <div className="detail-row">
                      <Icon name="calendar" />
                      <span>
                        {appointment.date} at {appointment.time}
                      </span>
                    </div>
                    <div className="detail-row">
                      <Icon name="specialty" />
                      <span>{appointment.specialty}</span>
                    </div>
                    <div className="detail-row">
                      <Icon name="location" />
                      <span>{appointment.location}</span>
                    </div>
                  </div>
                  <div className="appointment-actions">
                    <Button variant="secondary" size="small">
                      <Icon name="edit" /> Reschedule
                    </Button>
                    <Button
                      variant="danger"
                      size="small"
                      onClick={() => handleCancelAppointment(appointment.id)}
                    >
                      <Icon name="cancel" /> Cancel
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === "settings" && (
        <div className="settings-content">
          <h2>Account Settings</h2>
          <div className="settings-list">
            <Card variant="outlined" className="setting-card">
              <div className="setting-content">
                <div className="setting-info">
                  <h3>Notifications</h3>
                  <p>Manage your notification preferences</p>
                </div>
                <Button variant="secondary">Configure</Button>
              </div>
            </Card>

            <Card variant="outlined" className="setting-card">
              <div className="setting-content">
                <div className="setting-info">
                  <h3>Privacy</h3>
                  <p>Control who can see your health information</p>
                </div>
                <Button variant="secondary">Manage</Button>
              </div>
            </Card>

            <Card variant="outlined" className="setting-card">
              <div className="setting-content">
                <div className="setting-info">
                  <h3>Security</h3>
                  <p>Update your password and security settings</p>
                </div>
                <Button variant="secondary">Update</Button>
              </div>
            </Card>

            <Card variant="outlined" className="setting-card">
              <div className="setting-content">
                <div className="setting-info">
                  <h3>Payment Methods</h3>
                  <p>Manage your payment information</p>
                </div>
                <Button variant="secondary">View</Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedProfileScreen;
