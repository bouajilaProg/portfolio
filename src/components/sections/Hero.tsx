import { FadeIn } from "../ui/FadeIn";
import { profile } from "../../lib/data";
import { Github, Linkedin, ArrowRight } from "lucide-react";

export function Hero() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: profile.socialLinks.linkedin,
      icon: <Linkedin className="h-4 w-4" />
    },
    {
      name: "GitHub",
      href: profile.socialLinks.github,
      icon: <Github className="h-4 w-4" />
    },
  ];

  return (
    <section className="pt-24 pb-12">
      <FadeIn>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-10">

            {/* Profile Header */}
            <div className="flex items-center gap-5 md:gap-6">
              <div className="shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
                  <img
                    src="/profile-pic.png"
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                  {profile.name}
                </h1>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {profile.title}
                </p>
              </div>
            </div>

            {/* Bio & Actions */}
            <div className="space-y-8">
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                {profile.bio}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {/* shadcn Primary Button Style */}
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-2.5 text-sm font-medium text-slate-50 shadow transition-colors hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 gap-2 group"
                >
                  Let's talk
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>

                {/* shadcn Outline Button Style for Socials */}
                <div className="flex items-center gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 gap-2"
                    >
                      {link.icon}
                      <span className="hidden sm:inline">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}
