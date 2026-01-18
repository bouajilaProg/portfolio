"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 max-w-3xl mx-auto">
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
          <div className="space-y-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
              <p className="text-slate-500 dark:text-slate-400 font-medium italic">{profile.title}</p>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
              {profile.bio}
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
