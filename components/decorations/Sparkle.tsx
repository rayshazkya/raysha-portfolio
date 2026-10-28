import React from "react";

interface SparkleProps {
  className?: string;
  size?: number;
  color?: string;
}

export function Sparkle({
  className = "",
  size = 24,
  color = "#D96B8A",
}: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M16 2C16.8 9.8 22.2 15.2 30 16C22.2 16.8 16.8 22.2 16 30C15.2 22.2 9.8 16.8 2 16C9.8 15.2 15.2 9.8 16 2Z"
        fill={color}
        stroke="#231F20"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="26" cy="6" r="2" fill="#F6E3BA" stroke="#231F20" strokeWidth="1.2" />
    </svg>
  );
}

