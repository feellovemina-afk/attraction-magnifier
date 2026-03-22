"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site-config";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 watercolor-card border-b border-pink-light/30">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🦋</span>
          <span className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-charcoal">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-charcoal/70 hover:text-pink-dark transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-charcoal transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-charcoal transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-charcoal transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden watercolor-card border-t border-pink-light/30 px-4 py-4 space-y-3">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-charcoal/70 hover:text-pink-dark transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
