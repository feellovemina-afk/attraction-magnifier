import type { Metadata } from "next";
import { SelfEsteemQuiz } from "@/components/quiz/SelfEsteemQuiz";

export const metadata: Metadata = {
  title: "自己肯定感診断 - 今の自分をどれくらい受け入れられてる？",
  description: "10問の質問で、あなたの自己肯定感タイプがわかります。自信満々タイプ・がんばり屋タイプ・控えめタイプ・回復途中タイプの4タイプ診断。",
};

export default function SelfEsteemQuizPage() {
  return (
    <section className="watercolor-bg min-h-screen">
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-3xl mb-3">🌸</p>
          <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">
            自己肯定感診断
          </h1>
          <p className="text-charcoal/60">
            10問の質問で、今の自分をどれくらい受け入れられてるかわかります
          </p>
        </div>
        <SelfEsteemQuiz />
      </div>
    </section>
  );
}
