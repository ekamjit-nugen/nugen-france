import React from "react";

interface ButtonType {
  title: string;
  onClick?: () => void; 
  className?: string; 
  fullWidth?: boolean; 
}

const Button: React.FC<ButtonType> = ({ title, onClick, className = "", fullWidth = false }) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-block bg-sky-400 text-white py-3 px-6 rounded-lg overflow-hidden text-lg font-semibold transition-all duration-300 hover:bg-sky-700 group ${
        fullWidth ? "w-full" : "w-auto"
      } ${className}`}
    >
      <span className="absolute inset-0 bg-sky-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      <span className="relative z-10">{title}</span>
    </button>
  );
}

export default Button;
