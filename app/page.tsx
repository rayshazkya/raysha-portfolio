import React from "react";
import { EntranceLoader } from "@/components/EntranceLoader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { KineticMarquee } from "@/components/KineticMarquee";
import { About } from "@/components/About";
import { SkillsBento } from "@/components/SkillsBento";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MusicPlayer } from "@/components/MusicPlayer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <EntranceLoader />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <KineticMarquee />
        <About />
        <SkillsBento />
        <FeaturedProjects />
        <ExperienceTimeline />
        <Contact />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
}
