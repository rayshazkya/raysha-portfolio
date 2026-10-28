import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    fullName: "Raysha Tazkiya Rahim",
    nickname: "Kiya",
    monogram: "RTR.",
    title: {
      en: "Informatics Undergraduate • UI/UX Designer, Full-Stack Developer & Data Science",
      id: "Mahasiswa S1 Informatika • UI/UX Designer, Full-Stack Developer & Data Science",
    },
    tagline: {
      en: "Designing intuitive digital products, full-stack web applications, and data-driven visualizations with clarity and elegance.",
      id: "Merancang produk digital yang intuitif, aplikasi web full-stack, serta analisis berbasis data dengan kejelasan dan presisi.",
    },
    statusText: {
      en: "Available for Internship & Collaborative Projects",
      id: "Tersedia untuk Magang & Proyek Kolaborasi",
    },
    availabilityBadge: {
      en: "Open to UI/UX Design, Full-Stack Web, Data Science / Data Analyst & Digital Content Roles",
      id: "Terbuka untuk Peran UI/UX Design, Full-Stack Web, Data Science / Data Analyst & Konten Digital",
    },
    location: "Banda Aceh, Aceh, Indonesia",
    email: "tazkiyarahim@gmail.com",
    linkedinHandle: "Raysha Tazkiya Rahim",
    linkedinUrl: "https://www.linkedin.com/in/raysha-tazkiya-rahim",
    githubHandle: "rayshatazkiya",
    githubUrl: "https://github.com/rayshatazkiya",
    cvUrl: "/cv/CV_Raysha_Tazkiya_Rahim.pdf",
    heroPhoto: "/assets/photos/kiya-hmif-cutout.png",
    aboutPhoto: "/assets/photos/about-kiya.jpg",
    skillsPhoto: "/assets/photos/skills-cutout.png",
    toolsPolaroidPhoto: "/assets/photos/tools-polaroid.png",
    contactPhoto: "/assets/photos/contact-kiya.jpg",
    bioParagraphs: [
      {
        en: "Informatics undergraduate student at Universitas Syiah Kuala with hands-on experience in UI/UX design, full-stack web development, data science & analysis, and digital content creation. Passionate about turning complex problems into intuitive web applications, data-driven insights, and engaging visual experiences through strong communication, creativity, and teamwork.",
        id: "Mahasiswa S1 Informatika di Universitas Syiah Kuala yang memiliki minat dan pengalaman di bidang desain UI/UX, pengembangan web full-stack, data science & analisis data, serta pembuatan konten digital. Senang mengubah berbagai permasalahan menjadi produk digital yang fungsional, wawasan berbasis data, serta karya visual yang komunikatif dan berdampak.",
      },
    ],
    quickStats: [
      {
        label: { en: "University", id: "Universitas" },
        value: { en: "Univ. Syiah Kuala", id: "Univ. Syiah Kuala" },
        icon: "award",
      },
      {
        label: { en: "Lab Assistant", id: "Asisten Lab" },
        value: { en: "6 Practical Courses", id: "6 Mata Kuliah" },
        icon: "layers",
      },
      {
        label: { en: "Selected Works", id: "Karya Pilihan" },
        value: { en: "5+ Shipped Projects", id: "5+ Proyek Terpublikasi" },
        icon: "sparkles",
      },
      {
        label: { en: "Based in", id: "Domisili" },
        value: { en: "Banda Aceh, ID", id: "Banda Aceh, ID" },
        icon: "map-pin",
      },
    ],
  },

  education: [
    {
      institution: "Universitas Syiah Kuala (USK)",
      degree: {
        en: "Bachelor of Informatics",
        id: "Sarjana Informatika (S1 Informatika)",
      },
      concentration: {
        en: "Software Development, UI/UX Design & Systems Analysis",
        id: "Pengembangan Perangkat Lunak, Desain UI/UX & Analisis Sistem",
      },
      period: {
        en: "August 2023 – Present",
        id: "Agustus 2023 – Sekarang",
      },
      location: "Banda Aceh, Aceh",
      highlights: [
        {
          en: "Focused on software development, UI/UX design, and systems analysis.",
          id: "Berfokus pada pengembangan perangkat lunak, desain UI/UX, dan analisis sistem.",
        },
        {
          en: "Active in Himpunan Mahasiswa Informatika (HMIF) – Komunikasi, Informasi dan Kreativitas (KOMINKRAF) Department.",
          id: "Aktif di Himpunan Mahasiswa Informatika (HMIF) – Departemen Komunikasi, Informasi dan Kreativitas (KOMINKRAF).",
        },
        {
          en: "Involved in collaborative projects combining technology and social innovation.",
          id: "Terlibat dalam berbagai proyek kolaboratif yang memadukan teknologi dan inovasi sosial.",
        },
      ],
    },
  ],

  focusAreas: [
    {
      title: {
        en: "Full-Stack Web & Python Development",
        id: "Pengembangan Web Full-Stack & Python",
      },
      description: {
        en: "Developing responsive web applications and teaching Python programming fundamentals & advanced workflows.",
        id: "Mengembangkan aplikasi berbasis web yang responsif serta membimbing pemrograman Python tingkat lanjut.",
      },
      icon: "code",
      tags: ["HTML & CSS", "JavaScript", "Python"],
    },
    {
      title: {
        en: "UI/UX Design & Visual Branding",
        id: "Desain UI/UX & Identitas Visual",
      },
      description: {
        en: "Designing clean, human-centered user interfaces, interactive prototypes, and cohesive visual identities.",
        id: "Merancang antarmuka pengguna yang bersih dan intuitif, prototipe interaktif, serta identitas visual yang konsisten.",
      },
      icon: "sparkles",
      tags: ["UI/UX Design", "Figma", "Visual Branding"],
    },
    {
      title: {
        en: "Data Science, NLP & Data Analysis",
        id: "Data Science, NLP & Analisis Data",
      },
      description: {
        en: "Building Transformer NLP models (IndoBERT & RoBERTa), data mining pipelines, and interactive data visualizations.",
        id: "Membangun pemodelan NLP berbasis Transformer (IndoBERT & RoBERTa), data mining, serta visualisasi dan analisis data.",
      },
      icon: "chart",
      tags: ["Data Science", "NLP (IndoBERT & RoBERTa)", "Data Visualization"],
    },
    {
      title: {
        en: "Digital Content & Social Media Strategy",
        id: "Konten Digital & Strategi Media Sosial",
      },
      description: {
        en: "Producing engaging social media campaigns, promotional posters, and photography for academic and creative communities.",
        id: "Memproduksi kampanye media sosial, desain poster promosi, serta dokumentasi fotografi untuk komunitas dan organisasi.",
      },
      icon: "camera",
      tags: ["Social Media", "Content Strategy", "Canva & Photography"],
    },
  ],

  technicalSkills: [
    {
      name: {
        en: "Web & Programming (Python, JavaScript, HTML, CSS)",
        id: "Web & Pemrograman (Python, JavaScript, HTML, CSS)",
      },
      category: { en: "Technical", id: "Teknis" },
      categoryKey: "engineering",
      proficiency: 4,
      levelLabel: { en: "Core Stack", id: "Keahlian Utama" },
      details: {
        en: "Full-stack web development, advanced Python programming, and object-oriented software development.",
        id: "Pengembangan aplikasi web full-stack, pemrograman lanjutan dengan bahasa Python, serta pemrograman berorientasi objek (OOP).",
      },
    },
    {
      name: {
        en: "UI/UX Design & Interactive Prototyping",
        id: "Desain UI/UX & Prototyping Interaktif",
      },
      category: { en: "Design & Content", id: "Desain & Konten" },
      categoryKey: "design",
      proficiency: 4,
      levelLabel: { en: "Advanced", id: "Mahir" },
      details: {
        en: "User flows, wireframing, modern interface systems, and visual branding crafted in Figma.",
        id: "Perancangan alur pengguna, wireframing, sistem antarmuka modern, dan identitas visual menggunakan Figma.",
      },
    },
    {
      name: {
        en: "Data Science, Machine Learning & NLP (IndoBERT, RoBERTa)",
        id: "Data Science, Machine Learning & NLP (IndoBERT, RoBERTa)",
      },
      category: { en: "Data Science", id: "Data Science" },
      categoryKey: "data",
      proficiency: 4,
      levelLabel: { en: "Advanced", id: "Mahir" },
      details: {
        en: "Text preprocessing pipelines, Transformer fine-tuning (IndoBERT & RoBERTa), classification evaluation, and Streamlit deployment.",
        id: "Pipeline preprocessing teks, fine-tuning model Transformer (IndoBERT & RoBERTa), evaluasi model klasifikasi, dan aplikasi Streamlit.",
      },
    },
    {
      name: {
        en: "Data Analysis, Visualization & Numerical Computing",
        id: "Analisis Data, Visualisasi & Komputasi Numerik",
      },
      category: { en: "Data Analyst", id: "Data Analyst" },
      categoryKey: "data",
      proficiency: 4,
      levelLabel: { en: "Advanced", id: "Mahir" },
      details: {
        en: "Building informative visual dashboards, exploratory data analysis, numerical methods, and structured reporting using Python & Excel.",
        id: "Membangun dasbor visualisasi data informatif, analisis data eksploratif, metode numerik, serta olahan data menggunakan Python & Excel.",
      },
    },
    {
      name: {
        en: "Digital Content Creation & Visual Branding",
        id: "Kreasi Konten Digital & Visual Branding",
      },
      category: { en: "Design & Content", id: "Desain & Konten" },
      categoryKey: "design",
      proficiency: 4,
      levelLabel: { en: "Advanced", id: "Mahir" },
      details: {
        en: "Social media management, short-form video reels, poster design, and cohesive publication strategies.",
        id: "Pengelolaan media sosial, produksi video pendek (Reels/TikTok), desain poster, dan strategi publikasi kreatif.",
      },
    },
    {
      name: {
        en: "Development & Productivity Tools (VS Code, MS Office, Canva)",
        id: "Perangkat Pengembangan & Produktivitas (VS Code, MS Office, Canva)",
      },
      category: { en: "Technical", id: "Teknis" },
      categoryKey: "engineering",
      proficiency: 4,
      levelLabel: { en: "Daily Driver", id: "Penggunaan Harian" },
      details: {
        en: "Visual Studio Code, Git/GitHub, Docker & CI/CD workflows, Canva, and Microsoft Office (Word, Excel, PowerPoint).",
        id: "Visual Studio Code, Git/GitHub, alur kerja Docker & CI/CD, Canva, serta Microsoft Office (Word, Excel, PowerPoint).",
      },
    },
  ],

  languages: [
    {
      language: { en: "Bahasa Indonesia", id: "Bahasa Indonesia" },
      code: "ID",
      level: { en: "Native Speaker", id: "Penutur Jati (Native)" },
      badge: { en: "Native", id: "Bahasa Ibu" },
      description: {
        en: "Full professional, laboratory teaching, organizational secretarial, and creative communication fluency.",
        id: "Kemahiran penuh untuk komunikasi profesional, pengajaran praktikum laboratorium, kesekretariatan, dan penulisan kreatif.",
      },
    },
    {
      language: { en: "English", id: "Bahasa Inggris" },
      code: "EN",
      level: { en: "Intermediate", id: "Menengah (Intermediate)" },
      badge: { en: "Intermediate", id: "Menengah" },
      description: {
        en: "Proficient in technical documentation, software collaboration, and academic reading/presentation.",
        id: "Kompeten dalam dokumentasi teknis, kolaborasi pengembangan perangkat lunak, dan literatur akademik.",
      },
    },
  ],

  softSkills: [
    {
      label: { en: "Communication", id: "Komunikasi" },
      rotation: 0,
      tone: "blush",
    },
    {
      label: { en: "Teamwork", id: "Kerja Sama Tim" },
      rotation: 0,
      tone: "cream",
    },
    {
      label: { en: "Creative Thinking", id: "Berpikir Kreatif" },
      rotation: 0,
      tone: "butter",
    },
    {
      label: { en: "Time Management", id: "Manajemen Waktu" },
      rotation: 0,
      tone: "sage",
    },
    {
      label: { en: "Problem Solving", id: "Pemecahan Masalah" },
      rotation: 0,
      tone: "cream",
    },
    {
      label: { en: "Leadership", id: "Kepemimpinan" },
      rotation: 0,
      tone: "blush",
    },
    {
      label: { en: "Lab Teaching & Mentoring", id: "Asistensi & Pengajaran Lab" },
      rotation: 0,
      tone: "butter",
    },
    {
      label: { en: "Entrepreneurial Mindset", id: "Kewirausahaan Teknologi" },
      rotation: 0,
      tone: "sage",
    },
  ],

  tools: [
    {
      id: "figma",
      name: "Figma",
      category: { en: "UI/UX & Prototyping", id: "UI/UX & Prototipe" },
      usageNote: {
        en: "Wireframes, high-fidelity UI systems & interactive clickable flows",
        id: "Wireframe, sistem UI presisi tinggi & alur interaktif",
      },
      accentColor: "#D96B8A",
    },
    {
      id: "vscode-git",
      name: "VS Code & QGIS",
      category: { en: "Code & Spatial GIS", id: "Pemrograman & GIS" },
      usageNote: {
        en: "Python/JS/Web development & QGIS spatial map digitization",
        id: "Pengembangan Python/JS/Web & digitasi peta spasial QGIS",
      },
      accentColor: "#A8385B",
    },
    {
      id: "canva",
      name: "Canva",
      category: { en: "Visual Branding & Posters", id: "Visual Branding & Poster" },
      usageNote: {
        en: "Social media carousels, posters, and HMIF KOMINKRAF publications",
        id: "Konten media sosial, poster, dan publikasi KOMINKRAF HMIF",
      },
      accentColor: "#7E9A86",
    },
    {
      id: "capcut",
      name: "CapCut & Social Media",
      category: { en: "Video & Content Creation", id: "Produksi Video & Konten" },
      usageNote: {
        en: "Short-form Reels, TikTok campaigns, and digital storytelling",
        id: "Penyuntingan Reels, kampanye TikTok, dan penceritaan visual",
      },
      accentColor: "#231F20",
    },
    {
      id: "google-sheets",
      name: "Microsoft Excel",
      category: { en: "Data & Visualization", id: "Data & Visualisasi" },
      usageNote: {
        en: "Spatial dataset processing, water distribution analysis & charts",
        id: "Pengolahan data spasial, analisis distribusi air & visualisasi grafik",
      },
      accentColor: "#34A853",
    },
    {
      id: "google-docs",
      name: "MS Word & PowerPoint",
      category: { en: "Documentation & Decks", id: "Dokumentasi & Presentasi" },
      usageNote: {
        en: "Departmental correspondence, meeting records & visual pitch decks",
        id: "Persuratan departemen, notulensi rapat & dek presentasi visual",
      },
      accentColor: "#4285F4",
    },
  ],

  projects: [
    {
      id: "sicadu",
      number: "01",
      title: "SICADU",
      subtitle: {
        en: "Automated Public Complaint Analysis System using Data Mining & NLP",
        id: "Sistem Pengolahan & Analisis Pengaduan Masyarakat Berbasis Data Mining dan NLP",
      },
      category: "Web App",
      tags: ["Web App", "Data Mining", "NLP", "GovTech", "UI/UX Design"],
      role: {
        en: "Full-Stack Developer & UI/UX Designer",
        id: "Full-Stack Developer & Desainer UI/UX",
      },
      period: "2025 – 2026",
      context: {
        en: "Local Government Public Complaint System — Diskominfotik Kota Banda Aceh",
        id: "Sistem Pengaduan Masyarakat Pemerintah Daerah — Diskominfotik Kota Banda Aceh",
      },
      problem: {
        en: "Local Governments receive a massive, diverse volume of public complaints every day—ranging from infrastructure and sanitation to healthcare and education. Because complaint processing was previously handled manually, it was difficult to identify patterns, prioritize urgent issues, and make fast, targeted decisions.",
        id: "Pengaduan masyarakat yang masuk ke Pemerintah Daerah setiap hari jumlahnya besar dan beragam jenisnya, mulai dari infrastruktur, kebersihan, kesehatan, hingga pendidikan. Selama ini proses pengolahan pengaduan tersebut masih dilakukan secara manual, sehingga sulit untuk mengidentifikasi pola, memprioritaskan penanganan, dan mengambil keputusan secara cepat dan tepat sasaran.",
      },
      contribution: {
        en: "Developed an automated complaint processing and analytics platform powered by Data Mining and Natural Language Processing (NLP) to classify citizen reports, identify complaint characteristics, and determine handling priorities effectively.",
        id: "Mengembangkan sistem yang mampu mengolah data pengaduan secara otomatis menggunakan pendekatan data mining dan Natural Language Processing (NLP), lengkap dengan antarmuka pengajuan warga serta dasbor analitik visual bagi Pemerintah Daerah.",
      },
      outcome: {
        en: "Helps Local Government understand complaint patterns across 9 sub-districts, automatically classify report categories and urgency levels, and prioritize follow-up actions faster and more accurately.",
        id: "Membantu Pemerintah Daerah dalam memahami karakteristik pengaduan, mengidentifikasi pola laporan secara otomatis, dan menentukan prioritas penanganan secara lebih cepat, efektif, dan tepat sasaran.",
      },
      highlights: [
        {
          en: "Automated complaint classification and urgency detection using Data Mining & Natural Language Processing (NLP).",
          id: "Pengolahan dan klasifikasi data pengaduan otomatis menggunakan pendekatan Data Mining dan Natural Language Processing (NLP).",
        },
        {
          en: "24/7 citizen reporting portal with a guided 3-step submission form, anonymous reporting option, and live ticket preview.",
          id: "Portal pengaduan warga 24/7 dengan formulir 3 langkah, opsi pelaporan anonim, dan pratinjau tiket secara langsung.",
        },
        {
          en: "Executive Analytics Dashboard displaying complaint trends, category distributions, urgency levels, and AI Insight policy recommendations.",
          id: "Dasbor Analitik Laporan yang memvisualisasikan tren laporan masuk, kategori masalah, tingkat urgensi, serta rekomendasi kebijakan.",
        },
      ],
      architectureNotes: [
        {
          en: "Natural Language Processing (NLP) & Data Mining pipeline to extract complaint patterns, categories, and priority levels from citizen text narratives.",
          id: "Pendekatan Data Mining & Natural Language Processing (NLP) untuk mengekstraksi pola, kategori, dan tingkat urgensi dari teks uraian pengaduan masyarakat.",
        },
        {
          en: "Dual-interface web architecture connecting the public Citizen Reporting Portal with the Local Government Admin Analytics Panel.",
          id: "Arsitektur web terintegrasi yang menghubungkan Portal Pengaduan Warga dengan Panel Admin Analitik Pemerintah Daerah.",
        },
      ],
      techStack: [
        "Python",
        "NLP & Data Mining",
        "HTML5 & CSS3",
        "JavaScript",
        "Data Visualization",
        "UI/UX Design",
      ],
      images: [
        {
          src: "/assets/projects/sicadu-1.png",
          alt: {
            en: "SICADU Design User Interface multi-device showcase",
            id: "Tampilan Design User Interface SICADU pada berbagai perangkat",
          },
          caption: {
            en: "SICADU User Interface Design across desktop, laptop, and tablet analytics views.",
            id: "Desain Antarmuka Pengguna (UI) SICADU untuk portal warga dan dasbor analitik pemerintah daerah.",
          },
        },
        {
          src: "/assets/projects/sicadu-2.png",
          alt: {
            en: "SICADU Public Landing Page",
            id: "Halaman Beranda Publik SICADU Diskominfotik Banda Aceh",
          },
          caption: {
            en: "Public landing page with 24/7 access, 9 sub-districts coverage, and automated AI/NLP classification.",
            id: "Halaman beranda publik SICADU dengan layanan 24/7, cakupan 9 kecamatan, dan klasifikasi otomatis.",
          },
        },
        {
          src: "/assets/projects/sicadu-3.png",
          alt: {
            en: "SICADU Citizen Complaint Submission Form",
            id: "Formulir Pengaduan Warga SICADU",
          },
          caption: {
            en: "Guided 3-step citizen complaint submission form with live ticket preview.",
            id: "Formulir pengajuan aduan warga 3 langkah lengkap dengan kartu pratinjau tiket.",
          },
        },
        {
          src: "/assets/projects/sicadu-4.png",
          alt: {
            en: "SICADU Admin Panel Daftar Aduan with automated classification & urgency",
            id: "Panel Admin Daftar Aduan SICADU dengan hasil analisis kategori dan urgensi otomatis",
          },
          caption: {
            en: "Admin complaint table showing automated NLP category classification and urgency prioritization.",
            id: "Daftar aduan pada panel admin yang menampilkan hasil klasifikasi kategori dan tingkat urgensi otomatis.",
          },
        },
      ],
      featuredMetric: {
        en: "Data Mining & NLP • Automated Priority Analysis",
        id: "Data Mining & NLP • Prioritas Penanganan Otomatis",
      },
      accentTone: "rose",
    },
    {
      id: "tudungsaji",
      number: "02",
      title: "TudungSaji",
      subtitle: {
        en: "Web-Based Culinary Recipe Sharing & CRUD Management Platform",
        id: "Aplikasi Web Berbagi & Pengelolaan Resep Masakan (CRUD)",
      },
      category: "Web App",
      tags: ["Web App", "Frontend Developer", "CRUD", "CI/CD & Docker", "Vercel"],
      role: {
        en: "Frontend Developer & UI Designer",
        id: "Frontend Developer & Desainer UI",
      },
      period: "2025",
      context: {
        en: "Agile Web Development Project — Deployed on Vercel & Railway",
        id: "Proyek Pengembangan Web Metode Agile — Ter-deploy di Vercel & Railway",
      },
      problem: {
        en: "Many people struggle to find clear, structured, and trustworthy cooking recipes, and lack a centralized digital platform to store and share their personal recipes in an organized way.",
        id: "Banyak orang kesulitan menemukan resep yang jelas, terstruktur, dan terpercaya, serta belum memiliki wadah terpusat untuk menyimpan dan membagikan resep pribadi secara digital. Tudung Saji hadir sebagai solusi untuk mengelola dan berbagi resep dengan lebih praktis dan terorganisir.",
      },
      contribution: {
        en: "Served as Frontend Developer responsible for developing the user interface (UI), managing frontend page routing (Landing Page, Dashboard, Recipe Detail, My Recipes, Favorites), and building the functional User Profile feature.",
        id: "Berperan sebagai Frontend Developer yang bertanggung jawab dalam pengembangan antarmuka pengguna (UI), pengelolaan routing halaman frontend, serta pengembangan fitur profil pengguna untuk meningkatkan pengalaman penggunaan aplikasi.",
      },
      outcome: {
        en: "Successfully built and deployed TudungSaji online using an iterative Agile methodology—featuring recipe CRUD (ResepKu), keyword & category filtering (food, drinks, snacks, desserts), favorites logic, and automated CI/CD pipelines via GitHub Actions, Docker Hub, Vercel, and Railway.",
        id: "Proyek Tudung Saji berhasil dikembangkan sebagai aplikasi berbasis web untuk berbagi dan mengelola resep masakan dengan fitur CRUD, pencarian, kategori, favorit, serta profil pengguna, dan telah ter-deploy secara online menggunakan metode Agile serta pipeline CI/CD otomatis.",
      },
      highlights: [
        {
          en: "Full recipe CRUD system (ResepKu) allowing users to view, create, edit, and delete their own culinary creations.",
          id: "Sistem CRUD resep lengkap (ResepKu) untuk melihat, membuat, mengedit, dan menghapus resep masakan secara praktis.",
        },
        {
          en: "Interactive dashboard with category filtering (Makanan, Minuman, Cemilan, Dessert), keyword search, and saved Favorites.",
          id: "Dasbor interaktif dengan pemilihan kategori (Makanan, Minuman, Cemilan, Dessert), pencarian kata kunci, serta penyimpanan Resep Favorit.",
        },
        {
          en: "Automated CI/CD deployment pipeline integrating GitHub Actions, Docker Hub containers, Vercel (Frontend), and Railway (Backend).",
          id: "Pipeline CI/CD otomatis yang mengintegrasikan GitHub Actions, Docker Hub, Vercel (Frontend), dan Railway (Backend).",
        },
      ],
      architectureNotes: [
        {
          en: "Frontend developed with modular page routing and interactive JavaScript connected to a Node.js REST API & database.",
          id: "Frontend dikembangkan dengan routing halaman terstruktur dan JavaScript interaktif yang terhubung ke REST API Node.js serta database.",
        },
        {
          en: "Containerized with Docker and deployed continuously via GitHub Actions to Vercel and Railway with structured Node.js logging.",
          id: "Dibungkus dalam Docker Image dan di-deploy otomatis melalui GitHub Actions ke Vercel dan Railway.",
        },
      ],
      techStack: ["HTML5 & CSS3", "JavaScript", "Node.js", "Frontend Routing", "Docker & CI/CD", "Vercel"],
      images: [
        {
          src: "/assets/projects/tudungsaji-1.png",
          alt: {
            en: "TudungSaji authentication and login interface",
            id: "Halaman Login aplikasi web TudungSaji",
          },
          caption: {
            en: "TudungSaji login interface welcoming culinary enthusiasts.",
            id: "Tampilan halaman masuk (Login) aplikasi resep masakan TudungSaji.",
          },
        },
        {
          src: "/assets/projects/tudungsaji-2.png",
          alt: {
            en: "TudungSaji user dashboard with category filter and search",
            id: "Halaman Beranda / Dashboard TudungSaji dengan fitur kategori dan pencarian",
          },
          caption: {
            en: "User Dashboard featuring category dropdown (Makanan, Minuman, Cemilan, Dessert), search bar, and recipe exploration.",
            id: "Halaman Dashboard pengguna dengan fitur pemilihan kategori, pencarian kata kunci, dan eksplorasi resep.",
          },
        },
        {
          src: "/assets/projects/tudungsaji-3.png",
          alt: {
            en: "TudungSaji full landing page and popular recipes section",
            id: "Halaman Landing Page penuh TudungSaji beserta daftar Resep Populer Minggu Ini",
          },
          caption: {
            en: "Full Landing Page showcasing navigation, hero call-to-action, and popular weekly recipes.",
            id: "Halaman Landing Page TudungSaji yang menampilkan navigasi utama dan daftar Resep Populer Minggu Ini.",
          },
        },
      ],
      featuredMetric: {
        en: "Frontend Developer • Recipe CRUD + CI/CD Deployed",
        id: "Frontend Developer • Sistem CRUD Resep + CI/CD",
      },
      accentTone: "berry",
    },
    {
      id: "foodwaste",
      number: "03",
      title: "FoodWaste",
      subtitle: {
        en: "Web-Based Surplus Food Marketplace to Reduce Food Waste",
        id: "Sistem Marketplace Makanan Surplus Berbasis Web",
      },
      category: "Web App",
      tags: ["Web App", "Surplus Food Marketplace", "Social & Environmental Impact", "UI/UX"],
      role: {
        en: "Full-Stack Web Developer & UI/UX Designer",
        id: "Full-Stack Web Developer & Desainer UI/UX",
      },
      period: "2024 – 2025",
      context: {
        en: "Web-Based Surplus Food Marketplace — foodwaste-two.vercel.app",
        id: "Marketplace Makanan Surplus Berbasis Web — foodwaste-two.vercel.app",
      },
      problem: {
        en: "Food waste is a serious issue because large amounts of edible food are discarded unnecessarily, negatively impacting both the economy and the environment.",
        id: "Permasalahan food waste menjadi isu serius karena banyak makanan layak konsumsi terbuang sia-sia dan berdampak pada ekonomi serta lingkungan.",
      },
      contribution: {
        en: "Developed a web-based surplus food marketplace system that connects sellers and buyers so surplus edible food can be redistributed and utilized more effectively and affordably.",
        id: "Mengembangkan sistem marketplace makanan surplus berbasis web yang menghubungkan penjual dan pembeli agar makanan surplus dapat dimanfaatkan kembali dengan lebih efektif dan terjangkau.",
      },
      outcome: {
        en: "FoodWaste helps reduce food waste through an easy, fast, and efficient web marketplace connecting surplus food sellers with buyers, ensuring edible food is rescued rather than thrown away.",
        id: "FoodWaste membantu mengurangi pemborosan makanan (food waste) melalui sistem marketplace berbasis web yang menghubungkan penjual makanan surplus dengan pembeli secara mudah, cepat, dan efisien, sehingga makanan yang masih layak konsumsi dapat dimanfaatkan kembali dan tidak terbuang sia-sia.",
      },
      highlights: [
        {
          en: "Web-based marketplace connecting surplus food sellers directly with buyers quickly and affordably.",
          id: "Sistem marketplace berbasis web yang menghubungkan penjual makanan surplus dengan pembeli secara mudah, cepat, dan terjangkau.",
        },
        {
          en: "Surplus stock management and distribution workflow with the mission 'Save Food, Save Future'.",
          id: "Pengelolaan stok makanan berlebih dan alur distribusi dengan misi 'Save Food, Save Future'.",
        },
        {
          en: "Reduces economic loss and environmental impact by rescuing still-edible food from going to waste.",
          id: "Mengurangi dampak ekonomi serta lingkungan dengan menyelamatkan makanan layak konsumsi agar tidak terbuang sia-sia.",
        },
      ],
      architectureNotes: [
        {
          en: "Clean, accessible web interface deployed on Vercel with seller/buyer authentication and surplus catalog management.",
          id: "Antarmuka web yang bersih dan mudah diakses (ter-deploy di Vercel) dengan fitur autentikasi penjual/pembeli serta manajemen katalog makanan surplus.",
        },
        {
          en: "Responsive layout designed for fast browsing and claiming of available surplus food items.",
          id: "Tata letak responsif yang dirancang untuk memudahkan pencarian dan pemesanan makanan berlebih secara cepat.",
        },
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Web Marketplace", "UI/UX Design", "Vercel"],
      images: [
        {
          src: "/assets/projects/foodwaste-1.png",
          alt: {
            en: "FoodWaste web marketplace landing page — Save Food Save Future",
            id: "Halaman utama marketplace web FoodWaste — Save Food Save Future",
          },
          caption: {
            en: "FoodWaste web platform ('Save Food, Save Future') connecting surplus food sellers and buyers.",
            id: "Halaman utama FoodWaste ('Save Food, Save Future') yang menghubungkan penjual makanan surplus dengan pembeli.",
          },
        },
      ],
      featuredMetric: {
        en: "Surplus Food Marketplace • Save Food, Save Future",
        id: "Marketplace Makanan Surplus • Save Food, Save Future",
      },
      accentTone: "sage",
    },
    {
      id: "somasi",
      number: "04",
      title: "SOMASI",
      subtitle: {
        en: "Student Organization Management & Aspiration Information System",
        id: "Solusi Organisasi Mahasiswa — Sistem Informasi Manajemen & Aspirasi Organisasi",
      },
      category: "UI/UX",
      tags: ["UI/UX Design", "Web App", "Organization Management", "Figma"],
      role: {
        en: "UI/UX Designer & Frontend Developer",
        id: "Desainer UI/UX & Pengembang Frontend",
      },
      period: "2024 – 2025",
      context: {
        en: "Student Organization Governance & Administration Platform",
        id: "Platform Tata Kelola, Keanggotaan & Aspirasi Organisasi Mahasiswa",
      },
      problem: {
        en: "Student organizations often manage member directories, departmental structures, event calendars, finances, archives, and student aspirations across disconnected spreadsheets and chat groups.",
        id: "Organisasi mahasiswa sering kali mengelola daftar anggota, struktur departemen, kalender agenda, keuangan, arsip dokumentasi, serta aspirasi mahasiswa secara terpisah di berbagai dokumen dan grup pesan.",
      },
      contribution: {
        en: "Designed and built SOMASI (Solusi Organisasi Mahasiswa), uniting an interactive public landing page & student aspiration portal with an internal executive dashboard covering Departments (KOMINKRAF, HUAL, PKM, Keagamaan), Member Directories, Recruitment, Calendar, Finance, and Archives.",
        id: "Merancang dan membangun SOMASI (Solusi Organisasi Mahasiswa) yang memadukan halaman publik pengajuan aspirasi mahasiswa dengan dasbor manajemen internal meliputi Daftar Departemen (KOMINKRAF, HUAL, PKM, Keagamaan), Daftar Anggota, Pendaftar, Kalender & Agenda, Keuangan, serta Dokumentasi & Arsip.",
      },
      outcome: {
        en: "Centralized student organization operations and aspiration channels into a structured, easy-to-navigate web interface.",
        id: "Memusatkan tata kelola administrasi organisasi dan penyaluran aspirasi mahasiswa ke dalam satu antarmuka web yang rapi dan terstruktur.",
      },
      highlights: [
        {
          en: "Departmental management dashboard organizing members and leadership roles across KOMINKRAF, HUAL, PKM, and Keagamaan.",
          id: "Dasbor manajemen departemen yang menampilkan struktur pengurus dan anggota pada Departemen KOMINKRAF, HUAL, PKM, dan Keagamaan.",
        },
        {
          en: "Integrated modules for Member Directory, Applicant Tracking, Event Calendar, Finance, and Documentation Archives.",
          id: "Modul terintegrasi untuk Daftar Anggota, Pendaftar, Kalender & Agenda, Keuangan, serta Dokumentasi & Arsip.",
        },
        {
          en: "Public landing page with student aspiration submission form and FAQ section.",
          id: "Halaman publik SOMASI dengan formulir penyampaian aspirasi mahasiswa serta informasi layanan organisasi.",
        },
      ],
      architectureNotes: [
        {
          en: "Role-based dashboard interface separating executive board administration (DPH/Department) from public student access.",
          id: "Antarmuka dasbor berbasis peran yang memisahkan pengelolaan pengurus (DPH/Departemen) dengan halaman publik mahasiswa.",
        },
        {
          en: "Clean sidebar navigation and searchable departmental cards designed for rapid member lookup.",
          id: "Navigasi sidebar intuitif dan kartu departemen dengan fitur pencarian cepat anggota.",
        },
      ],
      techStack: ["UI/UX Design", "HTML5 & CSS3", "JavaScript", "Figma", "Web Dashboard"],
      images: [
        {
          src: "/assets/projects/somasi-1.png",
          alt: {
            en: "SOMASI Department & Member Management Dashboard",
            id: "Dasbor Daftar Departemen dan Anggota SOMASI",
          },
          caption: {
            en: "SOMASI DPH Dashboard displaying KOMINKRAF, HUAL, PKM, and Keagamaan department rosters.",
            id: "Dasbor SOMASI yang menampilkan daftar pengurus dan anggota Departemen KOMINKRAF, HUAL, PKM, dan Keagamaan.",
          },
        },
        {
          src: "/assets/projects/somasi-2.png",
          alt: {
            en: "SOMASI Solusi Organisasi Mahasiswa full landing page",
            id: "Halaman Landing Page penuh SOMASI — Solusi Organisasi Mahasiswa",
          },
          caption: {
            en: "Full public landing page for SOMASI featuring organization overview, aspiration form, and FAQ.",
            id: "Halaman utama publik SOMASI (Solusi Organisasi Mahasiswa) lengkap dengan formulir aspirasi dan FAQ.",
          },
        },
      ],
      featuredMetric: {
        en: "Organization Dashboard + Student Aspiration Portal",
        id: "Dasbor Organisasi + Portal Aspirasi Mahasiswa",
      },
      accentTone: "rose",
    },
    {
      id: "civitas-quest",
      number: "05",
      title: "Civitas Quest",
      subtitle: {
        en: "Interactive Educational Game Teaching Civic Values Through Role Simulation & Gamification",
        id: "Game Edukasi Interaktif Pembelajaran Kewarganegaraan Melalui Simulasi Peran & Gamifikasi",
      },
      category: "Game Dev",
      tags: ["Game Dev", "Educational Game", "Gamification", "Interactive Web"],
      role: {
        en: "Game Developer & Interactive UI Designer",
        id: "Pengembang Game & Desainer Antarmuka Interaktif",
      },
      period: "2024 – 2025",
      context: {
        en: "Interactive Civic Education & Gamification Project",
        id: "Proyek Game Edukasi Kewarganegaraan & Gamifikasi Interaktif",
      },
      problem: {
        en: "Conventional civic and national values education often feels theoretical and one-directional, making it challenging for students to internalize and apply civic principles in daily life.",
        id: "Pembelajaran kewarganegaraan dan nilai-nilai kebangsaan secara konvensional sering kali terasa teoretis, sehingga siswa membutuhkan media interaktif untuk memahami dan menerapkan nilai kebangsaan dalam kehidupan sehari-hari.",
      },
      contribution: {
        en: "Developed Civitas Quest—an interactive educational game that teaches civic responsibility through role simulation, real-world challenges, interactive scenarios, and a gamified reward system.",
        id: "Mengembangkan Civitas Quest sebagai game edukasi interaktif yang mengajarkan kewarganegaraan melalui simulasi peran, tantangan nyata, dan gamifikasi. Dengan fitur seperti skenario interaktif dan sistem penghargaan, game ini membantu siswa memahami dan menerapkan nilai-nilai kebangsaan secara menyenangkan dan efektif.",
      },
      outcome: {
        en: "Helps students understand and practice Pancasila and civic values ('Aku Berperilaku Pancasila', 'Aku dan Teman-Temanku', 'Aku Peduli Lingkungan') in an enjoyable, effective learning experience.",
        id: "Membantu siswa memahami dan menerapkan nilai-nilai kebangsaan serta Pancasila ('Aku Berperilaku Pancasila', 'Aku dan Teman-Temanku', 'Aku Peduli Lingkungan') secara menyenangkan dan efektif.",
      },
      highlights: [
        {
          en: "Role simulation, real-world challenges, and gamification designed for interactive civic learning.",
          id: "Mengajarkan kewarganegaraan melalui simulasi peran, tantangan nyata, dan gamifikasi yang interaktif.",
        },
        {
          en: "Structured learning modules covering Kewarganegaraan, Bahasa Indonesia, and Klimatologi with thematic chapters.",
          id: "Modul pembelajaran terstruktur mencakup Kewarganegaraan, Bahasa Indonesia, dan Klimatologi dengan bab tematik.",
        },
        {
          en: "Interactive scenarios ('Aku Berperilaku Pancasila', 'Aku Peduli Lingkungan') and reward system.",
          id: "Fitur skenario interaktif ('Aku Berperilaku Pancasila', 'Aku Peduli Lingkungan') dan sistem penghargaan.",
        },
      ],
      architectureNotes: [
        {
          en: "Web-based interactive educational adventure interface with user registration/login, subject selection, and scenario progression.",
          id: "Antarmuka petualangan edukasi berbasis web dengan fitur registrasi/login, pemilihan mata pelajaran, dan progres skenario.",
        },
        {
          en: "Illustrated chapter cards and structured learning objectives modal before entering interactive challenges.",
          id: "Kartu bab berilustrasi dan tampilan capaian pembelajaran terstruktur sebelum memulai tantangan interaktif.",
        },
      ],
      techStack: ["HTML5 & CSS3", "JavaScript", "Gamification", "Interactive Scenarios", "UI/UX Design"],
      images: [
        {
          src: "/assets/projects/civitas-quest-1.png",
          alt: {
            en: "Civitas Quest Educational Adventure welcome and login screen",
            id: "Halaman utama Registrasi dan Login Civitas Quest Educational Adventure",
          },
          caption: {
            en: "Civitas Quest — Educational Adventure main portal with registration and login.",
            id: "Halaman utama Civitas Quest — Educational Adventure dengan fitur Registrasi dan Login.",
          },
        },
        {
          src: "/assets/projects/civitas-quest-2.png",
          alt: {
            en: "Civitas Quest subject selection screen",
            id: "Halaman pemilihan materi pelajaran Civitas Quest",
          },
          caption: {
            en: "Interactive subject selection covering Kewarganegaraan, Bahasa Indonesia, and Klimatologi.",
            id: "Halaman pemilihan topik pembelajaran mencakup Kewarganegaraan, Bahasa Indonesia, dan Klimatologi.",
          },
        },
        {
          src: "/assets/projects/civitas-quest-3.png",
          alt: {
            en: "Civitas Quest Pancasila & civic chapters screen",
            id: "Halaman bab pembelajaran Aku Berperilaku Pancasila, Aku dan Teman-Temanku, dan Aku Peduli Lingkungan",
          },
          caption: {
            en: "Thematic civic chapters: 'Aku Berperilaku Pancasila', 'Aku dan Teman-Temanku', and 'Aku Peduli Lingkungan'.",
            id: "Daftar bab skenario interaktif: 'Aku Berperilaku Pancasila', 'Aku dan Teman-Temanku', serta 'Aku Peduli Lingkungan'.",
          },
        },
        {
          src: "/assets/projects/civitas-quest-4.png",
          alt: {
            en: "Civitas Quest learning objectives modal for Aku Berperilaku Pancasila",
            id: "Tampilan rincian materi pembelajaran pada bab Aku Berperilaku Pancasila",
          },
          caption: {
            en: "Learning roadmap modal outlining Pancasila symbols, principles, and everyday civic application.",
            id: "Rincian materi pembelajaran mengenai lambang, sila-sila, dan penerapan nilai Pancasila.",
          },
        },
      ],
      featuredMetric: {
        en: "Civic Education Game • Role Simulation & Gamification",
        id: "Game Edukasi Kewarganegaraan • Simulasi Peran & Gamifikasi",
      },
      accentTone: "butter",
    },
    {
      id: "hoaxbert",
      number: "06",
      title: "HoaxBERT",
      subtitle: {
        en: "Comparative Fine-Tuning of IndoBERT and RoBERTa for Indonesian Fake News Detection",
        id: "Komparasi Fine-Tuning IndoBERT dan RoBERTa untuk Deteksi Hoaks Berita Berbahasa Indonesia",
      },
      category: "Data Science",
      tags: ["Data Science", "NLP", "IndoBERT & RoBERTa", "Streamlit", "Python"],
      role: {
        en: "Data Scientist & NLP Engineer",
        id: "Data Scientist & NLP Engineer",
      },
      period: "2026",
      context: {
        en: "Natural Language Processing & Data Science Project — Streamlit Dashboard",
        id: "Proyek Pemrosesan Bahasa Alami (NLP) & Data Science — Aplikasi Streamlit",
      },
      problem: {
        en: "The rapid spread of fake news (hoaxes) across social media in Indonesia outpaces manual verification, requiring an automated, accurate Natural Language Processing system using Transformer models.",
        id: "Penyebaran hoaks di Indonesia semakin meningkat seiring berkembangnya media sosial. Verifikasi secara manual membutuhkan waktu yang lama sehingga sulit mengimbangi cepatnya penyebaran informasi palsu.",
      },
      contribution: {
        en: "Built a 4-stage data ingestion & anti-leakage preprocessing pipeline (5,544 balanced Hoax & Fact news rows with Stratified Pair-Level Splitting 80:10:10), fine-tuned IndoBERT and Indonesian RoBERTa Transformer models, and deployed an interactive Streamlit dashboard.",
        id: "Memanfaatkan teknologi Natural Language Processing dengan model Transformer (IndoBERT dan RoBERTa), membangun pipeline pengumpulan data & preprocessing bebas kebocoran (5.544 baris data seimbang 50:50), serta mengimplementasikan dashboard deteksi interaktif berbasis Streamlit.",
      },
      outcome: {
        en: "Both models achieved >98% accuracy and 0.9995 ROC-AUC on the test set (Indonesian RoBERTa leading at 99.46% Accuracy & Macro-F1, IndoBERT at 98.74%) without overfitting, deployed into a real-time Streamlit app with Dual-Model Comparison and Confidence Gauge Meters.",
        id: "Kedua model menghasilkan performa sangat tinggi dengan akurasi di atas 98% dan ROC-AUC 0,9995 (RoBERTa unggul di akurasi 99,46% & IndoBERT 98,74%) tanpa overfitting, serta diimplementasikan dalam aplikasi berbasis Streamlit untuk deteksi hoaks secara real-time.",
      },
      highlights: [
        {
          en: "4-stage anti-leakage data pipeline: TurnBackHoax.id & newspaper3k scraping, Semantic Stripping, Pair-Level Length Matching, and Stratified Pair-Level Splitting (5,544 balanced rows).",
          id: "Pipeline preprocessing 4 tahap: ekstraksi TurnBackHoax.id & newspaper3k, Semantic Stripping, Pair-Level Length Matching, serta Stratified Pair-Level Splitting (5.544 data seimbang 50:50).",
        },
        {
          en: "Fine-tuned indobenchmark/indobert-base-p1 (98.74% Accuracy) and flax-community/indonesian-roberta-base (99.46% Accuracy, only 3 errors out of 556 test samples).",
          id: "Komparasi fine-tuning indobenchmark/indobert-base-p1 (Akurasi 98,74%) dan flax-community/indonesian-roberta-base (Akurasi 99,46%, hanya 3 eror dari 556 data uji).",
        },
        {
          en: "Interactive Streamlit web dashboard featuring Single-Model testing, side-by-side Dual-Model Comparison Mode, and dynamic HTML Confidence Gauge Meters.",
          id: "Dashboard aplikasi HoaxBERT berbasis Streamlit dengan fitur pengujian satu model, Mode Komparasi Keduanya secara berdampingan, dan visualisasi Confidence Gauge Meter.",
        },
      ],
      architectureNotes: [
        {
          en: "Transformer Fine-Tuning configured with AdamW Optimizer (Weight Decay 0.01, LR 2e-5), Batch Size 16, Max Length 256 tokens, Class-Weighted CrossEntropyLoss, and Early Stopping.",
          id: "Konfigurasi Fine-Tuning Transformer menggunakan Optimizer AdamW (Weight Decay 0,01, LR 2e-5), Batch Size 16, Max Length 256 token, CrossEntropyLoss terboboti, dan Early Stopping.",
        },
        {
          en: "Interactive GUI deployed with Python & Streamlit supporting real-time semantic inference and session prediction history.",
          id: "Antarmuka GUI interaktif dibangun berbasis Python & Streamlit yang mendukung inferensi semantik real-time beserta riwayat prediksi.",
        },
      ],
      techStack: ["Python", "IndoBERT", "RoBERTa", "Streamlit", "NLP & Transformers"],
      images: [
        {
          src: "/assets/projects/hoaxbert-1.png",
          alt: {
            en: "HoaxBERT Streamlit application dashboard with Dual-Model Comparison and Confidence Gauge Meter",
            id: "Implementasi Sistem — Dashboard Aplikasi HoaxBERT berbasis Streamlit",
          },
          caption: {
            en: "HoaxBERT Streamlit Dashboard featuring Single-Model & Dual-Model Comparison Mode and Confidence Gauge Meters.",
            id: "Dashboard Aplikasi HoaxBERT berbasis Streamlit dengan fitur Dual-Model Mode & Komparasi serta visualisasi Confidence Score.",
          },
        },
        {
          src: "/assets/projects/hoaxbert-2.png",
          alt: {
            en: "HoaxBERT presentation cover slide",
            id: "Halaman sampul proyek HoaxBERT: Komparasi Fine-Tuning IndoBERT dan RoBERTa",
          },
          caption: {
            en: "HoaxBERT: Comparative Fine-Tuning of IndoBERT and RoBERTa for Indonesian Fake News Detection.",
            id: "HoaxBERT: Komparasi Fine-Tuning IndoBERT dan RoBERTa untuk Deteksi Hoaks Berita Berbahasa Indonesia.",
          },
        },
        {
          src: "/assets/projects/hoaxbert-3.png",
          alt: {
            en: "HoaxBERT experimental results and metric comparison on Test Set",
            id: "Hasil Eksperimen & Komparasi Metrik Evaluasi IndoBERT vs Indonesian RoBERTa",
          },
          caption: {
            en: "Test Set performance comparison: Indonesian RoBERTa (99.46% Accuracy, 0.9995 ROC-AUC) vs IndoBERT (98.74% Accuracy).",
            id: "Hasil eksperimen pada Test Set: Indonesian RoBERTa (Akurasi 99,46%, ROC-AUC 0,9995) vs IndoBERT (Akurasi 98,74%).",
          },
        },
        {
          src: "/assets/projects/hoaxbert-4.png",
          alt: {
            en: "HoaxBERT learning curve analysis for IndoBERT and RoBERTa",
            id: "Analisis Learning Curve IndoBERT dan RoBERTa tanpa overfitting",
          },
          caption: {
            en: "Learning curve analysis demonstrating healthy model generalization without overfitting or underfitting.",
            id: "Analisis Learning Curve yang membuktikan generalisasi model yang sehat tanpa overfitting maupun underfitting.",
          },
        },
      ],
      featuredMetric: {
        en: "99.46% Accuracy • IndoBERT vs RoBERTa + Streamlit",
        id: "Akurasi 99,46% • IndoBERT vs RoBERTa + Streamlit",
      },
      accentTone: "sage",
    },
  ],

  photographyEvents: [
    {
      id: "kunjungan-panti",
      title: "Kunjungan Panti",
      subtitle: {
        en: "Social Outreach & Community Warmth Documentation",
        id: "Dokumentasi Bakti Sosial & Kehangatan Kebersamaan di Panti Asuhan",
      },
      role: {
        en: "Event Photographer & Visual Storyteller",
        id: "Fotografer Acara & Dokumentasi Visual",
      },
      organization: "Student Social Initiative",
      date: "2024",
      location: "Indonesia",
      description: {
        en: "Candid documentary photography capturing heartfelt interactions, shared laughter, interactive games, and group warmth during the orphanage outreach visit.",
        id: "Fotografi dokumenter candid yang mengabadikan interaksi hangat, tawa bersama, permainan interaktif, dan kebersamaan selama kunjungan bakti sosial ke panti asuhan.",
      },
      tags: ["Candid Documentary", "Event Coverage", "Color Grading", "Human Interest"],
      photos: [
        {
          src: "/assets/photography/kunjungan-panti-1.jpg",
          caption: {
            en: "Sharing stories & warm introductions with the children",
            id: "Berbagi cerita & perkenalan hangat bersama adik-adik panti",
          },
          rotation: 0,
        },
        {
          src: "/assets/photography/kunjungan-panti-2.jpg",
          caption: {
            en: "Interactive group games and joyful afternoon moments",
            id: "Permainan kelompok interaktif dan keceriaan sore hari",
          },
          rotation: 0,
        },
        {
          src: "/assets/photography/kunjungan-panti-3.jpg",
          caption: {
            en: "Candid smiles during collaborative activities",
            id: "Senyum candid di tengah aktivitas kolaboratif",
          },
          rotation: 0,
        },
        {
          src: "/assets/photography/kunjungan-panti-4.jpg",
          caption: {
            en: "Heartfelt gift handover & appreciation session",
            id: "Momen penyerahan bingkisan & sesi apresiasi penuh kehangatan",
          },
          rotation: 0,
        },
        {
          src: "/assets/photography/kunjungan-panti-5.jpg",
          caption: {
            en: "Together as one family — closing commemorative frame",
            id: "Kebersamaan layaknya satu keluarga — potret penutup kegiatan",
          },
          rotation: 0,
        },
      ],
    },
    {
      id: "speed-silaturahmi",
      title: "Fellowship & Stage Documentation",
      subtitle: {
        en: "Internal Bonding, Stage Energy & Fellowship Documentation",
        id: "Dokumentasi Keakraban Internal, Energi Panggung & Silaturahmi",
      },
      role: {
        en: "Documentation & Publication Photographer",
        id: "Fotografer Dokumentasi & Publikasi",
      },
      organization: "Student Creative & Edutainment Community",
      date: "2024 – 2025",
      location: "Indonesia",
      description: {
        en: "Warm atmospheric coverage of student fellowship gatherings—spotlighting expressive discussions, stage performances, and close-knit camaraderie.",
        id: "Liputan atmosfer hangat dari kegiatan silaturahmi mahasiswa—menyoroti diskusi ekspresif, penampilan panggung, dan eratnya persaudaraan antaranggota.",
      },
      tags: ["Stage & Atmosphere", "Event Coverage", "Visual Branding", "Photography"],
      photos: [
        {
          src: "/assets/photography/speed-silaturahmi-1.jpg",
          caption: {
            en: "Opening remarks and warm fellowship circle",
            id: "Sambutan pembuka dan lingkaran silaturahmi yang hangat",
          },
          rotation: 0,
        },
        {
          src: "/assets/photography/speed-silaturahmi-2.jpg",
          caption: {
            en: "Candid laughter between cross-generation members",
            id: "Tawa lepas di antara anggota lintas angkatan",
          },
          rotation: 0,
        },
        {
          src: "/assets/photography/speed-silaturahmi-3.jpg",
          caption: {
            en: "Interactive sharing session & creative brainstorming",
            id: "Sesi berbagi cerita interaktif & tukar ide kreatif",
          },
          rotation: 0,
        },
        {
          src: "/assets/photography/speed-silaturahmi-4.jpg",
          caption: {
            en: "Expressive performance & stage spotlight moments",
            id: "Penampilan ekspresif & sorotan momen di atas panggung",
          },
          rotation: 0,
        },
        {
          src: "/assets/photography/speed-silaturahmi-5.jpg",
          caption: {
            en: "Behind-the-scenes camaraderie of the organizing crew",
            id: "Kekompakan di balik layar tim penyelenggara",
          },
          rotation: 0,
        },
        {
          src: "/assets/photography/speed-silaturahmi-6.jpg",
          caption: {
            en: "Full family portrait at the end of the night",
            id: "Potret keluarga besar di penghujung acara",
          },
          rotation: 0,
        },
      ],
    },
  ],

  socialMedia: {
    handle: "Digital Content & Social Media",
    organization: "Campus Organization & Event Branding Campaigns",
    role: {
      en: "Social Media Manager & Digital Content Creator",
      id: "Pengelola Media Sosial & Kreator Konten Digital",
    },
    period: {
      en: "2024 – Present",
      id: "2024 – Sekarang",
    },
    summary: {
      en: "Conceptualized, filmed, edited, and published high-engagement short-form video reels, TikTok campaigns, promotional posters, and cohesive social media feeds to boost student engagement and event reach.",
      id: "Mengonsep, merekam, menyunting, dan mempublikasikan video pendek (Reels/TikTok), poster promosi, serta kampanye feed yang kohesif untuk meningkatkan interaksi mahasiswa dan jangkauan acara.",
    },
    youtubeBanner: "/assets/social/speed-yt-banner.jpg",
    metrics: [
      {
        value: "15.5K+",
        label: {
          en: "Organic Reel Views Peak",
          id: "Puncak Tayangan Reels Organik",
        },
      },
      {
        value: "6+",
        label: {
          en: "Featured Viral Campaigns",
          id: "Kampanye Konten Unggulan",
        },
      },
      {
        value: "Multi-Channel",
        label: {
          en: "Instagram • TikTok • YouTube",
          id: "Instagram • TikTok • YouTube",
        },
      },
    ],
    posts: [
      {
        id: "speed-reel-1",
        src: "/assets/social/speed-1.jpg",
        title: {
          en: "Social Media Feed & Visual Grid Direction",
          id: "Arahan Visual & Tata Letak Feed Media Sosial",
        },
        format: "IG Profile & Reels Grid",
        platform: "Instagram",
        caption: {
          en: "Curated cohesive visual branding and high-performing Reels grid reaching thousands of viewers.",
          id: "Kurasi identitas visual yang rapi dan deretan Reels dengan ribuan tayangan organik.",
        },
        highlightTag: { en: "15.5K+ Views", id: "15,5 Rb+ Tayangan" },
      },
      {
        id: "speed-reel-2",
        src: "/assets/social/speed-2.jpg",
        title: {
          en: "Member Spotlight & Creative Storytelling",
          id: "Sorotan Anggota & Penceritaan Kreatif",
        },
        format: "9:16 Vertical Reel",
        platform: "Instagram & TikTok",
        caption: {
          en: "On-camera hosting, scriptwriting, and dynamic captioning to boost student engagement.",
          id: "Pembawaan di depan kamera, penulisan naskah, dan takarir dinamis untuk meningkatkan keterlibatan mahasiswa.",
        },
        highlightTag: { en: "4.6K+ Views", id: "4,6 Rb+ Tayangan" },
      },
      {
        id: "speed-reel-3",
        src: "/assets/social/speed-3.jpg",
        title: {
          en: "Campus Vox-Pop & Interactive Q&A",
          id: "Wawancara Singkat Kampus & Tanya Jawab Interaktif",
        },
        format: "9:16 Street Interview",
        platform: "TikTok & Reels",
        caption: {
          en: "Engaging students with lively questions, crisp audio editing, and upbeat pacing.",
          id: "Melibatkan mahasiswa lewat pertanyaan seru, penyuntingan audio jernih, dan tempo video yang hidup.",
        },
        highlightTag: { en: "High Engagement", id: "Interaksi Tinggi" },
      },
      {
        id: "speed-reel-4",
        src: "/assets/social/speed-4.jpg",
        title: {
          en: "Event Teaser & Behind-The-Scenes",
          id: "Video Teaser Acara & Di Balik Layar",
        },
        format: "9:16 Promo Reel",
        platform: "Instagram Reels",
        caption: {
          en: "Building excitement ahead of major campus showcases through fast-cut highlights.",
          id: "Membangun antusiasme menjelang acara kampus melalui cuplikan berirama cepat.",
        },
        highlightTag: { en: "Campaign Teaser", id: "Teaser Kampanye" },
      },
      {
        id: "speed-reel-5",
        src: "/assets/social/speed-5.jpg",
        title: {
          en: "Open Recruitment & Community Call",
          id: "Kampanye Rekrutmen Terbuka & Ajakan Komunitas",
        },
        format: "9:16 Story / Reel",
        platform: "Instagram & TikTok",
        caption: {
          en: "Warm, welcoming visual invitation driving prospective students to participate.",
          id: "Undangan visual yang hangat dan menarik minat mahasiswa untuk berpartisipasi.",
        },
        highlightTag: { en: "Branding Campaign", id: "Kampanye Branding" },
      },
      {
        id: "speed-reel-6",
        src: "/assets/social/speed-6.jpg",
        title: {
          en: "Event Recap & Live Report Reel",
          id: "Rekapitulasi Acara & Live Report",
        },
        format: "9:16 Aftermovie",
        platform: "Instagram & TikTok",
        caption: {
          en: "Cinematic recap celebrating committee dedication, participants, and audience energy.",
          id: "Rekap sinematik yang merayakan dedikasi panitia, peserta, dan energi acara.",
        },
        highlightTag: { en: "Event Aftermovie", id: "Aftermovie Acara" },
      },
    ],
  },

  experiences: [
    {
      id: "intern-diskominfotik",
      role: {
        en: "Intern – E-Government Web Developer",
        id: "Magang – E-Government Web Developer",
      },
      organization:
        "Dinas Komunikasi, Informatika dan Statistik (Diskominfotik) Kota Banda Aceh",
      department: {
        en: "Full-Stack E-Government Web Application Development (SiCADU)",
        id: "Pengembangan Aplikasi Web E-Government Full-Stack (SiCADU)",
      },
      period: {
        en: "July 2026 – August 2026",
        id: "Juli 2026 – Agustus 2026",
      },
      location: "Banda Aceh",
      categoryKey: "internship",
      category: { en: "Internship", id: "Magang (Internship)" },
      bullets: [
        {
          en: "Developed SiCADU, a web-based public complaint (pengaduan) system supporting e-government services.",
          id: "Mengembangkan SiCADU, sistem pengaduan masyarakat berbasis web yang mendukung layanan e-government.",
        },
        {
          en: "Built the application from interface to server-side functionality as a fullstack web project.",
          id: "Membangun aplikasi secara menyeluruh mulai dari antarmuka (interface) hingga fungsionalitas sisi server sebagai proyek web fullstack.",
        },
        {
          en: "Contributed to digital public service improvement for the Banda Aceh city government.",
          id: "Berkontribusi dalam peningkatan kualitas layanan publik digital bagi Pemerintah Kota Banda Aceh.",
        },
      ],
      skills: [
        "Full-Stack Web Development",
        "SiCADU",
        "E-Government",
        "UI/UX & Server-Side",
      ],
    },
    {
      id: "aslab-pemro-lanjutan",
      role: {
        en: "Laboratory Assistant – Advanced Programming (D3 Informatics Management)",
        id: "Asisten Laboratorium – Pemrograman Lanjutan (D3 Manajemen Informatika)",
      },
      organization: "Universitas Syiah Kuala, Faculty of Mathematics and Natural Sciences",
      department: {
        en: "Python Programming & Algorithmic Problem-Solving Practicum",
        id: "Praktikum Bahasa Pemrograman Python & Pemecahan Masalah Algoritmik",
      },
      period: {
        en: "September – Present",
        id: "September – Sekarang",
      },
      location: "Banda Aceh",
      categoryKey: "lab",
      category: { en: "Laboratory Assistant • Active", id: "Asisten Laboratorium • Aktif" },
      isActive: true,
      bullets: [
        {
          en: "Taught and mentored D3 Informatics Management students in Advanced Programming with a core focus on the Python programming language.",
          id: "Mengajar dan membimbing mahasiswa D3 Manajemen Informatika pada praktikum Pemrograman Lanjutan dengan fokus utama pada penguasaan bahasa pemrograman Python.",
        },
        {
          en: "Guided hands-on coding exercises, data structure implementation, debugging sessions, and practical project evaluations.",
          id: "Memandu latihan penulisan kode secara langsung, implementasi logika pemrograman, sesi debugging, serta evaluasi tugas praktikum.",
        },
      ],
      skills: ["Python", "Advanced Programming", "Code Mentoring", "Practicum Teaching"],
    },
    {
      id: "aslab-kewirausahaan",
      role: {
        en: "Laboratory Assistant – Entrepreneurship (Kewirausahaan)",
        id: "Asisten Laboratorium – Kewirausahaan",
      },
      organization: "Universitas Syiah Kuala, Department of Informatics",
      department: {
        en: "Technology Entrepreneurship & Digital Product Practicum",
        id: "Praktikum Kewirausahaan Berbasis Teknologi & Inovasi Produk",
      },
      period: {
        en: "September – Present",
        id: "September – Sekarang",
      },
      location: "Banda Aceh",
      categoryKey: "lab",
      category: { en: "Laboratory Assistant • Active", id: "Asisten Laboratorium • Aktif" },
      isActive: true,
      bullets: [
        {
          en: "Facilitated practicum sessions on technology entrepreneurship, business model formulation, and digital product validation.",
          id: "Memfasilitasi sesi praktikum kewirausahaan teknologi, perumusan model bisnis, serta validasi ide produk digital mahasiswa.",
        },
        {
          en: "Mentored student teams in pitching product prototypes, market analysis, and structured project execution.",
          id: "Membimbing kelompok mahasiswa dalam menyusun prototipe produk, analisis pasar, serta presentasi bisnis yang terstruktur.",
        },
      ],
      skills: ["Entrepreneurship", "Business Model Canvas", "Product Pitching", "Team Mentoring"],
    },
    {
      id: "hmif-secretary-kominkraf",
      role: {
        en: "Secretary – Komunikasi, Informasi dan Kreativitas (KOMINKRAF) Department",
        id: "Sekretaris – Departemen Komunikasi, Informasi dan Kreativitas (KOMINKRAF)",
      },
      organization: "HMIF – Himpunan Mahasiswa Informatika, Universitas Syiah Kuala",
      department: {
        en: "Organizational Experience • KOMINKRAF Department",
        id: "Pengalaman Organisasi • Departemen KOMINKRAF",
      },
      period: {
        en: "February 2026 – Present",
        id: "Februari 2026 – Sekarang",
      },
      location: "Banda Aceh",
      categoryKey: "organization",
      category: { en: "Organization (HMIF USK)", id: "Organisasi (HMIF USK)" },
      isActive: true,
      bullets: [
        {
          en: "Managed administrative and documentation tasks for the Communication & Creative Department.",
          id: "Mengelola tugas administrasi dan dokumentasi untuk Departemen Komunikasi, Informasi dan Kreativitas (KOMINKRAF).",
        },
        {
          en: "Coordinated scheduling, correspondence, and departmental records to support team operations.",
          id: "Mengoordinasikan penjadwalan, persuratan, dan arsip departemen untuk mendukung kelancaran operasional tim.",
        },
        {
          en: "Assisted in organizing departmental meetings and ensuring follow-up on action items.",
          id: "Membantu penyelenggaraan rapat departemen dan memastikan tindak lanjut dari setiap agenda kerja.",
        },
      ],
      skills: ["Secretarial Administration", "Documentation", "Team Coordination", "Communication"],
    },
    {
      id: "aslab-gis",
      role: {
        en: "Laboratory Assistant – GIS (Geographic Information System)",
        id: "Asisten Laboratorium – Sistem Informasi Geografis (SIG / GIS)",
      },
      organization: "Universitas Syiah Kuala, Department of Informatics",
      department: {
        en: "Practicum Teaching & Spatial Data Mentoring (Completed)",
        id: "Pengajaran Praktikum & Pembimbingan Data Spasial (Selesai)",
      },
      period: {
        en: "January 2026 – June 2026",
        id: "Januari 2026 – Juni 2026",
      },
      location: "Banda Aceh",
      categoryKey: "lab",
      category: { en: "Laboratory Assistant", id: "Asisten Laboratorium" },
      bullets: [
        {
          en: "Assisted in lab sessions covering spatial data analysis and geographic mapping tools.",
          id: "Mendampingi sesi praktikum laboratorium yang mencakup analisis data spasial dan penggunaan perangkat pemetaan geografis.",
        },
        {
          en: "Supported students in completing GIS-based projects and practicum assignments.",
          id: "Membimbing mahasiswa dalam menyelesaikan proyek berbasis GIS serta tugas-tugas praktikum.",
        },
      ],
      skills: ["QGIS", "Spatial Data Analysis", "Digital Mapping", "Mentoring"],
    },
    {
      id: "aslab-dataviz",
      role: {
        en: "Laboratory Assistant – Data Visualization",
        id: "Asisten Laboratorium – Visualisasi Data",
      },
      organization: "Universitas Syiah Kuala, Department of Informatics",
      department: {
        en: "Practicum Teaching & Data Storytelling (Completed)",
        id: "Pengajaran Praktikum & Visualisasi Data (Selesai)",
      },
      period: {
        en: "January 2026 – June 2026",
        id: "Januari 2026 – Juni 2026",
      },
      location: "Banda Aceh",
      categoryKey: "lab",
      category: { en: "Laboratory Assistant", id: "Asisten Laboratorium" },
      bullets: [
        {
          en: "Guided students in building data visualizations using relevant tools and frameworks.",
          id: "Membimbing mahasiswa dalam membangun visualisasi data menggunakan perangkat dan kerangka kerja yang relevan.",
        },
        {
          en: "Helped students interpret and communicate data outputs effectively.",
          id: "Membantu mahasiswa menginterpretasikan dan mengomunikasikan hasil olahan data secara efektif.",
        },
      ],
      skills: ["Data Visualization", "Python", "Data Interpretation", "Teaching"],
    },
    {
      id: "hmif-vicechair-kominkraf",
      role: {
        en: "Vice Chair – Komunikasi, Informasi dan Kreativitas (KOMINKRAF) Department",
        id: "Wakil Ketua – Departemen Komunikasi, Informasi dan Kreativitas (KOMINKRAF)",
      },
      organization: "HMIF – Himpunan Mahasiswa Informatika, Universitas Syiah Kuala",
      department: {
        en: "Organizational Leadership • Social Media & Creative Publication",
        id: "Kepemimpinan Organisasi • Media Sosial & Publikasi Kreatif",
      },
      period: {
        en: "February 2025 – February 2026",
        id: "Februari 2025 – Februari 2026",
      },
      location: "Banda Aceh",
      categoryKey: "organization",
      category: { en: "Organization (HMIF USK)", id: "Organisasi (HMIF USK)" },
      bullets: [
        {
          en: "Managed official social media accounts and digital content to increase student engagement.",
          id: "Mengelola akun media sosial resmi dan konten digital untuk meningkatkan keterlibatan mahasiswa.",
        },
        {
          en: "Coordinated production of publication materials including posters, videos, and event reports.",
          id: "Mengoordinasikan produksi materi publikasi meliputi poster, video, dan laporan kegiatan.",
        },
        {
          en: "Served as liaison between departments to support internal and external organizational activities.",
          id: "Bertindak sebagai penghubung antar-departemen untuk mendukung kegiatan internal maupun eksternal organisasi.",
        },
      ],
      skills: ["Social Media Management", "Visual Branding", "Leadership", "Content Production"],
    },
    {
      id: "aslab-oop",
      role: {
        en: "Laboratory Assistant – Object-Oriented Programming",
        id: "Asisten Laboratorium – Pemrograman Berorientasi Objek (OOP)",
      },
      organization: "Universitas Syiah Kuala, Department of Informatics",
      department: {
        en: "Software Engineering Practicum (Completed)",
        id: "Praktikum Rekayasa Perangkat Lunak & Pemrograman (Selesai)",
      },
      period: {
        en: "August 2025 – December 2025",
        id: "Agustus 2025 – Desember 2025",
      },
      location: "Banda Aceh",
      categoryKey: "lab",
      category: { en: "Laboratory Assistant", id: "Asisten Laboratorium" },
      bullets: [
        {
          en: "Assisted students in understanding OOP concepts and practical programming exercises.",
          id: "Membantu mahasiswa memahami konsep Pemrograman Berorientasi Objek (OOP) serta latihan pemrograman praktis.",
        },
        {
          en: "Supervised lab sessions and evaluated student assignments.",
          id: "Mengawasi jalannya sesi laboratorium dan mengevaluasi tugas pemrograman mahasiswa.",
        },
      ],
      skills: ["Object-Oriented Programming", "Code Evaluation", "Problem Solving", "Mentoring"],
    },
    {
      id: "aslab-numcomp",
      role: {
        en: "Laboratory Assistant – Numerical Computing",
        id: "Asisten Laboratorium – Komputasi Numerik",
      },
      organization: "Universitas Syiah Kuala, Department of Informatics",
      department: {
        en: "Computational Methods Practicum (Completed)",
        id: "Praktikum Metode & Komputasi Numerik (Selesai)",
      },
      period: {
        en: "August 2025 – December 2025",
        id: "Agustus 2025 – Desember 2025",
      },
      location: "Banda Aceh",
      categoryKey: "lab",
      category: { en: "Laboratory Assistant", id: "Asisten Laboratorium" },
      bullets: [
        {
          en: "Guided students through numerical methods and computational problem-solving.",
          id: "Membimbing mahasiswa dalam memahami metode numerik dan pemecahan masalah komputasi.",
        },
        {
          en: "Provided technical support and mentoring during hands-on lab sessions.",
          id: "Memberikan dukungan teknis dan asistensi langsung selama sesi praktikum di laboratorium.",
        },
      ],
      skills: ["Numerical Computing", "Python", "Algorithmic Thinking", "Technical Support"],
    },
    {
      id: "intern-pu-ciptakarya",
      role: {
        en: "Intern – Data & GIS Analyst",
        id: "Magang – Analis Data & GIS (Sistem Informasi Geografis)",
      },
      organization: "Kementerian Pekerjaan Umum – Direktorat Jenderal Cipta Karya",
      department: {
        en: "Spatial Data Analysis & Regional Water Distribution",
        id: "Analisis Data Spasial & Distribusi Air Wilayah",
      },
      period: {
        en: "July 2025 – August 2025",
        id: "Juli 2025 – Agustus 2025",
      },
      location: "Banda Aceh",
      categoryKey: "internship",
      category: { en: "Internship", id: "Magang (Internship)" },
      bullets: [
        {
          en: "Conducted data analysis related to water distribution and PDAM management across Aceh Besar region.",
          id: "Melakukan analisis data terkait distribusi air bersih dan pengelolaan PDAM di wilayah Aceh Besar.",
        },
        {
          en: "Created digital maps (digitization) using QGIS to visualize PDAM network and distribution in Aceh.",
          id: "Membuat peta digital (digitasi) menggunakan QGIS untuk memvisualisasikan jaringan dan distribusi PDAM di Aceh.",
        },
        {
          en: "Processed and integrated spatial data to produce informative and accessible visualizations.",
          id: "Mengolah dan mengintegrasikan data spasial untuk menghasilkan visualisasi yang informatif dan mudah diakses.",
        },
      ],
      skills: ["QGIS", "Spatial Digitization", "Data Analysis", "PDAM Network Mapping"],
    },
  ],

  coursework: [
    {
      code: "LAB-PY",
      name: {
        en: "Advanced Programming in Python (D3 Informatics Management)",
        id: "Pemrograman Lanjutan Bahasa Python (D3 Manajemen Informatika)",
      },
      domain: { en: "Active Lab Assistant", id: "Asisten Lab Aktif" },
    },
    {
      code: "LAB-KWU",
      name: {
        en: "Technology Entrepreneurship (Kewirausahaan)",
        id: "Kewirausahaan Berbasis Teknologi",
      },
      domain: { en: "Active Lab Assistant", id: "Asisten Lab Aktif" },
    },
    {
      code: "LAB-GIS",
      name: {
        en: "Geographic Information Systems (GIS)",
        id: "Sistem Informasi Geografis (SIG / GIS)",
      },
      domain: { en: "Completed Lab Assistant", id: "Asisten Lab (Selesai)" },
    },
    {
      code: "LAB-DVZ",
      name: {
        en: "Data Visualization",
        id: "Visualisasi Data",
      },
      domain: { en: "Completed Lab Assistant", id: "Asisten Lab (Selesai)" },
    },
    {
      code: "LAB-OOP",
      name: {
        en: "Object-Oriented Programming (OOP)",
        id: "Pemrograman Berorientasi Objek (OOP)",
      },
      domain: { en: "Completed Lab Assistant", id: "Asisten Lab (Selesai)" },
    },
    {
      code: "LAB-NUM",
      name: {
        en: "Numerical Computing",
        id: "Komputasi Numerik",
      },
      domain: { en: "Completed Lab Assistant", id: "Asisten Lab (Selesai)" },
    },
    {
      code: "INF-UIX",
      name: {
        en: "Human-Computer Interaction & UI/UX Design",
        id: "Interaksi Manusia-Komputer & Desain UI/UX",
      },
      domain: { en: "Core Coursework", id: "Mata Kuliah Inti" },
    },
    {
      code: "INF-WEB",
      name: {
        en: "Full-Stack Web Application Development",
        id: "Pengembangan Aplikasi Web Full-Stack",
      },
      domain: { en: "Core Coursework", id: "Mata Kuliah Inti" },
    },
  ],
};
