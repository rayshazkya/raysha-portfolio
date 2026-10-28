"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Cpu,
  UserCheck,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { portfolioData } from "@/data/portfolio";
import { ProjectCategory, ProjectItem } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TagChip } from "@/components/ui/TagChip";

export function FeaturedProjects() {
  const { t, ui } = useLanguage();
  const { projects } = portfolioData;

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [modalSlideIdx, setModalSlideIdx] = useState(0);
  const [cardSlideMap, setCardSlideMap] = useState<Record<string, number>>({});

  const categories: ProjectCategory[] = [
    "All",
    "Web App",
    "Data Science",
    "UI/UX",
    "Game Dev",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const openCaseStudy = (project: ProjectItem, initialIdx = 0) => {
    setSelectedProject(project);
    setModalSlideIdx(initialIdx);
  };

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
      if (e.key === "ArrowRight") {
        setModalSlideIdx((prev) => (prev + 1) % selectedProject.images.length);
      }
      if (e.key === "ArrowLeft") {
        setModalSlideIdx(
          (prev) =>
            (prev - 1 + selectedProject.images.length) %
            selectedProject.images.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-[#FAF8F5] overflow-hidden"
    >
      {/* Soft ambient pastel blobs */}
      <div
        className="pointer-events-none absolute top-12 -left-20 w-80 h-80 rounded-full bg-blush/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-12 -right-20 w-80 h-80 rounded-full bg-butter/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centered Header + Centered Filter Tabs for Clean Symmetry */}
        <SectionHeader
          eyebrow={ui.projects.eyebrow}
          title={ui.projects.title}
          subtitle={ui.projects.subtitle}
          align="center"
          className="mb-6"
        />

        <div className="flex justify-center mb-10">
          <div
            className="inline-flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1.5 rounded-full bg-white border border-rose-200/80 shadow-sm"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-rose-berry to-[#B85277] text-white shadow-sm"
                      : "text-ink-700 hover:bg-blush/50 hover:text-rose-berry"
                  }`}
                >
                  {cat === "All" ? ui.projects.filterAll : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* UNIFORM, ALIGNED 3-COLUMN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const activeImgIdx = cardSlideMap[project.id] || 0;
              const currentImage =
                project.images[activeImgIdx] || project.images[0];

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -5 }}
                  className="group h-full flex flex-col rounded-3xl bg-white border border-rose-200/70 shadow-[0_10px_30px_rgba(142,59,89,0.06)] hover:shadow-[0_18px_40px_rgba(142,59,89,0.13)] overflow-hidden transition-all"
                >
                  {/* Top Image Preview */}
                  <div
                    onClick={() => openCaseStudy(project, activeImgIdx)}
                    className="relative aspect-[16/10] bg-cream overflow-hidden cursor-pointer shrink-0"
                  >
                    <img
                      src={currentImage.src}
                      alt={t(currentImage.alt)}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-rose-berry/0 group-hover:bg-rose-berry/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-1.5 rounded-full bg-white/95 text-rose-berry font-sans font-semibold text-xs shadow-md inline-flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{ui.projects.viewCaseStudy}</span>
                      </span>
                    </div>

                    {/* Mini Screen Switcher Dots */}
                    {project.images.length > 1 && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute bottom-2.5 right-2.5 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm"
                      >
                        {project.images.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() =>
                              setCardSlideMap((prev) => ({
                                ...prev,
                                [project.id]: idx,
                              }))
                            }
                            aria-label={`Screen ${idx + 1}`}
                            className={`h-1.5 rounded-full transition-all ${
                              idx === activeImgIdx
                                ? "w-4 bg-white"
                                : "w-1.5 bg-white/50 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Soft Sweet Berry-Rose Gradient Ribbon */}
                  <div className="px-4 py-2.5 bg-gradient-to-r from-[#8E3B59] via-[#B44E72] to-[#C86486] text-white flex items-center justify-between gap-2 shrink-0">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest truncate">
                      {project.number} • {project.title}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/20 font-mono text-[10px] uppercase tracking-wider text-white shrink-0">
                      {project.category}
                    </span>
                  </div>

                  {/* Strictly Aligned Body & Footer */}
                  <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-white to-[#FFF9FB]">
                    <div>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-ink-900 leading-snug line-clamp-2 min-h-[2.75rem] mb-2">
                        {t(project.subtitle)}
                      </h3>
                      <p className="text-xs text-ink-700 leading-relaxed line-clamp-3 min-h-[3.6rem] mb-4">
                        {t(project.problem)}
                      </p>
                    </div>

                    <div>
                      {/* Uniform 1-Row Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4 min-h-[1.75rem]">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-full bg-blush/55 border border-rose-200/70 font-mono text-[10px] font-medium text-rose-berry"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => openCaseStudy(project, activeImgIdx)}
                        className="w-full pt-3 border-t border-rose-100 flex items-center justify-between font-sans font-semibold text-xs text-rose-berry group-hover:text-ink-900 transition-colors"
                      >
                        <span>{ui.projects.viewCaseStudy}</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-ink-900/70 backdrop-blur-sm p-0 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} Case Study`}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white border border-stone-200 shadow-2xl p-5 sm:p-8"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 mb-6 border-b border-stone-200">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-berry text-white font-mono text-[11px] font-semibold">
                      PROJECT {selectedProject.number}
                    </span>
                    <TagChip variant="blush" size="sm">
                      {selectedProject.category}
                    </TagChip>
                    <span className="font-mono text-xs text-ink-500">
                      {t(selectedProject.context)}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-ink-900">
                    {selectedProject.title}
                  </h3>
                  <p className="font-sans font-medium text-sm sm:text-base text-rose-berry">
                    {t(selectedProject.subtitle)}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-paper hover:bg-blush/60 text-ink-900 transition-colors shrink-0"
                  aria-label={ui.projects.closeModal}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Image Carousel inside Case Study */}
              <div className="mb-6">
                <div className="relative rounded-2xl bg-cream border border-stone-200 overflow-hidden">
                  <div className="aspect-[16/10] flex items-center justify-center bg-paper/50 overflow-hidden">
                    <img
                      src={selectedProject.images[modalSlideIdx].src}
                      alt={t(selectedProject.images[modalSlideIdx].alt)}
                      className="max-h-[420px] w-auto object-contain mx-auto"
                    />
                  </div>

                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setModalSlideIdx(
                            (prev) =>
                              (prev - 1 + selectedProject.images.length) %
                              selectedProject.images.length
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 border border-stone-200 flex items-center justify-center text-ink-900 shadow-md hover:bg-blush/50"
                        aria-label="Previous project screen"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setModalSlideIdx(
                            (prev) => (prev + 1) % selectedProject.images.length
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 border border-stone-200 flex items-center justify-center text-ink-900 shadow-md hover:bg-blush/50"
                        aria-label="Next project screen"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  <div className="px-4 py-3 bg-white border-t border-stone-200 flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs sm:text-sm text-ink-700">
                      {t(selectedProject.images[modalSlideIdx].caption)}
                    </p>
                    <span className="font-mono text-xs font-semibold text-rose-berry">
                      {modalSlideIdx + 1} / {selectedProject.images.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Problem, Role & Outcome inside Modal */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-6">
                <div className="p-4 rounded-2xl bg-cream/70 border border-stone-200/80">
                  <span className="block font-mono text-[10px] uppercase tracking-wider font-semibold text-rose-berry mb-1">
                    {ui.projects.problemLabel}
                  </span>
                  <p className="text-xs text-ink-700 leading-relaxed">
                    {t(selectedProject.problem)}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-cream/70 border border-stone-200/80">
                  <span className="block font-mono text-[10px] uppercase tracking-wider font-semibold text-ink-900 mb-1">
                    {ui.projects.contributionLabel}
                  </span>
                  <p className="text-xs text-ink-700 leading-relaxed">
                    {t(selectedProject.contribution)}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-blush/30 border border-rose-accent/20">
                  <span className="block font-mono text-[10px] uppercase tracking-wider font-semibold text-rose-berry mb-1">
                    {ui.projects.outcomeLabel}
                  </span>
                  <p className="text-xs text-ink-900 leading-relaxed">
                    {t(selectedProject.outcome)}
                  </p>
                </div>
              </div>

              {/* Meta Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-cream/70 border border-stone-200/80">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-ink-500 mb-0.5">
                    <UserCheck className="w-3.5 h-3.5 text-rose-berry" />
                    {ui.projects.roleLabel}
                  </div>
                  <p className="font-serif font-bold text-sm text-ink-900">
                    {t(selectedProject.role)}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-cream/70 border border-stone-200/80">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-ink-500 mb-0.5">
                    <Calendar className="w-3.5 h-3.5 text-rose-berry" />
                    {ui.projects.periodLabel}
                  </div>
                  <p className="font-serif font-bold text-sm text-ink-900">
                    {selectedProject.period}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-cream/70 border border-stone-200/80">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-ink-500 mb-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-rose-berry" />
                    Highlight
                  </div>
                  <p className="font-serif font-bold text-sm text-ink-900">
                    {t(selectedProject.featuredMetric)}
                  </p>
                </div>
              </div>

              {/* Key Highlights & Architecture Notes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-cream/70 border border-stone-200/80">
                  <h4 className="font-serif font-bold text-base sm:text-lg text-ink-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-berry" />
                    {ui.projects.highlightsHeader}
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((hl, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-ink-700 leading-relaxed flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-accent mt-2 shrink-0" />
                        <span>{t(hl)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-blush/25 border border-rose-accent/20">
                  <h4 className="font-serif font-bold text-base sm:text-lg text-ink-900 mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-rose-berry" />
                    {ui.projects.architectureHeader}
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {selectedProject.architectureNotes.map((note, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-ink-700 leading-relaxed flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-berry mt-2 shrink-0" />
                        <span>{t(note)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-200/80">
                    {selectedProject.techStack.map((tech) => (
                      <TagChip key={tech} variant="cream" size="sm">
                        {tech}
                      </TagChip>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
