"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tape } from "@/components/decorations/Tape";

interface PolaroidFrameProps {
  src: string;
  alt: string;
  caption?: string;
  subcaption?: string;
  rotation?: number;
  tapeVariant?: "butter" | "blush" | "sage" | "none";
  aspectRatio?: "landscape" | "portrait" | "square";
  onClick?: () => void;
  className?: string;
  badge?: string;
}

export function PolaroidFrame({
  src,
  alt,
  caption,
  subcaption,
  rotation = -1.5,
  tapeVariant = "butter",
  aspectRatio = "landscape",
  onClick,
  className = "",
  badge,
}: PolaroidFrameProps) {
  const aspectClasses = {
    landscape: "aspect-[3/2]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
  };

  return (
    <motion.figure
      initial={{ rotate: rotation }}
      whileHover={{
        rotate: 0,
        y: -6,
        scale: 1.015,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onClick={onClick}
      className={`group relative bg-white p-3 sm:p-3.5 pb-5 rounded-xl border-2 border-ink-900 shadow-polaroid ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {tapeVariant !== "none" && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <Tape variant={tapeVariant} rotation={rotation * -1.2} />
        </div>
      )}

      <div
        className={`relative w-full overflow-hidden rounded-lg border border-ink-900/15 bg-paper ${aspectClasses[aspectRatio]}`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-cream/95 backdrop-blur-sm border border-ink-900 text-[11px] font-mono font-semibold text-ink-900 shadow-sm">
            {badge}
          </span>
        )}
      </div>

      {(caption || subcaption) && (
        <figcaption className="mt-3 px-1 text-center">
          {caption && (
            <p className="font-script text-xl sm:text-2xl text-ink-900 leading-snug">
              {caption}
            </p>
          )}
          {subcaption && (
            <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-ink-500">
              {subcaption}
            </p>
          )}
        </figcaption>
      )}
    </motion.figure>
  );
}

