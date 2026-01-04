import FeaturedGrid from "@/components/FeaturedGrid";
import WhyLavish from "@/components/WhyLavish";
import {
  featuredConditions,
  featuredTreatments,
} from "@/data/featured";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium tracking-wide text-primary">
              Ahmedabad
            </p>

            <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Refined Aesthetic Care,
              <br />
              <span className="text-primary">Designed Around You</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted">
              Lavish Aesthetique Clinic offers personalized, doctor-led skin and
              hair treatments focused on natural, ethical, and effective results.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/treatments"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-dark transition"
              >
                Explore Treatments
              </a>

              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-primary transition"
              >
                About the Clinic
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Conditions */}
      <FeaturedGrid
        title="Conditions We Treat"
        items={featuredConditions}
      />

      {/* Featured Treatments */}
      <FeaturedGrid
        title="Signature Treatments"
        items={featuredTreatments}
      />
      <WhyLavish />
    </>
  );
}
