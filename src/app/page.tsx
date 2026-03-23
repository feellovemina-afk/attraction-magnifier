import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { getAllColumns } from "@/lib/columns";
import { FadeIn } from "@/components/ui/FadeIn";

const features = [
  {
    emoji: "🔮",
    title: "愛着スタイル診断",
    description: "3分・10問であなたの恋愛パターンがわかる",
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
    emoji: "✨",
    title: "My Picks",
    description: "美容・本・アプリの厳選おすすめ",
    href: "/picks",
    color: "from-pink-light/30 to-pink/20",
  },
];

export default function Home() {
  const columns = getAllColumns().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://cdn.midjourney.com/f9993dcf-5f28-4469-8478-dd5dc718d82f/0_0.png"
          alt="Attraction Magnifier Hero"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/70 via-cream/40 to-cream/85" />
        <div className="absolute inset-0 bg-charcoal/10" />
        <div className="relative z-10 text-center px-4 py-20 max-w-2xl mx-auto">
          <p className="text-2xl mb-4 animate-pulse [text-shadow:0_2px_8px_rgba(255,255,255,0.8)]">🦋</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-4 leading-tight [text-shadow:0_2px_12px_rgba(255,255,255,0.7)]">
            彼の&quot;冷たさ&quot;には<br className="md:hidden" />理由がある
          </h1>
          <p className="text-base md:text-lg text-charcoal/80 mb-2 [text-shadow:0_1px_6px_rgba(255,255,255,0.6)]">
            {siteConfig.name} — {siteConfig.nameJa}
          </p>
          <p className="text-sm md:text-base text-charcoal/70 mb-8 leading-relaxed [text-shadow:0_1px_6px_rgba(255,255,255,0.6)]">
            心理学で恋愛を読み解く。<br />
            3分の無料診断で、あなたの恋愛パターンがわかります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="inline-block bg-pink hover:bg-pink-dark text-white font-medium px-8 py-4 rounded-full transition-all hover:shadow-xl hover:-translate-y-1 text-base md:text-lg shadow-lg"
            >
              🔮 無料で診断する
            </Link>
            <Link
              href="/columns"
              className="inline-block bg-white/80 backdrop-blur-sm border-2 border-charcoal/20 hover:border-pink text-charcoal/70 hover:text-pink-dark font-medium px-8 py-4 rounded-full transition-all hover:-translate-y-1 text-base md:text-lg"
            >
              📖 コラムを読む
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards - 3 cards */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={feature.href} delay={i * 100}>
              <Link
                href={feature.href}
                className="block watercolor-card p-6 md:p-8 hover:shadow-lg transition-all hover:-translate-y-1 group text-center"
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 mx-auto`}>
                  {feature.emoji}
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-charcoal mb-2 group-hover:text-pink-dark transition-colors">
                  {feature.title}
                </h2>
                <p className="text-sm text-charcoal/60">{feature.description}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Latest Columns */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-2">Latest Columns</h2>
            <p className="text-charcoal/50">心理学で読み解く、恋愛の「なぜ？」</p>
          </div>
        </FadeIn>
        <div className="space-y-4">
          {columns.map((col, i) => (
            <FadeIn key={col.slug} delay={i * 150}>
              <Link
                href={`/columns/${col.slug}`}
                className="block watercolor-card overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5 group"
              >
                <div className="flex flex-col sm:flex-row">
                  {col.coverImage ? (
                    <div className="sm:w-48 h-36 sm:h-auto flex-shrink-0 overflow-hidden">
                      <img src={col.coverImage} alt={col.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  ) : (
                    <div className="sm:w-48 h-36 sm:h-auto flex-shrink-0 bg-gradient-to-br from-pink-light/30 to-gold-light/30 flex items-center justify-center">
                      <span className="text-4xl">{col.coverEmoji}</span>
                    </div>
                  )}
                  <div className="flex-1 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-pink-light/50 text-pink-dark font-medium">
                        {col.category}
                      </span>
                      <span className="text-xs text-charcoal/40">{col.date}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-charcoal group-hover:text-pink-dark transition-colors mb-1">
                      {col.title}
                    </h3>
                    <p className="text-sm text-charcoal/60 line-clamp-2">{col.excerpt}</p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={500}>
          <div className="text-center mt-8">
            <Link
              href="/columns"
              className="inline-block text-pink-dark hover:text-pink font-medium transition-colors"
            >
              すべてのコラムを見る →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Quiz Banner */}
      <section className="watercolor-bg py-16">
        <FadeIn>
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
              あなたの恋愛パターン、知ってる？
            </h2>
            <p className="text-charcoal/60 mb-8 text-base md:text-lg">
              心理学の「愛着スタイル理論」をもとにした10問の診断で、<br className="hidden md:block" />
              あなたの恋愛の傾向と対策がわかります。
            </p>
            <Link
              href="/quiz"
              className="inline-block bg-gold hover:bg-gold/80 text-white font-medium px-8 py-4 rounded-full transition-all hover:shadow-lg text-base md:text-lg"
            >
              診断をはじめる →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* SNS Links */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-playfair)] text-center text-xl font-bold text-charcoal mb-8">Follow me</h2>
        </FadeIn>
        <div className="flex justify-center gap-6 flex-wrap">
          {[
            { name: "TikTok", url: siteConfig.social.tiktok, icon: "♪", desc: "恋愛心理を1分で" },
            { name: "note", url: siteConfig.social.note, icon: "N", desc: "深掘りコラム" },
            { name: "X", url: siteConfig.social.x, icon: "𝕏", desc: "毎日ミニテク配信" },
          ].map((sns, i) => (
            <FadeIn key={sns.name} delay={i * 100}>
              <a
                href={sns.url}
                target="_blank"
                rel="noopener noreferrer"
                className="watercolor-card px-8 py-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 min-w-[140px]"
              >
                <p className="text-3xl mb-2 text-pink-dark font-bold">{sns.icon}</p>
                <p className="font-bold text-charcoal">{sns.name}</p>
                <p className="text-sm text-charcoal/50 mt-1">{sns.desc}</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
