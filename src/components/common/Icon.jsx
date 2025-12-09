import React from "react";

const Icon = ({ name, size = "medium", color, className = "", ...props }) => {
  const baseClasses = "inline-block leading-none";

  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-xl",
  };

  const classNames = [
    baseClasses,
    sizeClasses[size] || sizeClasses.medium,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // For simplicity, we'll use emoji icons for now
  // In a real application, you might use SVG icons or a library like react-icons
  const iconMap = {
    home: "🏠",
    symptom: "🩺",
    hospital: "🏥",
    doctor: "👨‍⚕️",
    profile: "👤",
    emergency: "🚨",
    calendar: "📅",
    chat: "💬",
    search: "🔍",
    arrowBack: "⬅️",
    arrowForward: "➡️",
    close: "❌",
    check: "✅",
    warning: "⚠️",
    info: "ℹ️",
    spinner: "⚡", // Using a lightning bolt as placeholder for spinner
    google: "G", // Placeholder
    facebook: "f", // Placeholder
  };

  const icon = iconMap[name] || "🔹";

  return (
    <span className={classNames} style={{ color: color }} {...props}>
      {icon}
    </span>
  );
};

export default Icon;
