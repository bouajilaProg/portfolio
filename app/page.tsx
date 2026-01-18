"use client";

import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";

export default function Portfolio() {
  return (
    <main className="min-h-dvh bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white font-sans">
      <Hero />
      <Experience />
      <Work />
    </main>
  );
}
