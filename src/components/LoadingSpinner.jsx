import React from 'react';

const LoadingSpinner = ({ 
  size = "md", 
  color = "blue", 
  className = "" 
}) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8", 
    lg: "h-12 w-12",
    xl: "h-16 w-16"
  };

  const colorClasses = {
    blue: "border-blue-600",
    purple: "border-purple-600",
    gray: "border-gray-600",
    white: "border-white"
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div 
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-2 ${sizeClasses[size]} ${colorClasses[color]}`}
      ></div>
    </div>
  );
};

export default LoadingSpinner; 