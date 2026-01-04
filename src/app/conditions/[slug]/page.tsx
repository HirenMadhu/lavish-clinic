import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPageBySlug } from "@/lib/mdx";

type Props = {
  params: Promise<{ slug: string }>;  // Changed to Promise
};

export function generateStaticParams() {
  return getAllSlugs("conditions");
}

export default async function ConditionPage({ params }: Props) {  // Made async
  const { slug } = await params;  // Await params
  const page = getPageBySlug("conditions", slug);  // Use slug variable

  if (!page) return notFound();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-foreground">
          {page.frontmatter.title}
        </h1>

        {page.frontmatter.description && (
          <p className="mt-6 text-lg text-muted">
            {page.frontmatter.description}
          </p>
        )}

        <article className="prose prose-neutral mt-12 max-w-none">
          <MDXRemote source={page.content} />
        </article>
      </div>
    </section>
  );
}