"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { profile } from "@/lib/data";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className=" px-6 max-w-3xl mx-auto">
      <FadeIn>
        <div className="flex flex-col md:flex-row gap-10 md:items-center">
          <div className="relative shrink-0">
            <div className="p-1 rounded-full border border-slate-200 dark:border-slate-800">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-slate-50 dark:ring-slate-900 shadow-inner">
                <img
                  src={"/profile-pic.png"}
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
              <p className="text-slate-500 dark:text-slate-400 font-medium italic">{profile.title}</p>
            </div>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
              {profile.bio}
            </p>

            {/* Social Links & CTA Section */}
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href={"mailto:" + profile.email}
                className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-50 text-slate-50 dark:text-slate-900 px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition-all shadow-sm"
              >
                Let's talk
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-5">
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
