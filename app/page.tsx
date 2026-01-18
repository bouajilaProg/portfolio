"use client";

import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Work } from "@/components/sections/Work";
import { Footer } from "@/components/sections/Footer";

export default function Portfolio() {
  return (
    <main className="min-h-dvh bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white font-sans">
      <Navigation />

      <Hero />

      <Experience />

      <Education />

      <section id="work" className="py-24 px-6 max-w-3xl mx-auto border-t border-slate-100 dark:border-slate-900">
        <Work />
      </section>

      <Footer />
    </main>
  );
}
