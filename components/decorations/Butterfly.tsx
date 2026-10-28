import React from "react";

interface ButterflyProps {
  className?: string;
  size?: number;
  variant?: "blush" | "vintage";
}

export function Butterfly({
  className = "",
  size = 52,
  variant = "blush",
}: ButterflyProps) {
  const wingFill = variant === "blush" ? "#FADCE4" : "#F6E3BA";
  const wingAccent = variant === "blush" ? "#D96B8A" : "#C69C6D";

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
      {/* Paper sticker backing outline */}
      <path
        d="M32 22C23 9 6 10 8 25C9 31 15 34 20 35C13 38 11 47 18 52C24 56 30 49 32 42C34 49 40 56 46 52C53 47 51 38 44 35C49 34 55 31 56 25C58 10 41 9 32 22Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Upper wings */}
      <path
        d="M32 24C23 11 7 11 9 25C10 31 19 35 31 33Z"
        fill={wingFill}
        stroke="#231F20"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M32 24C41 11 57 11 55 25C54 31 45 35 33 33Z"
        fill={wingFill}
        stroke="#231F20"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Lower wings */}
      <path
        d="M31 34C19 35 12 43 18 50C23 55 30 48 32 40Z"
        fill={wingAccent}
        fillOpacity="0.45"
        stroke="#231F20"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M33 34C45 35 52 43 46 50C41 55 34 48 32 40Z"
        fill={wingAccent}
        fillOpacity="0.45"
        stroke="#231F20"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Wing detail dots */}
      <circle cx="17" cy="22" r="2.2" fill={wingAccent} />
      <circle cx="47" cy="22" r="2.2" fill={wingAccent} />
      {/* Body & antennae */}
      <rect x="30.5" y="21" width="3" height="22" rx="1.5" fill="#231F20" />
      <path
        d="M31 21C29 16 25 14 23 15"
        stroke="#231F20"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M33 21C35 16 39 14 41 15"
        stroke="#231F20"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

