import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { getAllColumns } from "@/lib/columns";
import { FadeIn } from "@/components/ui/FadeIn";

const features = [
  {
    emoji: "🔮",
    title: "心理学診断",
    description: "愛着スタイル・自己肯定感をセルフチェック",
    href: "/quiz",
    color: "from-pink/20 to-butterfly/20",
  },
  {
    emoji: "📖",
    title: "コラム",
    description: "恋愛・自己理解・メンタルを心理学で読み解く",
    href: "/columns",
    color: "from-gold/20 to-gold-light/20",
  },
  {
    emoji: "💌",
    title: "お悩み相談",
    description: "匿名であなたの悩みを聞かせて",
    href: "/contact",
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
            &quot;もっと好きな自分&quot;に<br className="md:hidden" />出会う場所
          </h1>
          <p className="text-base md:text-lg text-charcoal/80 mb-2 [text-shadow:0_1px_6px_rgba(255,255,255,0.6)]">
            {siteConfig.name} — {siteConfig.nameJa}
          </p>
          <p className="text-sm md:text-base text-charcoal/70 mb-8 leading-relaxed [text-shadow:0_1px_6px_rgba(255,255,255,0.6)]">
            恋愛・自己理解・メンタル。<br />
            心理学であなたの魅力をそっと引き出す。
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
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-charcoal/40">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* Feature Cards - 3 cards */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-charcoal mb-1">
              恋愛力を上げる、3つのアプローチ
            </h2>
            <p className="text-sm text-charcoal/40">What we offer</p>
          </div>
        </FadeIn>
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
      <section className="max-w-5xl mx-auto px-4 py-12">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-1">最新コラム</h2>
            <p className="font-[family-name:var(--font-playfair)] text-sm text-charcoal/30 italic">Latest Columns</p>
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

      {/* Quiz Banner with MJ image */}
      <section className="relative overflow-hidden py-20">
        <img
          src="https://cdn.midjourney.com/dae14c97-1c8f-4e5e-a9a7-d6f1471b4fc3/0_0.png"
          alt="診断背景"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/80 to-cream/90" />
        <FadeIn>
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
              彼との関係がうまくいかない理由、<br className="hidden md:block" />3分でわかる
            </h2>
            <p className="text-charcoal/60 mb-8 text-base md:text-lg">
              心理学の「愛着スタイル理論」をもとにした10問の診断で、<br className="hidden md:block" />
              あなたの恋愛の傾向と対策がわかります。
            </p>
            <Link
              href="/quiz"
              className="inline-block bg-gold hover:bg-gold/80 text-white font-medium px-8 py-4 rounded-full transition-all hover:shadow-lg hover:-translate-y-1 text-base md:text-lg"
            >
              診断をはじめる →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* SNS Links with SVG icons */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-charcoal mb-1">フォローする</h2>
            <p className="font-[family-name:var(--font-playfair)] text-sm text-charcoal/30 italic">Follow me</p>
          </div>
        </FadeIn>
        <div className="flex justify-center gap-8 flex-wrap">
          {/* TikTok */}
          <FadeIn delay={0}>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-6 text-center transition-all hover:-translate-y-1 min-w-[140px] group"
            >
              <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 0010.86 4.46V13.2a8.17 8.17 0 004.79 1.55v-3.4a4.85 4.85 0 01-.79-.07 4.83 4.83 0 01-3.21-2.2V13.2h.01V8.87a8.25 8.25 0 004.78 1.53V6.69z"/>
                </svg>
              </div>
              <p className="font-bold text-charcoal text-sm">TikTok</p>
              <p className="text-xs text-charcoal/50 mt-1">1分で学べる恋愛心理テク</p>
            </a>
          </FadeIn>

          {/* note */}
          <FadeIn delay={100}>
            <a
              href={siteConfig.social.note}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-6 text-center transition-all hover:-translate-y-1 min-w-[140px] group"
            >
              <div className="w-14 h-14 rounded-full bg-[#41C9B4] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">n</span>
              </div>
              <p className="font-bold text-charcoal text-sm">note</p>
              <p className="text-xs text-charcoal/50 mt-1">心理学の深掘りコラム</p>
            </a>
          </FadeIn>

          {/* X */}
          <FadeIn delay={200}>
            <a
              href={siteConfig.social.x}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-6 text-center transition-all hover:-translate-y-1 min-w-[140px] group"
            >
              <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <p className="font-bold text-charcoal text-sm">X</p>
              <p className="text-xs text-charcoal/50 mt-1">毎日ミニテク配信中</p>
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
