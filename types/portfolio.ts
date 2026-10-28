export type Locale = "en" | "id";

export interface LocalizedText {
  en: string;
  id: string;
}

export interface QuickStat {
  label: LocalizedText;
  value: LocalizedText;
  icon: string;
}

export interface EducationItem {
  institution: string;
  degree: LocalizedText;
  concentration?: LocalizedText;
  period: LocalizedText;
  location: string;
  gpa?: string;
  highlights: LocalizedText[];
}

export interface FocusArea {
  title: LocalizedText;
  description: LocalizedText;
  icon: "code" | "sparkles" | "chart" | "camera";
  tags: string[];
}

export interface TechnicalSkill {
  name: LocalizedText;
  category: LocalizedText;
  categoryKey: "engineering" | "design" | "data";
  proficiency: 1 | 2 | 3 | 4;
  levelLabel: LocalizedText;
  details: LocalizedText;
}

export interface LanguageProficiency {
  language: LocalizedText;
  code: string;
  level: LocalizedText;
  badge: LocalizedText;
  description: LocalizedText;
}

export interface SoftSkillSticker {
  label: LocalizedText;
  rotation: number;
  tone: "blush" | "cream" | "butter" | "sage";
}

export interface ToolItem {
  id: string;
  name: string;
  category: LocalizedText;
  usageNote: LocalizedText;
  accentColor: string;
}

export type ProjectCategory =
  | "All"
  | "Web App"
  | "Data Science"
  | "UI/UX"
  | "Game Dev";

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: LocalizedText;
  category: Exclude<ProjectCategory, "All">;
  tags: string[];
  role: LocalizedText;
  period: string;
  context: LocalizedText;
  problem: LocalizedText;
  contribution: LocalizedText;
  outcome: LocalizedText;
  highlights: LocalizedText[];
  architectureNotes: LocalizedText[];
  techStack: string[];
  images: {
    src: string;
    alt: LocalizedText;
    caption: LocalizedText;
  }[];
  featuredMetric: LocalizedText;
  accentTone: "rose" | "sage" | "butter" | "berry";
}

export interface PhotoGalleryEvent {
  id: string;
  title: string;
  subtitle: LocalizedText;
  role: LocalizedText;
  organization: string;
  date: string;
  location: string;
  description: LocalizedText;
  tags: string[];
  photos: {
    src: string;
    caption: LocalizedText;
    rotation: number;
  }[];
}

export interface SocialMediaPost {
  id: string;
  src: string;
  title: LocalizedText;
  format: string;
  platform: string;
  caption: LocalizedText;
  highlightTag: LocalizedText;
}

export interface SocialMediaShowcase {
  handle: string;
  organization: string;
  role: LocalizedText;
  period: LocalizedText;
  summary: LocalizedText;
  youtubeBanner: string;
  metrics: {
    value: string;
    label: LocalizedText;
  }[];
  posts: SocialMediaPost[];
}

export type ExperienceCategoryKey = "internship" | "lab" | "organization";

export interface ExperienceItem {
  id: string;
  role: LocalizedText;
  organization: string;
  department?: LocalizedText;
  period: LocalizedText;
  location: string;
  categoryKey: ExperienceCategoryKey;
  category: LocalizedText;
  isActive?: boolean;
  bullets: LocalizedText[];
  skills: string[];
}

export interface CourseworkItem {
  code: string;
  name: LocalizedText;
  domain: LocalizedText;
}

export interface PortfolioData {
  profile: {
    fullName: string;
    nickname: string;
    monogram: string;
    title: LocalizedText;
    tagline: LocalizedText;
    statusText: LocalizedText;
    availabilityBadge: LocalizedText;
    location: string;
    email: string;
    linkedinHandle: string;
    linkedinUrl: string;
    githubHandle: string;
    githubUrl: string;
    cvUrl: string;
    heroPhoto: string;
    aboutPhoto: string;
    skillsPhoto: string;
    toolsPolaroidPhoto: string;
    contactPhoto: string;
    bioParagraphs: LocalizedText[];
    quickStats: QuickStat[];
  };
  education: EducationItem[];
  focusAreas: FocusArea[];
  technicalSkills: TechnicalSkill[];
  languages: LanguageProficiency[];
  softSkills: SoftSkillSticker[];
  tools: ToolItem[];
  projects: ProjectItem[];
  photographyEvents: PhotoGalleryEvent[];
  socialMedia: SocialMediaShowcase;
  experiences: ExperienceItem[];
  coursework: CourseworkItem[];
}
