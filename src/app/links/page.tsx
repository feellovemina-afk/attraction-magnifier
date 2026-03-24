import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links | Attraction Magnifier",
  description: "Attraction Magnifierの全コンテンツへのリンク。診断・コラム・SNS・お悩み相談はこちらから。",
};

const links = [
  {
    emoji: "🔮",
    title: "愛着スタイル診断",
    desc: "10問であなたの恋愛パターンがわかる",
    href: "/quiz",
    highlight: true,
  },
  {
    emoji: "📖",
    title: "恋愛心理学コラム",
    desc: "心理学で読み解く、恋の「なぜ？」",
    href: "/columns",
    highlight: false,
  },
  {
    emoji: "📝",
    title: "最新note記事",
    desc: "深掘りコラム・有料記事はこちら",
    href: siteConfig.social.note,
    external: true,
    highlight: false,
  },
  {
    emoji: "💌",
    title: "お悩み相談",
    desc: "匿名で恋愛の悩みを相談できる",
    href: "/contact",
    highlight: false,
  },
  {
    emoji: "🎵",
    title: "TikTok",
    desc: "恋愛心理を1分で学べる動画",
    href: siteConfig.social.tiktok,
    external: true,
    highlight: false,
  },
  {
    emoji: "💬",
    title: "X（旧Twitter）",
    desc: "毎日のミニテク配信中",
    href: siteConfig.social.x,
    external: true,
    highlight: false,
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-light/30 via-cream to-gold/10 flex flex-col items-center px-4 py-12">
      <img
        src="/profile-icon.png"
        alt="モテ力倍増プランナー"
        className="w-20 h-20 rounded-full object-cover shadow-lg mb-4"
      />
      <h1 className="text-xl font-bold text-charcoal mb-1">Attraction Magnifier</h1>
      <p className="text-sm text-charcoal/50 mb-2">モテ力倍増プランナー</p>
      <p className="text-xs text-charcoal/40 mb-8">あなたの魅力を、そっと引き出す 🦋</p>

      <div className="w-full max-w-md space-y-3">
        {links.map((link) => {
          const Tag = link.external ? "a" : Link;
          const extraProps = link.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Tag
              key={link.title}
              href={link.href}
              {...extraProps}
              className={`block w-full rounded-2xl p-4 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-md ${
                link.highlight
                  ? "bg-gradient-to-r from-pink to-gold text-white shadow-md"
                  : "watercolor-card hover:border-pink/30"
              }`}
            >
              <span className="text-2xl">{link.emoji}</span>
              <p className={`font-bold text-sm mt-1 ${link.highlight ? "text-white" : "text-charcoal"}`}>
                {link.title}
              </p>
              <p className={`text-xs mt-0.5 ${link.highlight ? "text-white/80" : "text-charcoal/50"}`}>
                {link.desc}
              </p>
            </Tag>
          );
        })}
      </div>

      <p className="text-xs text-charcoal/30 mt-8">© 2026 Attraction Magnifier</p>
    </div>
  );
}
