import React from "react";
import "@/App.css";

const Input = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  helperText,
  fullWidth = true,
  className = "",
  ...props
}) => {
  const baseClasses = "input-field";
  const errorClass = error ? "input-error" : "";
  const widthClass = fullWidth ? "input-full-width" : "";

  const classNames = [baseClasses, errorClass, widthClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="input-container">
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={classNames}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {helperText && (
        <span className={`input-helper-text ${error ? "error" : ""}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
