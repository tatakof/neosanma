import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";

export const dynamic = "force-static";

export default function BlogIndex() {
  const posts = getAllPostsMeta();
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 font-sans">
      <h1 className="text-4xl tracking-tight mb-8 lowercase">writing</h1>
      <ul className="space-y-6">
        {posts.map((p) => (
          <li key={p.slug} className="group">
            <Link href={`/blog/${p.slug}`} className="flex flex-col gap-2">
              <span className="text-xl lowercase group-hover:underline">{p.title.toLowerCase()}</span>
              <span className="text-base text-muted-foreground lowercase">{new Date(p.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" }).toLowerCase()}</span>
              {p.excerpt ? (
                <span className="text-base text-muted-foreground lowercase">{p.excerpt.toLowerCase()}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}