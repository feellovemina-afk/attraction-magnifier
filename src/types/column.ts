export interface ColumnFrontmatter {
  title: string;
  date: string;
  slug: string;
  category: string;
  excerpt: string;
  psychTheory: string;
  keywords: string[];
  coverEmoji: string;
}

export interface Column extends ColumnFrontmatter {
  content: string;
}
