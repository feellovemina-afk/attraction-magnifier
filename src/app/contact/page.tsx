"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["LINE", "愛着スタイル", "片思い", "デート", "自己肯定感", "その他"];

export default function ContactPage() {
  const [nickname, setNickname] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname: nickname || "匿名さん", category, message }),
      });

      if (res.ok) {
        setStatus("success");
        setNickname("");
        setCategory("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-6">💌</div>
        <h1 className="text-2xl font-bold text-charcoal mb-4">ありがとう！お悩みを受け取りました</h1>
        <p className="text-charcoal/60 mb-4">
          いただいたお悩みは、コラムやTikTok動画で回答させていただくことがあります。
        </p>
        <p className="text-charcoal/40 text-sm mb-8">
          ※ 個別の返信はお約束できません。ご了承ください。
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setStatus("idle")}
            className="px-6 py-3 bg-pink text-white rounded-full hover:bg-pink-dark transition-colors"
          >
            もう一つ送る
          </button>
          <Link
            href="/columns"
            className="px-6 py-3 bg-white/80 text-charcoal rounded-full hover:bg-white transition-colors border border-pink-light"
          >
            コラムを読む
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">💌</div>
        <h1 className="text-2xl font-bold text-charcoal mb-2">あなたのお悩み、聞かせて</h1>
        <p className="text-charcoal/50 text-sm">
          恋愛の悩み、彼のこと、自分のこと。<br />
          匿名で気軽に相談できます。
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ニックネーム */}
        <div className="watercolor-card p-6">
          <label className="block text-sm font-bold text-charcoal mb-2">
            ニックネーム <span className="text-charcoal/40 font-normal">（任意・匿名OK）</span>
          </label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="例：みーちゃん"
            className="w-full px-4 py-3 rounded-xl bg-white/60 border border-pink-light/30 focus:border-pink focus:outline-none text-charcoal placeholder:text-charcoal/30"
          />
        </div>

        {/* カテゴリ */}
        <div className="watercolor-card p-6">
          <label className="block text-sm font-bold text-charcoal mb-3">
            カテゴリ <span className="text-charcoal/40 font-normal">（任意）</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(category === cat ? "" : cat)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  category === cat
                    ? "bg-pink text-white"
                    : "bg-white/60 text-charcoal/60 hover:bg-pink-light/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* お悩み本文 */}
        <div className="watercolor-card p-6">
          <label className="block text-sm font-bold text-charcoal mb-2">
            お悩み <span className="text-pink-dark">*</span>
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="彼のLINEが急に素っ気なくなって不安です…"
            rows={6}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/60 border border-pink-light/30 focus:border-pink focus:outline-none text-charcoal placeholder:text-charcoal/30 resize-none"
          />
          <p className="text-xs text-charcoal/30 mt-2">
            {message.length} / 1000文字
          </p>
        </div>

        {/* 注意書き */}
        <div className="text-xs text-charcoal/40 space-y-1 px-2">
          <p>※ いただいたお悩みは、コラムやTikTok動画の題材として使用させていただく場合があります。</p>
          <p>※ 個人が特定される情報は公開しません。</p>
          <p>⚠️ 深刻な悩み（DV・メンタルヘルス等）は専門機関にご相談ください。</p>
          <p className="text-pink-dark">📞 DV相談ナビ: #8008 / 警察相談: #9110 / よりそいホットライン: 0120-279-338</p>
        </div>

        {/* 送信ボタン */}
        <button
          type="submit"
          disabled={!message.trim() || status === "sending"}
          className="w-full py-4 bg-gradient-to-r from-pink to-gold text-white font-bold rounded-full text-lg hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "送信中..." : "💌 匿名で送る"}
        </button>

        {status === "error" && (
          <p className="text-center text-red-500 text-sm">送信に失敗しました。もう一度お試しください。</p>
        )}
      </form>
    </div>
  );
}
