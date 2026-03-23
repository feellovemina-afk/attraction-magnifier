"use client";

import { useState } from "react";

interface CheckListProps {
  title: string;
  items: string[];
}

export function CheckList({ title, items }: CheckListProps) {
  const [checked, setChecked] = useState<boolean[]>(new Array(items.length).fill(false));
  const count = checked.filter(Boolean).length;

  return (
    <div className="my-8 watercolor-card p-6">
      <p className="font-bold text-charcoal mb-4">{title}</p>
      <div className="space-y-3">
        {items.map((item, i) => (
          <label
            key={i}
            className="flex items-start gap-3 cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() => {
                const next = [...checked];
                next[i] = !next[i];
                setChecked(next);
              }}
              className="mt-1 w-4 h-4 accent-pink rounded"
            />
            <span className={`text-sm transition-colors ${checked[i] ? "text-pink-dark" : "text-charcoal/70"}`}>
              {item}
            </span>
          </label>
        ))}
      </div>
      {count > 0 && (
        <p className="text-sm text-gold font-bold mt-4 text-center">
          {count}個当てはまりました！
          {count >= 3 && " 🔮 愛着スタイル診断もやってみて →"}
        </p>
      )}
    </div>
  );
}
