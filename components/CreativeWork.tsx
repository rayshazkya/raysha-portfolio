"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Smartphone,
  MapPin,
  Calendar,
  Youtube,
  Instagram,
  ZoomIn,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TagChip } from "@/components/ui/TagChip";
import { Lightbox, LightboxSlide } from "@/components/ui/Lightbox";

export function CreativeWork() {
  const { t, ui } = useLanguage();
  const { photographyEvents, socialMedia } = portfolioData;

  const [activeTab, setActiveTab] = useState<"photography" | "social">(
    "photography"
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState<LightboxSlide[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openPhotoLightbox = (slides: LightboxSlide[], index: number) => {
    setLightboxSlides(slides);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="creative"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-paper/45 border-y border-stone-200/80"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <SectionHeader
            eyebrow={ui.creative.eyebrow}
            title={ui.creative.title}
            subtitle={ui.creative.subtitle}
            className="mb-0"
          />

          {/* Sub-Tab Switcher */}
          <div
            className="flex items-center gap-1.5 p-1.5 rounded-full bg-white border border-stone-200/90 shadow-sm self-start"
            role="tablist"
            aria-label="Creative work categories"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "photography"}
              onClick={() => setActiveTab("photography")}
              className={`px-4 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "photography"
                  ? "bg-ink-900 text-white shadow-sm"
                  : "text-ink-700 hover:bg-blush/50 hover:text-ink-900"
              }`}
            >
              {ui.creative.tabPhotography}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "social"}
              onClick={() => setActiveTab("social")}
              className={`px-4 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "social"
                  ? "bg-ink-900 text-white shadow-sm"
                  : "text-ink-700 hover:bg-blush/50 hover:text-ink-900"
              }`}
            >
              {ui.creative.tabSocial}
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "photography" ? (
            <motion.div
              key="photography-tab"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-10 sm:space-y-12"
            >
              {photographyEvents.map((event, eventIdx) => {
                const eventSlides: LightboxSlide[] = event.photos.map((p) => ({
                  src: p.src,
                  title: event.title,
                  caption: t(p.caption),
                  subcaption: `${event.organization} • ${event.date}`,
                }));

                return (
                  <div
                    key={event.id}
                    className="rounded-3xl bg-white border border-stone-200/90 shadow-[0_12px_36px_rgba(28,25,23,0.05)] p-5 sm:p-8 lg:p-10"
                  >
                    {/* Event Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-stone-200/80">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-3 py-0.5 rounded-full bg-blush/70 font-mono text-[11px] font-semibold text-rose-berry">
                            0{eventIdx + 1} • {t(event.role)}
                          </span>
                          <span className="inline-flex items-center gap-1 font-mono text-xs text-ink-500">
                            <Calendar className="w-3.5 h-3.5 text-rose-berry" />
                            {event.date}
                          </span>
                          <span className="inline-flex items-center gap-1 font-mono text-xs text-ink-500">
                            <MapPin className="w-3.5 h-3.5 text-rose-berry" />
                            {event.location}
                          </span>
                        </div>

                        <h3 className="font-serif font-bold text-xl sm:text-2xl text-ink-900">
                          {event.title} —{" "}
                          <span className="text-rose-berry font-medium">
                            {t(event.subtitle)}
                          </span>
                        </h3>
                        <p className="mt-1.5 text-xs sm:text-sm text-ink-700 max-w-3xl leading-relaxed">
                          {t(event.description)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cream border border-stone-200 font-mono text-xs font-medium text-ink-900">
                          <Camera className="w-3.5 h-3.5 text-rose-berry" />
                          {event.photos.length} {ui.creative.photosCount}
                        </span>
                      </div>
                    </div>

                    {/* Clean Editorial Photo Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {event.photos.map((photo, pIdx) => (
                        <motion.figure
                          key={photo.src}
                          whileHover={{ y: -4 }}
                          onClick={() => openPhotoLightbox(eventSlides, pIdx)}
                          className="group cursor-pointer rounded-2xl bg-cream/60 border border-stone-200/80 overflow-hidden shadow-sm transition-all"
                        >
                          <div className="relative aspect-[3/2] overflow-hidden bg-paper">
                            <img
                              src={photo.src}
                              alt={t(photo.caption)}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/20 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity w-9 h-9 rounded-full bg-white/95 flex items-center justify-center text-ink-900 shadow-md">
                                <ZoomIn className="w-4 h-4 text-rose-berry" />
                              </span>
                            </div>
                          </div>
                          <figcaption className="p-3.5">
                            <p className="text-xs sm:text-sm font-medium text-ink-900 leading-snug">
                              {t(photo.caption)}
                            </p>
                          </figcaption>
                        </motion.figure>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="mt-6 pt-4 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-xs text-ink-500">
                        {event.organization}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {event.tags.map((tag) => (
                          <TagChip key={tag} variant="cream" size="sm">
                            {tag}
                          </TagChip>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="social-tab"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-8 sm:space-y-10"
            >
              {/* Top Overview & Metrics Banner */}
              <div className="rounded-3xl bg-white border border-stone-200/90 shadow-[0_12px_36px_rgba(28,25,23,0.05)] p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush/70 font-mono text-xs font-medium text-rose-berry">
                      <Instagram className="w-3.5 h-3.5" />
                      <span>{socialMedia.handle}</span>
                      <span>•</span>
                      <span>{t(socialMedia.period)}</span>
                    </div>

                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-ink-900">
                      {socialMedia.organization}
                    </h3>
                    <p className="font-sans font-medium text-sm sm:text-base text-rose-berry">
                      {t(socialMedia.role)}
                    </p>
                    <p className="text-xs sm:text-sm text-ink-700 leading-relaxed">
                      {t(socialMedia.summary)}
                    </p>
                  </div>

                  {/* Metrics Cards */}
                  <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                    {socialMedia.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-cream/80 border border-stone-200/80 flex items-center justify-between gap-3"
                      >
                        <span className="font-mono text-xs text-ink-700">
                          {t(metric.label)}
                        </span>
                        <span className="font-serif font-bold text-lg sm:text-xl text-rose-berry">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* YouTube Channel Banner Design */}
                <div className="mt-7 pt-6 border-t border-stone-200/80">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-ink-900">
                      <Youtube className="w-4 h-4 text-rose-berry" />
                      {ui.creative.youtubeBannerLabel}
                    </span>
                  </div>
                  <div
                    onClick={() =>
                      openPhotoLightbox(
                        [
                          {
                            src: socialMedia.youtubeBanner,
                            title: ui.creative.youtubeBannerLabel,
                            caption: socialMedia.organization,
                          },
                        ],
                        0
                      )
                    }
                    className="cursor-pointer rounded-2xl overflow-hidden border border-stone-200 bg-paper"
                  >
                    <img
                      src={socialMedia.youtubeBanner}
                      alt="YouTube Channel Banner"
                      loading="lazy"
                      className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* 9:16 Phone Mockup Showcase Grid */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <h4 className="font-serif font-bold text-xl sm:text-2xl text-ink-900 flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-rose-berry" />
                    {ui.creative.verticalShowcaseLabel}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {socialMedia.posts.map((post, idx) => {
                    const postSlides: LightboxSlide[] = socialMedia.posts.map(
                      (p) => ({
                        src: p.src,
                        title: t(p.title),
                        caption: t(p.caption),
                        subcaption: `${p.platform} • ${t(p.highlightTag)}`,
                      })
                    );

                    return (
                      <motion.div
                        key={post.id}
                        whileHover={{ y: -4 }}
                        onClick={() => openPhotoLightbox(postSlides, idx)}
                        className="group cursor-pointer rounded-3xl bg-white border border-stone-200/90 shadow-sm p-5 flex flex-col justify-between"
                      >
                        {/* Clean Phone Frame */}
                        <div className="relative mx-auto w-full max-w-[230px] rounded-[26px] bg-ink-900 p-2 shadow-md">
                          <div className="w-12 h-1 rounded-full bg-white/25 mx-auto mb-1.5" />
                          <div className="relative aspect-[9/19] rounded-[18px] overflow-hidden bg-paper">
                            <img
                              src={post.src}
                              alt={t(post.title)}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-white/95 font-mono text-[10px] font-semibold text-rose-berry shadow-sm">
                              {t(post.highlightTag)}
                            </span>
                          </div>
                        </div>

                        {/* Card Copy */}
                        <div className="mt-4 pt-3 border-t border-stone-200/80">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-rose-berry">
                              {post.platform}
                            </span>
                            <span className="font-mono text-[10px] text-ink-500">
                              {post.format}
                            </span>
                          </div>
                          <h5 className="font-serif font-bold text-base sm:text-lg text-ink-900">
                            {t(post.title)}
                          </h5>
                          <p className="mt-1 text-xs text-ink-700 leading-relaxed">
                            {t(post.caption)}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Shared Full-Screen Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        slides={lightboxSlides}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex(
            (prev) => (prev - 1 + lightboxSlides.length) % lightboxSlides.length
          )
        }
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % lightboxSlides.length)
        }
      />
    </section>
  );
}
