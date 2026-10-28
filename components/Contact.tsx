"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Copy,
  Check,
  Download,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { portfolioData } from "@/data/portfolio";

export function Contact() {
  const { t, ui } = useLanguage();
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const input = document.createElement("input");
      input.value = profile.email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#FADCE8]/80 via-[#FDF2F6] to-[#FBF0E4] border-t border-rose-200/70 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="rounded-3xl bg-white/95 backdrop-blur-sm border border-rose-200/80 shadow-[0_18px_50px_rgba(142,59,89,0.08)] p-6 sm:p-10 lg:p-14 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 cols: Clean Executive Contact Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush/70 border border-rose-accent/20">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-berry" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-rose-berry">
                  {ui.contact.eyebrow}
                </span>
              </div>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-ink-900 tracking-tight leading-tight">
                {ui.contact.title}
              </h2>

              <div className="inline-block px-3.5 py-1.5 rounded-xl bg-cream border border-stone-200 font-mono text-xs font-medium text-ink-700">
                {t(profile.availabilityBadge)}
              </div>

              <p className="text-sm sm:text-base text-ink-700 leading-relaxed max-w-2xl">
                {ui.contact.subtitle}
              </p>

              {/* Primary Interactive CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink-900 text-white font-sans text-xs sm:text-sm font-medium hover:bg-rose-berry transition-all shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>{ui.contact.copiedToast}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{ui.contact.copyEmail}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blush/70 text-rose-berry font-sans text-xs sm:text-sm font-semibold hover:bg-blush transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>{ui.contact.sendEmail}</span>
                </a>

                <a
                  href={profile.cvUrl}
                  download="CV_Raysha_Tazkiya_Rahim.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-ink-900 border border-stone-200 font-sans text-xs sm:text-sm font-medium hover:border-rose-accent transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-rose-berry" />
                  <span>{ui.contact.downloadCvCta}</span>
                </a>
              </div>

              {/* Contact Cards: Email, LinkedIn, GitHub, Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className="group p-4 rounded-2xl bg-cream/70 hover:bg-blush/25 border border-stone-200/80 transition-all flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-4 h-4 text-rose-berry" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-500">
                      {ui.contact.emailLabel}
                    </span>
                    <span className="font-sans font-semibold text-xs sm:text-sm text-ink-900 break-all">
                      {profile.email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-2xl bg-cream/70 hover:bg-blush/25 border border-stone-200/80 transition-all flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Linkedin className="w-4 h-4 text-rose-berry" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-500">
                      {ui.contact.linkedinLabel}
                    </span>
                    <span className="font-sans font-semibold text-xs sm:text-sm text-ink-900 inline-flex items-center gap-1">
                      {profile.linkedinHandle}
                      <ExternalLink className="w-3 h-3 text-rose-berry" />
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-2xl bg-cream/70 hover:bg-blush/25 border border-stone-200/80 transition-all flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Github className="w-4 h-4 text-ink-900" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-500">
                      {ui.contact.githubLabel}
                    </span>
                    <span className="font-sans font-semibold text-xs sm:text-sm text-ink-900 inline-flex items-center gap-1">
                      github.com/{profile.githubHandle}
                      <ExternalLink className="w-3 h-3 text-rose-berry" />
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-cream/70 border border-stone-200/80 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4 text-rose-berry" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-500">
                      {ui.contact.locationLabel}
                    </span>
                    <span className="font-sans font-semibold text-xs sm:text-sm text-ink-900">
                      {profile.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Editorial Framed Photo (IMG_7477) */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ y: -5, rotate: 0.8 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-[310px] sm:max-w-[330px] p-3.5 rounded-3xl bg-gradient-to-b from-blush/50 via-cream to-white border border-stone-200/90 shadow-[0_18px_45px_rgba(28,25,23,0.10)]"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-stone-100">
                  <img
                    src={profile.contactPhoto}
                    alt={`${profile.fullName} — Informatics USK`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                    <div>
                      <p className="font-serif font-semibold text-sm leading-tight drop-shadow">
                        {profile.fullName}
                      </p>
                      <p className="font-mono text-[10px] text-white/85">
                        Informatics • Universitas Syiah Kuala
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md font-mono text-[10px] font-semibold">
                      Banda Aceh
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 px-4 py-2.5 rounded-full bg-ink-900 text-white shadow-xl font-mono text-xs font-medium flex items-center gap-2"
            role="status"
            aria-live="polite"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{ui.contact.copiedToast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
