"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { profile } from "@/lib/data";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-24 pb-12 ">
      <FadeIn>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-10">

            {/* Identity Group */}
            <div className="flex items-center gap-5 md:gap-6">
              <div className="shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
                  <img
                    src="/profile-pic.png"
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">
                  {profile.name}
                </h1>
                {/* Matches your footer's uppercase tracking style */}
                <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  {profile.title}
                </p>
              </div>
            </div>

            {/* Bio Group */}
            <div className="space-y-8">
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed ">
                {profile.bio}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href={`mailto:${profile.email}`}
                  className="w-full sm:w-auto px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full text-[12px] font-bold uppercase tracking-wider hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all text-center flex items-center justify-center gap-2"
                >
                  Let&apos;s talk
                  <ArrowRight size={14} />
                </Link>

                {/* Social Links matching footer's text-link style */}
                <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 py-2">
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    className="hover:text-slate-950 dark:hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={profile.socialLinks.github}
                    target="_blank"
                    className="hover:text-slate-950 dark:hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}
