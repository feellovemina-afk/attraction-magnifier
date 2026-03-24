import Link from "next/link";
import { getAllColumns } from "@/lib/columns";

interface RelatedArticlesProps {
  currentSlug: string;
  currentCategory: string;
}

const levelMap: Record<string, number> = {
  "sukiyoke-psychology": 1,
  "line-honkido-signs": 1,
  "kidoku-through-psychology": 1,
  "anxious-attachment-guide": 2,
  "avoidant-attachment-guide": 2,
  "friendzone-escape": 2,
  "jealousy-love-or-control": 2,
  "heavy-woman-self-esteem": 3,
  "first-impression-7seconds": 3,
  "long-distance-psychology": 3,
};

export function RelatedArticles({ currentSlug, currentCategory }: RelatedArticlesProps) {
  const allColumns = getAllColumns();
  const currentLevel = levelMap[currentSlug] || 1;

  // 1. Same category (excluding current)
  const sameCategory = allColumns.filter(
    (c) => c.category === currentCategory && c.slug !== currentSlug
  );

  // 2. Next level articles
  const nextLevel = allColumns.filter(
    (c) => (levelMap[c.slug] || 1) === currentLevel + 1
  );

  // Combine: prioritize same category, then next level, limit to 3
  const seen = new Set<string>();
  const recommendations: typeof allColumns = [];

  for (const article of [...sameCategory, ...nextLevel]) {
    if (!seen.has(article.slug) && article.slug !== currentSlug) {
      seen.add(article.slug);
      recommendations.push(article);
      if (recommendations.length >= 3) break;
    }
  }

  // Fill remaining with any other articles
  if (recommendations.length < 3) {
    for (const article of allColumns) {
      if (!seen.has(article.slug) && article.slug !== currentSlug) {
        seen.add(article.slug);
        recommendations.push(article);
        if (recommendations.length >= 3) break;
      }
    }
  }

  if (recommendations.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-pink-light/30">
      <h3 className="text-lg font-bold text-charcoal mb-4">📖 あわせて読みたい</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recommendations.map((article) => (
          <Link
            key={article.slug}
            href={`/columns/${article.slug}`}
            className="watercolor-card p-4 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            {article.coverImage && (
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-24 object-cover rounded-lg mb-3"
              />
            )}
            <p className="text-xs text-pink-dark font-bold mb-1">{article.category}</p>
            <p className="text-sm font-bold text-charcoal leading-snug">{article.title}</p>
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/quiz"
          className="inline-block px-6 py-3 bg-gradient-to-r from-pink to-gold text-white rounded-full text-sm font-bold hover:shadow-md transition-all"
        >
          🔮 まだやってない？愛着スタイル診断
        </Link>
      </div>
    </div>
  );
}
