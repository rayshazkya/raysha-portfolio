import React from "react";

interface ScallopDividerProps {
  className?: string;
  fill?: string;
  flip?: boolean;
}

export function ScallopDivider({
  className = "",
  fill = "#FADCE4",
  flip = false,
}: ScallopDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="w-full h-6 sm:h-8 block"
      >
        <path
          d="M0 40V20C20 4 40 4 60 20C80 4 100 4 120 20C140 4 160 4 180 20C200 4 220 4 240 20C260 4 280 4 300 20C320 4 340 4 360 20C380 4 400 4 420 20C440 4 460 4 480 20C500 4 520 4 540 20C560 4 580 4 600 20C620 4 640 4 660 20C680 4 700 4 720 20C740 4 760 4 780 20C800 4 820 4 840 20C860 4 880 4 900 20C920 4 940 4 960 20C980 4 1000 4 1020 20C1040 4 1060 4 1080 20C1100 4 1120 4 1140 20C1160 4 1180 4 1200 20V40H0Z"
          fill={fill}
        />
        <path
          d="M0 20C20 4 40 4 60 20C80 4 100 4 120 20C140 4 160 4 180 20C200 4 220 4 240 20C260 4 280 4 300 20C320 4 340 4 360 20C380 4 400 4 420 20C440 4 460 4 480 20C500 4 520 4 540 20C560 4 580 4 600 20C620 4 640 4 660 20C680 4 700 4 720 20C740 4 760 4 780 20C800 4 820 4 840 20C860 4 880 4 900 20C920 4 940 4 960 20C980 4 1000 4 1020 20C1040 4 1060 4 1080 20C1100 4 1120 4 1140 20C1160 4 1180 4 1200 20"
          fill="none"
          stroke="#231F20"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

