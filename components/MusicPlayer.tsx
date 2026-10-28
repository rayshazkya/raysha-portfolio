"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play, Volume2, VolumeX, ChevronDown } from "lucide-react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(170);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => {
      if (audio.duration && !Number.isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => setIsPlaying(false));
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  const handleMainButtonClick = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isOpen) {
      setIsOpen(true);
      if (!isPlaying) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }
    } else {
      await togglePlayPause();
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
    setCurrentTime(audio.currentTime);
  };

  const formatTime = (sec: number) => {
    const s = Math.floor(sec || 0);
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return `${m}:${rem < 10 ? "0" : ""}${rem}`;
  };

  const progressPercent =
    duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5 select-none">
      <audio
        ref={audioRef}
        src="/assets/audio/from-the-start.mp3"
        preload="metadata"
        loop
      />

      {/* Pop-up Sweet Soft Gradient Mini Player Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[275px] sm:w-[295px] rounded-3xl bg-white/95 backdrop-blur-xl border border-rose-200/90 text-ink-900 p-4 shadow-[0_20px_50px_rgba(142,59,89,0.22)]"
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3 min-w-0">
                {/* Spinning Vinyl / Cover Art */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-rose-accent/60 shrink-0 shadow-sm">
                  <motion.img
                    src="/assets/audio/from-the-start-cover.jpg"
                    alt="From The Start — Laufey"
                    animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                    transition={
                      isPlaying
                        ? { duration: 8, repeat: Infinity, ease: "linear" }
                        : { duration: 0.3 }
                    }
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-white border border-rose-300" />
                </div>

                <div className="min-w-0">
                  <p className="font-serif font-bold text-sm text-ink-900 truncate">
                    From The Start
                  </p>
                  <p className="font-mono text-[11px] text-rose-berry truncate">
                    Laufey • Full Track
                  </p>
                </div>
              </div>

              {/* Animated Equalizer + Minimize button */}
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="flex items-end gap-0.5 h-3.5 px-1">
                  {[0, 1, 2, 3].map((bar) => (
                    <motion.span
                      key={bar}
                      animate={
                        isPlaying
                          ? { height: ["4px", "13px", "6px", "14px", "4px"] }
                          : { height: "4px" }
                      }
                      transition={
                        isPlaying
                          ? {
                              duration: 0.9,
                              repeat: Infinity,
                              delay: bar * 0.15,
                              ease: "easeInOut",
                            }
                          : { duration: 0.2 }
                      }
                      className="w-0.5 rounded-full bg-rose-berry block"
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Minimize music player"
                  className="w-6 h-6 rounded-full bg-blush/70 hover:bg-blush flex items-center justify-center text-rose-berry transition-colors"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Seek Bar */}
            <div
              onClick={handleSeek}
              className="w-full h-1.5 rounded-full bg-rose-100 cursor-pointer overflow-hidden mb-1.5"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-rose-berry to-rose-accent transition-all duration-150"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="flex items-center justify-between font-mono text-[10px] text-ink-500 mb-3">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            {/* Play/Pause & Mute Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-rose-100">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-ink-700 hover:text-rose-berry transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-rose-berry" />
                ) : (
                  <Volume2 className="w-4 h-4 text-rose-berry" />
                )}
                <span>{isMuted ? "Muted" : "Audio On"}</span>
              </button>

              <button
                type="button"
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pause From The Start" : "Play From The Start"}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-berry to-rose-accent text-white font-sans font-semibold text-xs shadow-sm hover:opacity-95 transition-opacity"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Play</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Sweet Gradient Music Note Pill Button */}
      <motion.button
        type="button"
        onClick={handleMainButtonClick}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        aria-label={
          isPlaying ? "Pause From The Start — Laufey" : "Play From The Start — Laufey"
        }
        className={`group relative flex items-center justify-center w-14 h-12 rounded-full border transition-all shadow-[0_10px_28px_rgba(142,59,89,0.28)] ${
          isPlaying
            ? "bg-gradient-to-r from-rose-berry to-[#B85277] text-white border-white/60 ring-4 ring-rose-accent/25"
            : "bg-gradient-to-r from-rose-berry to-rose-accent text-white border-white/60 hover:shadow-lg"
        }`}
      >
        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-200 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>
        )}
        <Music
          className={`w-5 h-5 transition-transform ${
            isPlaying ? "animate-bounce" : "group-hover:scale-110"
          }`}
        />
      </motion.button>
    </div>
  );
}
