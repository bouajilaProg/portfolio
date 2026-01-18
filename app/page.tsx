"use client";

import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Work } from "@/components/sections/work";
import { Contact } from "@/components/sections/contact";

export default function Portfolio() {
  return (
    <main className="min-h-dvh bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white font-sans">
      <Navigation />

      <section className="pt-40 pb-20 px-6 max-w-3xl mx-auto">
        <Hero />
      </section>

      <section id="experience" className="py-24 px-6 max-w-3xl mx-auto border-t border-slate-100 dark:border-slate-900">
        <Experience />
      </section>

      <section id="work" className="py-24 px-6 max-w-3xl mx-auto border-t border-slate-100 dark:border-slate-900">
        <Work />
      </section>

      <footer id="contact" className="pt-40 pb-12 px-6 max-w-3xl mx-auto border-t border-slate-100 dark:border-slate-900">
        <Contact />
      </footer>
    </main>
  );
}
