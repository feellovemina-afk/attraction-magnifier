"use client";

import { useState } from "react";
import Link from "next/link";
import type { ColumnFrontmatter } from "@/types/column";

const categoryFilters = [
  { label: "全て", value: "all", emoji: "✨" },
  { label: "恋愛", value: "恋愛", emoji: "💕" },
  { label: "愛着スタイル", value: "愛着スタイル", emoji: "🧠" },
  { label: "LINE心理学", value: "LINE", emoji: "📱" },
  { label: "メンタル", value: "メンタル", emoji: "💪" },
  { label: "印象力", value: "印象力", emoji: "💄" },
  { label: "人間関係", value: "人間関係", emoji: "🤝" },
];

interface Props {
  columns: ColumnFrontmatter[];
}

export function ColumnsClient({ columns }: Props) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredColumns = activeFilter === "all"
    ? columns
    : columns.filter((col) => col.category.includes(activeFilter));

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <p className="text-3xl mb-3">📖</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-3">
          コラム
        </h1>
        <p className="text-charcoal/60">
          恋愛・自己理解・メンタル。心理学で読み解く「なぜ？」
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categoryFilters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeFilter === filter.value
                ? "bg-pink text-white shadow-md"
                : "bg-white/60 text-charcoal/60 hover:bg-pink-light/30"
            }`}
          >
            {filter.emoji} {filter.label}
          </button>
        ))}
      </div>

      {filteredColumns.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-charcoal/40">このカテゴリの記事はまだありません</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredColumns.map((column) => (
            <Link
              key={column.slug}
              href={`/columns/${column.slug}`}
              className="block watercolor-card overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5 group"
            >
              <div className="flex flex-col md:flex-row">
                {column.coverImage ? (
                  <div className="md:w-64 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      src={column.coverImage}
                      alt={column.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="md:w-64 h-48 md:h-auto flex-shrink-0 bg-gradient-to-br from-pink-light/30 to-gold-light/30 flex items-center justify-center">
                    <span className="text-5xl">{column.coverEmoji}</span>
                  </div>
                )}
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-pink-light/50 text-pink-dark px-2 py-0.5 rounded-full">
                      {column.category}
                    </span>
                    <span className="text-xs text-charcoal/40">
                      {column.date}
                    </span>
                  </div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-charcoal group-hover:text-pink-dark transition-colors mb-2">
                    {column.title}
                  </h2>
                  <p className="text-sm text-charcoal/60 line-clamp-2">
                    {column.excerpt}
                  </p>
                  <div className="flex gap-2 mt-3">
                    {column.keywords.slice(0, 3).map((kw) => (
                      <span key={kw} className="text-xs text-charcoal/40">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="text-center mt-12">
        <Link
          href="/quiz"
          className="inline-block bg-pink hover:bg-pink-dark text-white font-medium px-6 py-3 rounded-full transition-all"
        >
          🔮 診断もやってみる
        </Link>
      </div>
    </section>
  );
}
