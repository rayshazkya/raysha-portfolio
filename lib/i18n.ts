"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, LocalizedText } from "@/types/portfolio";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (textObj: LocalizedText) => string;
  ui: (typeof uiStrings)["en"];
}

export const uiStrings = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      creative: "Creative",
      experience: "Experience",
      contact: "Contact",
      downloadCv: "Download CV",
    },
    hero: {
      badge: "Informatics • Universitas Syiah Kuala",
      greeting: "Hello, I'm",
      exploreWorks: "Explore Selected Works",
      downloadCv: "Download CV",
      contactMe: "Get in Touch",
    },
    about: {
      eyebrow: "01 — ABOUT ME",
      title: "About Me",
      subtitle:
        "Combining UI/UX design, full-stack web development, data science & data analysis, and digital content creation at Universitas Syiah Kuala.",
      educationHeader: "Education",
      focusHeader: "Core Specializations",
      gpaBadge: "Cumulative GPA",
      summaryLabel: "About Me",
    },
    skills: {
      eyebrow: "02 — CAPABILITIES & TOOLKIT",
      title: "Skills & Technical Toolkit",
      subtitle:
        "A versatile skill set spanning full-stack web & Python development, UI/UX design, data science & NLP, data visualization, and digital content creation.",
      competenciesTitle: "Core Competencies",
      filterAll: "All",
      filterEngineering: "Web & Code",
      filterDesign: "UI/UX & Content",
      filterData: "Data Science",
      languagesTitle: "Languages",
      softSkillsTitle: "Professional Strengths",
      toolsTitle: "Software & Tools",
      polaroidCaption: "Designing & building with purpose",
    },
    projects: {
      eyebrow: "03 — SELECTED WORKS",
      title: "Featured Projects",
      subtitle:
        "Selected projects across full-stack web engineering, Data Science & Transformer NLP, UI/UX design, and interactive educational games.",
      filterAll: "All Projects",
      problemLabel: "Background & Challenge",
      contributionLabel: "Role & Implementation",
      outcomeLabel: "Impact & Outcome",
      viewCaseStudy: "View Case Study & Screens",
      closeModal: "Close",
      architectureHeader: "System & Design Architecture",
      highlightsHeader: "Key Features Delivered",
      galleryHeader: "Project Screens",
      roleLabel: "Role",
      periodLabel: "Timeline",
      contextLabel: "Context",
    },
    creative: {
      eyebrow: "04 — VISUAL STORYTELLING",
      title: "Photography & Digital Media",
      subtitle:
        "Event documentation, visual branding, and high-engagement social media campaigns.",
      tabPhotography: "Event Photography",
      tabSocial: "Social Media & Branding",
      clickToEnlarge: "Click any photo to view full screen",
      photosCount: "Photos",
      youtubeBannerLabel: "Channel Banner & Visual Identity Design",
      verticalShowcaseLabel: "Short-Form Reels, TikToks & Feed Campaigns",
      roleBadge: "Digital Content & Branding",
    },
    experience: {
      eyebrow: "04 — EXPERIENCE & LEADERSHIP",
      title: "Experience & Journey",
      subtitle:
        "Internships at Diskominfotik Kota Banda Aceh (E-Government Web Developer) and Kementerian Pekerjaan Umum (Data & GIS Analyst), Laboratory Assistant across six courses, and HMIF KOMINKRAF leader.",
      filterAll: "All Experience",
      filterLab: "Lab Assistant (6)",
      filterInternship: "Internship (2)",
      filterOrg: "Organization (HMIF)",
      activeBadge: "Active",
      courseworkTitle: "Practical Courses Assisted & Core Modules",
      courseworkSubtitle: "Laboratory teaching domains & core academic coursework at Universitas Syiah Kuala",
      showCoursework: "Show Courses & Lab Domains",
      hideCoursework: "Hide Courses",
    },
    contact: {
      eyebrow: "05 — CONTACT",
      title: "Let's Connect & Collaborate",
      subtitle:
        "Currently open for UI/UX Design, Full-Stack Web Development, Data Science / Data Analysis, and Digital Content Creation internships or collaborative projects.",
      copyEmail: "Copy Email",
      copiedToast: "Email copied to clipboard",
      sendEmail: "Send Email",
      downloadCvCta: "Download CV (PDF)",
      emailLabel: "Email Address",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      locationLabel: "Location",
    },
    footer: {
      craftedBy: "Designed & Built by Raysha Tazkiya Rahim",
      rights: "© 2026 • Universitas Syiah Kuala • Banda Aceh, Indonesia",
      backToTop: "Back to top",
    },
  },
  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      creative: "Kreatif",
      experience: "Pengalaman",
      contact: "Kontak",
      downloadCv: "Unduh CV",
    },
    hero: {
      badge: "Informatika • Universitas Syiah Kuala",
      greeting: "Halo, Saya",
      exploreWorks: "Lihat Proyek Pilihan",
      downloadCv: "Unduh CV",
      contactMe: "Hubungi Saya",
    },
    about: {
      eyebrow: "01 — TENTANG SAYA",
      title: "Tentang Saya",
      subtitle:
        "Memadukan desain UI/UX, pengembangan web full-stack, data science & analisis data, serta kreasi konten digital di Universitas Syiah Kuala.",
      educationHeader: "Pendidikan",
      focusHeader: "Bidang Fokus Utama",
      gpaBadge: "IPK Kumulatif",
      summaryLabel: "Tentang Saya",
    },
    skills: {
      eyebrow: "02 — KEAHLIAN & PERANGKAT KERJA",
      title: "Kompetensi & Perangkat Teknis",
      subtitle:
        "Keahlian terpadu dalam pengembangan web full-stack & Python, desain UI/UX, data science & NLP, visualisasi data, dan produksi konten digital.",
      competenciesTitle: "Kompetensi Utama",
      filterAll: "Semua",
      filterEngineering: "Web & Pemrograman",
      filterDesign: "UI/UX & Konten",
      filterData: "Data Science",
      languagesTitle: "Bahasa",
      softSkillsTitle: "Kemampuan Interpersonal",
      toolsTitle: "Perangkat Lunak & Tools",
      polaroidCaption: "Merancang & membangun solusi digital",
    },
    projects: {
      eyebrow: "03 — KARYA PILIHAN",
      title: "Proyek Unggulan",
      subtitle:
        "Karya pilihan di bidang pengembangan web, Data Science & pemodelan NLP Transformer, desain UI/UX, dan game edukasi interaktif.",
      filterAll: "Semua Proyek",
      problemLabel: "Latar Belakang Masalah",
      contributionLabel: "Peran & Implementasi",
      outcomeLabel: "Dampak & Hasil",
      viewCaseStudy: "Lihat Detail & Layar Proyek",
      closeModal: "Tutup",
      architectureHeader: "Arsitektur Sistem & Desain",
      highlightsHeader: "Fitur & Kapabilitas Utama",
      galleryHeader: "Tangkapan Layar Proyek",
      roleLabel: "Peran",
      periodLabel: "Periode",
      contextLabel: "Konteks",
    },
    creative: {
      eyebrow: "04 — MEDIA KREATIF & FOTOGRAFI",
      title: "Fotografi & Konten Digital",
      subtitle:
        "Dokumentasi acara, identitas visual, serta pengelolaan konten media sosial yang komunikatif.",
      tabPhotography: "Fotografi Acara",
      tabSocial: "Media Sosial & Branding",
      clickToEnlarge: "Klik foto untuk tampilan layar penuh",
      photosCount: "Dokumentasi",
      youtubeBannerLabel: "Desain Banner Kanal & Identitas Visual",
      verticalShowcaseLabel: "Reels, TikTok & Kampanye Konten Vertikal",
      roleBadge: "Konten Digital & Branding",
    },
    experience: {
      eyebrow: "04 — PENGALAMAN & KEPEMIMPINAN",
      title: "Pengalaman & Perjalanan",
      subtitle:
        "Pengalaman magang sebagai E-Government Web Developer di Diskominfotik Kota Banda Aceh dan Analis Data & GIS di Kementerian Pekerjaan Umum, Asisten Laboratorium 6 mata kuliah, serta pengurus HMIF KOMINKRAF.",
      filterAll: "Semua Pengalaman",
      filterLab: "Asisten Lab (6)",
      filterInternship: "Magang (2)",
      filterOrg: "Organisasi (HMIF)",
      activeBadge: "Aktif",
      courseworkTitle: "Mata Kuliah Praktikum yang Diasistensi & Modul Inti",
      courseworkSubtitle: "Bidang pengajaran praktikum laboratorium & mata kuliah utama di Universitas Syiah Kuala",
      showCoursework: "Lihat Daftar Mata Kuliah & Lab",
      hideCoursework: "Sembunyikan Daftar",
    },
    contact: {
      eyebrow: "05 — KONTAK",
      title: "Mari Terhubung & Berkolaborasi",
      subtitle:
        "Terbuka untuk kesempatan magang maupun kolaborasi proyek di bidang UI/UX Design, Full-Stack Web Development, Data Science / Analisis Data, serta Kreasi Konten Digital.",
      copyEmail: "Salin Email",
      copiedToast: "Alamat email berhasil disalin",
      sendEmail: "Kirim Email",
      downloadCvCta: "Unduh CV (PDF)",
      emailLabel: "Alamat Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      locationLabel: "Domisili",
    },
    footer: {
      craftedBy: "Dirancang & Dibangun oleh Raysha Tazkiya Rahim",
      rights: "© 2026 • Universitas Syiah Kuala • Banda Aceh, Indonesia",
      backToTop: "Kembali ke atas",
    },
  },
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("rtr-portfolio-locale") as Locale | null;
      if (saved === "en" || saved === "id") {
        setLocaleState(saved);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    try {
      window.localStorage.setItem("rtr-portfolio-locale", nextLocale);
    } catch {
      // ignore storage errors
    }
  };

  const toggleLocale = () => {
    setLocale(locale === "en" ? "id" : "en");
  };

  const t = (textObj: LocalizedText) => {
    return textObj[locale] || textObj.en;
  };

  return React.createElement(
    LanguageContext.Provider,
    {
      value: {
        locale,
        setLocale,
        toggleLocale,
        t,
        ui: uiStrings[locale],
      },
    },
    children
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
