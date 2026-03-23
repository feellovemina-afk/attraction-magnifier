interface SummaryBoxProps {
  items?: string[];
  children?: React.ReactNode;
}

export function SummaryBox({ items, children }: SummaryBoxProps) {
  if (children) {
    return (
      <div className="my-8 watercolor-card p-6 border-l-4 border-pink">
        <p className="text-sm font-bold text-pink-dark mb-3">📖 この記事でわかること</p>
        <div className="text-sm text-charcoal/70 space-y-2">{children}</div>
      </div>
    );
  }

  return (
    <div className="my-8 watercolor-card p-6 border-l-4 border-pink">
      <p className="text-sm font-bold text-pink-dark mb-3">📖 この記事でわかること</p>
      <ul className="space-y-2">
        {(items || []).map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-charcoal/70">
            <span className="text-gold mt-0.5">✦</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
