import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "My Picks - おすすめアイテム",
  description: "恋愛力・自分磨きに役立つ美容アイテム、心理学の本、マッチングアプリを厳選紹介。",
};

const categories = [
  {
    id: "beauty",
    emoji: "💄",
    title: "Beauty",
    subtitle: "自分磨きが加速するおすすめアイテム",
    items: [
      { name: "デート前のスキンケアルーティン", status: "coming-soon" },
      { name: "自己肯定感が上がるメイクアイテム5選", status: "coming-soon" },
      { name: "彼が思わず触れたくなるヘアケア", status: "coming-soon" },
    ],
  },
  {
    id: "books",
    emoji: "📚",
    title: "Books",
    subtitle: "恋愛力が上がる心理学の本",
    items: [
      { name: "愛着障害 — 岡田尊司", desc: "愛着スタイルを深く理解するための一冊", status: "ready" },
      { name: "異性の心を上手に透視する方法 — アミール・レバイン", desc: "愛着理論を恋愛に応用した実用書", status: "ready" },
      { name: "嫌われる勇気 — 岸見一郎", desc: "自己肯定感を高めるアドラー心理学", status: "ready" },
    ],
  },
  {
    id: "apps",
    emoji: "💕",
    title: "マッチングアプリ",
    subtitle: "愛着スタイル別おすすめアプリ",
    items: [
      { name: "本気の出会いを探すならこの3つ", status: "coming-soon" },
    ],
  },
];

export default function PicksPage() {
  return (
    <section className="watercolor-bg min-h-screen">
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-12">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-3xl mb-3">✨</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-3">
              My Picks
            </h1>
            <p className="text-charcoal/60">
              恋愛力・自分磨きに役立つアイテムを厳選
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {categories.map((cat, catIdx) => (
            <FadeIn key={cat.id} delay={catIdx * 150}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.emoji}</span>
                  <div>
                    <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal">
                      {cat.title}
                    </h2>
                    <p className="text-sm text-charcoal/50">{cat.subtitle}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="watercolor-card p-5 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-charcoal">{item.name}</p>
                          {"desc" in item && item.desc && (
                            <p className="text-sm text-charcoal/50 mt-1">{item.desc}</p>
                          )}
                        </div>
                        {item.status === "coming-soon" && (
                          <span className="text-xs px-3 py-1 rounded-full bg-pink-light/50 text-pink-dark whitespace-nowrap">
                            Coming Soon
                          </span>
                        )}
                        {item.status === "ready" && (
                          <span className="text-xs px-3 py-1 rounded-full bg-gold-light/50 text-gold whitespace-nowrap">
                            🔗 準備中
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={600}>
          <div className="text-center mt-12 text-sm text-charcoal/40">
            <p>アフィリエイトリンクは準備中です。</p>
            <p>Amazonアソシエイト承認後に順次追加予定。</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
