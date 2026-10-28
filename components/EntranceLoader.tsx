"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export function EntranceLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const duration = 1850;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const counterInterval = setInterval(() => {
      currentStep += 1;
      const t = Math.min(currentStep / steps, 1);
      const eased = Math.round((1 - Math.pow(1 - t, 2.4)) * 100);
      setProgress(eased);

      if (t >= 1) {
        clearInterval(counterInterval);
      }
    }, intervalTime);

    const finishTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2000);

    return () => {
      clearInterval(counterInterval);
      clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="entrance-loader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-gradient-to-b from-[#FCE8F1] via-[#FDF4F7] to-[#FAF8F5] text-ink-900 px-6 py-8 sm:px-12 sm:py-10 overflow-hidden select-none"
        >
          {/* Ambient animated soft rose & champagne glows */}
          <motion.div
            animate={{
              scale: [1, 1.18, 1],
              opacity: [0.45, 0.75, 0.45],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blush/80 blur-3xl"
            aria-hidden="true"
          />
          <motion.div
            animate={{
              scale: [1.1, 0.95, 1.1],
              opacity: [0.35, 0.65, 0.35],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-butter/60 blur-3xl"
            aria-hidden="true"
          />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between max-w-6xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-rose-200/90 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-rose-berry animate-ping" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-ink-700 font-semibold">
                PORTFOLIO • 2026
              </span>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-mono text-xs text-ink-500 hidden sm:inline-block"
            >
              Universitas Syiah Kuala • Banda Aceh
            </motion.span>
          </div>

          {/* Centerpiece Reveal — Only Welcome & Name */}
          <div className="relative z-10 my-auto max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 border border-rose-200 text-rose-berry font-mono text-xs font-medium mb-5 shadow-sm"
            >
              <Sparkles
                className="w-3.5 h-3.5 animate-spin"
                style={{ animationDuration: "4s" }}
              />
              <span>Selamat Datang • Welcome</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.55,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-ink-900 leading-[1.1]"
              >
                Raysha Tazkiya{" "}
                <span className="italic font-normal text-rose-berry">Rahim</span>
              </motion.h1>
            </div>
          </div>

          {/* Bottom Progress Bar & Counter */}
          <div className="relative z-10 max-w-6xl w-full mx-auto">
            <div className="flex items-end justify-between mb-2.5">
              <span className="font-mono text-[11px] uppercase tracking-widest text-ink-500">
                Welcome...
              </span>
              <span className="font-serif font-bold text-2xl sm:text-3xl text-rose-berry tabular-nums">
                {progress}%
              </span>
            </div>

            <div className="w-full h-1.5 rounded-full bg-rose-200/70 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-rose-berry via-rose-accent to-[#B85277]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
