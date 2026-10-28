"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Globe2,
  Sparkles,
  Wrench,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface SignatureToolItem {
  id: string;
  name: string;
  tag: { id: string; en: string };
  summary: { id: string; en: string };
  svg: React.ReactNode;
}

const SIGNATURE_TOOLS: SignatureToolItem[] = [
  {
    id: "figma",
    name: "Figma",
    tag: { id: "UI/UX Design", en: "UI/UX Design" },
    summary: {
      id: "Wireframing, design system, dan prototyping interaktif (SOMASI, Civitas Quest, TudungSaji).",
      en: "Wireframing, design systems, and interactive prototyping (SOMASI, Civitas Quest, TudungSaji).",
    },
    svg: (
      <svg viewBox="0 0 38 57" className="w-6 h-6" fill="none">
        <path d="M19 28.5A9.5 9.5 0 1 1 38 28.5a9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    id: "python",
    name: "Python",
    tag: { id: "Data Science & NLP", en: "Data Science & NLP" },
    summary: {
      id: "Pemodelan Transformer NLP (HoaxBERT IndoBERT & RoBERTa), data mining (SiCADU), dan pengajaran Asisten Lab.",
      en: "Transformer NLP modeling (HoaxBERT IndoBERT & RoBERTa), data mining (SiCADU), and Lab teaching.",
    },
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
        <path
          d="M23.8 4C15.6 4 16.1 7.5 16.1 7.5l.01 3.6h7.8v1.1H13c-5.2 0-9 3.1-9 9.1 0 5.9 3.3 9.2 7.5 9.2h2.2v-4.4c0-4.1 3.5-7.6 7.6-7.6h8.2c3.6 0 6.5-2.9 6.5-6.5V10.7C36 6.8 31.8 4 23.8 4zm-4.4 3.9a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6z"
          fill="#3776AB"
        />
        <path
          d="M24.2 44c8.2 0 7.7-3.5 7.7-3.5l-.01-3.6h-7.8v-1.1H35c5.2 0 9-3.1 9-9.1 0-5.9-3.3-9.2-7.5-9.2h-2.2v4.4c0 4.1-3.5 7.6-7.6 7.6h-8.2c-3.6 0-6.5 2.9-6.5 6.5v3.3C12 41.2 16.2 44 24.2 44zm4.4-3.9a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    id: "vscode",
    name: "VS Code",
    tag: { id: "Code Editor", en: "Code Editor" },
    summary: {
      id: "Editor utama untuk pengembangan aplikasi web full-stack, eksperimen data science, dan alur Git.",
      en: "Primary code editor for full-stack web engineering, data science workflows, and Git.",
    },
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
        <path
          d="M35.2 4.6L18.4 20.8 8.6 13.4 4 15.8v16.4l4.6 2.4 9.8-7.4 16.8 16.2L44 39.2V8.8l-8.8-4.2zM8.6 27.6v-7.2l5.2 3.6-5.2 3.6zm26.6 5.2L23.8 24l11.4-8.8v17.6z"
          fill="#007ACC"
        />
      </svg>
    ),
  },
  {
    id: "streamlit",
    name: "Streamlit & Colab",
    tag: { id: "Data Science App", en: "Data Science App" },
    summary: {
      id: "Pelatihan model Machine Learning/Transformer dan pembuatan dashboard interaktif real-time (HoaxBERT).",
      en: "Training Machine Learning/Transformer models and building interactive real-time data apps (HoaxBERT).",
    },
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
        <path
          d="M24 8L36 28H12L24 8Z"
          fill="#FF4B4B"
        />
        <path
          d="M10 34L24 22L38 34H10Z"
          fill="#FF8787"
        />
      </svg>
    ),
  },
  {
    id: "javascript",
    name: "JavaScript",
    tag: { id: "Frontend & Web", en: "Frontend & Web" },
    summary: {
      id: "Logika interaktif sisi klien, dasbor analitik SiCADU, dan sistem berbagi resep TudungSaji.",
      en: "Interactive client-side logic, SiCADU analytics dashboard, and TudungSaji recipe platform.",
    },
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
        <rect width="40" height="40" x="4" y="4" rx="8" fill="#F7DF1E" />
        <path
          d="M25.4 33.8c0 3.5-2 5.1-5 5.1-2.7 0-4.2-1.4-5-3.1l2.8-1.7c.5 1 1.1 1.8 2.2 1.8 1.1 0 1.8-.4 1.8-2.2V21.5h3.2v12.3zm8.9 5.1c-3.1 0-5.1-1.5-6.1-3.4l2.8-1.6c.7 1.2 1.7 2.1 3.3 2.1 1.4 0 2.3-.7 2.3-1.7 0-1.2-.9-1.6-2.5-2.3l-.9-.4c-2.5-1.1-4.1-2.4-4.1-5.2 0-2.6 2-4.6 5.1-4.6 2.2 0 3.8.8 4.9 2.8l-2.7 1.7c-.6-1.1-1.2-1.5-2.2-1.5-1 0-1.7.6-1.7 1.5 0 1 .7 1.5 2.2 2.1l.9.4c3 1.3 4.6 2.6 4.6 5.4 0 3.1-2.4 4.7-5.9 4.7z"
          fill="#1C1917"
        />
      </svg>
    ),
  },
  {
    id: "react-nextjs",
    name: "React & Next.js",
    tag: { id: "Modern Web", en: "Modern Web" },
    summary: {
      id: "Pengembangan antarmuka aplikasi web modern yang cepat dan responsif (FoodWaste & Portofolio).",
      en: "Building fast, responsive modern web applications (FoodWaste Marketplace & Portfolio).",
    },
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
        <circle cx="24" cy="24" r="3.8" fill="#00B4D8" />
        <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#00B4D8" strokeWidth="2.5" />
        <ellipse
          cx="24"
          cy="24"
          rx="18"
          ry="7"
          transform="rotate(60 24 24)"
          stroke="#00B4D8"
          strokeWidth="2.5"
        />
        <ellipse
          cx="24"
          cy="24"
          rx="18"
          ry="7"
          transform="rotate(120 24 24)"
          stroke="#00B4D8"
          strokeWidth="2.5"
        />
      </svg>
    ),
  },
  {
    id: "tailwind-css",
    name: "HTML, CSS & Tailwind",
    tag: { id: "UI Styling", en: "UI Styling" },
    summary: {
      id: "Tata letak responsif mobile-first dan sistem komponen antarmuka modern.",
      en: "Mobile-first responsive layouts and clean modern component styling.",
    },
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
        <path
          d="M24 13c-5.3 0-8.6 2.6-10 7.9 2-2.6 4.3-3.6 7-3 1.5.4 2.6 1.5 3.8 2.7 2 2 4.3 4.4 9.2 4.4 5.3 0 8.6-2.6 10-7.9-2 2.6-4.3 3.6-7 3-1.5-.4-2.6-1.5-3.8-2.7C31.2 15.4 28.9 13 24 13zM14 25c-5.3 0-8.6 2.6-10 7.9 2-2.6 4.3-3.6 7-3 1.5.4 2.6 1.5 3.8 2.7 2 2 4.3 4.4 9.2 4.4 5.3 0 8.6-2.6 10-7.9-2 2.6-4.3 3.6-7 3-1.5-.4-2.6-1.5-3.8-2.7C21.2 27.4 18.9 25 14 25z"
          fill="#06B6D4"
        />
      </svg>
    ),
  },
  {
    id: "github",
    name: "Git & GitHub",
    tag: { id: "Version Control", en: "Version Control" },
    summary: {
      id: "Kolaborasi repositori tim, manajemen versi kode, serta deployment otomatis ke Vercel.",
      en: "Team repository collaboration, version control, and automated deployment to Vercel.",
    },
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 5C13.5 5 5 13.5 5 24c0 8.4 5.4 15.5 13 18 .9.2 1.3-.4 1.3-.9v-3.4c-5.3 1.1-6.4-2.3-6.4-2.3-.9-2.2-2.1-2.8-2.1-2.8-1.7-1.2.1-1.1.1-1.1 1.9.1 2.9 2 2.9 2 1.7 2.9 4.5 2.1 5.6 1.6.2-1.2.7-2.1 1.2-2.6-4.2-.5-8.7-2.1-8.7-9.4 0-2.1.7-3.8 2-5.1-.2-.5-.9-2.4.2-5 0 0 1.6-.5 5.2 2 1.5-.4 3.1-.6 4.7-.6 1.6 0 3.2.2 4.7.6 3.6-2.5 5.2-2 5.2-2 1.1 2.6.4 4.5.2 5 1.2 1.3 2 3 2 5.1 0 7.3-4.5 8.9-8.7 9.4.7.6 1.3 1.8 1.3 3.6v5.3c0 .5.4 1.1 1.3.9 7.6-2.5 13-9.6 13-18 0-10.5-8.5-19-19-19z"
          fill="#1C1917"
        />
      </svg>
    ),
  },
  {
    id: "canva",
    name: "Canva",
    tag: { id: "Visual Branding", en: "Visual Branding" },
    summary: {
      id: "Desain publikasi kreatif, poster acara, dan identitas visual media sosial HMIF KOMINKRAF.",
      en: "Creative publication design, event posters, and HMIF KOMINKRAF visual branding.",
    },
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
        <defs>
          <linearGradient id="canvaGradClean" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C4CC" />
            <stop offset="100%" stopColor="#7D2AE8" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="19" fill="url(#canvaGradClean)" />
        <path
          d="M29.5 28.2c-1.4 1.9-3.4 3-5.8 3-4.1 0-7-3.1-7-7.4 0-4.4 3-7.6 7.2-7.6 2.3 0 4.1 1 5.2 2.7l-2.5 1.6c-.7-1.1-1.6-1.6-2.8-1.6-2.4 0-4.1 2-4.1 4.8 0 2.8 1.7 4.7 4.1 4.7 1.4 0 2.5-.6 3.3-1.8l2.4 1.6z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "office",
    name: "Microsoft Office",
    tag: { id: "Excel, Word & PPT", en: "Excel, Word & PPT" },
    summary: {
      id: "Pengolahan data tabulasi PDAM, rekapitulasi praktikum, dan kesekretariatan organisasi.",
      en: "PDAM data tabulation, laboratory reporting, and organizational documentation.",
    },
    svg: (
      <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
        <rect x="8" y="6" width="32" height="36" rx="5" fill="#107C41" />
        <path
          d="M17 16l5 8-5 8h3.6l3.2-5.4L27 32h3.6l-5-8 5-8H27l-3.2 5.4L20.6 16H17z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
];

export function SkillsBento() {
  const { locale, t, ui } = useLanguage();
  const { technicalSkills, languages, softSkills } = portfolioData;

  const [skillFilter, setSkillFilter] = useState<
    "all" | "engineering" | "design" | "data"
  >("all");
  const [activeToolId, setActiveToolId] = useState<string>("figma");

  const filteredSkills =
    skillFilter === "all"
      ? technicalSkills
      : technicalSkills.filter((s) => s.categoryKey === skillFilter);

  const activeTool =
    SIGNATURE_TOOLS.find((item) => item.id === activeToolId) || SIGNATURE_TOOLS[0];

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#FDE8F1]/95 via-[#F6EDF8]/85 to-[#FEF4EC] border-y border-rose-200/70 overflow-hidden"
    >
      {/* Soft pastel ambient orbs */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-rose-accent/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-butter/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow={ui.skills.eyebrow}
          title={ui.skills.title}
          subtitle={ui.skills.subtitle}
        />

        {/* CLEAN, UNCLUTTERED INTERACTIVE TOOLS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mb-8 rounded-3xl bg-white border border-stone-200/90 shadow-[0_12px_36px_rgba(28,25,23,0.04)] p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blush/70 flex items-center justify-center shrink-0">
                <Wrench className="w-5 h-5 text-rose-berry" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-ink-900">
                  {locale === "id" ? "Tools & Teknologi" : "Tools & Technologies"}
                </h3>
                <p className="text-xs text-ink-500">
                  {locale === "id"
                    ? "Pilih atau arahkan kursor pada ikon untuk melihat kegunaannya"
                    : "Hover or tap any tool icon to view its role"}
                </p>
              </div>
            </div>
          </div>

          {/* Compact 2-to-5 Column Icon Tiles Grid (No heavy paragraphs inside cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {SIGNATURE_TOOLS.map((tool) => {
              const isSelected = activeToolId === tool.id;
              return (
                <motion.button
                  key={tool.id}
                  type="button"
                  onClick={() => setActiveToolId(tool.id)}
                  onMouseEnter={() => setActiveToolId(tool.id)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? "bg-gradient-to-br from-blush/50 via-white to-[#2E4374]/10 border-rose-accent shadow-sm"
                      : "bg-cream/60 hover:bg-white border-stone-200/80"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/90 flex items-center justify-center shrink-0 shadow-sm">
                    {tool.svg}
                  </div>
                  <div className="min-w-0">
                    <p className="font-serif font-bold text-xs sm:text-sm text-ink-900 truncate">
                      {tool.name}
                    </p>
                    <p className="font-mono text-[10px] text-rose-berry truncate mt-0.5">
                      {t(tool.tag)}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Single Sleek 1-Line Caption Bar Below Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTool.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="mt-4 px-4 py-3 rounded-2xl bg-cream/80 border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-berry shrink-0" />
                <span className="font-serif font-bold text-xs sm:text-sm text-ink-900">
                  {activeTool.name}:
                </span>
                <span className="text-xs sm:text-sm text-ink-700">
                  {t(activeTool.summary)}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Bottom Bento Grid: Competencies (7 cols) + Languages & Soft Skills (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Card 1 (7 cols): Interactive Technical Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 rounded-3xl bg-white border border-stone-200/90 shadow-[0_12px_36px_rgba(28,25,23,0.04)] p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blush/70 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-rose-berry" />
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-ink-900">
                  {ui.skills.competenciesTitle}
                </h3>
              </div>

              {/* Interactive Filter Tabs */}
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar bg-paper/70 p-1 rounded-full border border-stone-200/80">
                {[
                  { key: "all", label: ui.skills.filterAll },
                  { key: "engineering", label: ui.skills.filterEngineering },
                  { key: "design", label: ui.skills.filterDesign },
                  { key: "data", label: ui.skills.filterData },
                ].map((tab) => {
                  const active = skillFilter === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() =>
                        setSkillFilter(
                          tab.key as "all" | "engineering" | "design" | "data"
                        )
                      }
                      className={`px-3 py-1 rounded-full font-mono text-[11px] font-medium whitespace-nowrap transition-all ${
                        active
                          ? "bg-ink-900 text-white shadow-sm"
                          : "text-ink-700 hover:text-ink-900"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => (
                  <motion.div
                    key={skill.name.en}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.22 }}
                    className="p-4 rounded-2xl bg-cream/70 border border-stone-200/80 hover:border-rose-accent/40 transition-all"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-blush/70 font-mono text-[10px] font-semibold uppercase text-rose-berry">
                        {t(skill.category)}
                      </span>
                      <h4 className="font-serif font-bold text-sm sm:text-base text-ink-900">
                        {t(skill.name)}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-ink-700 leading-relaxed">
                      {t(skill.details)}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column (5 cols): Languages + Professional Strengths */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            {/* Card 2: Languages */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="rounded-3xl bg-white border border-stone-200/90 shadow-[0_12px_36px_rgba(28,25,23,0.04)] p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blush/70 flex items-center justify-center">
                  <Globe2 className="w-4 h-4 text-rose-berry" />
                </div>
                <h3 className="font-serif font-bold text-xl text-ink-900">
                  {ui.skills.languagesTitle}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className="p-4 rounded-2xl bg-cream/70 border border-stone-200/80"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-serif font-bold text-base text-ink-900">
                        {t(lang.language)}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-blush/70 font-mono text-[11px] font-semibold text-rose-berry">
                        {t(lang.badge)}
                      </span>
                    </div>
                    <p className="text-xs text-ink-700 leading-relaxed">
                      {t(lang.description)}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 3: Professional Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="flex-1 rounded-3xl bg-white border border-stone-200/90 shadow-[0_12px_36px_rgba(28,25,23,0.04)] p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blush/70 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-rose-berry" />
                </div>
                <h3 className="font-serif font-bold text-xl text-ink-900">
                  {ui.skills.softSkillsTitle}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {softSkills.map((item, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ y: -2 }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cream/80 hover:bg-blush/40 border border-stone-200/90 text-xs sm:text-sm font-medium text-ink-900 transition-colors cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-accent" />
                    {t(item.label)}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
