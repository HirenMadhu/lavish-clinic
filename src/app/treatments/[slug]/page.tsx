import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPageBySlug } from "@/lib/mdx";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllSlugs("treatments");
}

export default function TreatmentPage({ params }: Props) {
  const page = getPageBySlug("treatments", params.slug);

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
