import { useState } from "react";
import { FadeIn } from "../ui/FadeIn";
import { Check, Copy, Mail } from "lucide-react";
import { profile } from "../../lib/data";
import { type LinkData, getIconForType } from "../../lib/linkTypes";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const footerLinks: LinkData[] = [
    {
      name: "LinkedIn",
      type: "linkedin",
      href: profile.socialLinks.linkedin,
    },
    {
      name: "GitHub",
      type: "github",
      href: profile.socialLinks.github,
    },
  ];

  return (
    <footer id="contact" className="pt-24 pb-6 px-6 max-w-3xl mx-auto">
      <FadeIn>
        <div className="flex flex-col gap-6">
          {/* Top Section: CTA */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                Reach out.
              </h2>

            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleCopy}
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-md border border-slate-200 bg-white px-6 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 gap-2"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-green-600 dark:text-green-400" />
                    <span className="text-green-600 dark:text-green-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="text-slate-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-md bg-slate-900 px-8 text-sm font-medium text-slate-50 shadow transition-colors hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 gap-2"
              >
                {getIconForType("mail", "w-4 h-4")}
                Email Me
              </a>
            </div>
          </div>

          {/* Bottom Section: Links & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center dark:border-slate-800/60 gap-6">
            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 transition-colors flex items-center gap-2 text-xs font-medium uppercase tracking-wider"
                >
                  {getIconForType(link.type, "w-3.5 h-3.5")}
                  {link.name}
                </a>
              ))}
            </div>

            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3">
              © {new Date().getFullYear()} • {profile.name}
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
