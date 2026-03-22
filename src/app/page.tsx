import Link from "next/link";
import { siteConfig } from "@/data/site-config";

const features = [
  {
    emoji: "🔮",
    title: "愛着スタイル診断",
    description: "10問の質問で、あなたの恋愛パターンがわかる",
    href: "/quiz",
    color: "from-pink/20 to-butterfly/20",
  },
  {
    emoji: "📖",
    title: "恋愛心理学コラム",
    description: "心理学で読み解く、恋愛の「なぜ？」",
    href: "/columns",
    color: "from-gold/20 to-gold-light/20",
  },
  {
    emoji: "💄",
    title: "Beauty Picks",
    description: "自分磨きが加速するおすすめアイテム",
    href: "/beauty",
    color: "from-pink-light/30 to-pink/20",
  },
  {
    emoji: "📚",
    title: "Book Shelf",
    description: "恋愛力が上がる心理学の本",
    href: "/books",
    color: "from-gold-light/30 to-cream",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="watercolor-bg min-h-[70vh] flex items-center justify-center relative">
        <div className="relative z-10 text-center px-4 py-20">
          <p className="text-butterfly text-lg mb-2">🦋</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-charcoal mb-4">
            {siteConfig.name}
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 mb-2">
            {siteConfig.nameJa}
          </p>
          <p className="text-xl md:text-2xl text-charcoal/80 font-medium mt-6 mb-10">
            {siteConfig.tagline}
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-pink hover:bg-pink-dark text-white font-medium px-8 py-4 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 text-lg"
          >
            🔮 無料で診断する
          </Link>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="watercolor-card p-8 hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4`}>
                {feature.emoji}
              </div>
              <h2 className="text-xl font-bold text-charcoal mb-2 group-hover:text-pink-dark transition-colors">
                {feature.title}
              </h2>
              <p className="text-charcoal/60">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quiz Banner */}
      <section className="watercolor-bg py-16">
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
            あなたの恋愛パターン、知ってる？
          </h2>
          <p className="text-charcoal/60 mb-8 text-lg">
            心理学の「愛着スタイル理論」をもとにした10問の診断で、<br className="hidden md:block" />
            あなたの恋愛の傾向と対策がわかります。
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-gold hover:bg-gold/80 text-white font-medium px-8 py-4 rounded-full transition-all hover:shadow-lg text-lg"
          >
            診断をはじめる →
          </Link>
        </div>
      </section>

      {/* SNS Links */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-center text-xl font-bold text-charcoal mb-8">Follow me</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {[
            { name: "TikTok", url: siteConfig.social.tiktok, icon: "🎵", desc: "恋愛心理を1分で" },
            { name: "note", url: siteConfig.social.note, icon: "📝", desc: "深掘りコラム" },
            { name: "X", url: siteConfig.social.x, icon: "💬", desc: "毎日ミニテク配信" },
          ].map((sns) => (
            <a
              key={sns.name}
              href={sns.url}
              target="_blank"
              rel="noopener noreferrer"
              className="watercolor-card px-8 py-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 min-w-[140px]"
            >
              <p className="text-3xl mb-2">{sns.icon}</p>
              <p className="font-bold text-charcoal">{sns.name}</p>
              <p className="text-sm text-charcoal/50 mt-1">{sns.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
