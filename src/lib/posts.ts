import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
};

const postsDir = path.join(process.cwd(), "content", "posts");

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPostsMeta(): PostMeta[] {
  const slugs = getAllSlugs();
  const posts = slugs
    .map((slug) => {
      const full = path.join(postsDir, `${slug}.md`);
      const file = fs.readFileSync(full, "utf8");
      const { data } = matter(file);
      return {
        slug,
        title: String(data.title || slug),
        date: String(data.date || ""),
        excerpt: data.excerpt ? String(data.excerpt) : undefined,
      } satisfies PostMeta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}

export async function getPostBySlug(slug: string): Promise<{ meta: PostMeta; contentHtml: string } | null> {
  const full = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(full)) return null;
  const file = fs.readFileSync(full, "utf8");
  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  const meta: PostMeta = {
    slug,
    title: String(data.title || slug),
    date: String(data.date || ""),
    excerpt: data.excerpt ? String(data.excerpt) : undefined,
  };
  return { meta, contentHtml };
}