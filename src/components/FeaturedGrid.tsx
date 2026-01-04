import Link from "next/link";
import { FeaturedItem } from "@/data/featured";

type Props = {
  title: string;
  items: FeaturedItem[];
};

export default function FeaturedGrid({ title, items }: Props) {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-3xl font-semibold text-foreground">
          {title}
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-lg border border-border bg-white p-6 transition hover:border-primary"
            >
              <h3 className="text-lg font-medium text-foreground group-hover:text-primary">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>

              <p className="mt-6 text-sm font-medium text-primary">
                Learn more →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
