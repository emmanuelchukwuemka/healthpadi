import React from "react";
import Card from "./Card";
import Button from "./Button";
import Badge from "./Badge";
import "@/App.css";

const DoctorCard = ({
  doctor,
  onBookAppointment,
  onViewProfile,
  className = "",
  ...props
}) => {
  const baseClasses = "doctor-card";

  const classNames = [baseClasses, className].filter(Boolean).join(" ");

  return (
    <Card className={classNames} {...props}>
      <div className="doctor-card-header">
        <div className="doctor-avatar">
          {doctor.avatar ? (
            <img src={doctor.avatar} alt={doctor.name} />
          ) : (
            <div className="doctor-initials">
              {doctor.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
          )}
        </div>
        <div className="doctor-info">
          <h3 className="doctor-name">{doctor.name}</h3>
          <p className="doctor-specialty">{doctor.specialty}</p>
          <div className="doctor-rating">
            <span className="rating-stars">
              {"★".repeat(Math.floor(doctor.rating))}
              {"☆".repeat(5 - Math.floor(doctor.rating))}
            </span>
            <span className="rating-value">({doctor.rating})</span>
          </div>
        </div>
      </div>

      <div className="doctor-details">
        <div className="doctor-experience">
          <span className="detail-label">Experience:</span>
          <span className="detail-value">{doctor.experience} years</span>
        </div>
        <div className="doctor-location">
          <span className="detail-label">Location:</span>
          <span className="detail-value">{doctor.location}</span>
        </div>
        <div className="doctor-fee">
          <span className="detail-label">Fee:</span>
          <span className="detail-value">${doctor.fee}</span>
        </div>
      </div>

      <div className="doctor-actions">
        <Button
          variant="secondary"
          onClick={onViewProfile}
          className="view-profile-btn"
        >
          View Profile
        </Button>
        <Button
          variant="primary"
          onClick={onBookAppointment}
          className="book-btn"
        >
          Book Appointment
        </Button>
      </div>
    </Card>
  );
};

export default DoctorCard;
