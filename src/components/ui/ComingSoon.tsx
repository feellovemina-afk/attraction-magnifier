import Link from "next/link";
import { siteConfig } from "@/data/site-config";

interface ComingSoonProps {
  title: string;
  emoji: string;
  description: string;
}

export function ComingSoon({ title, emoji, description }: ComingSoonProps) {
  return (
    <section className="watercolor-bg min-h-[60vh] flex items-center justify-center">
      <div className="relative z-10 text-center px-4 py-20">
        <p className="text-5xl mb-4">{emoji}</p>
        <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">{title}</h1>
        <p className="text-charcoal/60 mb-8 max-w-md mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quiz"
            className="inline-block bg-pink hover:bg-pink-dark text-white font-medium px-6 py-3 rounded-full transition-all"
          >
            🔮 診断をやってみる
          </Link>
          <a
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-pink text-pink-dark hover:bg-pink/10 font-medium px-6 py-3 rounded-full transition-all"
          >
            🎵 TikTokをフォロー
          </a>
        </div>
      </div>
    </section>
  );
}
