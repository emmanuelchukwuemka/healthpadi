import React from "react";

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-[200px]">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-primary rounded-full animate-spin mb-4"></div>
      <p className="text-gray-500 font-medium text-sm animate-pulse">
        {message}
      </p>
    </div>
  );
};

export default LoadingSpinner;
