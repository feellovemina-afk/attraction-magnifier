import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { affiliateItems, type AffiliateItem } from "@/data/affiliates";

export const metadata: Metadata = {
  title: "My Picks - 本当におすすめできるものだけ",
  description:
    "恋愛心理学を学んだ私が本当に良いと思ったマッチングアプリ・書籍・カウンセリングサービスだけを厳選。愛着スタイル別のおすすめも。",
};

const sections = [
  {
    category: "app" as const,
    emoji: "💕",
    title: "マッチングアプリ",
    subtitle: "愛着スタイルを知った上で選ぶと、出会いの質が変わるよ",
    note: "自分の愛着スタイルがわからない人は、まず診断してみてね",
    noteLink: "/quiz",
    noteLinkText: "無料で診断する",
  },
  {
    category: "book" as const,
    emoji: "📚",
    title: "心理学の本",
    subtitle: "コラムの元ネタになっている本たち。もっと深く知りたい人へ",
  },
  {
    category: "counseling" as const,
    emoji: "🫧",
    title: "カウンセリング",
    subtitle: "自分だけで抱えなくていい。プロに頼るのも勇気だよ",
  },
  {
    category: "beauty" as const,
    emoji: "🌙",
    title: "夜の処方箋（自己ケア）",
    subtitle: "恋愛で疲れた夜を、自分のために整える儀式",
    note: "「彼のため」じゃなく「自分のため」のセルフケアだけ厳選しています",
  },
];

function PickCard({ item }: { item: AffiliateItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block watercolor-card p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-charcoal group-hover:text-pink-dark transition-colors">
              {item.name}
            </h3>
            {item.tag && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-light to-pink-light/50 text-pink-dark font-medium whitespace-nowrap">
                {item.tag}
              </span>
            )}
          </div>
          <p className="text-sm text-charcoal/50 mb-2">{item.description}</p>
          {item.detail && (
            <p className="text-sm text-charcoal/70 leading-relaxed">
              {item.detail}
            </p>
          )}
          {item.attachmentTypes && item.attachmentTypes.length > 0 && (
            <div className="flex gap-1.5 mt-3">
              {item.attachmentTypes.map((type) => (
                <span
                  key={type}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-cream text-charcoal/60 border border-charcoal/10"
                >
                  {type}におすすめ
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="text-charcoal/30 group-hover:text-pink-dark group-hover:translate-x-1 transition-all mt-1 shrink-0">
          &rarr;
        </span>
      </div>
    </a>
  );
}

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
            <p className="text-charcoal/60 max-w-md mx-auto">
              本当に良いと思ったものだけを紹介してるの。
              <br />
              あなたの恋愛と自分磨きの役に立てたら嬉しいな。
            </p>
          </div>
        </FadeIn>

        <div className="space-y-14">
          {sections.map((sec, secIdx) => {
            const items = affiliateItems.filter(
              (item) => item.category === sec.category
            );
            return (
              <FadeIn key={sec.category} delay={secIdx * 150}>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{sec.emoji}</span>
                    <div>
                      <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal">
                        {sec.title}
                      </h2>
                      <p className="text-sm text-charcoal/50">
                        {sec.subtitle}
                      </p>
                    </div>
                  </div>

                  {sec.note && (
                    <div className="mb-4 ml-9 flex items-center gap-2 text-sm">
                      <span className="text-pink">💡</span>
                      <span className="text-charcoal/50">{sec.note}</span>
                      {sec.noteLink && (
                        <a
                          href={sec.noteLink}
                          className="text-pink-dark hover:underline font-medium"
                        >
                          {sec.noteLinkText} &rarr;
                        </a>
                      )}
                    </div>
                  )}

                  <div className="space-y-3">
                    {items.map((item) => (
                      <PickCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={600}>
          <div className="watercolor-card p-6 mt-14 text-center">
            <p className="text-sm text-charcoal/70 leading-relaxed">
              このページで紹介しているサービスには、一部アフィリエイトリンクが含まれます。
              <br />
              紹介料をいただくことがありますが、
              <span className="font-medium text-charcoal">
                本当に良いと思ったものだけ
              </span>
              を掲載しています。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
