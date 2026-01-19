"use client";

import { ReactNode, useState } from "react";

interface IconButtonProps {
  href: string;
  label: string;
  children: ReactNode;
}

export function IconButton({ href, label, children }: IconButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center w-8 h-8"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      <a
        href={href}
        target="_blank"
        className="flex items-center justify-center w-full h-full rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
        aria-label={label}
      >
        {children}
      </a>

      <div
        role="tooltip"
        className={`hidden md:block absolute bottom-full mb-2 px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest whitespace-nowrap pointer-events-none z-50 transition-all
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
          bg-white dark:bg-black text-slate-500 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800
        `}
      >
        {label}
      </div>
    </div>
  );
}
