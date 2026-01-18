"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <FadeIn>
      <div className="flex flex-col md:flex-row gap-10 md:items-center">
        <div className="relative shrink-0">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="w-full h-full flex items-center justify-center text-slate-400 bg-linear-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-black">
              <span className="text-[10px] uppercase font-bold tracking-tighter">Photo</span>
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-white dark:border-[#0a0a0a] rounded-full" />
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
  );
}
