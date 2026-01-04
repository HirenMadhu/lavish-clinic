import Link from "next/link";

const conditions = [
  {
    title: "Acne",
    href: "/conditions/acne",
    description: "Medical management of active and recurrent acne.",
  },
  {
    title: "Pigmentation",
    href: "/conditions/pigmentation",
    description: "Treatment for melasma, tanning, and uneven skin tone.",
  },
  {
    title: "Hair Fall",
    href: "/conditions/hair-fall",
    description: "Diagnosis and treatment of hair loss.",
  },
  {
    title: "Dark Spots",
    href: "/conditions/dark-spots",
    description: "Targeted solutions for dark spots and marks.",
  },
];

export default function ConditionsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-foreground">
          Conditions We Treat
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted">
          We provide evidence-based treatments tailored to individual skin and
          hair concerns.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-border bg-white p-6 hover:border-primary transition"
            >
              <h3 className="text-lg font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted">
                {item.description}
              </p>
              <p className="mt-4 text-sm font-medium text-primary">
                Learn more →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
