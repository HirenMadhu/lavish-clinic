import Link from "next/link";

const treatments = [
  {
    title: "Medifacial",
    href: "/treatments/medifacial",
    description: "Medical-grade facials customized for your skin.",
  },
  {
    title: "Chemical Peels",
    href: "/treatments/chemical-peels",
    description: "Controlled exfoliation for skin renewal.",
  },
  {
    title: "PRP Therapy",
    href: "/treatments/prp",
    description: "Platelet-rich plasma therapy for skin and hair.",
  },
];

export default function TreatmentsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-foreground">
          Treatments We Offer
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted">
          All treatments are performed under medical supervision using
          evidence-based protocols.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item) => (
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
