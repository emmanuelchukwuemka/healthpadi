import React from "react";

const Card = ({ children, variant = "elevated", className = "", ...props }) => {
  const baseClasses = "bg-white rounded-xl p-5";

  const variantClasses = {
    elevated: "shadow-lg",
    outlined: "border border-gray-200",
    flat: "bg-gray-50",
  };

  const classNames = [
    baseClasses,
    variantClasses[variant] || variantClasses.elevated,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default Card;
