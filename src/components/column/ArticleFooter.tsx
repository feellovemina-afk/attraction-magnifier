import Link from "next/link";

interface RelatedArticle {
  slug: string;
  title: string;
  coverEmoji: string;
}

interface ArticleFooterProps {
  relatedArticles?: RelatedArticle[];
}

export function ArticleFooter({ relatedArticles }: ArticleFooterProps) {
  return (
    <div className="mt-16 space-y-8">
      {/* Author Profile Card */}
      <div className="watercolor-card p-6 flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink/30 to-gold/30 flex items-center justify-center text-2xl flex-shrink-0">
          🦋
        </div>
        <div>
          <p className="font-bold text-charcoal">モテ力倍増プランナー</p>
          <p className="text-sm text-charcoal/50 mb-2">Attraction Magnifier</p>
          <p className="text-sm text-charcoal/60 leading-relaxed">
            恋愛心理学をベースに、恋が動き出すヒントをお届けしています。
            TikTokで1分動画、noteで深掘りコラム、Xで毎日ミニテクを配信中。
          </p>
          <div className="flex gap-3 mt-3">
            <a href="https://www.tiktok.com/@attractionmagnifier" target="_blank" rel="noopener noreferrer" className="text-xs text-pink-dark hover:underline">TikTok</a>
            <a href="https://note.com/attract_mag" target="_blank" rel="noopener noreferrer" className="text-xs text-pink-dark hover:underline">note</a>
            <a href="https://x.com/attract_mag" target="_blank" rel="noopener noreferrer" className="text-xs text-pink-dark hover:underline">X</a>
          </div>
        </div>
      </div>

      {/* CTA: Quiz */}
      <Link href="/quiz" className="block watercolor-card p-6 text-center hover:shadow-lg transition-all hover:-translate-y-0.5 group border-l-4 border-pink">
        <p className="text-lg font-bold text-charcoal group-hover:text-pink-dark transition-colors">
          🔮 あなたの愛着スタイルを診断してみる
        </p>
        <p className="text-sm text-charcoal/50 mt-1">
          10問の質問で、あなたの恋愛パターンがわかります（無料）
        </p>
      </Link>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <div>
          <p className="text-sm font-bold text-charcoal/60 mb-3">📖 あわせて読みたい</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/columns/${article.slug}`}
                className="watercolor-card p-4 hover:shadow-md transition-all hover:-translate-y-0.5 group"
              >
                <p className="text-sm font-bold text-charcoal group-hover:text-pink-dark transition-colors">
                  {article.coverEmoji} {article.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
