import type { Metadata } from "next";
import { QuizContainer } from "@/components/quiz/QuizContainer";

export const metadata: Metadata = {
  title: '愛着スタイル診断 - あなたの"引力タイプ"は？',
  description: '10問の質問に答えるだけで、あなたの愛着スタイル（安定型・不安型・回避型・恐れ型）と"引力タイプ"がわかります。心理学に基づいた無料診断。',
};

export default function AttachmentQuizPage() {
  return (
    <section className="watercolor-bg min-h-screen">
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-3xl mb-3">🔮</p>
          <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">
            愛着スタイル診断
          </h1>
          <p className="text-lg text-pink-dark font-medium mb-2">
            あなたの&quot;引力タイプ&quot;は？
          </p>
          <p className="text-charcoal/60">
            10問の質問で、あなたの恋愛パターンがわかります
          </p>
        </div>
        <QuizContainer />
      </div>
    </section>
  );
}
