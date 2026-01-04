const reasons = [
    {
      title: "Doctor-Led Care",
      description:
        "Every treatment is guided by medical expertise, ensuring safety and ethical outcomes.",
    },
    {
      title: "Personalized Approach",
      description:
        "No templates. Each plan is tailored to your skin, hair, and goals.",
    },
    {
      title: "Evidence-Based Treatments",
      description:
        "We use clinically proven technologies and FDA-approved products.",
    },
    {
      title: "Natural Results",
      description:
        "Our focus is subtle, refined enhancement — never overdone.",
    },
  ];
  
  export default function WhyLavish() {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-foreground">
              Why Lavish Aesthetique Clinic
            </h2>
  
            <p className="mt-4 text-lg text-muted">
              A calm, ethical, and medically grounded approach to aesthetics.
            </p>
          </div>
  
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  