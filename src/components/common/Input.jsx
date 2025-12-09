import React from "react";

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
  const baseClasses =
    "border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow disabled:bg-gray-100 disabled:cursor-not-allowed";
  const errorClass = error ? "border-emergency focus:ring-emergency" : "";
  const widthClass = fullWidth ? "w-full" : "";

  const classNames = [baseClasses, errorClass, widthClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label htmlFor={id} className="mb-1 text-sm font-medium text-text">
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
        <span
          className={`mt-1 text-xs ${
            error ? "text-emergency" : "text-gray-500"
          }`}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
