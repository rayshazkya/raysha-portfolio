"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Sparkles,
  BarChart3,
  Camera,
  MapPin,
  Calendar,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TagChip } from "@/components/ui/TagChip";

export function About() {
  const { locale, t, ui } = useLanguage();
  const { profile, education, focusAreas } = portfolioData;

  const focusIcons = {
    code: <Code2 className="w-5 h-5 text-rose-berry" />,
    sparkles: <Sparkles className="w-5 h-5 text-rose-berry" />,
    chart: <BarChart3 className="w-5 h-5 text-rose-berry" />,
    camera: <Camera className="w-5 h-5 text-rose-berry" />,
  };

  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-[#FAF8F5] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute top-10 -right-24 w-80 h-80 rounded-full bg-blush/55 blur-3xl"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow={ui.about.eyebrow}
          title={ui.about.title}
          subtitle={ui.about.subtitle}
        />

        {/* Editorial About Me Card with New Portrait Photo */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 rounded-3xl bg-white border border-stone-200/90 shadow-[0_12px_36px_rgba(28,25,23,0.05)] p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Portrait Column (4 cols) — Editorial Framed Photo */}
            <div className="lg:col-span-4 flex justify-center">
              <motion.div
                whileHover={{ y: -4, rotate: -1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-[260px] sm:max-w-[280px] p-3 rounded-3xl bg-cream border border-stone-200/90 shadow-[0_14px_34px_rgba(28,25,23,0.08)]"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-stone-100">
                  <img
                    src={profile.aboutPhoto}
                    alt={`${profile.fullName} — ${ui.about.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="font-serif italic text-sm font-medium drop-shadow">
                      Raysha Tazkiya R.
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md font-mono text-[10px]">
                      USK • 2023
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Narrative Bio Column (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-200/80">
                <span className="font-serif italic text-xl sm:text-2xl text-rose-berry">
                  {locale === "id" ? "Halo, saya Kiya —" : "Hi, I'm Kiya —"}
                </span>
                <span className="font-mono text-xs text-ink-500">
                  Universitas Syiah Kuala
                </span>
              </div>

              {profile.bioParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-ink-700 leading-relaxed"
                >
                  {t(para)}
                </p>
              ))}

              {/* Clean General Domain Pills */}
              <div className="pt-2 flex flex-wrap gap-2">
                <TagChip variant="blush" size="md">
                  UI/UX Design
                </TagChip>
                <TagChip variant="butter" size="md">
                  Full-Stack Web Development
                </TagChip>
                <TagChip variant="sage" size="md">
                  Data Science &amp; Data Analyst
                </TagChip>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Row: Education Card + 4 Focus Areas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left (5 cols): Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5"
          >
            <div className="h-full rounded-3xl bg-white border border-stone-200/90 shadow-[0_12px_36px_rgba(28,25,23,0.05)] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blush/70 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-rose-berry" />
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-ink-900">
                  {ui.about.educationHeader}
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-4 border-l-2 border-rose-accent/50 space-y-2.5"
                  >
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-rose-berry" />

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-rose-berry bg-blush/50 px-2.5 py-0.5 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {t(edu.period)}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-lg text-ink-900">
                      {edu.institution}
                    </h4>

                    <p className="font-sans font-semibold text-sm text-ink-700">
                      {t(edu.degree)}
                    </p>

                    {edu.concentration && (
                      <p className="font-mono text-xs text-rose-berry">
                        {t(edu.concentration)}
                      </p>
                    )}

                    <p className="inline-flex items-center gap-1 text-xs font-mono text-ink-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </p>

                    <ul className="pt-1 space-y-2">
                      {edu.highlights.map((hl, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-xs sm:text-sm text-ink-700 leading-relaxed flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-accent mt-2 shrink-0" />
                          <span>{t(hl)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right (7 cols): Core Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-white border border-stone-200/90 shadow-[0_12px_36px_rgba(28,25,23,0.05)] p-6 sm:p-8 h-full">
              <div className="flex items-center justify-between gap-2 mb-6">
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-ink-900">
                  {ui.about.focusHeader}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((area, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    className="group rounded-2xl bg-cream/70 hover:bg-blush/25 border border-stone-200/80 p-5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/80 flex items-center justify-center mb-3.5 shadow-sm">
                      {focusIcons[area.icon]}
                    </div>
                    <h4 className="font-serif font-bold text-base sm:text-lg text-ink-900 mb-1.5">
                      {t(area.title)}
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-700 leading-relaxed mb-3.5">
                      {t(area.description)}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-white border border-stone-200 font-mono text-[11px] text-ink-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
