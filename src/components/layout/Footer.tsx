import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="border-t border-pink-light/30 py-8 mt-16">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
        <div className="flex justify-center gap-6">
          <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-charcoal/50 hover:text-pink-dark transition-colors">
            TikTok
          </a>
          <a href={siteConfig.social.note} target="_blank" rel="noopener noreferrer" className="text-charcoal/50 hover:text-pink-dark transition-colors">
            note
          </a>
          <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" className="text-charcoal/50 hover:text-pink-dark transition-colors">
            X
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-charcoal/40">
          <span>🦋</span>
          <span>&copy; {new Date().getFullYear()} {siteConfig.name}</span>
        </div>
      </div>
    </footer>
  );
}
