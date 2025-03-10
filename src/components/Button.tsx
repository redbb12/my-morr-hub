import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary" }) => {
  return (
    <button
      className={`px-6 py-3 rounded-md font-bold ${
        variant === "primary" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
