import { useState } from "react";
import { FadeIn } from "../ui/FadeIn";
import { Check, Copy } from "lucide-react";
import { profile } from "../../lib/data";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="pt-20 pb-6 px-6 max-w-3xl mx-auto  border-slate-100 dark:border-slate-900">
      <FadeIn>
        <div className="flex flex-col ">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <h2 className="text-4xl font-bold tracking-tighter">Reach out.</h2>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleCopy}
                className={`relative h-11 w-full sm:w-auto px-6 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 transition-all ${copied
                  ? 'bg-green-50 border-green-200 dark:bg-green-500/10 dark:border-green-500/20'
                  : 'hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
              >
                <span className={`text-[11px] font-bold uppercase tracking-widest ${copied ? 'text-green-600 dark:text-green-400' : 'text-slate-500'}`}>
                  {copied ? 'Copied' : 'Copy Email'}
                </span>
                {copied ? (
                  <Check size={14} className="text-green-600 dark:text-green-400" />
                ) : (
                  <Copy size={14} className="text-slate-400" />
                )}

              </button>

              <a
                href={`mailto:${profile.email}`}
                className="w-full sm:w-auto px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full text-sm font-bold hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-lg shadow-blue-500/10 text-center"
              >
                Email Me
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-slate-50 dark:border-slate-900/50 gap-6">
            <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              <a href={profile.socialLinks.linkedin} className="hover:text-slate-950 dark:hover:text-white transition-colors">LinkedIn</a>
              <a href={profile.socialLinks.github} className="hover:text-slate-950 dark:hover:text-white transition-colors">GitHub</a>
            </div>

            <div className="text-[9px] font-mono text-slate-300 dark:text-slate-400 uppercase tracking-widest">
              made by {profile.name} • {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
