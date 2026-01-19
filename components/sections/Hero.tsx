"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { profile } from "@/lib/data";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-24 pb-12">
      <FadeIn>
        <div className="w-full flex flex-col gap-6">

          <div className="flex items-center gap-5 md:gap-8 w-full">
            <div className="relative shrink-0">
              <div className="p-1 rounded-full border border-slate-200 dark:border-slate-800">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-slate-50 dark:ring-slate-900">
                  <img
                    src={"/profile-pic.png"}
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-1">
              <h1 className="text-xl md:text-3xl font-bold tracking-tight">{profile.name}</h1>
              <p className="text-slate-500 dark:text-slate-400 font-medium">{profile.title}</p>
            </div>
          </div>

          <div className="space-y-4 w-full">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm w-full">
              {profile.bio}
            </p>

            <div className="flex items-center gap-4">
              <Link
                href={"mailto:" + profile.email}
                className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-50 text-slate-50 dark:text-slate-900 px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all"
              >
                Let&apos;s talk
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-3">
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
