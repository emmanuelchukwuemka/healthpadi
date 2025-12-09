import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";

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
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-primary text-white pt-12 pb-24 px-6 rounded-b-[40px] shadow-lg mb-[-40px] relative z-0">
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              onClick={handleEditProfile}
              size="small"
              className="bg-white/20 text-white border-transparent hover:bg-white/30 backdrop-blur-md"
            >
              <Icon name="edit" />{" "}
              <span className="hidden sm:inline">Edit</span>
            </Button>
            <Button
              variant="secondary"
              onClick={handleLogout}
              size="small"
              className="bg-white/20 text-white border-transparent hover:bg-white/30 backdrop-blur-md"
            >
              <Icon name="logout" />{" "}
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
        <p className="opacity-90">Manage your health profile and settings</p>
      </div>

      <div className="px-4 max-w-4xl mx-auto relative z-10">
        <div className="bg-white p-2 rounded-xl shadow-lg flex mb-6 overflow-x-auto scrollbar-none">
          {["profile", "history", "appointments", "settings"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all whitespace-nowrap capitalize ${
                activeTab === tab
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.replace("history", "Health History")}
            </button>
          ))}
        </div>

        {activeTab === "profile" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <Card variant="elevated" className="overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 border-b border-gray-100">
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-4xl text-gray-400 border-4 border-white shadow-md">
                  <Icon name="user" size="large" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {user.name}
                  </h2>
                  <p className="text-gray-500 mb-4">{user.email}</p>
                  <Button
                    variant="primary"
                    size="small"
                    onClick={handleEditProfile}
                  >
                    <Icon name="edit" /> Edit Profile
                  </Button>
                </div>
              </div>

              <div className="p-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-3">
                  <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2">
                    Personal Information
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">
                        Phone Number
                      </span>
                      <span className="font-medium text-gray-800">
                        {user.phone}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">
                        Date of Birth
                      </span>
                      <span className="font-medium text-gray-800">
                        {user.dateOfBirth}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Blood Type</span>
                      <Badge variant="secondary">{user.bloodType}</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2">
                    Health Metrics
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Height</span>
                      <span className="font-medium text-gray-800">
                        {user.height}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Weight</span>
                      <span className="font-medium text-gray-800">
                        {user.weight}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2">
                    Emergency Contact
                  </h3>
                  <div className="space-y-2 bg-red-50 p-3 rounded-lg border border-red-100">
                    <div className="flex justify-between">
                      <span className="text-red-500 text-sm">Name</span>
                      <span className="font-medium text-gray-800">
                        {user.emergencyContact.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-500 text-sm">Relation</span>
                      <span className="font-medium text-gray-800">
                        {user.emergencyContact.relationship}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-500 text-sm">Phone</span>
                      <span className="font-medium text-gray-800">
                        {user.emergencyContact.phone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4 px-2">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: "health-record", label: "Health Records" },
                  { icon: "insurance", label: "Insurance" },
                  { icon: "medication", label: "Medications" },
                  { icon: "allergies", label: "Allergies" },
                ].map((action) => (
                  <Button
                    key={action.label}
                    variant="secondary"
                    className="bg-white border-transparent shadow-sm hover:shadow-md h-auto py-6 flex-col gap-3"
                  >
                    <div className="bg-blue-50 text-primary p-3 rounded-full text-xl">
                      <Icon name={action.icon} />
                    </div>
                    <span className="font-medium text-gray-700">
                      {action.label}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <h2 className="text-lg font-bold text-gray-800 px-2">
              Health History
            </h2>
            <div className="space-y-4">
              {healthHistory.map((record) => (
                <Card
                  key={record.id}
                  variant="outlined"
                  className="hover:border-primary transition-colors"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-start border-b border-gray-50 pb-3">
                      <h3 className="font-bold text-lg text-primary">
                        {record.type}
                      </h3>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {record.date}
                      </span>
                    </div>
                    <div className="grid gap-2 text-sm">
                      <p className="flex gap-2">
                        <strong className="min-w-[80px] text-gray-500">
                          Doctor:
                        </strong>
                        <span className="text-gray-800 font-medium">
                          {record.doctor}
                        </span>
                      </p>
                      <p className="flex gap-2">
                        <strong className="min-w-[80px] text-gray-500">
                          Diagnosis:
                        </strong>
                        <span className="text-gray-800">
                          {record.diagnosis}
                        </span>
                      </p>
                      {record.notes && (
                        <p className="flex gap-2">
                          <strong className="min-w-[80px] text-gray-500">
                            Notes:
                          </strong>
                          <span className="text-gray-600 italic bg-yellow-50 px-2 py-0.5 rounded flex-1">
                            {record.notes}
                          </span>
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
          <div className="space-y-4 animate-in fade-in duration-300">
            <h2 className="text-lg font-bold text-gray-800 px-2">
              Upcoming Appointments
            </h2>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <Card
                  key={appointment.id}
                  variant="elevated"
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-lg text-gray-800">
                        {appointment.doctor}
                      </h3>
                      <Badge
                        variant={
                          appointment.status === "Confirmed"
                            ? "success"
                            : "warning"
                        }
                      >
                        {appointment.status}
                      </Badge>
                    </div>

                    <div className="grid gap-3 text-sm border-y border-gray-100 py-3 my-1">
                      <div className="flex items-center gap-3">
                        <Icon
                          name="calendar"
                          className="text-primary w-5 text-center"
                        />
                        <span className="font-medium text-gray-700">
                          {appointment.date} at {appointment.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon
                          name="specialty"
                          className="text-primary w-5 text-center"
                        />
                        <span className="text-gray-600">
                          {appointment.specialty}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon
                          name="location"
                          className="text-primary w-5 text-center"
                        />
                        <span className="text-gray-600">
                          {appointment.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3 justify-end">
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
          <div className="space-y-4 animate-in fade-in duration-300">
            <h2 className="text-lg font-bold text-gray-800 px-2">
              Account Settings
            </h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Notifications",
                  desc: "Manage your notification preferences",
                  action: "Configure",
                },
                {
                  title: "Privacy",
                  desc: "Control who can see your health information",
                  action: "Manage",
                },
                {
                  title: "Security",
                  desc: "Update your password and security settings",
                  action: "Update",
                },
                {
                  title: "Payment Methods",
                  desc: "Manage your payment information",
                  action: "View",
                },
              ].map((setting) => (
                <Card
                  key={setting.title}
                  variant="outlined"
                  className="hover:border-primary transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-gray-800">
                        {setting.title}
                      </h3>
                      <p className="text-sm text-gray-500">{setting.desc}</p>
                    </div>
                    <Button variant="secondary" size="small">
                      {setting.action}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedProfileScreen;
