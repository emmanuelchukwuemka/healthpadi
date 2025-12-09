import React from "react";
import Card from "./Card";
import Button from "./Button";

const DoctorCard = ({
  doctor,
  onBookAppointment,
  onViewProfile,
  className = "",
  ...props
}) => {
  const baseClasses = "flex flex-col h-full";

  const classNames = [baseClasses, className].filter(Boolean).join(" ");

  return (
    <Card className={classNames} {...props}>
      <div className="flex gap-4 mb-4">
        <div className="shrink-0">
          {doctor.avatar ? (
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="w-16 h-16 rounded-full object-cover bg-gray-100"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
              {doctor.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg mb-1 truncate">{doctor.name}</h3>
          <p className="text-primary text-sm font-medium mb-1 truncate">
            {doctor.specialty}
          </p>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-yellow-400 flex">
              {"★".repeat(Math.floor(doctor.rating))}
              {"☆".repeat(5 - Math.floor(doctor.rating))}
            </span>
            <span className="text-gray-500 font-medium">({doctor.rating})</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700 mb-5 pb-4 border-b border-gray-100">
        <div className="col-span-1">
          <span className="text-gray-400 text-xs block mb-0.5">Experience</span>
          <span className="font-medium">{doctor.experience} years</span>
        </div>
        <div className="col-span-1">
          <span className="text-gray-400 text-xs block mb-0.5">Location</span>
          <span className="font-medium truncate block">{doctor.location}</span>
        </div>
        <div className="col-span-2 pt-2">
          <span className="text-gray-400 text-xs block mb-0.5">
            Consultation Fee
          </span>
          <span className="font-bold text-primary">${doctor.fee}</span>
        </div>
      </div>

      <div className="flex gap-2 mt-auto">
        <Button
          variant="outline"
          onClick={onViewProfile}
          className="flex-1 text-xs py-2 px-2"
        >
          View Profile
        </Button>
        <Button
          variant="primary"
          onClick={onBookAppointment}
          className="flex-1 text-xs py-2 px-2"
        >
          Book
        </Button>
      </div>
    </Card>
  );
};

export default DoctorCard;
