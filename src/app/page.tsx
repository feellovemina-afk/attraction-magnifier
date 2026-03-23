import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { getAllColumns } from "@/lib/columns";
import { FadeIn } from "@/components/ui/FadeIn";

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
  const columns = getAllColumns().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-light via-[#f5e6d3] to-[#e8d5c4]" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_20%_50%,rgba(219,166,166,0.5),transparent_70%),radial-gradient(ellipse_at_80%_20%,rgba(200,170,130,0.4),transparent_60%),radial-gradient(ellipse_at_50%_80%,rgba(180,160,200,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/80" />
        <div className="relative z-10 text-center px-4 py-20 max-w-2xl mx-auto">
          <p className="text-butterfly text-2xl mb-4 animate-pulse">🦋</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-semibold text-charcoal mb-4 drop-shadow-sm">
            {siteConfig.name}
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 mb-2">
            {siteConfig.nameJa}
          </p>
          <p className="text-xl md:text-2xl text-charcoal/80 font-medium mt-4 mb-3">
            {siteConfig.tagline}
          </p>
          <p className="text-sm md:text-base text-charcoal/50 mb-10">
            心理学であなたの恋愛パターンを分析。<br className="hidden md:block" />
            本当の気持ちが見えてくる。
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-pink hover:bg-pink-dark text-white font-medium px-10 py-4 rounded-full transition-all hover:shadow-xl hover:-translate-y-1 text-lg shadow-lg"
          >
            🔮 無料で診断する
          </Link>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={feature.href} delay={i * 100}>
              <Link
                href={feature.href}
                className="block watercolor-card p-8 hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4`}>
                  {feature.emoji}
                </div>
                <h2 className="text-xl font-bold text-charcoal mb-2 group-hover:text-pink-dark transition-colors">
                  {feature.title}
                </h2>
                <p className="text-charcoal/60">{feature.description}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Latest Columns */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">最新コラム</h2>
            <p className="text-charcoal/50">心理学で読み解く、恋愛の「なぜ？」</p>
          </div>
        </FadeIn>
        <div className="space-y-4">
          {columns.map((col, i) => (
            <FadeIn key={col.slug} delay={i * 150}>
              <Link
                href={`/columns/${col.slug}`}
                className="block watercolor-card p-6 hover:shadow-lg transition-all hover:-translate-y-0.5 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{col.coverEmoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-pink-light/50 text-pink-dark font-medium">
                        {col.category}
                      </span>
                      <span className="text-xs text-charcoal/40">{col.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-charcoal group-hover:text-pink-dark transition-colors mb-1">
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
        </FadeIn>
      </section>

      {/* SNS Links */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <FadeIn>
          <h2 className="text-center text-xl font-bold text-charcoal mb-8">Follow me</h2>
        </FadeIn>
        <div className="flex justify-center gap-6 flex-wrap">
          {[
            { name: "TikTok", url: siteConfig.social.tiktok, icon: "🎵", desc: "恋愛心理を1分で" },
            { name: "note", url: siteConfig.social.note, icon: "📝", desc: "深掘りコラム" },
            { name: "X", url: siteConfig.social.x, icon: "💬", desc: "毎日ミニテク配信" },
          ].map((sns, i) => (
            <FadeIn key={sns.name} delay={i * 100}>
              <a
                href={sns.url}
                target="_blank"
                rel="noopener noreferrer"
                className="watercolor-card px-8 py-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 min-w-[140px]"
              >
                <p className="text-3xl mb-2">{sns.icon}</p>
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
