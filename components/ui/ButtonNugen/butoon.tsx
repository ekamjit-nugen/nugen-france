import React from "react";

interface ButtonType {
  title: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonType> = ({
  title,
  onClick,
  className = "",
  fullWidth = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-block bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white hover:text-white py-3 px-6 rounded-lg overflow-hidden text-lg font-semibold transition-all duration-300 hover:from-pink-700 hover:via-purple-700 hover:to-blue-700 group ${
        fullWidth ? "w-full" : "w-auto"
      } ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left text-white"></span>
      <span className="relative z-10">{title}</span>
    </button>
  );
};

export default Button;
