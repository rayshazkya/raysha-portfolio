import React from "react";

interface TapeProps {
  className?: string;
  variant?: "blush" | "butter" | "sage";
  rotation?: number;
}

export function Tape({
  className = "",
  variant = "butter",
  rotation = -4,
}: TapeProps) {
  const fills = {
    butter: "rgba(246, 227, 186, 0.82)",
    blush: "rgba(243, 196, 208, 0.82)",
    sage: "rgba(182, 206, 189, 0.82)",
  };

  return (
    <svg
      width="112"
      height="34"
      viewBox="0 0 112 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`select-none pointer-events-none drop-shadow-sm ${className}`}
      aria-hidden="true"
    >
      <path
        d="M4 5L9 11L3 17L8 23L4 29H108L103 23L109 17L104 11L108 5H4Z"
        fill={fills[variant]}
        stroke="#231F20"
        strokeOpacity="0.22"
        strokeWidth="1.2"
      />
      <line
        x1="16"
        y1="17"
        x2="96"
        y2="17"
        stroke="#FFFFFF"
        strokeOpacity="0.45"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

