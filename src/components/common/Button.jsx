import React from "react";
import "@/App.css";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseClasses = "btn";
  const variantClasses = `btn-${variant}`;
  const sizeClasses = `btn-${size}`;
  const widthClass = fullWidth ? "btn-full-width" : "";
  const disabledClass = disabled ? "btn-disabled" : "";

  const classNames = [
    baseClasses,
    variantClasses,
    sizeClasses,
    widthClass,
    disabledClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
