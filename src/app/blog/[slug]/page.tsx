import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

export const dynamic = "force-static";
export const revalidate = 60;

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-2xl px-6 py-24 font-sans">
      <h1 className="text-3xl tracking-tight mb-2 lowercase">{post.meta.title.toLowerCase()}</h1>
      <p className="text-sm text-muted-foreground mb-8 lowercase">
        {new Date(post.meta.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" }).toLowerCase()}
      </p>
      <article className="prose prose-neutral dark:prose-invert prose-p:leading-7 prose-headings:font-normal prose-headings:lowercase prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-a:underline">
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: markdown rendered on server */}
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </main>
  );
}