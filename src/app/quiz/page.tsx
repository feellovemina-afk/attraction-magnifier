import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "心理学診断 | Attraction Magnifier",
  description: "愛着スタイル診断（引力タイプ診断）・自己肯定感診断。10問の質問に答えるだけで、あなたの恋愛パターンや引力タイプがわかります。",
};

const quizzes = [
  {
    emoji: "🔮",
    title: "愛着スタイル診断",
    subtitle: 'あなたの"引力タイプ"は？',
    description: "あなたの恋愛パターンは？安定型・不安型・回避型・恐れ型の4タイプで診断",
    time: "10問・無料",
    href: "/quiz/attachment",
    color: "from-pink/20 to-butterfly/20",
    popular: true,
  },
  {
    emoji: "🌸",
    title: "自己肯定感診断",
    description: "今の自分をどれくらい受け入れられてる？4タイプで自己肯定感をチェック",
    time: "10問・無料",
    href: "/quiz/self-esteem",
    color: "from-gold/20 to-gold-light/20",
    popular: false,
  },
];

export default function QuizIndexPage() {
  return (
    <section className="watercolor-bg min-h-screen">
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-3xl mb-3">🔮</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-3">
            心理学診断
          </h1>
          <p className="text-charcoal/60">
            10問の質問で、あなたの心のパターンがわかります
          </p>
        </div>

        <div className="space-y-6">
          {quizzes.map((quiz) => (
            <Link
              key={quiz.href}
              href={quiz.href}
              className="block watercolor-card p-8 hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{quiz.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-xl font-bold text-charcoal group-hover:text-pink-dark transition-colors">
                      {quiz.title}
                    </h2>
                    {quiz.popular && (
                      <span className="text-xs bg-pink text-white px-2 py-0.5 rounded-full">人気</span>
                    )}
                  </div>
                  {"subtitle" in quiz && quiz.subtitle && (
                    <p className="text-sm font-medium text-pink-dark mb-1">{quiz.subtitle}</p>
                  )}
                  <p className="text-sm text-charcoal/60 mb-2">{quiz.description}</p>
                  <p className="text-xs text-charcoal/40">⏱ {quiz.time}</p>
                </div>
                <span className="text-charcoal/30 group-hover:text-pink-dark transition-colors text-2xl">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
