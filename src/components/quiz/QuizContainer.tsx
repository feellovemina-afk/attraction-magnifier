"use client";

import { useState } from "react";
import { quizQuestions } from "@/data/quiz-questions";
import { attachmentTypes } from "@/data/attachment-types";
import { calculateResult } from "@/lib/quiz-logic";
import { Scores } from "@/types/quiz";
import Link from "next/link";

export function QuizContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Scores[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const question = quizQuestions[currentIndex];
  const progress = ((currentIndex) / quizQuestions.length) * 100;

  const handleSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, question.answers[selectedAnswer].scores];
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    const resultType = calculateResult(answers);
    const result = attachmentTypes[resultType];

    return (
      <div className="quiz-fade">
        <div className="watercolor-card p-8 md:p-10 text-center mb-8">
          <p className="text-5xl mb-4">{result.emoji}</p>
          <p className="text-sm text-charcoal/50 mb-1">{result.nameEn}</p>
          <h2 className="text-3xl font-bold text-charcoal mb-4">
            あなたは「{result.name}」
          </h2>
          <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${result.color} text-sm font-medium mb-6`}>
            Attachment Style
          </div>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            {result.summary}
          </p>
        </div>

        <div className="watercolor-card p-8 mb-6">
          <h3 className="text-lg font-bold text-charcoal mb-4">💡 あなたの特徴</h3>
          <ul className="space-y-2">
            {result.traits.map((trait, i) => (
              <li key={i} className="flex items-start gap-2 text-charcoal/70">
                <span className="text-pink mt-0.5">●</span>
                {trait}
              </li>
            ))}
          </ul>
        </div>

        <div className="watercolor-card p-8 mb-6">
          <h3 className="text-lg font-bold text-charcoal mb-4">💕 恋愛パターン</h3>
          <p className="text-charcoal/70 leading-relaxed">{result.lovePattern}</p>
        </div>

        <div className="watercolor-card p-8 mb-6">
          <h3 className="text-lg font-bold text-charcoal mb-4">🦋 アドバイス</h3>
          <ul className="space-y-3">
            {result.advice.map((advice, i) => (
              <li key={i} className="flex items-start gap-3 text-charcoal/70">
                <span className="text-gold font-bold">{i + 1}.</span>
                {advice}
              </li>
            ))}
          </ul>
        </div>

        <div className="watercolor-card p-8 mb-8">
          <h3 className="text-lg font-bold text-charcoal mb-4">📚 おすすめの本</h3>
          <div className="space-y-3">
            {result.books.map((book, i) => {
              const Tag = book.url ? "a" : "div";
              const linkProps = book.url ? { href: book.url, target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <Tag
                  key={i}
                  {...linkProps}
                  className="block p-4 rounded-xl bg-cream hover:bg-gold-light/30 transition-colors"
                >
                  <p className="font-bold text-charcoal">{book.title}</p>
                  <p className="text-sm text-charcoal/50">{book.author}</p>
                  {!book.url && <p className="text-xs text-pink mt-1">🔗 リンク準備中</p>}
                </Tag>
              );
            })}
          </div>
        </div>

        {/* Recommended Column */}
        <div className="watercolor-card p-8 mb-8">
          <h3 className="text-lg font-bold text-charcoal mb-4">📖 あなたへのおすすめコラム</h3>
          {resultType === "avoidant" && (
            <Link href="/columns/avoidant-attachment-guide" className="block p-4 rounded-xl bg-cream hover:bg-gold-light/30 transition-colors">
              <p className="font-bold text-charcoal">彼が脈なしサインを出す本当の理由</p>
              <p className="text-sm text-charcoal/50 mt-1">回避型の彼の心理と具体的な接し方を解説</p>
            </Link>
          )}
          {resultType === "anxious" && (
            <Link href="/columns/line-honkido-signs" className="block p-4 rounded-xl bg-cream hover:bg-gold-light/30 transition-colors">
              <p className="font-bold text-charcoal">LINEで彼の本気度がわかる5つのサイン</p>
              <p className="text-sm text-charcoal/50 mt-1">不安な時こそ「速さ」ではなく「内容」を見よう</p>
            </Link>
          )}
          {resultType === "secure" && (
            <Link href="/columns/sukiyoke-psychology" className="block p-4 rounded-xl bg-cream hover:bg-gold-light/30 transition-colors">
              <p className="font-bold text-charcoal">好き避けの心理学</p>
              <p className="text-sm text-charcoal/50 mt-1">安定型のあなたが気づきにくい相手の心理</p>
            </Link>
          )}
          {resultType === "fearful" && (
            <Link href="/columns/avoidant-attachment-guide" className="block p-4 rounded-xl bg-cream hover:bg-gold-light/30 transition-colors">
              <p className="font-bold text-charcoal">彼が脈なしサインを出す本当の理由</p>
              <p className="text-sm text-charcoal/50 mt-1">恐れ型と回避型は似た部分が多い。まずここから</p>
            </Link>
          )}
        </div>

        <div className="flex flex-col gap-4 items-center">
          <button
            onClick={() => {
              setCurrentIndex(0);
              setAnswers([]);
              setSelectedAnswer(null);
              setShowResult(false);
            }}
            className="text-pink-dark hover:text-pink font-medium transition-colors"
          >
            🔄 もう一度診断する
          </button>
          <Link
            href="/columns"
            className="text-charcoal/50 hover:text-charcoal text-sm transition-colors"
          >
            すべてのコラムを見る →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-charcoal/50 mb-2">
          <span>Q{currentIndex + 1} / {quizQuestions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-pink-light/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink to-gold rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div key={question.id} className="quiz-enter">
        <div className="watercolor-card p-8 mb-6">
          <h2 className="text-lg md:text-xl font-bold text-charcoal leading-relaxed">
            {question.question}
          </h2>
        </div>

        <div className="space-y-3 mb-8">
          {question.answers.map((answer, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
                selectedAnswer === i
                  ? "border-pink bg-pink/10 shadow-md"
                  : "border-pink-light/30 bg-white/70 hover:border-pink-light hover:bg-white"
              }`}
            >
              <span className="text-charcoal/80">{answer.text}</span>
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className={`w-full py-4 rounded-full font-medium text-lg transition-all ${
            selectedAnswer !== null
              ? "bg-pink hover:bg-pink-dark text-white shadow-md hover:shadow-lg"
              : "bg-pink-light/50 text-charcoal/30 cursor-not-allowed"
          }`}
        >
          {currentIndex + 1 < quizQuestions.length ? "次の質問へ →" : "結果を見る ✨"}
        </button>
      </div>
    </div>
  );
}
