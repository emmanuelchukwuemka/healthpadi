import React from "react";
import "@/App.css";

const Icon = ({ name, size = "medium", color, className = "", ...props }) => {
  const baseClasses = "icon";
  const sizeClasses = `icon-${size}`;

  const classNames = [baseClasses, sizeClasses, className]
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
  };

  const icon = iconMap[name] || "🔹";

  return (
    <span className={classNames} style={{ color: color }} {...props}>
      {icon}
    </span>
  );
};

export default Icon;
