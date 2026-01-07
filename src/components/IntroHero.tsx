import Image from "next/image";

export default function IntroHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              A Calm, Ethical Approach to Aesthetic Care
            </h2>

            <p className="mt-6 text-lg text-muted">
              At Lavish Aesthetique Clinic, we believe in subtle, medically guided
              treatments that enhance your natural appearance without
              overcorrection.
            </p>

            <p className="mt-4 text-muted">
              Every treatment plan is designed after careful evaluation, keeping
              safety, effectiveness, and long-term skin health at the core.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[350px] md:h-[420px]">
            <Image
              src="/images/homepage/intro.png"
              alt="Lavish Aesthetique Clinic interior"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
