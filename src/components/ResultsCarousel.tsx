"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import ResultCard from "@/components/ResultCard";

const results = [
  {
    before: "/results/acne/case1-before.jpg",
    after: "/results/acne/case1-after.jpg",
    problem: "Grade 1–2 acne",
    procedure: "Hydra facial + carbon peel",
  },
  {
    before: "/results/acne/case2-before.jpg",
    after: "/results/acne/case2-after.jpg",
    problem: "Inflammatory acne",
    procedure: "Medical peels + topical therapy",
  },
  {
    before: "/results/medifacial/case1-before.jpg",
    after: "/results/medifacial/case1-after.jpg",
    problem: "Dull skin tone",
    procedure: "Customized medifacial",
  },
  {
    before: "/results/acne/case3-before.jpg",
    after: "/results/acne/case3-after.jpg",
    problem: "Acne marks",
    procedure: "Peels + topical treatment",
  },
];

export default function ResultsCarousel() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Section header */}
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold text-foreground">
            Real Patient Results
          </h2>
          <p className="mt-4 text-muted">
            Selected before-and-after results achieved through personalized,
            doctor-led treatment plans.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {results.map((item, index) => (
            <SwiperSlide key={index}>
              <ResultCard
                beforeSrc={item.before}
                afterSrc={item.after}
                problem={item.problem}
                procedure={item.procedure}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/results"
            className="inline-block rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-primary transition"
          >
            View All Results
          </a>
        </div>
      </div>
    </section>
  );
}
