import React from "react";
import "@/App.css";

const Card = ({ children, variant = "elevated", className = "", ...props }) => {
  const baseClasses = "card";
  const variantClasses = `card-${variant}`;

  const classNames = [baseClasses, variantClasses, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default Card;
