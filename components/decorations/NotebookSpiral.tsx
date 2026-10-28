import React from "react";

interface NotebookSpiralProps {
  count?: number;
  orientation?: "vertical" | "horizontal";
  className?: string;
}

export function NotebookSpiral({
  count = 10,
  orientation = "vertical",
  className = "",
}: NotebookSpiralProps) {
  const rings = Array.from({ length: count });

  if (orientation === "horizontal") {
    return (
      <div
        className={`flex items-center justify-around w-full px-4 select-none pointer-events-none ${className}`}
        aria-hidden="true"
      >
        {rings.map((_, idx) => (
          <div key={idx} className="relative flex flex-col items-center">
            <div className="w-3.5 h-6 rounded-full border-2 border-ink-900 bg-gradient-to-b from-white via-blush to-rose-accent/40 shadow-sm -mt-3" />
            <div className="w-3 h-3 rounded-full bg-ink-900 -mt-1.5" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col justify-around h-full py-6 select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {rings.map((_, idx) => (
        <div key={idx} className="relative flex items-center">
          <div className="w-7 h-3.5 rounded-full border-2 border-ink-900 bg-gradient-to-r from-white via-blush to-rose-accent/40 shadow-sm -ml-4" />
          <div className="w-3 h-3 rounded-full bg-ink-900 -ml-1.5" />
        </div>
      ))}
    </div>
  );
}

