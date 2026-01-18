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
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      <a
        href={href}
        target="_blank"
        className="
          flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200
          /* Light Mode: Light Gray/White palette */
          bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50
          /* Dark Mode: Deep Black/Zinc palette */
          dark:bg-black dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-900
          /* State */
          outline-none focus-visible:ring-2 focus-visible:ring-sky-500
        "
        aria-label={label}
      >
        {children}
      </a>

      {/* Tooltip (Matching Theme Logic) */}
      <div
        role="tooltip"
        className={`
          absolute bottom-full mb-3 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest
          transition-all duration-200 pointer-events-none whitespace-nowrap z-50 shadow-sm
          left-1/2 -translate-x-1/2
          
          /* Visibility Logic */
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
          
          /* Light Mode: Light Tooltip (White/Slate-200) */
          bg-white text-slate-600 border border-slate-200
          
          /* Dark Mode: Dark Tooltip (Black/Zinc-800) */
          dark:bg-black dark:text-zinc-400 dark:border-zinc-800
        `}
      >
        {label}

        {/* Tooltip Arrow (Matching Theme) */}
        <div className={`
          absolute top-[100%] left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border-b border-r
          -translate-y-[5px]
          /* Light Mode Arrow */
          bg-white border-slate-200
          /* Dark Mode Arrow */
          dark:bg-black dark:border-zinc-800
        `} />
      </div>
    </div>
  );
}
