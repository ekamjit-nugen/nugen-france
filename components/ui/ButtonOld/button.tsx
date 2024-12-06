// "use client";
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  fullWidth?: boolean;
  variant?: "default" | "destructive" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      title,
      className = "",
      fullWidth = false,
      variant = "default",
      size = "default",
      disabled = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-block overflow-hidden rounded-lg font-semibold transition-all duration-300 group";
    const fullWidthStyle = fullWidth ? "w-full" : "w-auto";
    const variantStyles = {
      default:
        "bg-[#87f9e4] text-black hover:bg-gradient-to-r hover:from-pink-700 hover:via-purple-700 hover:to-blue-700",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-200",
      link: "text-blue-600 underline hover:text-blue-800",
    }[variant];
    const sizeStyles = {
      default: "py-3 px-6 text-lg",
      sm: "py-2 px-4 text-sm",
      lg: "py-4 px-8 text-xl",
      icon: "p-3",
    }[size];

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          baseStyles,
          variantStyles,
          sizeStyles,
          fullWidthStyle,
          className,
          disabled ? "opacity-50 cursor-not-allowed" : ""
        )}
        {...props}
      >
        <span className="absolute inset-0 bg-[#6aebd3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        <span className="relative z-10">{title}</span>
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
