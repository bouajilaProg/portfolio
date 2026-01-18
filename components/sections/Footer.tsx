"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Check, Copy } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-12 border-t border-slate-100 dark:border-slate-900">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h2 className="text-2xl font-bold tracking-tighter">Get in touch</h2>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className={`h-9 px-4 rounded-full border border-slate-200 dark:border-slate-800 flex items-center gap-2 transition-all ${copied ? 'bg-green-50 border-green-200 dark:bg-green-500/10 dark:border-green-500/20' : 'hover:bg-slate-50 dark:hover:bg-slate-900'}`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-widest ${copied ? 'text-green-600 dark:text-green-400' : 'text-slate-500'}`}>
                {copied ? 'Copied' : 'Copy Email'}
              </span>
              {copied ? (
                <Check size={12} className="text-green-600 dark:text-green-400" />
              ) : (
                <Copy size={12} className="text-slate-400" />
              )}
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:opacity-90 transition-all"
            >
              Email
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-6 border-t border-slate-50 dark:border-slate-900/50 gap-4">
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href={profile.socialLinks.linkedin} className="hover:text-slate-950 dark:hover:text-white transition-colors">LinkedIn</a>
            <a href={profile.socialLinks.github} className="hover:text-slate-950 dark:hover:text-white transition-colors">GitHub</a>
          </div>

          <div className="text-[9px] font-mono text-slate-300 dark:text-slate-500 uppercase tracking-widest">
            {profile.name} • {new Date().getFullYear()}
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
