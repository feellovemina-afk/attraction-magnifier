import Link from "next/link";
import { getAllColumns } from "@/lib/columns";

export const metadata = {
  title: "恋愛心理学コラム",
  description: "心理学で読み解く恋愛の「なぜ？」を深掘り。愛着スタイル、LINE心理学、好き避けの心理など。",
};

export default function ColumnsPage() {
  const columns = getAllColumns();

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-3xl mb-3">📖</p>
        <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">
          恋愛心理学コラム
        </h1>
        <p className="text-charcoal/60">
          心理学で読み解く、恋愛の「なぜ？」
        </p>
      </div>

      {columns.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-charcoal/40">記事を準備中です</p>
        </div>
      ) : (
        <div className="space-y-6">
          {columns.map((column) => (
            <Link
              key={column.slug}
              href={`/columns/${column.slug}`}
              className="block watercolor-card p-6 md:p-8 hover:shadow-lg transition-all hover:-translate-y-0.5 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl mt-1">{column.coverEmoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-pink-light/50 text-pink-dark px-2 py-0.5 rounded-full">
                      {column.category}
                    </span>
                    <span className="text-xs text-charcoal/40">
                      {column.date}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-charcoal group-hover:text-pink-dark transition-colors mb-2">
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
          🔮 愛着スタイル診断もやってみる
        </Link>
      </div>
    </section>
  );
}
