"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight,
  Download,
  Sparkles,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { locale, t, ui } = useLanguage();
  const { profile } = portfolioData;

  const roles =
    locale === "id"
      ? [
          "UI/UX Designer & Full-Stack Web Developer",
          "Data Science & Data Analyst",
          "Natural Language Processing (NLP)",
          "Digital Content & Visual Creator",
        ]
      : [
          "UI/UX Designer & Full-Stack Web Developer",
          "Data Science & Data Analyst",
          "Natural Language Processing (NLP)",
          "Digital Content & Visual Creator",
        ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section
      id="top"
      className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#FCE4EE] via-[#FDF2F6] to-[#FAF8F5]"
    >
      {/* Subtle vertical fluted editorial columns texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(142,59,89,0.05) 0px, rgba(142,59,89,0.05) 1px, transparent 1px, transparent 96px)",
        }}
      />

      {/* Soft Playful Pastel Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 24, 0],
          y: [0, -16, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-20 left-1/4 w-[440px] h-[440px] rounded-full bg-gradient-to-br from-rose-accent/25 via-blush/70 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          x: [0, -24, 0],
          y: [0, 18, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-12 right-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-[#F9D5E5]/80 via-butter/60 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Framed Editorial Magazine Cover Card */}
        <div className="rounded-[32px] bg-gradient-to-b from-white/80 via-[#FFF7FA]/90 to-white/95 backdrop-blur-md border border-rose-200/80 shadow-[0_20px_60px_rgba(142,59,89,0.08)] px-5 sm:px-10 pt-8 sm:pt-12 pb-8 sm:pb-12">
          {/* Top Centered Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex justify-center mb-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-rose-200/90 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] sm:text-xs font-medium text-ink-700">
                {t(profile.statusText)}
              </span>
            </div>
          </motion.div>

          {/* GIANT EDITORIAL HEADLINE ("HI, I'm RAYSHA") */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-center relative z-10 select-none"
          >
            <h1 className="font-serif font-normal text-[40px] sm:text-[68px] md:text-[84px] lg:text-[96px] tracking-tight leading-[1.0] bg-gradient-to-r from-[#7A2848] via-rose-berry to-[#B85277] bg-clip-text text-transparent">
              HI, <span className="italic font-light text-rose-berry">I&apos;m</span>{" "}
              <span className="font-bold">RAYSHA</span>
            </h1>
            <p className="font-serif italic text-base sm:text-xl text-rose-berry/90 mt-1.5">
              Raysha Tazkiya Rahim
            </p>
          </motion.div>

          {/* 3-COLUMN SYMMETRICAL STAGE */}
          <div className="relative mt-4 sm:mt-4 grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-6">
            {/* Left Symmetrical Editorial Card (Cols 1-4) — Clean & Uncluttered without 6x/2x */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="lg:col-span-4 order-2 lg:order-1"
            >
              <div className="rounded-3xl bg-white/90 border border-rose-200/70 p-6 shadow-sm text-center lg:text-left">
                <p className="font-mono text-[10px] uppercase tracking-widest text-rose-berry font-bold mb-2">
                  {locale === "id" ? "FOKUS & KEAHLIAN" : "FOCUS & EXPERTISE"}
                </p>
                <p className="font-serif font-bold text-lg sm:text-xl text-ink-900 leading-snug mb-3">
                  {locale === "id"
                    ? "UI/UX Designer, Full-Stack Web Developer & Data Science"
                    : "UI/UX Designer, Full-Stack Web Developer & Data Science"}
                </p>
                <p className="text-xs sm:text-sm text-ink-700 leading-relaxed">
                  {locale === "id"
                    ? "Membangun antarmuka pengguna yang intuitif, aplikasi web modern, serta pengolahan data dan pemodelan cerdas."
                    : "Building intuitive user interfaces, modern web applications, and data-driven analytical models."}
                </p>
              </div>
            </motion.div>

            {/* Center Column (Cols 5-8): Portrait in Soft Pastel Arch */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="lg:col-span-4 flex flex-col items-center order-1 lg:order-2 relative"
            >
              {/* Soft Pastel Gradient Arch Behind Portrait */}
              <div
                className="pointer-events-none absolute top-4 inset-x-4 bottom-6 rounded-t-[190px] rounded-b-3xl bg-gradient-to-b from-[#FADCE8] via-white to-[#FDF2F6] border border-rose-200/80 shadow-[0_18px_45px_rgba(142,59,89,0.12)]"
                aria-hidden="true"
              />

              {/* Cutout Image with Bottom Gradient Dissolve */}
              <div className="relative z-10 flex justify-center items-end pt-2">
                <img
                  src={profile.heroPhoto}
                  alt={profile.fullName}
                  className="w-auto h-[310px] sm:h-[365px] object-contain object-bottom select-none drop-shadow-[0_16px_28px_rgba(28,25,23,0.14)] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
                />
              </div>

              {/* Sweet Berry-Rose Pedestal Pill at Base */}
              <div className="relative z-20 -mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#8E3B59] via-[#B44E72] to-[#C86486] text-white shadow-md flex items-center justify-center gap-2 min-w-[240px]">
                <Sparkles
                  className="w-3.5 h-3.5 text-rose-100 shrink-0 animate-spin"
                  style={{ animationDuration: "6s" }}
                />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="font-mono text-[11px] font-medium text-white tracking-wide whitespace-nowrap"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Symmetrical Editorial Card (Cols 9-12) */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="lg:col-span-4 order-3"
            >
              <div className="rounded-3xl bg-white/90 border border-rose-200/70 p-6 shadow-sm text-center lg:text-left">
                <p className="font-mono text-[10px] uppercase tracking-widest text-rose-berry font-bold mb-2">
                  {ui.hero.badge}
                </p>
                <p className="text-xs sm:text-sm text-ink-700 leading-relaxed mb-4">
                  {t(profile.tagline)}
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-3 border-t border-rose-100">
                  <motion.a
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    href="#projects"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#8E3B59] to-[#C86486] text-white font-sans font-semibold text-xs shadow-sm hover:opacity-95 transition-all"
                  >
                    <span>{ui.hero.exploreWorks}</span>
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    href={profile.cvUrl}
                    download="CV_Raysha_Tazkiya_Rahim.pdf"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-blush/60 text-rose-berry border border-rose-200 font-sans font-semibold text-xs hover:bg-blush transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{ui.hero.downloadCv}</span>
                  </motion.a>
                </div>

                {/* Social Icons */}
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-3.5">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-8 h-8 rounded-full bg-cream border border-rose-200/80 flex items-center justify-center text-ink-700 hover:text-rose-berry hover:bg-blush/50 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-8 h-8 rounded-full bg-cream border border-rose-200/80 flex items-center justify-center text-ink-700 hover:text-rose-berry hover:bg-blush/50 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Send Email"
                    className="w-8 h-8 rounded-full bg-cream border border-rose-200/80 flex items-center justify-center text-ink-700 hover:text-rose-berry hover:bg-blush/50 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
