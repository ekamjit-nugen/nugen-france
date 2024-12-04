import React from "react";

interface ButtonType {
  title: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  type?: string
  disabled?: boolean
}

const Button: React.FC<ButtonType> = ({
  title,
  onClick,
  className = "",
  fullWidth = false,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-block bg-[#87f9e4] text-black hover:text-black py-3 px-6 rounded-lg overflow-hidden text-lg font-semibold transition-all duration-300 hover:from-pink-700 hover:via-purple-700 hover:to-blue-700 group ${
        fullWidth ? "w-full" : "w-auto"
      } ${className}`}
    >
      <span className="absolute inset-0 bg-[#6aebd3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left text-black"></span>
      <span className="relative z-10">{title}</span>
    </button>
  );
};

export default Button;
