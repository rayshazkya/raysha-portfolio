"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`mb-8 sm:mb-10 ${
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      } ${className}`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-blush via-[#FDECF2] to-butter/60 border border-rose-accent/25 shadow-sm mb-3 ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        <Sparkles className="w-3 h-3 text-rose-berry" />
        <span className="font-mono text-[11px] uppercase tracking-widest font-semibold text-rose-berry">
          {eyebrow}
        </span>
      </div>

      <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-ink-900 via-[#5E1D34] to-rose-berry bg-clip-text text-transparent tracking-tight leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2.5 text-xs sm:text-sm md:text-base text-ink-700 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
