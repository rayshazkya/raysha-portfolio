"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxSlide {
  src: string;
  title?: string;
  caption?: string;
  subcaption?: string;
}

interface LightboxProps {
  isOpen: boolean;
  slides: LightboxSlide[];
  currentIndex: number;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export function Lightbox({
  isOpen,
  slides,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  const current = slides[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/80 backdrop-blur-sm p-3 sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={current.title || "Image lightbox"}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="relative max-w-4xl w-full bg-white rounded-3xl border border-stone-200 shadow-2xl p-4 sm:p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between gap-4 pb-3 mb-3 border-b border-stone-200">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="px-2.5 py-0.5 rounded-full bg-blush/70 font-mono text-xs font-semibold text-rose-berry shrink-0">
                  {currentIndex + 1} / {slides.length}
                </span>
                {current.title && (
                  <h3 className="font-serif font-bold text-base sm:text-lg text-ink-900 truncate">
                    {current.title}
                  </h3>
                )}
              </div>
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-paper hover:bg-blush/60 text-ink-900 transition-colors shrink-0"
                aria-label="Close lightbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative flex items-center justify-center bg-cream rounded-2xl border border-stone-200/80 overflow-hidden max-h-[70vh]">
              <img
                src={current.src}
                alt={current.caption || current.title || "Preview"}
                className="max-h-[68vh] w-auto object-contain mx-auto"
              />

              {slides.length > 1 && onPrev && (
                <button
                  onClick={onPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 border border-stone-200 flex items-center justify-center text-ink-900 shadow-md hover:bg-blush/50 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {slides.length > 1 && onNext && (
                <button
                  onClick={onNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 border border-stone-200 flex items-center justify-center text-ink-900 shadow-md hover:bg-blush/50 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Caption */}
            {(current.caption || current.subcaption) && (
              <div className="mt-4 text-center">
                {current.caption && (
                  <p className="text-sm sm:text-base font-medium text-ink-900">
                    {current.caption}
                  </p>
                )}
                {current.subcaption && (
                  <p className="mt-0.5 font-mono text-xs text-ink-500">
                    {current.subcaption}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
