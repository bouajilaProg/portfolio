"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Github, Mail, Twitter, Linkedin, Check, Copy, ExternalLink } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ProjectsList } from "@/components/projects-list";
import { profile, experience } from "@/lib/data";

export default function Portfolio() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-dvh bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white font-sans">
      <Navigation />

      <section className="pt-40 pb-20 px-6 max-w-3xl mx-auto">
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
      </section>

      <section id="experience" className="py-24 px-6 max-w-3xl mx-auto border-t border-slate-100 dark:border-slate-900">
        <FadeIn>
          <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-12">Experience</h2>
        </FadeIn>
        <div className="space-y-16">
          {experience.map((job, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="flex flex-col md:flex-row gap-2 md:gap-12">
                <span className="text-sm font-mono text-slate-400 min-w-[120px] pt-1">{job.date}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{job.company}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">{job.role}</p>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map(skill => (
                      <span key={skill} className="text-[10px] font-bold border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded text-slate-500">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="work" className="py-24 px-6 max-w-3xl mx-auto border-t border-slate-100 dark:border-slate-900">
        <FadeIn>
          <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-12">Work</h2>
        </FadeIn>
        <ProjectsList />
      </section>

      <footer id="contact" className="pt-40 pb-12 px-6 max-w-3xl mx-auto border-t border-slate-100 dark:border-slate-900">
        <FadeIn>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <h2 className="text-4xl font-bold tracking-tighter">Reach out.</h2>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  className={`h-11 px-4 rounded-full border border-slate-200 dark:border-slate-800 flex items-center gap-2 transition-all ${copied ? 'bg-green-50 border-green-200 dark:bg-green-500/10 dark:border-green-500/20' : 'hover:bg-slate-50 dark:hover:bg-slate-900'}`}
                >
                  <span className={`text-[11px] font-bold uppercase tracking-widest ${copied ? 'text-green-600 dark:text-green-400' : 'text-slate-500'}`}>
                    {copied ? 'Copied' : 'Copy Email'}
                  </span>
                  {copied ? (
                    <Check size={14} className="text-green-600 dark:text-green-400" />
                  ) : (
                    <Copy size={14} className="text-slate-400" />
                  )}

                  {copied && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-green-600 uppercase tracking-widest animate-in fade-in slide-in-from-bottom-1">
                      Success
                    </div>
                  )}
                </button>
                <a
                  href={`mailto:${profile.email}`}
                  className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full text-sm font-bold hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-lg shadow-blue-500/10"
                >
                  Email Me
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-50 dark:border-slate-900/50 gap-6">
              <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                <a href={profile.socialLinks.twitter} className="hover:text-slate-950 dark:hover:text-white transition-colors">Twitter</a>
                <a href={profile.socialLinks.linkedin} className="hover:text-slate-950 dark:hover:text-white transition-colors">LinkedIn</a>
                <a href={profile.socialLinks.github} className="hover:text-slate-950 dark:hover:text-white transition-colors">GitHub</a>
              </div>

              <div className="text-[9px] font-mono text-slate-300 dark:text-slate-800 uppercase tracking-widest">
                Last Updated Jan 2026
              </div>
            </div>
          </div>
        </FadeIn>
      </footer>
    </main>
  );
}
