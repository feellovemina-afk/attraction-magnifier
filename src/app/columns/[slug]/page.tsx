import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getColumnBySlug, getAllColumnSlugs, getAllColumns } from "@/lib/columns";
import { columnMdxComponents } from "@/components/column/mdx-components";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllColumnSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const column = getColumnBySlug(slug);
  if (!column) return {};

  return {
    title: column.title,
    description: column.excerpt,
    keywords: column.keywords,
    openGraph: {
      title: column.title,
      description: column.excerpt,
      type: "article",
      publishedTime: column.date,
    },
  };
}

export default async function ColumnPage({ params }: Props) {
  const { slug } = await params;
  const column = getColumnBySlug(slug);

  if (!column) notFound();

  const allColumns = getAllColumns().filter((c) => c.slug !== slug);
  const relatedColumns = allColumns.slice(0, 2);

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/columns" className="text-sm text-pink-dark hover:text-pink transition-colors">
            ← コラム一覧
          </Link>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-pink-light/50 text-pink-dark px-2 py-0.5 rounded-full">
            {column.category}
          </span>
          <span className="text-xs text-charcoal/40">{column.date}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-charcoal leading-tight mb-4">
          {column.coverEmoji} {column.title}
        </h1>
        <p className="text-charcoal/60">{column.excerpt}</p>
        <hr className="watercolor-divider mt-6" />
      </header>

      {/* Article Body */}
      <div className="prose prose-lg max-w-none
        prose-headings:text-charcoal prose-headings:font-bold
        prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-pink prose-h2:pl-4
        prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
        prose-p:text-charcoal/80 prose-p:leading-relaxed
        prose-a:text-pink-dark prose-a:no-underline hover:prose-a:underline
        prose-strong:text-charcoal
        prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:bg-cream prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
        prose-li:text-charcoal/80
      ">
        <MDXRemote source={column.content} components={columnMdxComponents} />
      </div>

      {/* Author Profile */}
      <div className="watercolor-card p-6 mt-12 flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink/30 to-gold/30 flex items-center justify-center text-2xl flex-shrink-0">
          🦋
        </div>
        <div>
          <p className="font-bold text-charcoal">モテ力倍増プランナー</p>
          <p className="text-xs text-charcoal/40 mb-2">Attraction Magnifier</p>
          <p className="text-sm text-charcoal/60 leading-relaxed">
            恋愛心理学をベースに、恋が動き出すヒントをお届け。
            TikTokで1分動画、noteで深掘りコラム、Xで毎日ミニテクを配信中。
          </p>
          <div className="flex gap-3 mt-3">
            <a href="https://www.tiktok.com/@attractionmagnifier" target="_blank" rel="noopener noreferrer" className="text-xs text-pink-dark hover:underline">TikTok</a>
            <a href="https://note.com/attract_mag" target="_blank" rel="noopener noreferrer" className="text-xs text-pink-dark hover:underline">note</a>
            <a href="https://x.com/attract_mag" target="_blank" rel="noopener noreferrer" className="text-xs text-pink-dark hover:underline">X</a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="watercolor-bg rounded-2xl p-8 mt-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-2xl mb-3">🔮</p>
          <h3 className="text-xl font-bold text-charcoal mb-2">
            自分の恋愛パターンを知りたい？
          </h3>
          <p className="text-charcoal/60 mb-6">
            10問の診断で、あなたの愛着スタイルがわかります
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-pink hover:bg-pink-dark text-white font-medium px-8 py-3 rounded-full transition-all hover:shadow-lg"
          >
            無料で診断する →
          </Link>
        </div>
      </div>

      {/* Related Articles */}
      {relatedColumns.length > 0 && (
        <div className="mt-12">
          <h3 className="text-lg font-bold text-charcoal mb-6">📖 関連コラム</h3>
          <div className="grid gap-4">
            {relatedColumns.map((related) => (
              <Link
                key={related.slug}
                href={`/columns/${related.slug}`}
                className="watercolor-card p-5 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{related.coverEmoji}</span>
                  <div>
                    <p className="font-bold text-charcoal group-hover:text-pink-dark transition-colors">
                      {related.title}
                    </p>
                    <p className="text-xs text-charcoal/40 mt-1">{related.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Share */}
      <div className="mt-10 pt-6 border-t border-pink-light/30 text-center">
        <p className="text-sm text-charcoal/40 mb-3">この記事をシェア</p>
        <div className="flex justify-center gap-4">
          <a
            href={`https://x.com/intent/tweet?text=${encodeURIComponent(column.title)}&url=${encodeURIComponent(`https://attraction-magnifier.vercel.app/columns/${column.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal/50 hover:text-pink-dark transition-colors text-sm"
          >
            𝕏 でシェア
          </a>
          <a
            href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(`https://attraction-magnifier.vercel.app/columns/${column.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal/50 hover:text-pink-dark transition-colors text-sm"
          >
            LINE でシェア
          </a>
        </div>
      </div>
    </article>
  );
}
