"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Briefcase,
  GraduationCap,
  Users,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { portfolioData } from "@/data/portfolio";
import { ExperienceCategoryKey } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExperienceTimeline() {
  const { t, ui } = useLanguage();
  const { experiences, coursework } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<"all" | ExperienceCategoryKey>("all");
  const [showCoursework, setShowCoursework] = useState(false);

  const filteredExperiences =
    activeFilter === "all"
      ? experiences
      : experiences.filter((exp) => exp.categoryKey === activeFilter);

  const filterTabs: { key: "all" | ExperienceCategoryKey; label: string }[] = [
    { key: "all", label: ui.experience.filterAll },
    { key: "internship", label: ui.experience.filterInternship },
    { key: "lab", label: ui.experience.filterLab },
    { key: "organization", label: ui.experience.filterOrg },
  ];

  const categoryIcon = (key: ExperienceCategoryKey) => {
    if (key === "internship") return <Briefcase className="w-3.5 h-3.5 text-rose-berry" />;
    if (key === "lab") return <GraduationCap className="w-3.5 h-3.5 text-rose-berry" />;
    return <Users className="w-3.5 h-3.5 text-rose-berry" />;
  };

  const categoryBarGradient = (key: ExperienceCategoryKey) => {
    if (key === "internship")
      return "from-rose-berry via-rose-accent to-[#E899B5]";
    if (key === "lab")
      return "from-[#9E4770] via-rose-accent to-[#F3C6D6]";
    return "from-rose-accent via-[#E6A4B4] to-butter";
  };

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#FCE6F0]/90 via-[#FDF2EE]/80 to-[#FAF8F5] border-t border-rose-200/70 overflow-hidden"
    >
      {/* Soft pastel ambient glows */}
      <div
        className="pointer-events-none absolute -top-20 right-10 w-96 h-96 rounded-full bg-blush/70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 w-80 h-80 rounded-full bg-butter/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centered Header + Centered Filter Pills */}
        <SectionHeader
          eyebrow={ui.experience.eyebrow}
          title={ui.experience.title}
          subtitle={ui.experience.subtitle}
          align="center"
          className="mb-6"
        />

        <div className="flex justify-center mb-10">
          <div
            className="inline-flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1.5 rounded-full bg-white/95 border border-rose-200/80 shadow-sm"
            role="tablist"
            aria-label="Filter experience by category"
          >
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-rose-berry to-[#B85277] text-white shadow-sm"
                      : "text-ink-700 hover:bg-blush/50 hover:text-rose-berry"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* NEAT, BALANCED 2-COLUMN BENTO GRID FOR EXPERIENCE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp) => (
              <motion.article
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28 }}
                whileHover={{ y: -4 }}
                className="group h-full flex flex-col justify-between rounded-3xl bg-white/95 backdrop-blur-sm border border-rose-200/70 shadow-[0_10px_28px_rgba(142,59,89,0.05)] hover:shadow-[0_16px_38px_rgba(142,59,89,0.11)] overflow-hidden transition-all"
              >
                <div>
                  {/* Soft Pastel Gradient Accent Bar at Top */}
                  <div
                    className={`h-1.5 w-full bg-gradient-to-r ${categoryBarGradient(
                      exp.categoryKey
                    )}`}
                  />

                  <div className="p-5 sm:p-6">
                    {/* Top Row: Category Badge + Date */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush/65 border border-rose-200/80 font-mono text-[10px] font-semibold text-rose-berry">
                        {categoryIcon(exp.categoryKey)}
                        <span>{t(exp.category)}</span>
                      </span>

                      <div className="flex items-center gap-2.5 font-mono text-[11px] text-ink-500">
                        <span className="inline-flex items-center gap-1 font-medium text-rose-berry">
                          <Calendar className="w-3 h-3" />
                          {t(exp.period)}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Role & Organization */}
                    <h3 className="font-serif font-bold text-base sm:text-lg text-ink-900 leading-snug">
                      {t(exp.role)}
                    </h3>

                    <p className="font-sans font-semibold text-xs sm:text-sm text-rose-berry mt-1">
                      {exp.organization}
                    </p>

                    {exp.department && (
                      <p className="font-mono text-[11px] text-ink-500 mt-0.5">
                        {t(exp.department)}
                      </p>
                    )}

                    {/* Bullet Points */}
                    <ul className="mt-3.5 space-y-1.5">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="text-xs text-ink-700 leading-relaxed flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-accent mt-1.5 shrink-0" />
                          <span>{t(bullet)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Skills Strip */}
                <div className="px-5 sm:px-6 py-3.5 bg-gradient-to-r from-[#FFF9FB] to-cream/70 border-t border-rose-100 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-full bg-white border border-rose-200/60 font-mono text-[10px] font-medium text-ink-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Collapsible Relevant University Coursework & Lab Domains Accordion */}
        <div className="mt-8 rounded-3xl bg-white/95 border border-rose-200/70 shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={() => setShowCoursework((prev) => !prev)}
            aria-expanded={showCoursework}
            className="w-full p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 text-left hover:bg-blush/20 transition-colors"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blush/80 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-rose-berry" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-ink-900">
                  {ui.experience.courseworkTitle}
                </h3>
                <p className="text-xs sm:text-sm text-ink-700">
                  {ui.experience.courseworkSubtitle}
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blush/50 border border-rose-200 font-mono text-xs font-semibold text-rose-berry">
              <span>
                {showCoursework
                  ? ui.experience.hideCoursework
                  : ui.experience.showCoursework}
              </span>
              {showCoursework ? (
                <ChevronUp className="w-4 h-4 text-rose-berry" />
              ) : (
                <ChevronDown className="w-4 h-4 text-rose-berry" />
              )}
            </span>
          </button>

          <AnimatePresence>
            {showCoursework && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="border-t border-rose-100 bg-cream/40 p-5 sm:p-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {coursework.map((course) => (
                    <div
                      key={course.code}
                      className="p-3.5 rounded-2xl bg-white border border-rose-200/60 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blush/70 text-rose-berry">
                          {course.code}
                        </span>
                        <span className="font-mono text-[10px] text-ink-500 truncate">
                          {t(course.domain)}
                        </span>
                      </div>
                      <p className="font-serif font-bold text-xs sm:text-sm text-ink-900 leading-snug">
                        {t(course.name)}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
