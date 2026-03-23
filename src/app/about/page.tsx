import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Attraction Magnifier",
  description: "モテ力倍増プランナーについて。恋愛心理学をベースに、恋愛に悩む女性の「なぜ？」を解き明かすコンテンツを発信しています。",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <img
          src="/profile-icon.png"
          alt="モテ力倍増プランナー"
          className="w-24 h-24 rounded-full mx-auto mb-6 object-cover shadow-lg"
        />
        <h1 className="text-3xl font-bold text-charcoal mb-2">モテ力倍増プランナー</h1>
        <p className="text-charcoal/50 text-lg">Attraction Magnifier</p>
      </div>

      <div className="watercolor-card p-8 mb-8">
        <h2 className="text-xl font-bold text-charcoal mb-4">🌸 このサイトについて</h2>
        <p className="text-charcoal/70 leading-relaxed mb-4">
          「好きな人の前だと素直になれない」「彼のLINEの意味がわからない」「私って重い？」
        </p>
        <p className="text-charcoal/70 leading-relaxed mb-4">
          恋愛で悩むとき、答えのない不安に押しつぶされそうになりますよね。
        </p>
        <p className="text-charcoal/70 leading-relaxed">
          このサイトでは、<strong className="text-pink-dark">心理学の研究をベースに</strong>、恋愛の「なぜ？」を解き明かしていきます。愛着スタイル理論、自己開示の返報性、認知バイアス——難しそうに聞こえるけれど、あなたの恋愛の「あるある」を説明してくれる言葉たちです。
        </p>
      </div>

      <div className="watercolor-card p-8 mb-8">
        <h2 className="text-xl font-bold text-charcoal mb-6">✨ 発信しているコンテンツ</h2>
        <div className="space-y-4">
          {[
            { emoji: "🎵", title: "TikTok", desc: "恋愛心理を1分で。通勤中にサクッと学べる動画" },
            { emoji: "📝", title: "note", desc: "心理学をもとにした深掘りコラム。有料記事では具体的なテクニックまで" },
            { emoji: "💬", title: "X（旧Twitter）", desc: "毎日のミニテク配信。日常で使える恋愛心理" },
            { emoji: "🔮", title: "愛着スタイル診断", desc: "10問であなたの恋愛パターンがわかる無料診断" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <p className="font-bold text-charcoal">{item.title}</p>
                <p className="text-sm text-charcoal/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="watercolor-card p-8 mb-8">
        <h2 className="text-xl font-bold text-charcoal mb-6">💎 大切にしていること</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-pink pl-4">
            <p className="font-bold text-charcoal mb-1">根拠のある情報を</p>
            <p className="text-sm text-charcoal/60">感覚や経験だけでなく、心理学の研究をベースにしたコンテンツを作っています</p>
          </div>
          <div className="border-l-4 border-gold pl-4">
            <p className="font-bold text-charcoal mb-1">わかりやすく</p>
            <p className="text-sm text-charcoal/60">専門用語は必ず日常の言葉で補足。誰でも使えるテクニックとして届けます</p>
          </div>
          <div className="border-l-4 border-butterfly pl-4">
            <p className="font-bold text-charcoal mb-1">自分を責めないで</p>
            <p className="text-sm text-charcoal/60">恋愛で悩むのは当たり前。「なぜそうなるか」を知ることで、自分を許せるようになる</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-bold text-charcoal mb-6">📱 フォローする</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {[
            { name: "TikTok", url: siteConfig.social.tiktok, icon: "🎵" },
            { name: "note", url: siteConfig.social.note, icon: "📝" },
            { name: "X", url: siteConfig.social.x, icon: "💬" },
          ].map((sns) => (
            <a
              key={sns.name}
              href={sns.url}
              target="_blank"
              rel="noopener noreferrer"
              className="watercolor-card px-6 py-4 text-center hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <p className="text-2xl mb-1">{sns.icon}</p>
              <p className="text-sm font-bold text-charcoal">{sns.name}</p>
            </a>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/quiz"
            className="inline-block bg-pink hover:bg-pink-dark text-white font-medium px-8 py-3 rounded-full transition-all hover:shadow-lg"
          >
            🔮 まずは無料診断から →
          </Link>
        </div>
      </div>
    </div>
  );
}
