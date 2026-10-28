"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { ui } = useLanguage();
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white py-8 px-4 sm:px-6 border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-serif font-bold text-sm text-ink-900">
            {ui.footer.craftedBy}
          </p>
          <p className="font-mono text-xs text-ink-500 mt-0.5">
            {ui.footer.rights}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-8 h-8 rounded-full bg-paper/80 hover:bg-blush/50 flex items-center justify-center text-ink-700 hover:text-ink-900 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-full bg-paper/80 hover:bg-blush/50 flex items-center justify-center text-ink-700 hover:text-rose-berry transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="w-8 h-8 rounded-full bg-paper/80 hover:bg-blush/50 flex items-center justify-center text-ink-700 hover:text-rose-berry transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-paper/80 hover:bg-ink-900 text-ink-900 hover:text-white border border-stone-200 font-mono text-xs font-medium transition-colors"
          >
            <span>{ui.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
