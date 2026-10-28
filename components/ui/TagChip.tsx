import React from "react";

interface TagChipProps {
  children: React.ReactNode;
  variant?: "cream" | "blush" | "sage" | "butter" | "ink";
  size?: "sm" | "md";
  className?: string;
}

export function TagChip({
  children,
  variant = "cream",
  size = "sm",
  className = "",
}: TagChipProps) {
  const variants = {
    cream: "bg-paper/80 text-ink-700 border-stone-200/90",
    blush: "bg-blush/70 text-rose-berry border-rose-accent/25",
    sage: "bg-[#EBF3ED] text-[#2F5239] border-[#2F5239]/20",
    butter: "bg-butter/60 text-[#694D17] border-[#694D17]/20",
    ink: "bg-ink-900 text-cream border-ink-900",
  };

  const sizes = {
    sm: "px-2.5 py-1 text-[11px]",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-sans font-medium tracking-tight ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
