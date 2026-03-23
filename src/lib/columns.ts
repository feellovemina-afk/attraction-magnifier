import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Column, ColumnFrontmatter } from "@/types/column";

const columnsDirectory = path.join(process.cwd(), "src/content/columns");

export function getAllColumns(): ColumnFrontmatter[] {
  if (!fs.existsSync(columnsDirectory)) return [];

  const files = fs.readdirSync(columnsDirectory).filter((f) => f.endsWith(".mdx"));

  const columns = files.map((filename) => {
    const filePath = path.join(columnsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data as ColumnFrontmatter;
  });

  return columns.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getColumnBySlug(slug: string): Column | null {
  if (!fs.existsSync(columnsDirectory)) return null;

  const files = fs.readdirSync(columnsDirectory).filter((f) => f.endsWith(".mdx"));

  for (const filename of files) {
    const filePath = path.join(columnsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    if (data.slug === slug) {
      return { ...(data as ColumnFrontmatter), content };
    }
  }

  return null;
}

export function getAllColumnSlugs(): string[] {
  if (!fs.existsSync(columnsDirectory)) return [];

  const files = fs.readdirSync(columnsDirectory).filter((f) => f.endsWith(".mdx"));

  return files.map((filename) => {
    const filePath = path.join(columnsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data.slug as string;
  });
}
