"use client";

import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-900">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-sm tracking-tighter uppercase hover:text-blue-600 transition-colors">
          Portfolio 2026
        </Link>

        {/* Added 'hidden' for mobile and 'md:flex' for desktop */}
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
          <Link href="/#experience" className="hover:text-blue-600 transition-colors">Experience</Link>
          <Link href="/#education" className="hover:text-blue-600 transition-colors">Education</Link>
          <Link href="/#work" className="hover:text-blue-600 transition-colors">Work</Link>
          <Link href="/#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
