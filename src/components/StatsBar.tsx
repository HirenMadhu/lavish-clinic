export default function StatsBar() {
    const stats = [
      {
        value: "4.9★",
        label: "Google Rating",
      },
      {
        value: "Trusted",
        label: "by Patients",
      },
      {
        value: "Mon–Sat",
        label: "10 AM – 7 PM",
      },
    ];
  
    return (
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold text-white md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-wide text-white/90">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  