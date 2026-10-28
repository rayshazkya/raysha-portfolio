# Raysha Tazkiya Rahim — Creative & Software Portfolio ✨🎀

A warm editorial, coquette scrapbook, and notebook-grid personal portfolio website built for **Raysha Tazkiya Rahim (Kiya)** — Undergraduate Informatics student at **Universitas Syiah Kuala (USK)**, Banda Aceh.

Designed to translate the tactile charm of Raysha's graphic portfolio (`PORTOFOLIO KIYA.pdf`) and curriculum vitae into a fast, responsive, bilingual (`EN | ID`) web experience ready for zero-config deployment on **Vercel**.

---

## ✨ Key Features

- **Editorial Coquette Scrapbook Aesthetic**: Warm cream & oat paper surfaces (`#FBF6EE`, `#F5EDE0`), blush-pink accents (`#FADCE4`, `#D96B8A`, `#A8385B`), CSS graph-paper grid, subtle SVG paper noise grain, taped polaroid frames, spiral notebook cards, and custom SVG coquette bows, butterflies, and scalloped dividers.
- **Cutout Portrait Stickers**: Extracted directly from the original Canva portfolio with transparent alpha channels and styled with crisp white paper cutout drop-shadows (`.sticker-cutout`).
- **Bilingual (`EN` | `ID`) Toggle**: Instant client-side language switcher persisted in `localStorage`, translating section headers, UI labels, project case studies, and organizational timelines.
- **Interactive Case Study Drawer & Lightboxes**:
  - Filterable **Featured Projects** (*TudungSaji*, *SOMASI*, *Civitas Quest*, and *SiCADU*) with multi-screen carousels, problem/contribution/outcome breakdowns, and system architecture notes.
  - **Photography & Creative Media** showcase with polaroid galleries (*Kunjungan Panti* & *SPEED Silaturahmi*), `@speed.uii` 9:16 mobile reel mockups, YouTube banner preview, and keyboard-accessible full-screen Lightbox.
  - **Honors & Certificates** viewer and 1-click **Copy Email** with toast confirmation.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Variables
- **Motion**: [Framer Motion](https://www.framer.com/motion/) (respects `prefers-reduced-motion`)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Inline SVGs
- **Typography**: `Fraunces` (Editorial Serif), `Plus Jakarta Sans` (Body), `Caveat` (Handwritten Script), `JetBrains Mono` (Metadata & Chips)

---

## 🚀 Getting Started Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Create a production build:**
   ```bash
   npm run build
   npm start
   ```

---

## 📝 How to Edit Content

All portfolio copy, bilingual strings (`en` and `id`), project descriptions, timeline items, skills, and links live in a single strongly-typed file:

- **Content Data**: [`data/portfolio.ts`](./data/portfolio.ts)
- **Type Definitions**: [`types/portfolio.ts`](./types/portfolio.ts)
- **UI Labels & Language Hook**: [`lib/i18n.ts`](./lib/i18n.ts)

---

## 🖼️ How to Replace or Add Images

All static assets are organized under `/public/assets/` and `/public/cv/`. You can replace any image simply by dropping a file with the same filename into the corresponding folder:

```text
public/
├── cv/
│   └── CV_Raysha_Tazkiya_Rahim.pdf       # Downloadable CV PDF
└── assets/
    ├── og-image.png                      # 1200x630 OpenGraph social preview
    ├── photos/
    │   ├── hero-cutout.png               # Hero cutout portrait (transparent PNG)
    │   ├── about-cutout.png              # About section cutout portrait
    │   ├── skills-cutout.png             # Skills section cutout portrait
    │   ├── tools-polaroid.png            # B&W cafe photo in Tools polaroid frame
    │   └── contact-cutout.png            # Contact section B&W cutout portrait
    ├── projects/
    │   ├── sicadu-1.png, sicadu-2.png, sicadu-3.png
    │   ├── tudungsaji-1.png, tudungsaji-2.png
    │   ├── somasi-1.png, somasi-2.png, somasi-3.png
    │   └── civitas-quest-1.png, civitas-quest-2.png, civitas-quest-3.png
    ├── photography/
    │   ├── kunjungan-panti-1.jpg .. 5.jpg
    │   └── speed-silaturahmi-1.jpg .. 6.jpg
    └── social/
        ├── speed-yt-banner.jpg
        └── speed-1.jpg .. 6.jpg
```

---

## ▲ Deploying to Vercel

This repository is zero-config ready for **Vercel**:

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Keep the default Next.js build settings (`npm run build`) and click **Deploy**.

