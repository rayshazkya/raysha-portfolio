"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const { locale, toggleLocale, ui } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  const navItems = [
    { id: "about", href: "#about", label: ui.nav.about },
    { id: "skills", href: "#skills", label: ui.nav.skills },
    { id: "projects", href: "#projects", label: ui.nav.projects },
    { id: "experience", href: "#experience", label: ui.nav.experience },
    { id: "contact", href: "#contact", label: ui.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "projects", "experience", "contact"];
      const scrollPos = window.scrollY + 180;
      for (const secId of sections) {
        const el = document.getElementById(secId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(secId);
            break;
          }
        }
      }
      if (window.scrollY < 150) {
        setActiveSection("top");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <nav
          aria-label="Primary Navigation"
          className={`relative flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full transition-all duration-300 backdrop-blur-2xl backdrop-saturate-[190%] border border-white/85 ring-1 ring-rose-200/50 ${
            scrolled
              ? "bg-gradient-to-r from-white/75 via-[#FFF6FA]/70 to-white/75 shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(255,255,255,0.5),0_14px_40px_rgba(142,59,89,0.14)]"
              : "bg-gradient-to-r from-white/60 via-[#FFF8FB]/55 to-white/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(255,255,255,0.4),0_10px_30px_rgba(142,59,89,0.10)]"
          }`}
        >
          {/* Specular Top Liquid Glass Highlight Line */}
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
            aria-hidden="true"
          />

          {/* Left: Clear, Legible Brand Identity */}
          <a
            href="#top"
            className="group inline-flex items-center gap-3 focus:outline-none"
          >
            <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-rose-berry to-[#B85277] text-white font-serif font-bold text-base tracking-tight shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_4px_12px_rgba(142,59,89,0.28)] group-hover:scale-105 transition-transform">
              R
            </span>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-ink-900 leading-tight">
                {portfolioData.profile.fullName}
              </span>
              <span className="font-mono text-[11px] sm:text-xs font-medium tracking-wide text-rose-berry">
                Informatics • USK
              </span>
            </div>
          </a>

          {/* Center: Liquid Glass Inner Track + Larger, Clear Font Links */}
          <ul className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-xl p-1.5 rounded-full border border-white/80 shadow-[inset_0_1px_3px_rgba(142,59,89,0.08)]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.href} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-berry to-[#C2597E] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_12px_rgba(142,59,89,0.28)]"
                    />
                  )}
                  <a
                    href={item.href}
                    className={`relative z-10 px-4 py-2 rounded-full text-sm sm:text-[15px] font-semibold tracking-tight transition-colors block ${
                      isActive
                        ? "text-white"
                        : "text-ink-900 hover:text-rose-berry"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right: Liquid Glass Language Switcher + Download CV + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              onClick={toggleLocale}
              type="button"
              aria-label="Toggle language between English and Indonesian"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/65 hover:bg-white/90 backdrop-blur-md border border-white/85 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(142,59,89,0.08)] font-mono text-xs sm:text-[13px] font-semibold text-ink-900 transition-all"
            >
              <Globe className="w-4 h-4 text-rose-berry" />
              <span
                className={
                  locale === "en" ? "text-rose-berry font-bold" : "text-ink-500"
                }
              >
                EN
              </span>
              <span className="text-ink-400">/</span>
              <span
                className={
                  locale === "id" ? "text-rose-berry font-bold" : "text-ink-500"
                }
              >
                ID
              </span>
            </button>

            <a
              href={portfolioData.profile.cvUrl}
              download="CV_Raysha_Tazkiya_Rahim.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#8E3B59] via-rose-berry to-[#B85277] text-white font-sans text-xs sm:text-sm font-semibold hover:opacity-95 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_6px_16px_rgba(142,59,89,0.25)]"
            >
              <Download className="w-4 h-4" />
              <span>{ui.nav.downloadCv}</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/85 text-ink-900 hover:bg-white transition-colors shadow-sm"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Smooth Liquid Glass Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2.5 p-4 rounded-3xl bg-white/80 backdrop-blur-2xl backdrop-saturate-[190%] border border-white/85 ring-1 ring-rose-200/50 shadow-[0_20px_50px_rgba(142,59,89,0.16)]"
            >
              <ul className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-rose-berry to-[#B85277] text-white shadow-sm"
                            : "bg-white/70 text-ink-900 hover:bg-blush/50"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-3.5 pt-3.5 border-t border-rose-200/60 flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-ink-700 truncate">
                  {portfolioData.profile.email}
                </span>
                <a
                  href={portfolioData.profile.cvUrl}
                  download="CV_Raysha_Tazkiya_Rahim.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-rose-berry to-[#B85277] text-white text-xs sm:text-sm font-semibold shrink-0 shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>{ui.nav.downloadCv}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
