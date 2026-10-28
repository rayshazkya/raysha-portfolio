"use client";

import React from "react";
import { motion } from "framer-motion";

interface StickerProps {
  children: React.ReactNode;
  rotation?: number;
  tone?: "blush" | "cream" | "butter" | "sage" | "white";
  className?: string;
  interactive?: boolean;
}

const toneClasses = {
  blush: "bg-blush text-ink-900 border-ink-900",
  cream: "bg-cream text-ink-900 border-ink-900",
  butter: "bg-butter text-ink-900 border-ink-900",
  sage: "bg-[#E6F0E8] text-ink-900 border-ink-900",
  white: "bg-white text-ink-900 border-ink-900",
};

export function Sticker({
  children,
  rotation = 0,
  tone = "cream",
  className = "",
  interactive = true,
}: StickerProps) {
  return (
    <motion.div
      initial={{ rotate: rotation }}
      whileHover={
        interactive
          ? {
              rotate: rotation > 0 ? rotation - 3 : rotation + 3,
              scale: 1.05,
              y: -3,
            }
          : undefined
      }
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 shadow-ink-sm font-medium text-sm select-none ${toneClasses[tone]} ${className}`}
    >
      {children}
    </motion.div>
  );
}

