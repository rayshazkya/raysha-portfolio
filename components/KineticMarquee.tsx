"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function KineticMarquee() {
  const { locale } = useLanguage();

  const items =
    locale === "id"
      ? [
          "UI/UX Design & Prototyping",
          "Full-Stack Web Development",
          "Data Science & Analisis Data",
          "Natural Language Processing (NLP)",
          "Python & Pemodelan Machine Learning",
          "Visual Branding & Kreasi Konten",
        ]
      : [
          "UI/UX Design & Prototyping",
          "Full-Stack Web Development",
          "Data Science & Data Analysis",
          "Natural Language Processing (NLP)",
          "Python & Machine Learning Models",
          "Visual Branding & Content Creation",
        ];

  const tickerList = [...items, ...items, ...items];

  return (
    <div className="relative py-4 sm:py-5 bg-white/85 border-y border-rose-200/70 overflow-hidden select-none">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10"
        aria-hidden="true"
      />

      <motion.div
        className="flex items-center gap-6 sm:gap-10 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {tickerList.map((text, idx) => (
          <div key={idx} className="inline-flex items-center gap-6 sm:gap-10">
            <span className="font-serif font-semibold text-sm sm:text-base text-ink-900 tracking-tight hover:text-rose-berry transition-colors">
              {text}
            </span>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blush/70 text-rose-berry">
              <Sparkles
                className="w-3.5 h-3.5 animate-spin"
                style={{ animationDuration: "6s" }}
              />
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
