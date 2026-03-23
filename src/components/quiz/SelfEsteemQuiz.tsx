"use client";

import { useState } from "react";
import { selfEsteemQuestions, selfEsteemTypes, SEScores, SelfEsteemType } from "@/data/self-esteem-quiz";
import Link from "next/link";

function calculateSEResult(answers: SEScores[]): SelfEsteemType {
  const totals: SEScores = { confident: 0, hardworker: 0, modest: 0, recovering: 0 };
  for (const a of answers) {
    totals.confident += a.confident;
    totals.hardworker += a.hardworker;
    totals.modest += a.modest;
    totals.recovering += a.recovering;
  }
  const entries = Object.entries(totals) as [SelfEsteemType, number][];
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0][0];
}

export function SelfEsteemQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<SEScores[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const question = selfEsteemQuestions[currentIndex];
  const progress = (currentIndex / selfEsteemQuestions.length) * 100;

  const handleSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;
    const newAnswers = [...answers, question.answers[selectedAnswer].scores];
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentIndex + 1 < selfEsteemQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    const resultType = calculateSEResult(answers);
    const result = selfEsteemTypes[resultType];

    return (
      <div className="space-y-6">
        <div className={`watercolor-card p-8 bg-gradient-to-br ${result.color} text-center`}>
          <p className="text-5xl mb-4">{result.emoji}</p>
          <h2 className="text-2xl font-bold text-charcoal mb-2">{result.name}</h2>
          <p className="text-charcoal/70 leading-relaxed">{result.summary}</p>
        </div>

        <div className="watercolor-card p-6">
          <h3 className="font-bold text-charcoal mb-3">あなたの特徴</h3>
          <ul className="space-y-2">
            {result.traits.map((trait, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-charcoal/70">
                <span className="text-pink mt-0.5">✦</span>
                {trait}
              </li>
            ))}
          </ul>
        </div>

        <div className="watercolor-card p-6 border-l-4 border-pink">
          <h3 className="font-bold text-charcoal mb-3">🦋 あなたへのメッセージ</h3>
          <ul className="space-y-3">
            {result.advice.map((advice, i) => (
              <li key={i} className="text-sm text-charcoal/70 leading-relaxed">
                {advice}
              </li>
            ))}
          </ul>
        </div>

        {resultType === "recovering" && (
          <div className="watercolor-card p-6 bg-pink-light/20">
            <p className="text-sm text-charcoal/70 mb-2">💌 もし今つらいと感じているなら</p>
            <p className="text-xs text-pink-dark">
              📞 よりそいホットライン: 0120-279-338（24時間無料）<br />
              📞 いのちの電話: 0570-783-556
            </p>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <Link
            href="/columns/self-esteem-love"
            className="block text-center bg-pink hover:bg-pink-dark text-white font-medium px-6 py-3 rounded-full transition-all"
          >
            📖 自己肯定感のコラムを読む
          </Link>
          <Link
            href="/quiz/attachment"
            className="block text-center bg-white/80 border-2 border-charcoal/20 hover:border-pink text-charcoal/70 hover:text-pink-dark font-medium px-6 py-3 rounded-full transition-all"
          >
            🔮 愛着スタイル診断もやってみる
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center text-sm text-charcoal/50 mb-2">
        <span>Q{currentIndex + 1} / {selfEsteemQuestions.length}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-pink-light/30 rounded-full h-1.5 mb-8">
        <div
          className="bg-gradient-to-r from-pink to-gold h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="watercolor-card p-6 mb-6">
        <p className="text-lg font-medium text-charcoal leading-relaxed">
          {question.question}
        </p>
      </div>

      <div className="space-y-3 mb-6">
        {question.answers.map((answer, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={`w-full text-left p-4 rounded-xl transition-all ${
              selectedAnswer === i
                ? "bg-pink/10 border-2 border-pink text-charcoal"
                : "bg-white/60 border-2 border-transparent hover:bg-pink-light/20 text-charcoal/70"
            }`}
          >
            {answer.text}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={selectedAnswer === null}
        className="w-full py-3 bg-pink hover:bg-pink-dark text-white font-medium rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        {currentIndex + 1 === selfEsteemQuestions.length ? "結果を見る" : "次へ"}
      </button>
    </div>
  );
}
