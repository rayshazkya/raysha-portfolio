import React from "react";

interface BowProps {
  className?: string;
  size?: number;
  color?: string;
  strokeColor?: string;
}

export function Bow({
  className = "",
  size = 44,
  color = "#F3C4D0",
  strokeColor = "#231F20",
}: BowProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Left ribbon tail */}
      <path
        d="M28 32C24 41 18 50 13 57L22 55L25 60C28 51 31 41 32 34"
        fill={color}
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right ribbon tail */}
      <path
        d="M36 32C40 41 46 50 51 57L42 55L39 60C36 51 33 41 32 34"
        fill={color}
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left bow loop */}
      <path
        d="M30 28C22 16 8 14 7 25C6 35 19 38 30 31Z"
        fill={color}
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Left inner crease */}
      <path
        d="M15 25C19 25 23 27 27 29"
        stroke="#A8385B"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Right bow loop */}
      <path
        d="M34 28C42 16 56 14 57 25C58 35 45 38 34 31Z"
        fill={color}
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Right inner crease */}
      <path
        d="M49 25C45 25 41 27 37 29"
        stroke="#A8385B"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Center knot */}
      <rect
        x="27.5"
        y="24.5"
        width="9"
        height="10"
        rx="4.5"
        fill="#D96B8A"
        stroke={strokeColor}
        strokeWidth="2.5"
      />
    </svg>
  );
}

