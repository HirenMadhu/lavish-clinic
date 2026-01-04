import ResultCard from "@/components/ResultCard";

export default function ResultsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <h1 className="text-4xl font-semibold text-foreground">
          Treatment Results
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted">
          Below are selected clinical results achieved through personalized,
          doctor-led treatment plans. Individual results may vary.
        </p>

        {/* Acne Results */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground">
            Acne Treatments
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <ResultCard
              beforeSrc="/results/acne/case1-before.jpg"
              afterSrc="/results/acne/case1-after.jpg"
              problem="Grade 1–2 acne"
              procedure="Hydra facial + carbon peel"
            />

            <ResultCard
              beforeSrc="/results/acne/case2-before.jpg"
              afterSrc="/results/acne/case2-after.jpg"
              problem="Inflammatory acne"
              procedure="Medical peels + topical therapy"
            />
          </div>
        </div>

        {/* Medifacial Results */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-foreground">
            Hairfall Treatments
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <ResultCard
              beforeSrc="/results/medifacial/case1-before.jpg"
              afterSrc="/results/medifacial/case1-after.jpg"
              problem="Make pattern diffuse thinning"
              procedure="PRP"
            />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-20 rounded-lg border border-border bg-surface p-6 text-sm text-muted">
          All images are shared with patient consent. Results vary based on
          individual skin type, concern, and treatment protocol.
        </div>
      </div>
    </section>
  );
}
